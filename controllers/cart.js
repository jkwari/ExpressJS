exports.cartData = (req, res, next) => {
  res.render("shop/cart", {
    docTitle: "Cart",
    path: "/cart",
  });
};
