const mongoose = require('mongoose')



const productSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : [true , " Please enter a name "],

        },
        description : {
            type : String,
            required : [ true ],
            default:0,
        },
        price : {
            type : Number,
            required : true
        },
        category : {
            type : String,
            required : false 
        },
        reviews : {
            type : Array,
            required : false 
        }
    },
    {
        timestamps: true,
    }
)

const  reviewSchema= mongoose.Schema(
    {
        content: {
            type : String,
            required : [true , " Please give us review for future changes"]
        },
        rating: {
            type : Number,
            required : [true , " Kindly visit us again"],
            default:0,
        },
        author: {
            type : String,
            required : true
        },
        createdAt: {
            type : Date,
            required : false 
        }
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model(' Product ' , productSchema);
const Review = mongoose.model(' Review ' , reviewSchema);

module.exports = Product;
module.exports = Review;