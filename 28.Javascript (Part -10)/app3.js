let btn=document.querySelector("#btn1");

btn.addEventListener("click", function(event){
    console.log(event);
    console.log("button clicked ");
});

btn.addEventListener("dblclick", function(event){
    console.log(event);
    console.log("button dbl clicked ");
});


let inp=document.querySelector("#inp1");

inp.addEventListener("keydown",function(event){
    console.log("key=",event.key);
    console.log("code=",event.code);

    console.log("key was pressed");
})

inp.addEventListener("keyup",function(){
    console.log("key was released");
});

//GAME CHARACTERE MOVES U,D,L,R

inp.addEventListener("keydown", function (event) {
    console.log("code= ",event.code);//ArrowUp(U),ArrowDown(D),ArrowLeft(L),ArrowRight(R)

    if (event.code =="KeyU"){
        console.log("CHARACTER MOVES UP");
    }else if (event.code =="KeyD"){
        console.log("CHARACTER MOVES DOWN")
    }else if (event.code =="KeyL"){
        console.log("CHARACTER MOVES LEFT")
    }else if (event.code =="KeyR"){
        console.log("CHARACTER MOVES RIGHT")
    }
});

//FORM EVENTS

let form=document.querySelector("#frm3");

form.addEventListener("submit",function(event){
    event.preventDefault();//prevents default functions
    //like here -going to \action url
    alert("form submitted");

    //EXTRACTING Form DATA
   let inp = document.querySelector("#inp4");
   console.dir(inp);
   console.log(inp.value);

})

let frm= document.querySelector("#form");

frm.addEventListener("submit",function(event){
    event.preventDefault();

    let user = this.elements[0]//document.querySelector("#user");
    let pass = this.elements[1]//document.querySelector("#pass");

   console.log(user.value);
   console.log(pass.value);

   console.dir(frm);
   console.log(frm.elements);
})

//MORE EVENTS -TOPIC 10
let frm2= document.querySelector("#form2");

frm2.addEventListener("submit",function(event){
    event.preventDefault();
})

let user =document.querySelector("#user1");

user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value = " , this.value);
})

user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value = " , this.value);
})



//My text editor

let inp2 = document.querySelector("#text");
let p = document.querySelector("#para");

inp2.addEventListener("input",function(){
    console.log(inp2.value);
    p.innerText=inp2.value;
})

//ASSGN QS 
console.log("ASSGN QS...");
//QS 1
console.log("Q1...");

//mouseout
let mouse = document.querySelector("#b1");

mouse.addEventListener("mouseout", function(){
    console.log("Mouse out") ;
})


//keypress
let inp3 = document.querySelector("#t1");

inp3.addEventListener("keypress", function(event){
    console.log("key",event.key);
    console.log("code",event.code);

})

//scroll
let box = document.querySelector(".box");

box.scroll(0,1000);

//load
window.addEventListener("load",function(event){
    console.log("page is fully loaded...");
})



//QS 2
let btn7 = document.createElement("button");

let body=document.querySelector(".box");

body.append(btn7);
btn7.innerText="changecolor";

function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "green";
}

btn7.addEventListener("click", changecolor);

//Q3

let inp6 = document.querySelector("#inp6");

let h2 =document.querySelector("#head26");

inp6.addEventListener("input",function(){
    console.log(inp6.value);
    inp6.value = inp6.value.replace(/[^a-zA-Z ]/g, "");
    h2.innerText=inp6.value;
})








