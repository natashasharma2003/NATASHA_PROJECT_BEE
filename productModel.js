const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type : String,
            required : [true , " Kindly enter a product name "]
        },
        quantity: {
            type : Number,
            required : [true , " You need to enter the quantity "],
            default:0,
        },
        price: {
            type : Number,
            required : true
        },
        image: {
            type : String,
            required : false 
        }
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product' , productSchema);

module.exports = Product;