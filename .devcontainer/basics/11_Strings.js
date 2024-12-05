const myname="suman";
const age=20;
// console.log("my name is "+ myname + " and my age is "+age);  //not preferable

// console.log(`my name is ${myname} and my age is ${age}`); //prefeable


// let game="subway";
// const gamename=new String('free-fire')
// console.log(game.toUpperCase());
// console.log(game.charAt(3));
// console.log(game.indexOf('wa'));
// console.log(gamename.substring(1,3));

// let newstring="     suman     roy    ";
// console.log(newstring);
// console.log(newstring.trim());


const url="https://suman.com/suman%20roy";
console.log(url);

console.log(url.replace('%20','-'));

console.log(url.includes('suman'));
console.log(url.includes('sumana'));


const newGame="sub-way-surf-game";
console.log(newGame.split('-'));

