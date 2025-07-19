const path = require("path");
const express = require("express");

const pathDir = require("../util/path");

const router = express.Router();

// Since we are in the admin file we can add to the path "admin" in our paths
// like this "/admin/products-add" or we can add it in the app.js file in the use middleware
//like this app.use("/admin", adminRoutes) so we can do whatever we want in this case

router.get("/admin/products-add", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});
// We can have the same path name if we are using different HTTPS Method like the case
// here in our code node won't get confused because we used different HTTP method
router.post("/admin/products-add", (req, res, next) => {
  console.log(req.body);
  res.redirect("/admin/products-add");
});

module.exports = router;
