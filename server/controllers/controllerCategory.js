const { Category } = require("../models/index");

class ControllerCategory {
  static async findAll(req, res, next) {
    try {
      const all = await Category.findAll({
        order: [["id", "ASC"]],
      });
      res.status(200).json({ all });
    } catch (error) {
      next(error);
    }
  }
  static async add(req, res, next) {
    const { name } = req.body;
    try {
      let category = await Category.create({ name });
      res.status(201).json({ category });
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      let category = await Category.update(
        {
          name,
        },
        {
          where: {
            id,
          },
        }
      );
      if (!category) throw { name: `Category not found` };
      req.status(200).json({ message: `Success to edit` });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;
    try {
      await Category.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({ message: `Success to delete` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerCategory;
