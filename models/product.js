const path = require("path");
const fs = require("fs");
let products = [];
module.exports = class Product {
  constructor(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data", // This is the folder
      "products.json" // this is where the data will be saved in the products file.
    );
    fs.readFile(p, (err, fileContent) => {
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data", // This is the folder
      "products.json" // this is where the data will be saved in the products file.
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
