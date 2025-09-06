// importing section
const path = require("path");

const express = require("express");
// Handelbars it is a little different from pug it is not build in at all so we need to
// import it and tell express to use like follows:

const expressHBS = require("express-handlebars");

const app = express();

// Now we need to tell express what is our new engine that we are going to use
// We can do that like follows:
app.engine("hbs", expressHBS());

// The "app.engine()" it takes two parameters the first is the name of template we tell
// the engine to use in our case we said the name is "handelbars or hbs" BTW it can be any name
// you want.

// !!!VIP!!!!! Now we need to set the engine we imported we do that the same way
// we did in pug by using "app.set()" the first parameter is "view engine" and the
// second parameter is our new template engine which is "handelbars"

// Alright in order to use Templates we need to tell express that what type of templete
// we want to use, and where to find it in our project.
// In order to do that we will use "app.set()" two times:
// 1. we want to tell express what property is going to use"view engine"
// we want to use like below:
app.set("view engine", "hbs");

// 2. Then we want to tell express where is this template that it wants to use the default
// will be the view folder but just in case we forgot where we put it:

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
  res.status(404).render("404", { pageMessage: "Page Not Found" });
});

app.listen(3000);
