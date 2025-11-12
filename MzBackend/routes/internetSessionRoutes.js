import express from 'express';
import {
  getAllSessions,
  getSessionById,
  startSession,
  endSession,
  getActiveSessions,
  deleteSession,
} from '../controllers/internetSessionController.js';
import { protect, authorize } from '../middleware/auth.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

// Validation rules
const sessionValidation = [
  body('computerNumber').notEmpty().withMessage('Computer number is required'),
  body('ratePerHour').isNumeric().withMessage('Rate per hour must be a number'),
];

// Routes
router.get('/active', getActiveSessions);

router.route('/')
  .get(getAllSessions)
  .post(sessionValidation, validate, startSession);

router.route('/:id')
  .get(getSessionById)
  .delete(authorize('admin'), deleteSession);

router.patch('/:id/end', endSession);

export default router;

