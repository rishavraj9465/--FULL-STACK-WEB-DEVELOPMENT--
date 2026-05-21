let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked ");
// }

function sayhello(){
    alert("Hello!");
}

//btn.onclick = sayhello ;

let btns = document.querySelectorAll("button");

function hello () {
         console.log("button was clicked ");
     }

function cursor(){
    console.log("you entered a button");
}

function sayName(){
    console.log("Rishav Raj");
}

for(btn of btns){
    //btn.onclick= hello;//if you put () with 
    //func name it will execute here itself
    //and nothing will happen after clicking btn 
    
   // btn.onmouseenter = cursor ;

   btn.addEventListener("click",hello);
   btn.addEventListener("click",sayName);
   btn.addEventListener("dblclick",function (){
    console.log("you double clicked me");
   })
}

//Topic 5 Event listeners for elements
let p = document.querySelector("p");

p.addEventListener("click",function(){
    console.log("para was clicked");
})

let box = document.querySelector(".box");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "green";

}

box.addEventListener("mouseenter",function(){
    console.log("mouse inside box");
    console.log(this);//this in event handler
})

p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
box.addEventListener("click",changeColor);




//keyboard events
//see inddex 3













































