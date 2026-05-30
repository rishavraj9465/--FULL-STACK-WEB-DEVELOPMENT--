const express = require("express");
const app = express();

//console.dir(app);

let port = 3000 //also 8080 available for custom web server

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})

/*app.use((req,res)=>{
    console.log("request received");

    //run this in http://localhost:3000/
    //console.log(req);

    //res.send("this is a basic response");

    // res.send({
    //     name:"apple",
    //     color:"red"
    // })

    let code ="<h1>Fruits</h1> <ul><li>Apple</li> <li>orange</li></ul>";

    res.send(code);
});
*/

//app.use listens all requests
//app.get listen route request

app.get("/",(req,res)=>{
    res.send("hello you contacted root path...");  
});

// app.get("/search1",(req,res)=>{
//     res.send("hello you contacted search path...");  
// });

app.get("/about",(req,res)=>{
    res.send("you contacted about path...");  
});

app.get("/apple",(req,res)=>{
    res.send({
        name:"apple",
        color:"red"
    });
});

app.post("/",(req,res)=>{
    res.send("you sent a post req to root")
})



//Topic_7 Path Parameters

// app.get("/:username/:id",(req,res)=>{
//     let {username,id} = req.params;
//     res.send(`This account belongs to @${username}`);

// })

app.get("/:user/:roll",(req,res)=>{
    let {user,roll} = req.params ;
    console.log(user);
    let htmlStr = `<h1>This is html  @${user}</h1>`;
    res.send(htmlStr);
})


//Topic_8 Query Strings

app.get("/search",(req,res)=>{//in hoppscotch
    let {q} = req.query ;
    console.log(req.query);
    if(!q){
        res.send("<h1>Nothing searched</h1>")
    }
    res.send(`<h1>search results for query = ${q}</h1>`);
});


// app.use((req,res)=>{
//     res.status(404).send("this path does not exist");
// });