const path = require("path");
const fs = require("fs");
let products = [];
module.exports = class Product {
  constructor(ID, title, price, description, img) {
    this.ID = ID;
    this.title = title;
    this.price = price;
    this.description = description;
    this.img = img;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data", // This is the folder
      "pros.json" // this is where the data will be saved in the products file.
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
      "pros.json" // this is where the data will be saved in the products file.
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  }
};
