const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");




app.set("views", path.join(__dirname, "views"));
app.set("view engine ", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));





main()
    .then(()  => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));


// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
// }

//49. Backend 7 -topic 5 -Handling async errors
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

//Topic 4 Index Route 

app.get("/chats" , async (req, res, next) => {
    try{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs" , { chats });
    } catch (err) {
        next(err);
    }
    
});

// Topic 5 New Route
app.get("/chats/new", (req,res) => { 
    // throw new ExpressError(404, "Page not found");//it's synchronous
    res.render("new.ejs"); 
})

//Topic 6 Create Route
app.post("/chats" , async (req, res , next) => {
    try{
        let {from , to , msg} = req.body;
        let newChat = new Chat({
        from : from,
        to : to ,
        msg : msg ,
        created_at : new Date()
    });
    console.log(newChat);

    await newChat.save()
    
    // .then((res) => { // in db save,delte,update - all are async process
    //                 // here no need to add async await because those are 
    //                 // thennable , also async although you can add = no err
    //     console.log("chat was saved");
    // })
    // .catch((err) => {
    //     console.log(err);
    // });


    res.redirect("/chats");
    }catch(err) {
        next(err);
    }
});



function asyncWrap(fn) {
    return function( req, res, next) {
        fn( req, res, next).catch((err) => next(err));
    };
}


//Executed in console to understand asyncWrap

// function asyncWrap(fn) {
//     return function( ) {
//         fn( );
//     };
// }
// undefined
// const hello = () => console.log("hello");
// undefined
// hello();
// VM199:1 hello
// undefined
// asyncWrap(hello);
// ƒ ( ) {
//         fn( );
//     }
// const retFn = asyncWrap(hello);
// undefined
// retFn()
// VM199:1 hello
// undefined




//49. Backend 7 -topic 5 -Handling async errors
//New show - Route


//using asyncWraap instead of try & catch block
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
        let {id} = req.params;
        let chat = await Chat.findById(id);
        if(!chat){
        next(new ExpressError(500 , "chat not found")) ;
        }
        res.render("edit.ejs", { chat });
}));


//tOPIC 8 EDIT ROUTE
app.get("/chats/:id/edit" , async (req,res) => {
    try{
      let {id} = req.params;
      let chat = await Chat.findById(id);
      res.render("edit.ejs" , {chat});
    } catch (err) {
        next(err);
    }
    
});

//Update Route
app.put("/chats/:id" , async (req, res) => {
    try{
        let { id } = req.params;
        let {msg : newMsg} = req.body;
        console.log(newMsg);
        let updatedChat = await  Chat.findByIdAndUpdate(id, {msg: newMsg} , {runValidators : true , new :true});
        console.log(updatedChat);
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
    
});

//topic 10 Destroy chats 
app.delete("/chats/:id" , async (req, res) => {
    try{
        console.log("delete route working");
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
    
});



app.get("/" , (req, res) => {
    res.send("root is working");
}); 

//49. Backend 7 -topic 5 -Handling async errors

//Topic - 8 Mongoose Error 

const handleValidationErr = (err) => {
    console.log("This was a Validation error. Please follow rules");
    console.dir(err.message);
    return err ;
};

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError")  {
        err = handleValidationErr(err);
    }
    next(err);
});

//Error Handling middleware
app.use((err, req, res, next) => {
    let {status=500 , message="some error occured"} = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});

