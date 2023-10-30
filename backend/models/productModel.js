const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  desc: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  discount: {
    type: Number,
    required: [true, "Please Enter product Discount"],
    maxLength: [2, "Price cannot exceed 2 characters"],
  },

  ratings: {
    type: Number,
    default: 0,
  },

  images: 
    [{
      public_id: {
        type: String,
        // required: true,
      },
      url: {
        type: String,
      //  required: true,
      },
    }],

  
  
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  subCategory: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  
  mfg: {
    type: String,
    required: false,
  },
  detail: {
    type: String,
    required:false,
  },
  stock: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
