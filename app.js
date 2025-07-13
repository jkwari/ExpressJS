// THis is a core module in node js for instance (path, OS, FS)
const http = require("http");
const bodyParser = require("body-parser");

// This is a third party module that you need to install it using "Node Package Manager"
const express = require("express");

const app = express();
// Express core concept is based on middlewares to do a cerian functionallity
// to do a middleware we need to use the function called "use()" as you can see below:

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-players", (req, res, next) => {
  res.send(`
    <html>
      <body>
        <form action ="/playerAdded" method= "POST">
          <input type = "text" name= "PlayerName">
          <button type = "submit">Add Player</button>
        </form>
      </body>
    </html>`);
});

app.post("/playerAdded", (req, res, next) => {
  console.log(req.body);
  res.redirect("/add-players");
});
app.use("/hello", (req, res, next) => {
  next(); // so the next allows us to pass to another middleware.
});

// in order to use another middleware we need to call the next function which is the
// third parameter in our arrow function.

//app.use() is considered a custom middleware that we can write our logic to do a certain things

app.use("/second", (req, res, next) => {
  console.log("Hello from the second middleware");
  res.send("<h1>Hello from middleware 2</h1>");
});

app.listen(3000);
