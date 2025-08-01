// backend/models/User.js
const { DataTypes } = require('sequelize');
const sequelize      = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'users_email_unique',   // ← Named constraint
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    allowNull: false,
    defaultValue: 'user',
  },
}, {
  tableName: 'users',
  timestamps: true,

  // Explicit index definition re-using the same name
  indexes: [
    {
      name: 'users_email_unique',   // ← Must match the `unique` name above
      unique: true,
      fields: ['email']
    }
  ]
});

module.exports = User;
