//Download starter code

console.log(console.dir(document));
console.log(console.dir(document.all));
console.log(console.dir(document.all[8]));
console.log(console.dir(document.all[8].innerText));
//console.log(document.all[8].innerText="Peter parker");




//Topic 5 selectiong element by ID 
console.log("//Topic 5 selectiong element by ID ")

console.log(document.getElementById("mainImg"));
let imgObj = document.getElementById("mainImg");
console.log(console.dir(imgObj));
console.log(imgObj.src);
console.log(imgObj.tagName);
console.log(imgObj.id);

//console.log(imgObj.src="assets/creation_1.png");



//selecting elements by class name
console.log("//selecting elements by class name")

console.log(document.getElementsByClassName("oldImg"));
console.log(document.getElementsByClassName("oldImg")[0]);
console.log(document.getElementsByClassName("oldImg")[1]);

console.log("using loop");

let smallImg = document.getElementsByClassName("oldImg");

for(let i=0 ; i<smallImg.length ; i++){
    console.dir(smallImg[i]);
}


for(let i=0 ; i<smallImg.length ; i++){
    smallImg[i].src="assets/spiderman_img.png";
    console.log(`value of image no. ${i} is changed`);
}

console.log(document.getElementsByTagName("p"));


//  Query selector
console.log("//  Query selector");

console.dir(document.querySelector("p"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a"));

console.log("//Setting content in objects")

let para =document.querySelector("p");
console.dir(para);

console.dir(para.innerText);
console.dir(para.innerHTML);
console.dir(para.textContent);

console.log(para.innerText = "HII I am <b>Peter Parker</b>");//see on website-don't make any change
console.log(para.innerHTML = "HII I am <b>Peter Parker</b>") ;

let heading = document.querySelector("h1");

console.log(heading.innerText);
// console.log(heading.innerHTML="<u>Spider Man</u>");

console.log(heading.innerHTML=`<u>${heading.innerText}</u>`);


//Manipulating attributes

console.log("//Manipulating attributes");

let img1 = document.querySelector('img');

console.log(img1.getAttribute('id'));

console.log(img1.setAttribute('id' , 'spidermanImg'));
//will change styling to default because styling applied original attributes


//manipulating style (with style attribute)

console.log(img1.style);
console.log(heading.style);

//  heading.style.color='green';
heading.style.backgroundColor='yellow';

let links = document.querySelectorAll(".box a");

// for(let i=0 ; i<links.length;i++){
//     links[i].style.color='yellow';
// }

for(link of links){
    link.style.color='green'; 
}


//classlist property
console.log("//classlist property")

console.log(heading.classList);

console.log(heading.classList.add("abc"));
console.log(heading.classList.add("sky"));


console.log(heading.classList);

console.log(heading.classList.contains("sky"));

heading.classList.toggle("sky");
heading.classList.toggle("sky");



//heading.classList.remove("sky");

let box = document.querySelector(".box");
box.classList.add("yellowBg");

console.log(box.classList);


//Navigation on page
console.log("//Navigation on page");

let h4 = document.querySelector('h4');
console.log(h4.parentElement); 

console.log(box.children); 
console.log(box.childElementCount); 

let ul =document.querySelector('ul');
console.log(ul.parentElement);

console.log(ul.children);

console.log(ul.children[1].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

console.log(ul.children[1].previousElementSibling.style.color='red');




//adding elements on page
console.log("//adding elements on page");

let newP = document.createElement("p");
console.dir(newP);

newP.innerText = "Hi I am a new p";
console.dir(newP);

let body = document.querySelector('body');
body.appendChild(newP);

console.log(newP);

box.appendChild(newP);

let btn = document.createElement('button');
box.appendChild(btn);

btn.innerText = "click me";

//append(element)
newP.append(" this is new text");

newP.append(btn);

//prepend
box.prepend(newP);

//insertAdjacent

let bton = document.createElement('button');
bton.innerText = "NEW BUTTON";

let p = document.querySelector('p');

p.insertAdjacentElement("beforebegin",bton);
p.insertAdjacentElement("afterbegin",bton);
p.insertAdjacentElement("beforeend",bton);
p.insertAdjacentElement("afterend",bton);

//Removing Elements from page

//bton.remove();
 //body.removeChild(bton);

//Practice Qs 

let para1 = document.createElement('p');

para1.innerText = "Hey I'm red" ;

para1.classList.add("red");

body.append(para1);

//2nd

let head3 = document.createElement("h3");

head3.innerText = "I'm a blue h3!";

head3.classList.add("blue");

body.append(head3);


//3rd
let div3 = document.createElement("div");
let head1 = document.createElement('h1');
let para2 = document.createElement('p');


head1.innerText = "I'm in a div ";
para2.innerText = "MEE TOO!"



div3.classList.add("black");

div3.append(head1);
div3.append(para2);
body.append(div3);

//ASSGN QS
console.log("ASSGN QS");
//Q1
console.log("Q1");

let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click Me" ;
input.placeholder = "Input here" ;
input.classList.add("blue");

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//QS 2
console.log("QS 2");

input.placeholder = "username" ;//OR by setattribute 
button.id = "btn" ;
console.log(document.getElementById("btn"));
//OR
console.log(document.getElementsByTagName("button"));
console.log(document.getElementsByTagName("button")[2]);

//Qs 3
console.log("QS 3");
let btn4 =(document.querySelector('#btn'));
btn4.classList.add('btnStyle');


//QS 4
console.log("QS 4");
let hed = document.createElement("h1");
hed.innerHTML = "<u>DOM Practice</u>";
hed.style.color = "purple" ;

document.querySelector("body").append(hed);


//QS 5
console.log("QS 5");
let par = document.createElement("p");
par.innerHTML = "Apna College <b>Delta</b> Practice";

document.querySelector("body").append(par);











