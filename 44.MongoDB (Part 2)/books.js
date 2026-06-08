const mongoose = require('mongoose');

main()
.then((res) => { // Operation Buffering
    console.log("connection success");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true,
        maxlength : 20 ,
    },
    author :{
        type: String,
    } ,
    price: {
        type: Number,
        min : [1 , "Price is too low for amazon selling"],
    },
    discount : {
        type : Number,
        default : 0,
    },
    category : {
        type: String,
        enum : ["fiction" , "non-fiction"],
    },
    genre: [String]
});

const Book = mongoose.model("Book" , bookSchema);

// let book1  = new Book({
//     title:"Flamingo",
//     author:"Shakespare",
//     price: 399 ,
//     category : "fiction",
//     genre: ["comics","fiction","non-fiction"],
// })

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

Book.findByIdAndUpdate("6a0222199ffa70219b4a02d1" , {price : -500} ,{runValidators : true})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.errors.price.properties.message);
});