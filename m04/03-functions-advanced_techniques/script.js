/*The previous example code covers pretty much 90% of everyday usage of functions. Encapsulation, returning values, and scoping are the main raison d'etre for functions. But, with the simple building blocks of functions, and because of the loose way javaScript works, we can do all kinds of other really useful, advanced, and kind of weird hacks. Eventually they lead to a type of programming style that attempts to keep data and functionality as separate and pure from one another as possible. Unsurprisingly, this is known as "functional programming"*/


/* An "IIFE" is a bit of a hack to make a function self-execute.  It stands for Instantly Invoked Function Expression- kind of a silly name. If you want a function to evaluate immediately without calling it, use an IIFE. One interesting thing about IFFE's is that they "erase" themselves after they have been called. If you've used jQuery, you've used lots of IIFEs! Why does this even work? Putting a pair of parenthesis after a statement calls it as a function, even if it's another immediately evaluated function.*/

//here's a blank IIFE that doesn't do anything. So many parenthesis!
( function(){} )();

//Heres what it looks like with some code. If you were to log the value of variableHidden it would turn up not defined because the IIFE is instantly invoked as an expression... hence the name. 

(function(){
	var variableHidden = true;
	console.log("self-execute");
})();


//We could instantly evaluate and then store in a variable if we like. This would return "undefined"
var myIIFE = (function(){

})();

//But this would return true. Could we return another function as opposed to a boolean? Believe it or not, yes. We'll look at that later.
var myOtherIIFE = (function(){
	return true;
})();


/*Okay, so could you call and return functions inside one another? Sure, but you need to be careful about dependencies. Check out this code:

function whosOnFirst(){
	return thatsWhatIWantToKnow();
}

function thatsWhatIWantToKnow(){
	return whosOnFirst();
}

//Danger! This will "blow the call stack", since you've created a loop of functions calling one another.

*/

//Since we know functions can call other functions and even return new functions, Could a function call itself? javaScript has no problem with this, as long as there is some kind of exit condition - the same as loops. We call this recursion. Here's a simple example. We will create an array to store the values and keep track of recursion.

var myList = [];
//var times = 100;

function addUp(times){

//first, we multiply times by .9
	times *= .9;

	myList.push(times);

//since each time through the recursion times is smaller, let's make the exit condition be a value smaller than 1.

	if (times>1){
		addUp(times);   //here's where we call the function in itself
		}
};

//let's call the recursion
addUp(100);

//let's check out the values and the number of times that we've recursed.
console.log(myList.length,myList);


//For now, we know we could accomplish a very similar result with a loop. Recursion, however, is really useful for branching structures. Objects inside of Objects inside of Objects are clumsy to deal with loops, but easy with recursion. As it turns out, the whole HTML DOM is a branching structure! So recursion can be a great technique, although be warned it performs less well than simple loops. Additionally, from a mathematics perspective, recursion arguably describes the simple mathematical process and concept described above more succinctly and clearly than a loop. You can also use recursion to build all kinds of interesting generative graphics. Anything that is self-repeating using shapes and branching - things like L-Systems and Fractals.
//


/*
A closure "closes over" a variable so they are protected behind a function, but also returns a function. Notice that the return can then be called with parameters because it's an anonymous function.
*/

//Let's create a simple average pattern with closures.

function setHigh(high){
	return function(low){
		return (high + low) /2;
	}

}
var averageWith = setHigh(50); //here's the real tricky bit. Remember, this returns another function.
console.log(averageWith(3)); //so we call the new variable with parenthesis since the return function is now stored there.


function sayMyName(name){
	var nameCap = name.toUpperCase(); //notice that we will do some operations on the parameters that's getting passed in. A good way to think about this is "baking" some sort of computation that's useful for the next step of the process. In this case, it's making sure all the strings are upper case.
	return function(loves){
		return nameCap + " & " + loves + " SITTING IN A TREE";
	}
}

var me = sayMyName("Colin");
console.log(me("GENERATIVE ART"));


//Can we combine IIFEs and closures? You bet! This example shows a simply example. Why do this? Well, notice that the IFFE runs and then "disappears". Where does the variable "counter" go? Well, it's hidden from the window object, but stored in memory. This solves all kinds of problems you will encounter later with global scoping in javaScript. You can change the value of counter from outside the function in the global scope, but not worry about variable pollution. 

var add = (function(){
	var counter = 0;
	return function(){
		return counter++;
	};
})();

add();
add();
add();

console.log( add() ); //returns 3!




