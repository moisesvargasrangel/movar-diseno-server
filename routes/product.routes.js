const router = require("express").Router();
const Product = require("../models/Product.model");


//http:localhost:5005/products
router.get("/", (req, res) => {
  res.json("Products");
});


//http:localhost:5005/products
//Create Product
router.post("/", (req, res) => {
  const {body} = req;

  console.log(body);
  Product.create(body)
  .then(result => {
    res.json(result);
  })
  .catch(console.log)

})

module.exports = router;
