const express = require("express");

const router = express.Router();

router.get("/products-add", (req, res, next) => {
  res.send(`
        <html>
            <head>
                <title> Add Products </title>
            </head>
            <body>
                <form action = "/products" method = POST>
                    <input type = "text" name = "ProductName">
                    <button type= "submit">Add Product</button>
                </form>

            </body>
        </html>
        `);
});

router.post("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/products-add");
});

module.exports = router;
