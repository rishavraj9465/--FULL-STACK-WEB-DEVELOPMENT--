//creating object literals

const student = {
    name: "Rishav",
    age :23 ,
    marks: 94.4 ,
    city : "delhi"
}
console.log(student);

const item = {
    price: 65.54 ,
    discount : 50 ,
    color : ["pink" ,"green"]
}
console.log(item);

//THREAD POST
 
const thread = {
    username : "@rishavraj" ,
    content :"#this is my first post ",
    likes : 500 ,
    reposts : 45 ,
    tags : ["@aman","@hariom","@rohit"]
}

console.log(thread);

console.log(thread["username"]);
console.log(thread.username);
console.log(thread.likes);
console.log(thread["likes"]);
console.log(thread.tags);

let prop = "reposts" ;
console.log(thread[prop]);

//JS automatically converts object keys to strings
let obj = {
    1 : "a" ,
    2 : "b",
    null : "d" ,
    true : "c" ,
    undefined : "e"
}
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[null]);
console.log(obj[true]);

//obj.1 //error
console.log(obj.null);

//ADD/UPDATE VALUES

const stu = {
    name: "Rishav",
    age :23 ,
    marks: 94.4 ,
    city : "delhi"
};
console.log("//ADD/UPDATE VALUES");
console.log(stu.city);

stu.city = "Mumbai";
stu.marks = "A" ;
stu.gender = "female";
stu.marks =[99,87,85,96];

delete stu.gender;

console.log(stu);

//Nested objects = objects of objects 
console.log("//Nested objects = objects of objects");

const classInfo = {
    aman : {
        grade : "A+",
        city :"Delhi"
    },
    shradha :{
        grade :"A",
        city : "Pune"
    },
    karan: {
        grade :"O",
        city : "Mumbai"
    }
};

console.log(classInfo.aman);
console.log(classInfo.shradha);
console.log(classInfo.karan);

console.log(classInfo.aman.city);

classInfo.aman.city = "gurgaon"
console.log(classInfo.aman.city);


//ARRAY OF OBEJCTS 
console.log("//ARRAY OF OBEJCTS ");

const classInfo1 = [  
     {  
        name :"Aman", 
        grade : "A+",
        city :"Delhi"
    },
    {
        name :"shradha", 
        grade :"A",
        city : "Pune"
    },
     {
        name :"karan", 
        grade :"O",
        city : "Mumbai"
    }
];

console.log(classInfo1);
console.log(classInfo1[0].name);
console.log(classInfo1[0].grade);
console.log(classInfo1[0].city);

classInfo1[0].name="Rishav";
classInfo1[0].grade="s";
classInfo1[0].city ="Gurgaon";
classInfo1[0].gender="Male";


console.log(classInfo1[0]);

//Math object 

console.log("//MATH OBJECT");
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-65));
console.log(Math.pow(2,5));
console.log(Math.floor(5.99999));
console.log(Math.ceil(8.00001));
console.log(Math.random());

//RANDOM INTEGERS
console.log("//RANDOM INTEGERS");
console.log(Math.floor (Math.random()*10) +1);
console.log(Math.floor (Math.random()*10) +1);
console.log(Math.floor (Math.random()*10) +1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

//Practice qs topic 11
console.log("//Practice qs topic 11");
//1 to 100
console.log(Math.floor (Math.random()*100) +1);
//1 to 5
console.log(Math.floor (Math.random()*5) +1);
//21 to 25
console.log(Math.floor (Math.random()*5) + 21);


//GUESSING GAME

const max = prompt("enter the max number ");

const random = Math.floor(Math.random() * max ) + 1 ;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    
    if(guess==random){
        console.log("congrats! you are right . Random number was  " + random);
        break;
    }else if(guess < random){
        guess = prompt("hint:your guess is too small.please try again");
    }else{
        guess = prompt("hint:your guess is too large.please try again");

    }
}

//ASSGN QS 
console.log("ASSGN QS");

//Q1
let dice = Math.floor(Math.random()*6)+1;
console.log(dice);

//Q2
let car = {
    name : "ferrari" ,
    model : "f432q",
    color : "red" 
};
console.log(car.name);

//Q3

let person = {
    name : "Rishab" ,
    age :23 ,
    city : "Banglore" 
}


person.city="New York";
person.country = "United States";

console.log(person);