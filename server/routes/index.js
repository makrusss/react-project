const express = require("express");
const router = express.Router();
const product = require("./productRoutes");
const user = require("./userRoutes");
const category = require("./categoryRoutes");

router.use("/users", user);
router.use("/products", product);
router.use("/categories", category);

module.exports = router;
