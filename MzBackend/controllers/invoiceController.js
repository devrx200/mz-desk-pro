import { Invoice, InvoiceItem, Customer, User, Service } from '../models/index.js';
import { Op } from 'sequelize';
import sequelize from '../config/database.js';

// @desc    Get all invoices
// @route   GET /api/invoices
// @access  Private
export const getAllInvoices = async (req, res) => {
  try {
    const { status, customerId, startDate, endDate } = req.query;
    
    const where = {};
    
    if (status) {
      where.status = status;
    }
    
    if (customerId) {
      where.customerId = customerId;
    }
    
    if (startDate && endDate) {
      where.invoiceDate = {
        [Op.between]: [new Date(startDate), new Date(endDate)],
      };
    }

    const invoices = await Invoice.findAll({
      where,
      include: [
        { model: Customer, as: 'customer' },
        { model: User, as: 'user', attributes: ['id', 'fullName', 'username'] },
        { model: InvoiceItem, as: 'items', include: [{ model: Service, as: 'service' }] },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.json({
      success: true,
      count: invoices.length,
      data: invoices,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single invoice
// @route   GET /api/invoices/:id
// @access  Private
export const getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id, {
      include: [
        { model: Customer, as: 'customer' },
        { model: User, as: 'user', attributes: ['id', 'fullName', 'username'] },
        { model: InvoiceItem, as: 'items', include: [{ model: Service, as: 'service' }] },
      ],
    });

    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.json({
      success: true,
      data: invoice,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create invoice
// @route   POST /api/invoices
// @access  Private
export const createInvoice = async (req, res) => {
  const t = await sequelize.transaction();
  
  try {
    const { customerId, items, discount, notes, paymentMethod } = req.body;

    // Generate invoice number
    const lastInvoice = await Invoice.findOne({
      order: [['createdAt', 'DESC']],
    });
    
    const invoiceNumber = `INV-${Date.now()}-${(lastInvoice?.id || 0) + 1}`;

    // Calculate totals
    let subtotal = 0;
    let taxAmount = 0;

    const invoiceItems = [];
    
    for (const item of items) {
      const service = await Service.findByPk(item.serviceId);
      if (!service) {
        throw new Error(`Service with ID ${item.serviceId} not found`);
      }

      const totalPrice = item.quantity * item.unitPrice;
      const itemTax = (totalPrice * (item.taxRate || 0)) / 100;
      
      subtotal += totalPrice;
      taxAmount += itemTax;

      invoiceItems.push({
        serviceId: item.serviceId,
        description: item.description || service.serviceName,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        totalPrice,
        taxRate: item.taxRate || 0,
      });
    }

    const totalAmount = subtotal + taxAmount - (discount || 0);

    // Create invoice
    const invoice = await Invoice.create({
      invoiceNumber,
      customerId,
      userId: req.user.id,
      subtotal,
      taxAmount,
      discount: discount || 0,
      totalAmount,
      paidAmount: 0,
      status: 'pending',
      paymentMethod,
      notes,
    }, { transaction: t });

    // Create invoice items
    for (const item of invoiceItems) {
      await InvoiceItem.create({
        invoiceId: invoice.id,
        ...item,
      }, { transaction: t });
    }

    await t.commit();

    // Fetch complete invoice
    const completeInvoice = await Invoice.findByPk(invoice.id, {
      include: [
        { model: Customer, as: 'customer' },
        { model: User, as: 'user', attributes: ['id', 'fullName', 'username'] },
        { model: InvoiceItem, as: 'items', include: [{ model: Service, as: 'service' }] },
      ],
    });

    res.status(201).json({
      success: true,
      data: completeInvoice,
    });
  } catch (error) {
    await t.rollback();
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update invoice
// @route   PUT /api/invoices/:id
// @access  Private
export const updateInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);

    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    await invoice.update(req.body);

    const updatedInvoice = await Invoice.findByPk(invoice.id, {
      include: [
        { model: Customer, as: 'customer' },
        { model: User, as: 'user', attributes: ['id', 'fullName', 'username'] },
        { model: InvoiceItem, as: 'items', include: [{ model: Service, as: 'service' }] },
      ],
    });

    res.json({
      success: true,
      data: updatedInvoice,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete invoice
// @route   DELETE /api/invoices/:id
// @access  Private/Admin
export const deleteInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);

    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    await invoice.destroy();

    res.json({
      success: true,
      message: 'Invoice deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update invoice payment
// @route   PATCH /api/invoices/:id/payment
// @access  Private
export const updateInvoicePayment = async (req, res) => {
  try {
    const { paidAmount, paymentMethod } = req.body;
    const invoice = await Invoice.findByPk(req.params.id);

    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    invoice.paidAmount = paidAmount;
    invoice.paymentMethod = paymentMethod;

    // Update status based on payment
    if (paidAmount >= invoice.totalAmount) {
      invoice.status = 'paid';
    } else if (paidAmount > 0) {
      invoice.status = 'partially_paid';
    }

    await invoice.save();

    // Update customer total spent
    const customer = await Customer.findByPk(invoice.customerId);
    if (customer) {
      const totalPaid = await Invoice.sum('paidAmount', {
        where: { customerId: customer.id },
      });
      customer.totalSpent = totalPaid || 0;
      await customer.save();
    }

    res.json({
      success: true,
      data: invoice,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get invoice statistics
// @route   GET /api/invoices/stats
// @access  Private
export const getInvoiceStats = async (req, res) => {
  try {
    const totalInvoices = await Invoice.count();
    const paidInvoices = await Invoice.count({ where: { status: 'paid' } });
    const pendingInvoices = await Invoice.count({ where: { status: 'pending' } });
    const overdueInvoices = await Invoice.count({ where: { status: 'overdue' } });

    const totalRevenue = await Invoice.sum('paidAmount') || 0;
    const pendingRevenue = await Invoice.sum('totalAmount', {
      where: { status: { [Op.in]: ['pending', 'partially_paid'] } },
    }) || 0;

    res.json({
      success: true,
      data: {
        totalInvoices,
        paidInvoices,
        pendingInvoices,
        overdueInvoices,
        totalRevenue,
        pendingRevenue,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

