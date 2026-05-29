let n = 5 ;

for(let i=1 ; i<=5 ; i++){
    console.log("hello, " , i);
}

console.log("bye!!!!");


//console.log(process.argv);


//Topic_6 Process in Node
let args = process.argv ;

for(let i= 2; i<args.length; i++){
    console.log("HEllo " ,args[i]); // will run with "node script.js (arguments)"
}


//Topic_7 Export in files

const math = require("./math") 
console.log(math);
//if there is no module.exports in ./math it 
// print {} -empty object.

console.log(math.sum(9,2));
console.log(math.mul(3,2));
console.log(math.PI);
console.log(math.g);


