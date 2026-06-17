const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema ({
    title :{
        type :String,
        required :true,

    } ,
    description :{
        type : String,
    }  ,

    image: {
        url: String,
        filename: String, 
    },

    price :  Number,
    location :{
        type : String,
    } ,
    country :{
        type: String,
        maxlength: 30,
    } ,

    reviews : [
        {
            type: Schema.Types.ObjectId ,
            ref : "Review",
        },     
    ],

    owner : {//56 topic 6
        type: Schema.Types.ObjectId,
        ref: "User" ,
    }, 

    category: {
    type: String,
    enum: ["Trending","Rooms","Iconic Cities","Mountains","Castles","Amazing Pools","Camping","Farms","Arctic","Domes","Ships"],
    default: "Trending",
},

});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing) {
        await Review.deleteMany({_id : { $in : listing.reviews }});
    }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

