//for loop

for(let i=1 ; i<=5 ; i++){
    console.log(i);
}

for (let i=5 ;i>=1 ;i--){
    console.log(i);
}
//print odd numbers from 1 to 15 
console.log("odd number");

for (let i=1 ; i<=15 ;i=i+2){
        console.log(i);
    }
    
console.log("backward odd");
for(let i=15 ; i>=1 ; i=i-2){
    console.log(i);
}

//print even numbers from 2 to 10
console.log("Even number");

for(let i=2 ; i<=10 ;i=i+2){
    console.log(i);
}

console.log("backward even no.");

for(let i=10 ;i>=2 ;i=i-2){
    console.log(i);
}

console.log("Multiplication table of 5");
for(let i=1 ; i<=10 ;i++){
    console.log("5 * "+ i + " is " + 5*i);

}

let n = prompt("write your multiplication No.");
n = parseInt(n);
for(let i=1 ; i<=10 ;i++){
    console.log( n + "* "+ i + " is " + n*i);

}


//Nested for loop

console.log("Nested for loop");
for(let i=1 ; i<=3 ; i++){
    console.log(`outer loop ${i}`);
    for(let j=1 ; j<=3 ; j++){
        console.log(j);
    }
}

//while loops
console.log("while loop");
let i=1 ;
while(i<=5){
    console.log(i);
    i++;
}

//Favourite movie 
/* const fav = "avenger" ;
let guess = prompt("Enter your guess");

while((guess != fav) && (guess != "quit")){
     guess = prompt("wrong guess . Please try again");
}
if(guess==fav){
    console.log("congrats! right guess");
}else{
    console.log("you quit");
} */

//break keyword
let d = 1;
console.log("break keyword");

while(d<=5){
    if(d==3){
        console.log("you quit at 3");
        break;
    }
    console.log(d);
    d++;
}

//ARRAY LOOPS
console.log("//ARRAY LOOPS");

let fruits=["mango", "apple" ,"banana","litchi","orange"];
for(let i=0 ; i<fruits.length ; i++){
    console.log(i, fruits[i]);
}

//reverse case
console.log("reverse case");
for(let i=fruits.length-1 ; i>=0 ; i--){
    console.log(i, fruits[i]);
}

//loops with nestsed arrays
console.log("loops with nested arrays");

let heroes = [["ironman","spiderman","thor"],
              ["superman","wonderwoman","flash"]];
            
   for(let i=0; i<heroes.length ; i++){
    console.log(`list #${i} , ${heroes[i]}`);
    for(let j=0; j<heroes[i].length ; j++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
   }


   //for-of loop
   let faal =["mango","apple","banana","litchi","orange"];
   
   for(i of fruits){
    console.log(i);
   }

   for(i of "rishav"){
    console.log(i);
   }

   //nested for-of loops
   let heroe = [["ironman","spiderman","thor"],
              ["superman","wonderwoman","flash"]];
            
    for(i of heroe){
        for(heroe of i){
            console.log(heroe);
        }
    }



    //TO DO APP

    console.log("TO DO APP")

let todo =[];

let req = prompt("please enter your request");

while(true){
    if(req=="quit"){
        console.log("quittig app");
        break;
    }

    if(req=="list"){
        console.log("------------");
        for(let i=0 ;i<todo.length ;i++){
            console.log(i,todo[i]);
        }
        console.log("------------");
    }else if(req =="add"){
     let task =   prompt("please enter the task you want to add");
     todo.push(task);
     console.log("task added");
    }else if(req=="delete"){
        let idx =prompt("please enter task index to delete");
        todo.splice(idx,1);
        console.log("Task deleted");
    }else{
        console.log("wrong request");
    }
    req = prompt("please enter your request");

}


//ASSGN QS
console.log("// ASSGN QS");

//Q1

let arr = [1,2,3,4,5,6,2,3];
let num = 2;

for(let i = 1; i<arr.length ;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}

console.log(arr);


//Q2

let numbere = 287152 ;
let copy = numbere ;

let count = 0;

while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}

console.log(`count is ${count}`);


//Q3

let tam = 287152 ;
let sum = 0;

let den = tam ;

while(den>0){
    digit = den % 10 ;
    sum+= digit;
     
    den= Math.floor(den/10);

}
console.log(`sum is ${sum}`);

//Q4

let ne = 7 ;
let fact=1;
for(let i = 1 ;i<=ne ;i++){
    fact*=i;
}
console.log(`factorial of ${ne} is ${fact}`);

//Q5

let arru = [4,5,6,7,8,3,4,65];
let largest = 0;

for(let i = 0; i<arru.length;i++){
    if(largest<arru[i]){
        largest=arru[i];
    }
}
console.log(`largest is ${largest}`);


