import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const InternetSession = sequelize.define('InternetSession', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'customers',
      key: 'id',
    },
  },
  computerNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  endTime: {
    type: DataTypes.DATE,
  },
  duration: {
    type: DataTypes.INTEGER, // in minutes
  },
  ratePerHour: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  status: {
    type: DataTypes.ENUM('active', 'completed', 'cancelled'),
    defaultValue: 'active',
  },
  notes: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'internet_sessions',
  timestamps: true,
});

export default InternetSession;

