const path = require("path");

const express = require("express");

const adminController = require("../controllers/products");
const cart = require("../controllers/cart");
const checkout = require("../controllers/checkout");
const router = express.Router();

router.get("/", adminController.getProducts);

router.get("/cart", cart.cartData);

router.get("/checkout", checkout.checkout);

router.get("/orders", adminController.getOrders);

module.exports = router;
