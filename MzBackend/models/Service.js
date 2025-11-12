import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Service = sequelize.define('Service', {
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
  serviceName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM(
      'printing',
      'scanning',
      'xerox',
      'lamination',
      'binding',
      'government_forms',
      'aadhaar_services',
      'pan_services',
      'internet_cafe',
      'other'
    ),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  basePrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING,
    defaultValue: 'per_item',
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  taxRate: {
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0.00,
  },
}, {
  tableName: 'services',
  timestamps: true,
});

export default Service;

