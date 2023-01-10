const { Product, User, Image } = require("../models/index");

class ControllerProduct {
  static async add(req, res, next) {
    const { name, description, price, stock, mainImg, categoryId } = req.body;
    try {
      const createdProduct = await Product.create({
        name,
        description,
        price,
        stock,
        mainImg,
        categoryId,
        authorId: req.user.id
      });

      if (!createdProduct) throw { name: "SequelizeValidationError" };
      else res.status(201).json({ createdProduct });
    } catch (error) {
      console.log(error, `<<< EROR`);
      next(error);
    }
  }

  static async findAll(req, res, next) {
    try {
      const allProduct = await Product.findAll(
        {
          order: [["id", "ASC"]],
          include: [User,Image]
        },
      );
      res.status(200).json({ allProduct });
    } catch (error) {
      next(error);
    }
  }

  static async findOne(req, res, next) {
    const { id } = req.params;
    try {
      const oneProduct = await Product.findByPk(id);
      if (!oneProduct) throw { name: "Not Found" };
      else res.status(200).json({ oneProduct });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;
    try {
      let deletedProduct = await Product.destroy({ where: { id } });
      if (!deletedProduct) throw { name: "Not Found" };
      else {
        res.status(200).json({ deletedProduct });
      }
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    const { id } = req.params;
    const { name, description, price, stock, mainImg, categoryId } =
      req.body;
    try {
      let editedProduct = await Product.update(
        {
          name,
          description,
          price,
          stock,
          mainImg,
          categoryId,
          authorId: req.user.id,
        },
        {
          where: { id },
          returning: true,
        }
      );

      res.status(200).json({ message: "success Edit" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerProduct;
