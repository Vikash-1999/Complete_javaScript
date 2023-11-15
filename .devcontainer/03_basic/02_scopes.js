// var c = 300 // global scope
let a = 300

if(true){            // block scope
    let a = 10
    const b = 20
    // console.log('INNER:', a);
    
}




// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = 'vikash'
    function two(){
        const website = 'youtube'
        // console.log(username);
    }
    // console.log(website);
    
    two()
}

one()

if (true){
    const username = 'vikash'
    if(username === 'vikash'){
        const website = 'youtube'
        // console.log(username + website);
    }
    // console.log(website)
}

// console.log(username);

// ++++++++++++++++++++++++++ interesting +++++++++++++++++++++
console.log(addone(5))

function addone(num){
    return num + 1
}


addTwo(5)

const addTwo = function(num){
    return num + 2
}


