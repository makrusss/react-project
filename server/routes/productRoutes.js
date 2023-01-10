const express = require("express");
const router = express.Router();
const ControllerProduct = require("../controllers/controllerProduct");
const authentication = require("../middlewares/authentication");

router.get("/", ControllerProduct.findAll);
router.get("/:id", ControllerProduct.findOne);

router.use(authentication);
router.post("/", ControllerProduct.add);
router.delete("/:id", ControllerProduct.delete);
router.put("/:id", ControllerProduct.edit);

module.exports = router;
