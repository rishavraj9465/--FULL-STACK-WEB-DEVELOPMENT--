console.log("Hello world!");
console.log("Rishav Raj");

let a = 4 ; 
let b = 5;
console.log("Sum is " + (a+b));

//Topic 3 Template literals
let pencilPrice = 10 ;
let eraserPrice = 5 ;
//let output ="The total price is : " + (pencilPrice + eraserPrice) + " Rupees." ;
// `` is backticks
console.log(`The total price is : ${(pencilPrice + eraserPrice)} Rupees.`);

//Topic 4 Operators in java 

//Arithmeetic Operators
let x = 10 ;
let y = 5;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//Unary Operators
console.log(x++);//10
console.log(++x);//12

//Topic 5 comparison operators 
let age = 18 ;
console.log(age>18);
console.log(age>=18);
console.log(age<18);
console.log(age<=18);
console.log(age==18);
console.log(age!=18);

let str = '18' ;

console.log(" # string comparison");

console.log(age==str); // true = IN javascript only values compared not type of data
console.log(typeof str);
console.log(typeof age);

 //Topic 8 If statement 
 console.log("conditional statement =if")

 let num1 = 19 ;
 if(num1>=18){
    console.log("you ar eligible to vote");
    let g=4;
    console.log(5*g);
 }

 let num2 = 12 ;
 if(num2>=18){
    console.log("you ar eligible to vote");
 }

 let name1 = "rishav";
 if(name1 == "rishav"){
    console.log(`welcome ${name1}`);
 } 

 console.log("code after if statement");


 //Topic 9 Practice qs
 //Traffic light system

 let signal = "red" ; // 'r' and 'R'  is case sensitive
 if(signal==="red"){
    console.log("stop!");
 }
 if(signal==="yellow"){
    console.log("Go slow");
 }
 if(signal==="green"){
    console.log("Go");
 }

 //Topic 10 else if statement 
 let marks = 75 ;
 if(marks >= 80){
    console.log("s");
 }
 else if(marks>=73){
    console.log("A");
 }
 else if (marks>=60){
    console.log("B");
 }

 //Topic 11 else statement
 let TOC = 100 ;
 if(TOC<=90){
    console.log("FAIL IN TOC");
 }
else if(TOC<=95){
    console.log("B in toc ");
}
else{
    console.log("s grade in toc");
 } 

// Topic 12 Practice qs 
let size='S';

if(size === 'XL'){
    console.log("price is Rs.250");
}
else if(size === 'L'){
    console.log("price is Rs.200");
}
else if(size === 'M'){
    console.log("price is Rs.100");
}
else{
    console.log("price is Rs.50");
}


//Topic 13 Nested if-else
let cgpa = 8.63 ;

if(cgpa>=6.5){
    console.log("PASS");
     if(cgpa>=9.5){
        console.log("Eligible for placement")
     }else{
        console.log("Too much competitons for placements")
     }
}
else{
    console.log("Better luck next time")
}
//Topic 14 Logical operators
console.log("#LOGICAL OPERATORS");

console.log((5>3)&&(5<1));
console.log((5>3)||(5<1));
console.log(!(5<1));


//Topic 15 Practice Qs
let str1 = "avni" ;
 
if((str1.length>=3) && str1[0]==='a'){
    console.log("GOOD STRING");
}else{
    console.log("NOT A GOOD STRING");
}

//Topic 16 Truthy and falsy 

if(true){
    console.log('it has true value');
}else{
    console.log("it has false value");
}

if(0){
    console.log('it has true value');
}else{
    console.log("it has false value");
}

//Topic 17  Switch statement 

let color = "pink" ;

switch(color){
    case "red" :
        console.log("stop!");
        break;
    case "yellow" :
        console.log("slow down");
        break;
    case "green" :
        console.log("GO");
        break;
    default :
        console.log("Broken light")
}

//Topic 18 Practice Qs
let day = 7 ;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    defaualt:
        console.log("out of context");                
}

//Topic 19 Alerts and Prompts

//alert("warning");
console.log("this is simple log");
console.error("this is an error msg");
console.warn("this is warning msg");

// let name2 = prompt("please enter your roll");
// console.log(name2);

// let firstname = prompt("Please enter your first name");
// let lastname = prompt("Please enter your last name");

// alert(`Welcome ${firstname }  ${lastname}`);

//ASSGN QS
//Q1
console.log("ASSGN QS");

console.log("Q1");

let numu = 4;

if(numu%10==0){
    console.log("good");
}else{
    console.log("bad");
}

//Q2
console.log("Q2 in prompts ");

// let uname = prompt("Please enter your name");
// let uage = prompt("Please enter your age");

// alert(`${uname} is ${uage} years old.`);

//Q3
console.log("Q3");

let quarter = 4;

switch(quarter){
    case 1 :
        console.log("January , February , March");
        break;
    case 2 :
        console.log("April , May , June");
        break;
    case 3 :
        console.log("July , August , September");
        break;
    case 4 :
        console.log("October , November , December");
        break;
    default :
        console.log("Invalid quarter");
    
}

//Q4
console.log("Q4");

let strg = "Anandam" ;
if(((strg[0] ==='A')||(strg[0] ==='a')) && (strg.length>5)){
    console.log("It is Golden String");
}else{
    console.log("NOT GOLDEN");
}

//Q5
console.log("Q5");

let r1 = 9;
let r2 = 7;
let r3 = 6;
 
if(r1>r2){
    if(r1>r3){
        console.log("r1 is largest.");
    }else{
        console.log("r3 is largest.")
    }
}
else if(r2>r3){
    console.log("r2 is largest");
}
else{
    console.log("r3 is largest");
}


//Q6
console.log("Q6");

let amazon = "40" ;
let google = "65" ;

if(amazon[amazon.length-1] === google[google.length-1]){
    console.log("both have same last digit");
}else{
    console.log("Do not have same last digit");
}