
function sayMyName(){
    console.log('V');
    console.log('I');
    console.log('K');
    console.log('A');
    console.log('S');
    console.log('H');
}
 
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log('Result:', result);


function loginUserMessage(username = 'sam'){
    if(!undefined ){
        console.log('please enter a username')
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('vikash'));
// console.log(loginUserMessage('vikash'))

function calculateCartPrice(val1, val2,...num1){
return num1
}

// console.log(calculateCartPrice(200, 300, 400))

const user = {
    username: 'vikash',
    price: 199
}

function handleobject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleobject(user)
handleobject({
    username: 'sam',
    price: 322
});

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));






