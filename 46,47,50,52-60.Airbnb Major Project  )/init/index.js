const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

//dns change 
 const dns = require("dns");
 dns.setServers(["1.1.1.1", "8.8.8.8"]);


const MONGO_URL = process.env.ATLASDB_URL;

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => (
        {...obj, owner:"6a2981294e7b7bfe81165df5"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");

}

initDB();