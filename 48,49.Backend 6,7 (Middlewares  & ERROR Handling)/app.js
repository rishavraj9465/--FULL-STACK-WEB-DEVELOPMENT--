const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

//Topic 2 = Our 1st middleware
// app.use((req,res)=>{//send res to all path, not allowing to reach another route
//     let {query} = req.query;
//     console.log(query);
//     console.log("Hi i am middleware");
//     res.send("middleware finished.")
// });

//Topic 3 Using next()
app.use((req, res, next) => {
    console.log("Hi I am 1st middleware");
    next();
});

app.use((req, res, next) => {//will run even if path is wrong
    console.log("Hi I am  2nd middleware");
    return next();
   // console.log('this is after next');//not advisable to write after next
});

//Topic 4   Creating utitlity middleware - to log info- popular -morgan
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method , req.hostname , req.path , req.time);
    next();
});

//Topic 5 Exploring app.use()
app.use("/random", (req, res, next) => {
    console.log("I am only for random.");
    next();
});

//Topic 6 = API Token as Query String
/* app.use("/api",(req, res, next) => {
    let {token} = req.query ;
    if(token === "giveaccess"){
        next();
    }
    res.send("ACCESS DENIED");
}); */

//Topic 7 Passing multiple middleware
const checkToken = ("/api",(req, res, next) => {
    let {token} = req.query ;
    if(token === "giveaccess"){
        return next();
    }
    throw new ExpressError(401 , "ACCESS DENIED");
});


app.get("/api",  checkToken , (req,res) => {
    res.send("data");//data can be from database
});

//Topic 8 Error Handling(Express Default)
app.get("/wrong" , (req,res) => {
    abcd = abcd;
});



app.get("/" , (req,res) => {
    res.send("Hi I am root.");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

// will not work below code because it is written after that route which mathces user's request and res sent from there only that's why all middleware written in starting.

// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method , req.hostname , req.path , reqtime);
//     next();
// });




//49 . Backend 7 (ERRORS)
//Topic 1 - Error Handling Middleware
app.get("/err" , (req, res) => {
    abcd = abcd ;
});

//Topioc 4 Activity
app.get("/admin", (req,res) => {
    throw new ExpressError(403, "Access to admin is Forbidden");
});

//Topic 3 Default status and message
app.use((err, req, res, next) => {
    let { status = 500 , message = "Some Error Occured" } = err ;
    res.status(status).send(message);//custom err handling
});








app.use((err, req, res, next )=> {
    console.log("-----ERROR------");
    next(err);
    //res.send(err);
});

app.use((err, req, res, next )=> {
    console.log("-----ERROR2------");
    next(err);
});

//404 NOT FOUND

// app.use((req,res) => {
//     res.status(404).send("Page not found");
// });

app.listen(8080, () =>{
    console.log("server listening to port 8080");
});


