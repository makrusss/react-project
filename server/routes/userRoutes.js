const express = require("express");
const ControllerUser = require("../controllers/controllerUser");
const router = express.Router();
const authentication = require('../middlewares/authentication')

router.post("/login", ControllerUser.login)
router.post("/registerAdmin", authentication,ControllerUser.registerAdmin)
router.post("/registerCustomer",authentication, ControllerUser.registerCustomer)


module.exports = router;