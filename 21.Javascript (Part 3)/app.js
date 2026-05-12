//Topic 2 Trim method
let str = "    rishav      ";
console.log(str.trim());

let str1 = "    ri   shav      ";
console.log(str1.trim());

let pass = "        1234   "
let newPass=pass.trim();
console.log(newPass);
console.log(pass);

//touppercase and tollower case
let msg ="Rishav";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(msg);//immutable

//indexOf
let msg1="rishav";
console.log(msg1.indexOf("rishav"));
console.log(msg1.indexOf("z"));
console.log(msg1.indexOf("a"));


let msg2="  rishav  " ;
console.log(msg2.toUpperCase().trim());

//slicing
let str2 = "ILoveCoding" ;
console.log(str2.slice(5));
console.log(str2.slice(1,4));
console.log(str2.slice(-3));

//replace and repeat method
let str3 ="IloveCoding";
console.log(str3.replace("love","do"));
console.log(str3.replace("o","x"));

console.log(str3.repeat(3));


//Topic 9 PRACTICE QS
let msg3 = "   help!   " ;
console.log(msg3.trim().toUpperCase());

let name1 ="ApnaCollege" ;
console.log(name1.slice(4,9));
console.log(name1.indexOf("na"));
console.log(name1.replace("Apna","our"));
console.log(name1.slice(4).replace("l","t").replace("l","t"));// 2 replace to both l

//TOPIC10 ARRAY(DATA STRUCTURE)
let students = ["aman","rishav","raja"];
console.log(students);
console.log(students[0]);
console.log(typeof students);

//ARRAY CREATION

let info = ["aman",25,6.1];
console.log(info);

let empArr=[];
console.log(empArr);
console.log(empArr.length);

console.log(info.length);
console.log(info[0]);
console.log(info[0][0]);
console.log(info[0][1]);

console.log(info[0].length);

//ARRAYS ARE MUTABLE

let fruits = ["mango","apple","litchi"];
console.log(fruits);
fruits[0]="banana";
fruits[10]="papaya"
console.log(fruits);

//ARRAYS METHODS
let cars = ["audi","bmw","maruti","xuv"];

cars.push("toyota");
console.log(cars);
console.log(cars.pop());

cars.unshift("mercedes");
console.log(cars);
console.log(cars.shift());

//topic 15 PRACTICE QS

let start = ['january','july','march','august'];
console.log(start.shift());
console.log(start.shift());
start.unshift("june");
start.unshift("july");
console.log(start);

//topic16 indexOf & includes Method
let primary=["red","yellow","blue"];
let secondary=["orange","green","violet"]
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("green"));
console.log(primary.indexOf("Yellow"));
///includes
console.log(primary.includes("yellow"));
console.log(primary.includes("green"));

//concat
console.log(primary.concat(secondary));//this is new array
console.log(secondary.concat(primary));//this is new array
//reverse
console.log(primary.reverse());//make changes in original array
console.log(primary);//make changes in original array

//slice
let color = ["red","yellow","blue","orange","pink","white"];
console.log(color.slice());
console.log(color.slice(2));
console.log(color.slice(2,3));
console.log(color.slice(-2));
console.log(color.slice(10));

//Topic 19 SPLICE IN ARRAYS
console.log("//Topic 19 SPLICE IN ARRAYS");

console.log(color.splice(4));
console.log(color);

console.log(color.splice(0,1));
console.log(color);

console.log(color.splice(0,1,"black","grey"));
console.log(color);

console.log(color.splice(1,0,"mercedes"));
console.log(color);

console.log(color.splice(1,1,"gwagaon"));
console.log(color);

//sort in arrays
let chars = ["ab","be","cr"];
console.log(chars.sort());

let squares = [25,16,4,49,36,9];
console.log(squares.sort());

//Topic 21 Practice Qs
let months =['january','july','march','august'];
console.log(months.splice(0,2,"july","june"));
console.log(months);

//2nd qs
let lang = ['c','c++','html','javascript','python','java','c#','sql'];
console.log(lang.reverse().indexOf("javascript"));


//Array References
let arr1=[1];
let arr2=[1];
console.log(arr1==arr2);


//Const Arrays
const Arr4 = [1,2,3];
Arr4.push(4);
console.log(Arr4);
console.log(Arr4.pop());
console.log(Arr4);

//Arr4=[1,2,3];//assignment to const var error
//console.log(Arr4);
 
//Nested Arrays
let nums = [[2,4],[3,6],[4,8]];
console.log(nums);

//Topic 25 Practice Qs
let tic = [[['x'],[null],['O']],
           [[null],['X'],[null]],
           [['O'],[null],['X']]];
console.log(tic);
tic[0][1]='O';
console.log(tic[0]);

//ASSGN QS 
console.log("ASSGN QS")
console.log("Q1");
//Q1
let nume = [7,9,0,-2];
let n = 3 ;

console.log(nume.slice(0,n));

//Q2
console.log("Q2");
n= -3 ;
console.log(nume.slice(n));


// Q3
let stre = "t";
if(stre.length==0){
    console.log("str is empty");
}else{
    console.log("str is NOT empty.")
}

//Q4
let chare = "Rishav";
let idx= 0;

if(chare[idx] == chare[idx].toLowerCase()){
    console.log("Yes it's lower case");
}else{
    console.log("NOT lower case");
}

//Q5
let fun = "    hello    ";
console.log(fun.trim());

//Q6
let earth = ["DELHI","MO","MP"];
console.log(earth.includes("MP"));