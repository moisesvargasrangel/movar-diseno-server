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
    },

    image:{
      type: String,
      default:"https://digitaria-academy.com/wp-content/uploads/2020/12/EnMantenimiento.jpg"
    },

  },
  {
    timestamps: true,
  }
)

const Product = model("Product", productSchema);
module.exports = Product;

