const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    comment : String ,
    rating : {
        type : Number ,
        Min : 1 ,
        Max : 5
    },
    createdAt : {
        type : Date , 
        default : Date.now(),
    },
    author : {//56 topic 9
        type: Schema.Types.ObjectId,
        ref :"User", 
    },
    
}); 

module.exports =  mongoose.model("Review" , reviewSchema);