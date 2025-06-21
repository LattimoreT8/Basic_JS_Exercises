
// #1 Complete the function by 
// returning the string 'Hello World'
function hello(){
    return 'Hello World';
}

// #2 Complete the function
// by returning a + b
function sum(a, b){
    let result = a + b;
    return result;
}

// #3 Complete the function by returning
// 'Hello ' + name
function helloPerson(name){
    let person = name;
    return 'Hello ' + person;
}

// #4 Complete the function 
// by returning a minus b
function minus(a, b){
    let result = a - b;
    return result;
}

// #5 Complete the function 
// by returning a divided by b
function divide(a, b){
    let result = a / b;
    return result;
}


module.exports = {hello, sum, helloPerson, minus, divide}