const { Schema, model} = require("mongoose");
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      trim: true
    },

    price: Number,

    material: {
        type: String,
        minLength: 3,
        trim: true
    },
    
    description: {
        type: String,
        minLength: 3,
        trim: true
    }
  },
  {
    timestamps: true,
  }
)

const Product = model("Product", productSchema);
module.exports = Product;

