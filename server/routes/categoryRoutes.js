const express = require("express");
const ControllerCategory = require("../controllers/controllerCategory");
const router = express.Router();
const authentication = require("../middlewares/authentication");

router.get("/", ControllerCategory.findAll);
router.use(authentication);
router.post("/", ControllerCategory.add);
router.delete("/:id", ControllerCategory.delete);
router.put("/:id", ControllerCategory.edit);

module.exports = router;
