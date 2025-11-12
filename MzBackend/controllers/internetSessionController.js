import { InternetSession, Customer } from '../models/index.js';
import { Op } from 'sequelize';

// @desc    Get all internet sessions
// @route   GET /api/internet-sessions
// @access  Private
export const getAllSessions = async (req, res) => {
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
      where.startTime = {
        [Op.between]: [new Date(startDate), new Date(endDate)],
      };
    }

    const sessions = await InternetSession.findAll({
      where,
      include: [{ model: Customer, as: 'customer' }],
      order: [['startTime', 'DESC']],
    });

    res.json({
      success: true,
      count: sessions.length,
      data: sessions,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single session
// @route   GET /api/internet-sessions/:id
// @access  Private
export const getSessionById = async (req, res) => {
  try {
    const session = await InternetSession.findByPk(req.params.id, {
      include: [{ model: Customer, as: 'customer' }],
    });

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    res.json({
      success: true,
      data: session,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Start internet session
// @route   POST /api/internet-sessions
// @access  Private
export const startSession = async (req, res) => {
  try {
    const { customerId, computerNumber, ratePerHour } = req.body;

    const session = await InternetSession.create({
      customerId,
      computerNumber,
      ratePerHour,
      startTime: new Date(),
      status: 'active',
    });

    const sessionWithCustomer = await InternetSession.findByPk(session.id, {
      include: [{ model: Customer, as: 'customer' }],
    });

    res.status(201).json({
      success: true,
      data: sessionWithCustomer,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    End internet session
// @route   PATCH /api/internet-sessions/:id/end
// @access  Private
export const endSession = async (req, res) => {
  try {
    const session = await InternetSession.findByPk(req.params.id);

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    if (session.status !== 'active') {
      return res.status(400).json({ message: 'Session is not active' });
    }

    const endTime = new Date();
    const duration = Math.ceil((endTime - new Date(session.startTime)) / (1000 * 60)); // in minutes
    const totalAmount = (duration / 60) * parseFloat(session.ratePerHour);

    session.endTime = endTime;
    session.duration = duration;
    session.totalAmount = totalAmount.toFixed(2);
    session.status = 'completed';

    await session.save();

    res.json({
      success: true,
      data: session,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get active sessions
// @route   GET /api/internet-sessions/active
// @access  Private
export const getActiveSessions = async (req, res) => {
  try {
    const sessions = await InternetSession.findAll({
      where: { status: 'active' },
      include: [{ model: Customer, as: 'customer' }],
      order: [['startTime', 'DESC']],
    });

    res.json({
      success: true,
      count: sessions.length,
      data: sessions,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete session
// @route   DELETE /api/internet-sessions/:id
// @access  Private/Admin
export const deleteSession = async (req, res) => {
  try {
    const session = await InternetSession.findByPk(req.params.id);

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    await session.destroy();

    res.json({
      success: true,
      message: 'Session deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

