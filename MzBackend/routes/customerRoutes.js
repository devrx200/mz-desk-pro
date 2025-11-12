import express from 'express';
import {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerStats,
} from '../controllers/customerController.js';
import { protect, authorize } from '../middleware/auth.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

// Validation rules
const customerValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('phone').notEmpty().withMessage('Phone is required'),
  body('email').optional().isEmail().withMessage('Valid email is required'),
];

// Routes
router.route('/')
  .get(getAllCustomers)
  .post(customerValidation, validate, createCustomer);

router.route('/:id')
  .get(getCustomerById)
  .put(updateCustomer)
  .delete(authorize('admin'), deleteCustomer);

router.get('/:id/stats', getCustomerStats);

export default router;

