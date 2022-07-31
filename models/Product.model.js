const { Schema, model} = require("mongoose");
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    price: Number,
    material: "String",
    description: "String"
  },
  {
    timestamps: true,
  }
)

const Product = model("Product", productSchema);
module.exports = Product;

