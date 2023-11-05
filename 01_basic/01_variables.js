// 3 types --> var, let, const
let  accountEmail = "abc@gmail.com";
const accountId = 345;
var accountPassword = "Vikash@208"

// accaountId = 567 error --> updating a const variable is not allowed

accountEmail = "abc208@gmail.com";
accountPassword = "Vikash@456";
// console.log(accountEmail,accountId,accountPassword);
console.table([accountEmail,accountId,accountPassword])

/* prefer not to use var 
because of issue in block scope and functional scope*/