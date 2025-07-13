// importing section
const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

// Using my Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);

app.use(shopRoutes);

// for any routes that are not regitered we need to send a "page not found 404"

app.use((req, res, next) => {
  res.status(404).send(`
    <html>
      <body>
        <h1>Page Not Found 404</h1>
      </body>
    </html>
    `);
});

app.listen(3000);
