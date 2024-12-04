// Data typer
// 1.Primitive
// Type 1. String 2.Number 3. Boolean 4. Null 5.undefined 6.BigInt 7. Symbol

//Type 2. Non primitive or Reference Type
// 1. Arrays 2.Object  3. functions


const score=100;
const scoreValue=12.3;
const isLoggedin=false;
const OutsideTemp=null;
let userEmail;
console.log(userEmail); // undefined

const id=Symbol('123') // Symbol returns symbol
const anotherId=Symbol('123')
console.log(id);
console.log(anotherId==id); // false


const num=21234334345643734n // represent BigInt


const arr=[1,2,3,4,5];
 // method of declare object
let myObj={
    name:"suman",
    age: 22,
}

const myFunc=function(){
  console.log("Hello");
  
}
console.log(typeof num); // big int
console.log(typeof arr);

// console.log((myFunc));





