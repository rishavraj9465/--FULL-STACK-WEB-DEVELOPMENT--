
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact ;

    //p.innerText = fact.value ;

})

let url = "https://catfact.ninja/fact" ;

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error-",e);
        return "NO fact Found"
    }
}
//getFacts();

let btn2 = document.querySelector("#b2");

btn2.addEventListener("click", async ()=>{
    let link = await getImage();
    console.log(link);

    let img2 = document.querySelector("#img");
    img2.setAttribute("src" , link);
})

let url2 = " https://dog.ceo/api/breeds/image/random";


async function  getImage(){
    try{
        let res = await axios.get(url2);
        return res.data.message ;
    }catch (e){
        console.log("error==",e)
        return "img not found";
    }
}


//Topic 3 setting headers with api requests 

const url3 = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config = {headers :{Accept :"application/json"}};
        let res = await axios.get(url3 ,config);
        console.log(res.data);
        }catch(e){
        console.log("error---",e);
    }

}

getJokes();


//Activity  using query strings  

//get colleges names :-
let url4 = "http://universities.hipolabs.com/search?name=";
let button = document.querySelector("#b3");

button.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let collArr = await getColleges(country);
    show(collArr);
})

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText="";
    for(col of colArr){
        console.log(col.name);

        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}


async function getColleges(country){
    try{
        let res = await axios.get(url4 + country);
        return res.data;
    }catch (e){
        console.log("e",e);
        return [];
    }
}

