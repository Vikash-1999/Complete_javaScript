const user = {
    username: 'vikash',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = 'vikash'
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = 'vikash'
//     console.log(this.username);
// }
// chai()
const chai =  () => {
    let username = 'vikash'
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return -> there is return keyword used
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit return -> there is no need to write return keyword
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: 'vikash'})

console.log(addTwo(3, 4));

// const myArray = [2, 5, 6, 7,]

// myArray.forEach()
