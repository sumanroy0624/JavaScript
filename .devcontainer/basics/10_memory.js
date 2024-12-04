// stack , heap

// stack -> primitive data type uses stack memory

// heap -> non primitive or reference type data type uses heap  memory

let myname="suman";

let obj={
    name:"suman",
    email: "suman@google.com"
}
console.log(obj.email);
let obj1=obj;
obj1.email="sroy@gmail.com";
console.log(obj.email);
console.log(obj1.email);
