const mongoose = require('mongoose');

//let url = "http://localhost:8080/users"- similar to below line like protocol,etc

//mongoose.connect('mongodb://127.0.0.1:27017/test');//mongoose is connecting 
// to mongoDB database and it's asynchronous func 

main()
.then((res) => { // Operation Buffering
    console.log("connection success");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

//Topic 3 Models

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age : Number,
});

const User = mongoose.model("User", userSchema);//creating collections in mongoDB from js file
//const Employee = mongoose.model("Employee", userSchema);

//TOPIC 4 Insert IN Mongose

/*
 const user1 = new User ({
    name : "Adam",
    email : "adam@yahoo.in",
    age : 48,
});



//created in memory but not saved 

user1.save();

const user2 = new User ({
    name:"Eve",
    email:"eve@gmail.com",
    age: 42,
});
user2.save().then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

*/

//TOPIC 5 INSERT MULTIPLE

/*
User.insertMany([
    {name: "Tony" , email : "tony@gmail.com" , age : 50},
    {name: "Peter" , email : "peter@gmail.com" , age : 47},
    {name: "Bruce" , email : "bruce@gmail.com" , age : 30},
]).then((res) => {
    console.log(res);
});
*/


//TOPIC 6 FIND in Mongoose

// User.find({}) // will return all documents inside that collections
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.find({age : {$lte : 32}})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
   
// User.find({age : {$gte : 50}})
//     .then((res) => {
//         console.log(res[0].name);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//   User.findOne({age : {$gte : 45}})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });  

    
//   User.findOne({_id: "6a018ce9a42e7c8beeb61eaf"})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.findById("6a018ce9a42e7c8beeb61eaf")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

//TOPIC 7 UPADTE

// User.updateOne({name: "Bruce"}, {age :49})
// .then((res) => {
//     console.log(res);
// })
// .catch((res) => {
//     console.log(err);
// });

// User.updateMany({age : {$gte : 48}}, {age : 75})
// .then((res) => {
//     console.log(res);
// })
// .catch((res) => {
//     console.log(err);
// });

// User.findOneAndUpdate({name : "Bruce"} , { age : 35} ,{new :true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.findByIdAndUpdate("6a018ce9a42e7c8beeb61eaf" , { age : 99} ,{new :true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


//Topic 9 Delete in Mongoose

// User.deleteOne({name : "Peter"})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// })

// User.deleteMany({age : {$lt : 45}})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// })


// User.findByIdAndDelete("6a018ce9a42e7c8beeb61ead")
// .then((res) =>{
//     console.log(res);
// });


