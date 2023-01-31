//funçoes anonimas
let myFunction = function() {
    return "It's a anonymous function";
}

console.log(myFunction());

//funções podem ser passadas como parametro de outras funções

function myFunction2(callback) {
    return 'Welcome! ' + callback(); 
}

console.log(myFunction2(myFunction));

setTimeout(function() {
    console.log("Aftner two seconds");
}, 2000);

//Arrow function
let myFunction3 = () => {
    console.log("I am a arrow function");
}

myFunction3();