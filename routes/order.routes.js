const router = require("express").Router();
const Order = require("../models/Order.model")

//http:localhost:5005/orders
router.get("/", (req, res) => {
  res.json("Orders")
});

//Create Order
router.post("/", (req, res) => {
  const {body} = req;

  console.log(body);
  Order.create(body)
  .then(result => {
    res.json(result);
  })
  .catch(console.log)

})

module.exports = router;