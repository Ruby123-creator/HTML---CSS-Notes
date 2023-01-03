//what is function : it is a block of code to perform a particaulr task as many times whenever it is call


//function declaration
function x(){
    console.log("hello world!!");
}

//call a function : function invocation
x();

//function with parameters and arguments
//parameters are the values which provide to a function on declarartion
//arguments are the values that we provide to function on invocation


var from = "Ruby";
function showMessage(name ,text ="hey"){
    console.log(name + " says " + text);
}

showMessage(from);


//Return values from a function
function sum(a,b){
    return (a+b);
}

var result = sum(2,3);
console.log(result);



//function expression
var showMessage = function(){
    console.log("hiii");
}

console.log(showMessage);
showMessage();



//func dec
function sayHi(){
    console.log("saying hii");
}
console.log(sayHi);


//fun expression
var func = sayHi;
func();
sayHi();




