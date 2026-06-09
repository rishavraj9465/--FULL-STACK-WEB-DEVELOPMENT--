const mongoose = require("mongoose");

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
    
 
let allChats = [
    {
    from : "neha",
    to : "priya",
    msg : "send me your exam sheet",
    created_at : new Date(),
    },
    {
    from : "rahul",
    to : "anay",
    msg : "send js file",
    created_at : new Date(),
    },
    {
    from : "arun",
    to : "abjeet",
    msg : "call anu",
    created_at : new Date(),
    },
    {
    from : "raul",
    to : "riya",
    msg : "what was today's class notes",
    created_at : new Date(),
    },
];

const Chat = require("./models/chat.js");

Chat.insertMany(allChats);

