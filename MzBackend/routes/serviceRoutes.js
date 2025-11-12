import express from 'express';
import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
  getServicesByCategory,
} from '../controllers/serviceController.js';
import { protect, authorize } from '../middleware/auth.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

// Validation rules
const serviceValidation = [
  body('serviceName').notEmpty().withMessage('Service name is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('basePrice').isNumeric().withMessage('Base price must be a number'),
];

// Routes
router.route('/')
  .get(getAllServices)
  .post(authorize('admin', 'owner'), serviceValidation, validate, createService);

router.get('/category/:category', getServicesByCategory);

router.route('/:id')
  .get(getServiceById)
  .put(authorize('admin', 'owner'), updateService)
  .delete(authorize('admin'), deleteService);

export default router;

