import User from './User.js';
import Customer from './Customer.js';
import Service from './Service.js';
import Invoice from './Invoice.js';
import InvoiceItem from './InvoiceItem.js';
import InternetSession from './InternetSession.js';

// Define associations
User.hasMany(Invoice, { foreignKey: 'userId', as: 'invoices' });
Invoice.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Customer.hasMany(Invoice, { foreignKey: 'customerId', as: 'invoices' });
Invoice.belongsTo(Customer, { foreignKey: 'customerId', as: 'customer' });

Customer.hasMany(InternetSession, { foreignKey: 'customerId', as: 'sessions' });
InternetSession.belongsTo(Customer, { foreignKey: 'customerId', as: 'customer' });

Invoice.hasMany(InvoiceItem, { foreignKey: 'invoiceId', as: 'items' });
InvoiceItem.belongsTo(Invoice, { foreignKey: 'invoiceId', as: 'invoice' });

Service.hasMany(InvoiceItem, { foreignKey: 'serviceId', as: 'invoiceItems' });
InvoiceItem.belongsTo(Service, { foreignKey: 'serviceId', as: 'service' });

export {
  User,
  Customer,
  Service,
  Invoice,
  InvoiceItem,
  InternetSession,
};

