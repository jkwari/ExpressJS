const path = require("path");

const express = require("express");

const pathDir = require("../util/path");
const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", {
    prods: adminData.products,
    docTitle: "Shop",
    path: "/",
    numberOfProducts: adminData.products.length > 0,
    activeShop: true,
    productsCSS: true,
    formsCSS: true,
    mainCSS: true,
  });
});

module.exports = router;
