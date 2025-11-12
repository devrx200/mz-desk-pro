import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  toggleUserStatus,
} from '../controllers/userController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

// Routes
router.route('/')
  .get(authorize('admin', 'owner'), getAllUsers)
  .post(authorize('admin'), createUser);

router.route('/:id')
  .get(authorize('admin', 'owner'), getUserById)
  .put(authorize('admin'), updateUser)
  .delete(authorize('admin'), deleteUser);

router.patch('/:id/toggle-status', authorize('admin'), toggleUserStatus);

export default router;

