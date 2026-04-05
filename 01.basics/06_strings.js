//string interpolation

let name="Richa"
let repocount=4

//old way (name+ " " + repocount);

//console.log(`hello, my name is ${name} and my repo count is ${repocount}`)

const gameName=new String("richapatel")

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('c'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   richa    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://richa%20patel.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('a'));