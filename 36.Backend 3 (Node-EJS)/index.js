const express= require("express");
const app = express();
const path = require("path");



const port = 8080 ;

app.set("views", path.join(__dirname,"/views"));

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/hello",(req,res)=>{
    res.send("hello");
})

app.listen(port,()=>{
    console.log(`listneing on port ${port}`);
});

//tOPic 5 Passing Data to EJS

app.get("/rolldice", (req,res) => {
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
    //we can keep key & value variable name same

});

//Topic 6 Instagram EJS

app.get("/ig/:username",(req,res)=>{
    const followers = ["adam","bob","alice","abc"];//topic 8 LOOPS
    let {username} = req.params;
    res.render("instagram.ejs",{username , followers});
});

//topic 10 Instagram PAGE with EJS (database :data.json)

app.get("/ig/:username/:roll",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data =instaData[username];
    console.log(data);
    if (data){
            res.render("insta.ejs",{data});//data is object on json
    }else{
        res.render("err.ejs");
    }
});

// Topic 11 Serving static files

app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/css")));


