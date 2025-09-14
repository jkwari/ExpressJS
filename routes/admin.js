const express = require("express");
const path = require("path");

const adminController = require("../controllers/products");
const router = express.Router();

// Since we are in the admin file we can add to the path "admin" in our paths
// like this "/admin/products-add" or we can add it in the app.js file in the use middleware
//like this app.use("/admin", adminRoutes) so we can do whatever we want in this case

router.get("/admin/products-add", adminController.getAddProducts);
// We can have the same path name if we are using different HTTPS Method like the case
// here in our code node won't get confused because we used different HTTP method
router.post("/admin/products-add", adminController.postAddProduct);

router.get("/admin/products", adminController.products);

exports.routes = router;
