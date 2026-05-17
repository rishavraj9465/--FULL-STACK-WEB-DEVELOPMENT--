let arr = [1,2,3,4,5] ;

function print(el){
    console.log(el);
}
arr.forEach(print);

console.log("OR");

arr.forEach(function (el){
    console.log(el);
})

console.log("OR");

arr.forEach( (el)=> {
    console.log(el);
});

console.log("object eg");

let arr1 =[{
    name:"rishav",
    marks: "99", 
},
{
    name:"aman",
    marks: "95", 
},
{
    name:"amit",
    marks: "98", 
}];

arr1.forEach((students)=>{
    console.log(students.marks);
})

//MAP

let num = [1,2,3,4];

let double = num.map((el)=>{
    console.log(el*2);
});

console.log("-------");

let gpa = arr1.map((el)=>{
    console.log(el.marks/10);
})

//filter

let nums = [1,2,3,4,5,6,7,8,9,4];
let even = nums.filter((nums)=>(nums % 2 ==0));
console.log(even);


//every 

console.log([2,4,6,8].every((el)=>(el%2==0)));
console.log([2,4,6,8,5].every((el)=>(el%2==0)));

//some
console.log([2,4,6,8].some((el)=>(el%2==0)));
console.log([2,4,6,8,5].some((el)=>(el%2==0)));

//reduce method

let num3 = [1,2,3,4];
let red = num3.reduce((res,el)=>{
    console.log(res);//printed 1 bec it stores value after computing next line
     return res+el;
    });
console.log(red);

console.log("or");

let red2 =num3.reduce((res,el)=>(res+el));
console.log(red2);

//maximum in an array 
console.log("maximum in array");

let num4 = [2,3,4,5,3,4,7,8,1,2];
let result = num4.reduce((max,el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
})

console.log(result);

//Practice Qs

//1st qs

let num5 = [10,20,30,40,50,60];

let res = num5.every((el)=>(el % 10 == 0));

console.log(res);


//2nd qs
function getMin(num5){
    let res1= num5.reduce((min,el)=>{
        if(el<min){
            return el;
        }else{
            return min;
        }
    })

    return res1;
}   


console.log(getMin(num5));

//Default parameters
function sum(a,b=5){
    return a+b;
}

console.log(sum(1));


//but 
function sum1(a=4,b){
    return a+b;
}

console.log(sum1(1,5));
console.log(sum1(1));//a=1,b=undefined

//spread

console.log(..."Rishav Raj");
let arr2 = [1,2,3,4,5];
console.log(Math.min(...arr2));
console.log(...arr2);

//spread array literals

let array = [1,2,3,4,5,6];
let newArray = [...array];

console.log(newArray);
newArray.push(7);
console.log(newArray);
console.log(array);

let chars = [..."hello"];
console.log(chars);

let even1 = [2,4,6,8];
let odd = [1,3,5,7];

let newEvenodd = [...even1 , ...odd];
console.log(newEvenodd);

//spread (object literals)
let data = {
    email : "ironman@gmail.com",
    password: "sfgt"
}

let dataCopy = {...data , id : "254" , country :"america"};
console.log(dataCopy);


let arr3 = [1,2,3,4] ;
let obj = {...arr3};
console.log(obj);

let str = "rishav";
let obj1 = {...str};
console.log(obj1);

//rest

function sum2(...args){
    //arguments
    for(let i=0;i<args.length;i++){
        console.log("you gave us",args[i]);
    }
}

sum2(1,2,3,4,5);


function min(){
    console.log(arguments);//arguments is a collection not array
    console.log(arguments.length);
    //arguments.push() will give error
}

min(1,2,3,4);


function sum4(...args){
    return args.reduce((add,el)=>add+el);
}

console.log(sum4(1,2,3,4));

function min2(msg , ...args){//similar to Math.min func
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
}

console.log(min2("hiii",25,45,86,-98,85));
console.log(min2(85,25,45,86,-98,85));


//Destructuring

let names =["tony","bruce","steve","peter"];
// let winner =names[0];
// let runnerup = names[1];
let [winner, runnerup,...others]=names;
console.log(winner,runnerup);

console.log(others);

//Destructuring objects
console.log("//Destructuring objects");

const students = {
    name:"rishav",
    class :9,
    age: 14 ,
    subjects :["hindi","eng","math"],
    username : "rishav@9464",
    password:1234

}

// let customer =students.username;
// let secret =students.password;

const {username:customer ,password:secret,city="mumbai"}=students;
console.log(customer,city);


//Assgn Qs 
console.log("ASSGN QS");
console.log("Q1");
//QS 1

let arr4 = [1,2,3,4,5];

const sq = arr4.map((el) => (el*el));
console.log(sq);

const sum3 = arr4.reduce((sum,el) => (sum+el) );
console.log(sum3);

let avg = sum3/arr4.length ;
console.log(avg);


//Qs 2
console.log("Q2");

const array1 = arr4.map((el) => el+5 );
console.log(array1);


//Qs 3
console.log("QS 3")

let arre = ["f","d","e","w","q"];

console.log(arre.map((el)=> el.toUpperCase()));


//QS 4
console.log("QS 4");

const doubleAndReturnArgs = (arr,...args) => [//new in array function-sq brackets
    ...arr,
    ...args.map((el) => el*2)
];

console.log(doubleAndReturnArgs([1,2,3],4,4));
console.log(doubleAndReturnArgs([2],10,4));


//QS 5 
console.log("QS 5");


const obj3 = [
    {
        name:"rishav",
        roll: 10002
    },
    {
        name:"aman",
        roll:40005
    }

];

let obj5 = 
    {
        name:"rahul",
        roll:5677
    };
    
const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});
console.log(mergeObjects(obj3,obj5));



