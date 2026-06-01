const stu1 = {
    name : "rishav",
    age:23,
    marks:98,
    getMarks:function(){
        return this.marks;
    },
};

const stu2 = {
    name : "rishav",
    age:23,
    marks:98,
    getMarks:function(){
        return this.marks;
    },
};

const stu3 = {
    name : "rishav",
    age:23,
    marks:98,
    getMarks:function(){
        return this.marks;
    },
};

//Object Protoype 
let arr = [1,2,3];

arr.sayHello=()=>{
    console.log("hello,i arr");
};
console.log(arr.sayHello());
console.log(arr.push(4));

let arr2 = [1,2,3];
//console.log(arr2.sayHello());//to use this define it under arr2 also
//therefore we need prototype = define one time and use accordingly.


//below code in console
// arr.__proto__.push = (n) => {
//     console.log("changed funx definition" , n);
// }

// console.log(arr.push(9));

// console.log(arr1.sayHello===arr2.sayHello);
// false //created new memory for this func in arr
// console.log("frs".toUpperCase==="xyz".toUpperCase);
// true ==this funx is same for all arr

//TOPIC 5 FACTORY FUNCTIONS
function PersonMaker(name, age) {
    const person = {
        name : name,
        age : age,
        talk(){
            console.log(`Hi , my name is ${this.name}`);

        },
    };
    
    return person;
}

let p1 = PersonMaker("adam",24);
console.log(p1);
console.log(p1.talk());

let p2 =PersonMaker("Rishav",23);
console.log(p2);
console.log(p2.talk());//will create own memory for talk fnx 
//that's why this factory fnx is inefficient

//TOPIC 6 NEW OPERATOR

//CONSTRUCTOR doesnot return anything

function Person(name , age) {
    this.name = name ;
    this.age = age ;
    console.log(this);
}

Person.prototype.talk = function(){
   console.log(`My name is ${this.name}`);
}

let p3 = new Person("adam",23);
let p4 = new Person("eve",23);

//console.log(p3);

//TOPIC 7 CLASSES IN JS

class Pen {
    constructor(color,tip){
        this.color = color ;
        this.tip = tip ;
        console.log(this);
    }
    write(){
        console.log(`This pen color is ${this.color}`);
    }
}

let pen1 = new Pen("blue",5);
let pen2 = new Pen("black",7);


//TOPIC 8 INHERITANCE

class Human{
    constructor(name,age){
        console.log("Human class constructor")
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi I am ${this.name}`);
    }
}

class Student extends Human {
    constructor(name, age, marks){
        console.log("Student class constructor")
        super(name,age);//parent class contructor is being called
        this.marks = marks ;
    }
    
}

class Teacher extends Human{
    constructor(name,age,subject){
        console.log("Teacher class constructor")
        super(name,age);//parent class contructor is being called
        this.subject=subject;
    }
    
}

let stu4 = new Student("rishav",23,98);
let tchr5 = new Teacher("aman",23,"Maths");

console.log(stu4.name);
console.log(stu4.age);
console.log(stu4.talk());

console.log(tchr5.name);
console.log(tchr5.subject);
console.log(tchr5.talk());

//Another example
class Mammals{//parent class/base class
    constructor(name){
        this.name=name;
        this.type="warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}

class Dog extends Mammals{//child
    constructor(name){
        super(name);
    }

    bark(){
        console.log("barks..");
    }

    eat(){
        console.log("fnx Overriding :dog is eating");
    }
}

class Cat extends Mammals {//child
    constructor(name){
        super(name);
    }

    meow(){
        console.log("meow...");
    }
}

let dog = new Dog("tOM");
let cat = new Cat("Ginny");

console.log(dog.name);
console.log(dog.bark());
console.log(dog.eat());

console.log(cat.name);
console.log(cat.meow());
console.log(cat.eat());

