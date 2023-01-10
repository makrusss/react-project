const { User } = require("../models/index");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");

class ControllerUser {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({
        where: { email },
      });
      if (!email) throw { name: "Invalid email / password" };
      if (!password) throw { name: "Invalid email / password" };
      if (!foundUser) throw { name: "Invalid email / password" };

      let isValid = comparePassword(password, foundUser.password);
      if (!isValid) throw { name: "Invalid Credential" };

      let payload = {
        id: foundUser.id,
      };

      let access_token = createToken(payload);

      res.status(200).json({
        access_token: access_token,
        id: foundUser.id,
        username: foundUser.username,
        role: foundUser.role,
      });
    } catch (error) {
      next(error);
    }
  }

  static async registerAdmin(req, res, next) {
    const { username, email, password, phoneNumber, address } = req.body;
    try {
      const registration = await User.create({
        username,
        email,
        password,
        role: "admin",
        phoneNumber,
        address,
      });
      res.status(201).json({
        id: registration.id,
        email: registration.email,
      });
    } catch (error) {
      console.log(error, `<<<<<<<<<<`);
      next(error);
    }
  }

  static async registerCustomer(req, res, next) {
    const { username, email, password, phoneNumber, address } = req.body;
    try {
      const registration = await User.create({
        username,
        email,
        password,
        role: "customer",
        phoneNumber,
        address,
      });
      res.status(201).json({
        id: registration.id,
        email: registration.email,
      });
    } catch (error) {
      console.log(error, `<<<<<<<<<<`);
      next(error);
    }
  }
}

module.exports = ControllerUser;
