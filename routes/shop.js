const path = require("path");

const express = require("express");

const adminController = require("../controllers/products");
const router = express.Router();

router.get("/", adminController.getProducts);

module.exports = router;
