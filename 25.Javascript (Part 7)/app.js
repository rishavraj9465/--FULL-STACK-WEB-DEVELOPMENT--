const student = {
    name : "Rishav" ,
    age : 20 ,
    eng :59 ,
    math :85 ,
    phy :95,
    getAvg(){
        console.log(this);

        let avg = (this.eng + this.phy + this.math)/3 ;
        // wihtout this eng,phy,math var cannot access it's value.
        console.log(avg);
        console.log(`${this.name} got avg marks = ${avg}`);

    }

}

student.getAvg();

function getAvg(){
    console.log(this);
}
getAvg();


//try and catch

console.log("//try and catch");

console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);
}catch(err){
    console.log("caught an error.. a is not defined ");
    console.log(err);
}

console.log("hello2");
console.log("hello2");
console.log("hello2");

//Arrow function
console.log("//Arrow function");

const sum = (a,b) => {
    console.log(a+b);
}
sum(3,2);



const cube = (n) =>{
    return n*n*n ;
}
console.log(cube(2));



const pow = (a,b) =>{
    return a**b ;
}
console.log(pow(2,3));



const hello = ()=>{
    console.log("hello");
}

hello();

//Implicit return in arrow functions

const mul = (a, b) => (a * b);
console.log(mul(6, 5));

//setTimeout functions

console.log("hi there!  ");

setTimeout ( () =>{
    console.log('Rishav Raj');
}, 2000);

console.log("welcome to...");


//set interval function

let id = setInterval ( () => {
    console.log("Rishav Raj");
},2000);

clearInterval(id);

let id2 = setInterval ( () => {
    console.log("Be Difficult");
},2000);

clearInterval(id2);

//this with arrow functions

console.log("this with arrow function");

const student1 ={
    name: "Rishav" ,
    marks : 95 ,
    prop: this, //global scope (it is defined in object)

    getName : function(){
        console.log(this);//scope is calling object =studen1
        return this.name;
    },

    getMarks: () =>{
        console.log(this); //window object-parent's scope -student1 scope -here it's global
        return this.marks;
    },


    getInfo1 : function () {
        setTimeout ( () => {//arrow function
            console.log(this);//parent's scope = function ka scope =student1
        },2000);
    },

    getInfo2 :function () {//normal function
        setTimeout ( function (){
            console.log(this);//calling object - setTimeout is inbuilt function of window 
        },2000);
    }



 };

 console.log(student1.getName());
 console.log(student1.getMarks());

 console.log(student1.getInfo1());
 console.log(student1.getInfo2());


//practice qs topic 8 

const square = (n) => { return n*n};
console.log(square(4));


let id1 = setInterval( ()=>{
    console.log("Hello world");
},2000);

setTimeout( () => {
    clearInterval(id1);
    console.log("clear interval ran")
},10000);


//ASSGN QS 
console.log("ASSGN QS...");
//Q1
console.log("Q1");

let arr = [30,30,34,65];

const arrAverage = (arr) => {
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total += arr[i];
    }
    return total/arr.length;
};


console.log(arrAverage(arr));

//Qs 2
console.log("Q2")

const isEven = (n) =>  (n%2==0);
console.log(isEven(56));

//Q3 AND Q4 IN THE PDF ;