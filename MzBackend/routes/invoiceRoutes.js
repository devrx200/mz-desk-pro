import express from 'express';
import {
  getAllInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  updateInvoicePayment,
  getInvoiceStats,
} from '../controllers/invoiceController.js';
import { protect, authorize } from '../middleware/auth.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

// Validation rules
const invoiceValidation = [
  body('customerId').isInt().withMessage('Customer ID is required'),
  body('items').isArray({ min: 1 }).withMessage('At least one item is required'),
];

// Routes
router.get('/stats', getInvoiceStats);

router.route('/')
  .get(getAllInvoices)
  .post(invoiceValidation, validate, createInvoice);

router.route('/:id')
  .get(getInvoiceById)
  .put(updateInvoice)
  .delete(authorize('admin'), deleteInvoice);

router.patch('/:id/payment', updateInvoicePayment);

export default router;

