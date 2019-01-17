//Functions!

/*Easily define a function by typing the function keyword. Behind the scenes, functions act as objects in javaScript. Many examples from http://eloquentjavascript.net */

// The simplest use of functions is simply code encapsulation.

function helloWorld(){
	console.log("Hello World");
}

helloWorld();

// Although this becomes a lot more useful when functions take parameters, which are like variables that belong to that function. When the function is called, new variables can be passed!

function whatSayYou(statement){
	console.log("I do declare the following: "+ statement)
}

whatSayYou("I like anchovies on my pizza!");

// two common ways to create functions are declared functions and anonymous functions.

//declared


iDoDeclare();

function iDoDeclare(){
	//I'm a named function. 
	console.log(iDoDeclare);
};
//This type of function is useful because control flow will jump to the place in the code when it comes across the declared function. This is great because you can place the functions anywhere in the script and the values will be "hoisted to" the top. Notice that we are calling the function before it's even defined, and it works fine!

var imAnonymous = function(){
	//I've got no name, just hanging out and assigned to a variable. 
	console.log(imAnonymous);

}

imAnonymous();

/*This is also an expression because of the assignment operator which gets evaluated during control, as opposed to the function keyword which is a pointer during control. So, three points. 

• First, this means if we were to place the imAnonymous(); call above the anonymous expression, it won't work.  

• Look at the declaration code - notice that a function can be a value. This is going to have complex ramifications later. 

• What happens when you put such a function definition inside a conditional (if) block or a loop? Well, don’t do that. Different JavaScript platforms in different browsers have traditionally done different things in that situation, and the latest standard actually forbids it. If you want your programs to behave consistently, only use this form of function-defining statements in the outermost block of a function or program.

here's an example:

function example() {
  function a() {} // Okay
  if (something) {
    function b() {} // Danger!
  }
}

*/

//Functions can encapsulate and run code which may or may not produce a side effect in your program, but they can also return explicit results or values. This is very common and useful.

function averageThreeNumbers(num1,num2,num3){
	return (num1 + num2 + num3)/3;
}

console.log(averageThreeNumbers(5,70,45));

//Variables are hidden inside functions and not available to the global scope. However, they can access a variable from their parent scope. 

//So this:

var myNum=0
function incrementMe(){
	myNum++;
}

//is different than this:
var myOtherNum=0;
function newNum(){
var myOtherNum = 100;
}

//Let's call the functions and log the result
incrementMe();
newNum();

console.log(myNum,myOtherNum);

//This is very important and is called lexical scoping. We can keep pushing scope with nested function. Each function has access to the variables above it in the hierarchy. In this case, "myPizza" becomes something like a global variable in my PizzaPie function. Notice that I can reuse the "option" variable name two times because the scope of the variable is safely protected inside that function.

var pizzaPie = function(){

	var myPizza = "THIN CRUST";

	var sauce = function(option){
		var option = option.toUpperCase();
		myPizza += " WITH " + option;
	};

	var cheese = function(option){
		var option = option.toUpperCase();
		myPizza += " AND " + option;
	}

	sauce("marinara");
	sauce("mozzerella");

	return myPizza;
};


console.log(pizzaPie());




