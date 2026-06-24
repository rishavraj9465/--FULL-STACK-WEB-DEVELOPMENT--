if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

//dns change
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const { MongoStore } = require('connect-mongo');
const flash = require("connect-flash"); 
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");




const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");




const dbUrl = process.env.ATLASDB_URL ;


main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});



async function main(){
    await mongoose.connect(dbUrl);
}

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret : process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {  
    store,
    secret : process.env.SECRET,
    resave : false ,
    saveUninitialized : true ,
    cookie: { 
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true ,
    },
};

// app.get("/" , (req ,res) => {
//     res.send("Hi I am Root");
// });


app.use(session(sessionOptions));  
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
// above middleware used to authenticate new user by LocalStrategy using method User.authenticate() (static authenticate method);

passport.serializeUser(User.serializeUser());//storing user related info in session to avoid login again and again on same brwoser 
passport.deserializeUser(User.deserializeUser());//unstoring above things 



app.use((req , res , next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// app.get("/demouser" , async (req, res) => {
//     let fakeUser = new User ({
//         email : "student@gmail.com",
//         username: "rishavraj",
//     });

// // register(user, password, cb) Convenience method to register a new user instance with a given password. Checks if username is unique.

//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);

// });

//for routes-> listing.js
app.use("/listings" , listingRouter);

//for routes-> review.js
app.use("/listings/:id/reviews", reviewRouter);

app.use("/", userRouter); 

// app.get("/testListing" , async (req, res) => {
//     let sampleListing = new Listing({
//         title:"My new Villa",
//         description:"By the beach",
//         price:1200,
//         location:"calangute , Goa",
//         country: "India"
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });


//- Add expressError & // CUSTOM Error Handling
app.use(( req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});


app.use((err, req, res, next) => {
    let{ statusCode = 500, message = "Something went wrong"} = err;
    res.status(statusCode).render("error.ejs" , { message });
    //res.status(statusCode).send(message);
})


app.listen(8080 , () => {
    console.log("server is listening on port 8080");
});

