// singleton
//Object.creat

// objects literals

const mysym = Symbol('key1')

const JsUser = {
    name: 'vikash',
    'full name': 'Vikash Kumar',
    [mysym]: 'mykey',
    age: 15,
    location: 'LKR',
    email: 'vikash.kr.@345.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']


}

// console.log(JsUser.email)
// console.log(JsUser['email'])
// console.log(JsUser['full name'])
// console.log(JsUser[mysym]) 


JsUser.email = 'Vikash208@gpt.com'
//Object.freeze(JsUser)
JsUser.email = 'Vikash208@ms.com'
//console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hello JS user')
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, $(this.name)`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



