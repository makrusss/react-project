"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: "categoryId" });
      Product.belongsTo(models.User, { foreignKey: "authorId" });
      Product.hasMany(models.Image, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `Name cannot be null`,
          },
          notNull: {
            msg: `Name cannot be null`,
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `Description cannot be null`,
          },
          notNull: {
            msg: `Description cannot be null`,
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `Price cannot be null`,
          },
          notNull: {
            msg: `Price cannot be null`,
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mainImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `Image cannot be null`,
          },
          notNull: {
            msg: `Image cannot be null`,
          },
        },
      },
      categoryId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  Product.beforeCreate((product, options) => {
    product.slug = product.name.split(" ").join("-");
  });
  return Product;
};
