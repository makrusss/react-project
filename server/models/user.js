'use strict';
const { hashedPassword } = require("../helpers/bcrypt")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Product,{foreignKey:"authorId"})
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email already exist",
      },
      validate: {
        notEmpty: {
          msg: `Email is required`,
        },
        notNull: {
          msg: "Email is required",
        },
        isEmail: {
          msg: "Must be email format",
        },
      },
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:`Password cannot be null`
        },
        notNull:{
          msg:`Password cannot be null`
        }
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user, options) => {
    user.password = hashedPassword(user.password)
  })
  
  return User;
};