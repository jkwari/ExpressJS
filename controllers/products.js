const Product = require("../models/product");
exports.getAddProducts = (req, res, next) => {
  res.render("add-product.ejs", {
    docTitle: "Add Product with EJS",
    path: "/admin/products-add",
    activeAddProducts: true,
    formsCSS: true,
  });
  // Note that res.render() it renders the file and we can inject what ever data we want
  // by adding the template first like "add-product.pug", then we can inject whatever
  // we want using an object with key value pair.
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.price,
    req.body.description
  );
  product.save();
  res.redirect("/admin/products-add");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop.ejs", {
      prods: products,
      docTitle: "Shop",
      path: "/",
      numberOfProducts: products.length > 0,
      activeShop: true,
      productsCSS: true,
      formsCSS: true,
      mainCSS: true,
    });
  });
};
