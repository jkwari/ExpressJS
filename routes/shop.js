const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(`
        <html>
            <head>
                <title> Shop Home Page</title>
            </head>

            <body>
                <h1>Welcome to Home page explore our website</h1>
            </body>
        
        </html>
        
        `);
});

module.exports = router;
