// # \Primitive Datatypes || 7 Types : Number, string, Null, Undefined, Boolean, Symbol, Bigint


const score = 100 
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
// Reference (Non primitive)

// Array, Objects, Functions

const num = 12 // Number
const str = "eco" // String
const temp = null // null 
let bankDetail // undefined
const isPrime = true // Boolean
const bigNumber = 12345678934567n // Bigint
const uniqueId = Symbol("123"); // Symbol
const anotherUniqueId = Symbol("123");
console.log(uniqueId === anotherUniqueId); // Althoug both look unique but symbol datatype make them different thats why give false

// Non Primitive  (reference type) || array, object, function
const dcTrinity = ["wonder-women", "Super-man", "Bat-man"]; // Array
const dcTrinityBio = {
    hisname : "BatMan",
    ActualName : "BruceWayn",
    Age : 32
    // Object
}
function intro(){
    console.log("helloworld"); // Function

}
console.log(typeof(dcTrinity));

// http://262.ecma-international.org/5.1/#sec-11.4.3


//***************************************************************** 

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "Vikashkumardotcom"
 
let anothername = myYoutubename
anothername = "Chaiaurcode"

console.log(anothername);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ypl"
}
let userTow = userOne

userTow.email = "Vikash@google.com"

console.log(userOne.email);
console.log(userTow.email);




