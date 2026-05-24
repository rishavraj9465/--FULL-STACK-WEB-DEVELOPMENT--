async function greet (){
    throw "404 page not found";
    return "hello!" ;
}

console.log(greet());

async function hello(){
    throw "some random error"; //throws error
    return "hii";

}

console.log(hello());



greet()
.then((result)=>{
    console.log("promise was successful");
    console.log("result was =" ,result)
})
.catch((err)=>{
    console.log("promise was failed");
    console.log("promise was rejected with err=" ,err);
})

//async with arrow function

let demo = async () => {
    return 5 ;
}
console.log("demo",demo());


//await keyword
function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10 )+ 1;
            console.log(num);
            resolve();
        },1000);
    }) 
}

async function demo1 (){
    await getNum();
    await getNum();
    getNum();

}

demo1();

let h2 =  document.querySelector("h2");

function changeColor1(color,delay ){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random() * 5) + 1 ;
            if (num>3 ){
                reject("promise rejected");
            }
        h2.style.color = color;
            console.log(`color changed to ${color}!`);
        resolve("color changed");
        
    },delay);
    })
    
}

async function ColorChange(){
   try{
    await changeColor1("red",1000);
    await changeColor1("aqua",1000);
    await changeColor1("blue",1000);
    await changeColor1("orange",1000);
    changeColor1("pink",1000);
   } catch(err){
    console.log("err caught.");
    console.log(err);
   }

    let a = 5 ;
    console.log(a);//will not execute if num>3 even if it is not await
    console.log("new number " , a+3);
};

ColorChange();  

//TOPIC 7 - ACCESSING JSON DATA
let jsonRes = '{"fact":"A cat will tremble or shiver when it is extreme pain.","length":53}';

let validRes = JSON.parse(jsonRes);

console.log(validRes);

console.log(validRes.fact);

let student ={
    name: "Rishav Raj",
    marks : 99 
};

let jsonData = JSON.stringify(student);
console.log(jsonData);

//OUR FIRST API 

let url = "https://catfact.ninja/fact" ;

fetch(url); //see in inspect->network->fact->response
//fetch returns a promise means we can use promise methods

fetch(url)
.then((res)=>{//res=response
    console.log(res);//gives response in readable which can be made readable by below method
    console.log(res.json);
    return res.json();
})
.then((data1)=>{
    console.log("data1 ",data1.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("data 2",data2.fact );
})
.catch((err)=>{
    console.log("ERR",err);
})


//using fetch with async-await;

async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json() ;
        console.log(data.fact);
        
        let res2 = await fetch(url);
        let data2 = await res2.json() ;
        console.log(data2.fact);


    }catch (e){
       console.log("error = ",e); 
    }
    
}

getFacts();