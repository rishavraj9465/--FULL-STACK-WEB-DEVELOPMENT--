function hello(){
    console.log("inside hello fnx");
    console.log("hello");
}


function demo(){
    console.log("calling hello fnx");
    hello();
}

console.log("calling demo fnx");
demo()
console.log("done bye!");

function one(){
    return 1;
}

function two (){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}
three();

// JS is single threaded 
let a = 25;
console.log(a);
let b = 10;
console.log(b);

console.log(a+b);

console.log("JS is single threaded");

setTimeout(function(){
    console.log("Rishav Raj");
},2000);

setTimeout(function(){
    console.log("HARI BOL");
},2000);

console.log("VIT BHOPAL");

//Callback Hell
console.log("Topic -5 =Callback Hell...");

 let h1 =  document.querySelector("h1");

function changeColor(color,delay, nextColorChange){
    
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
}

changeColor("red",1000 , ()=>{
    changeColor("orange",1000, ()=>{
        changeColor("green",1000 , ()=>{
            changeColor("yellow",1000 , ()=>{
                changeColor("blue",1000);
            });
        }); //callback nesting=callback hell is useful when calling APIS
    });
});

//PROMISES :-
console.log("Topic-6 Setting up for Promises...");

function savetoDb(data , success, failure){
        let internetSpeed = Math.floor(Math.random()*10)+ 1;
        if(internetSpeed > 4){
            success();
        }else{
            failure();
        }
}

savetoDb("Amazon" , ()=>{
    console.log("success:your data was saved");
        savetoDb("2nd Db :Hello Krsna" , ()=>{
            console.log("success2 :data saved");
                    savetoDb("Rishav Raj" , ()=>{
                        console.log("success3: Data saved");
                    }, ()=>{
                        console.log("failure 3 : data not saved..");
                    })
            }, ()=>{
                console.log("failure2 :Data not saved")
            })
} , ()=>{
    console.log("failure:weak connection...");
});

//Refracting with Promises :-

function savetoDB(data){
    return new Promise((resolve, reject)=> {
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4){
            resolve("success : Data was saved");
        }else{
            reject("Failure : weak connection");
        }
    });
}

//type savetoDB("narayan") in console

//then() and catch () methods:-

let request = savetoDB("hARE KRSNA");
request
    .then(()=>{
        console.log("promise resolve");
        console.log(request);
    })
    .catch(()=>{
        console.log("promise rejected");
        console.log(request);
    })


savetoDB("Radha Radha")
.then(()=>{
    console.log("promise completed");
})
.catch(()=>{
    console.log("Promise not completed");
})


//PROMISE CHAINING      
savetoDB("Radha Radha")
.then((result)=>{
    console.log("result:", result);
    console.log("data 1 completed");
    return savetoDB("hii radha rani...");
})
.then((result)=>{
    console.log("result:", result);
    console.log("data 2 completed..");
    return savetoDB("hellow earthians");
})
.then((result)=>{
    console.log("result:", result);
    console.log("data3 saved..")
})
.catch((error)=>{
    console.log("error:", error);
    console.log("data not completed");
})


//Refactoring old code
console.log("Refactroing old code...");

let h2 =  document.querySelector("h2");

function changeColor1(color,delay ){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        h2.style.color = color;
        resolve("color changed");
        reject("color not changed")
    },delay);
    })
    
}

//type in console
// let requestPromise = changeColor1("aqua",5000);
// reuestPromise

//this will be shown in console
    // Promise {<pending>}[[Prototype]]: 
    // Promise[[PromiseState]]: "pending"
    // [[PromiseResult]]: undefined
    // requestPromise
    // Promise {<fulfilled>: 'color changed'}
    // [[Prototype]]: Promise[[PromiseState]]: "fulfilled"
    // [[PromiseResult]]: "color changed"


//now chaining callback to promise chaining

changeColor1("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor1("aqua",1000);
})
.then(()=>{
    console.log("aqua color completed...");
    return changeColor1("yellow",1000);
})
.then(()=>{
    console.log("yellow was completed");
})
.catch(()=>{
    console.log("color not changed");
});