const router = require("express").Router();
const Product = require("../models/Product.model");

const mongoose = require("mongoose");

//  POST /api/products  -  Creates a new product

router.post('/gallery', (req, res, next) => {
  const { name, price, material, description } = req.body;

  Product.create({ name, price, material, description})
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// GET /api/gallery -  Retrieves all of the products
router.get('/gallery', (req, res, next) => {
  Product.find()
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json(err));
});

//  GET /api/gallery/:productId -  Retrieves a specific product by id
router.get('/gallery/:productId', (req, res, next) => {
  const { productId } = req.params;
 
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    res.status(400).json({ message: 'Specified id is not valid !!' });
    return;
  }
 
  // Each product document has `tasks` array holding `_id`s of Task documents
  // We use .populate() method to get swap the `_id`s for the actual Task documents
  Product.findById(productId)
    .then(product => res.status(200).json(product))
    .catch(error => res.json(error));
});
 
 
// PUT  /api/gallery/:productId  -  Updates a specific product by id
router.put('/gallery/:productId', (req, res, next) => {
  const { productId } = req.params;
 
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  Product.findByIdAndUpdate(productId, req.body, { new: true })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch(error => res.json(error));
});
 
 
// DELETE  /api/gallery/:productId  -  Deletes a specific product by id
router.delete('/gallery/:productId', (req, res, next) => {
  const { productId } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  Product.findByIdAndRemove(productId)
    .then(() => res.json({ message: `Product with ${productId} is removed successfully.` }))
    .catch(error => res.json(error));
});








module.exports = router;





//http:localhost:5005/products
// router.get("/", (req, res) => {
//   res.json("Products");
// });


// //http:localhost:5005/products
// //Create Product
// router.post("/", (req, res) => {
//   const {body} = req;

//   console.log(body);
//   Product.create(body)
//   .then(result => {
//     res.json(result);
//   })
//   .catch(console.log)

// })