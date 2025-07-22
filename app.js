// importing section
const path = require("path");

const express = require("express");

const app = express();

// Alright in order to use Templates we need to tell express that what type of templete
// we want to use and where to find it in our project.
// In order to do that we will use app.set()two times:
// 1. we want to tell express what property is going to use"view engine"
// we want to use like below:
app.set("view engine", "pug");

// 2. Then we want to tell express where is this template that it wants to use:

app.set("views", "views");

// Important to note that app.set() takes two parameters the first is considered a key
// the second is considered as a value.For instance, view engine is our key and pug is
// our value.

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

// Using my Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes.routes);

app.use(shopRoutes);

// for any routes that are not regitered we need to send a "page not found 404"

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "pageNotFound.html"));
});

app.listen(3000);
