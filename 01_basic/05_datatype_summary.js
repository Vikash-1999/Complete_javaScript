// # \Primitive Datatypes || 7 Types : Number, string, Null, Undefined, Boolean, Symbol, Bigint
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


