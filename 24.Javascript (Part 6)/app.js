function hello(){
    console.log("Hello");
}

hello();
hello();

function printName(){
    console.log("Rishav Raj");
    console.log("Web Developer");
}

printName();

function print1to5(){
    for(let i=1 ; i<=5 ; i++){
        console.log(i);
    }
}

print1to5();

function isAdult(){
    let age = 18 ;
    if(age>=18){
        console.log("Adult");
    }else{
        console.log("child");
    }
}

isAdult();

//Practice qs 1 

function printPoem(){
    console.log("Twinkle Twinkle little star How are wonder");
}
printPoem();

//Practice qs 2 
function rollDice(){
    let rand = (Math.floor(Math.random()*6)+1);
    console.log(rand);
}
rollDice();
rollDice();
rollDice();
rollDice();


//Functions with arguments
function printInfo (name , age ){
    console.log(`${name}'s age is ${age}`);
}

printInfo("Rishav" , 20);
printInfo("karan");

function printSum(a , b){
    console.log(a+b);
}
printSum(5,4);

//practice qs 3

function calcAvg(a,b,c){
    let avg = (a+b+c)/3 ;
    console.log(avg);
}
calcAvg(10,10,10);
//write simple calcAvg in console that will give the definition of func


//practice qs 4
console.log("Multiplication table");
function printTable(n){
    for(let i=n ; i<=n*10 ; i+=n){
        console.log(i);
    }
}

printTable(9);

//return keyword 

function sum(a,b){
    return a+b;
}
console.log(sum(45,3));
console.log(sum(sum(45,3),10));

function sum1(a,b){
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    return a+b;//last statement in function 
    console.log("Hello2");
    console.log("Hello2");

}
console.log(sum1(4,4));

function iSadult(age){
    if(age>=18){
        return "adult";
    }else{
        return"not adult";
    }
    console.log("bye bye");
}

console.log(iSadult(15));

//Practice qs 5 

function printSum1ton(n){

    let sum = 0;
    for(let i = 0 ;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(printSum1ton(5));

//Practice qs
let str = ["Hi ","I ",'am ',"Rishav Raj "];// str = Global scope

function concatStr(str){

 let result ="";//function scope
 
  for(let i=0 ;i<str.length ;i++){
    result+=str[i];
  }

  return result;
}

console.log(concatStr(str));



//lexical scope
function outerFunc(){
    let x=5;
    let y=6;
    function innerFunc() {
        let a=10;
        console.log(x);
        console.log(y);
    }
    //consosle.log(a);
    innerFunc();//called inside of outerFunc bec of function scope 
                //it will give error outside outerFunc if we call it outside

}
outerFunc();




//practice qs 7
let greet="hello";//global scope
function changeGreet(){
    let greet = "namaste" ;//function scope
    console.log(greet);

    function innerGreet(){
        console.log(greet);//lexical scope
    }
}
console.log(greet);
changeGreet();



//Function Expressions

console.log("//functions expressions");
let sum2 = function(a,b){
    return a+b;
}

console.log(sum2(2,3));

let hello2 = function(){
    console.log("hello!");
}

console.log(hello2());

hello2 = function(){
    console.log("hiii!");
}

console.log(hello2());

//High order functions

function multipleGreet(func , n){
    for(let i=1;i<=n;i++){
        func();
    }
}
   
let greet1 = function(){
        console.log("hello");
    }
console.log(multipleGreet(greet1,2));


//High order functions (Returns)




function oddorEvenfactory(request){
    if(request=="odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request == "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("wrong request");
    }
}

let func=oddorEvenfactory("even");
console.log(func(4));
console.log(func(5));


//Methods

const calculator =  {
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    }
};

console.log(calculator.num);
console.log(calculator.add(3,2));
console.log(calculator.sub(3,2));
console.log(calculator.mul(3,2));

//Assgn Qs
//QS 1
console.log("ASSGN QS");

let number = 5 ;
let arr = [3,4,5,6,7,8,9];

function largEle(arr,number){
    for(let i =0;i<arr.length;i++){
        if(arr[i]>number){
            console.log(arr[i]);
        }
    }
}

largEle(arr,number);


//Q2
console.log("Q2");

let str1="abcdabcdefgggh";

function getUnique(str){
    let ans = "";
    for(let i =0; i<str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans+=currChar;
        }
    }
    return ans;
}

console.log(getUnique(str1));


//Q3
console.log("Q3");


let country= ["Australia","Germany","United States of America"];

function longName(country){
    let ansIdx=0;    
    for(let i=0; i<country.length ; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen>ansLen){
            ansIdx=i;
        }
    }
    return country[ansIdx];
}

console.log(longName(country));

//Q4
console.log("Q4");

let strarg = "Rishav Raj";
function vowCount(str){
    let count = 0;
    for(let i=0; i<str.length ; i++){
        if(str.charAt(i)=='a' ||
           str.charAt(i)=='e' ||
           str.charAt(i)=='i' ||
           str.charAt(i)=='o' ||
           str.charAt(i)=='u' ){
            count++;
           }
    }
    return count;
}

console.log(vowCount(strarg));

//Q5
console.log("Q5");



function randInRange(start1,end1){
    let start = start1;
    let end = end1;
    let diff = end-start;
    return Math.floor(Math.random()*diff) + start1;
}

console.log(randInRange(51,100));

