/* Arrays vs. Objects for data structures to store all of your stuff*/

//Array and Object look quite similar on the surface and have very similar goals: Simply to store values or "stuff". While they may look similiar, in usage they can be quite different, with Objects lending themselves to a whole programming paradigm (Object Oriented Programming) through a variety of techniques. There are other complications too- behind the scenes javascript is creating objects for every non-primitive structure, and has object types for many primitves ones.//

//The first thing to know is simply that arrays are ordered, indexed lists while objects are organized with name/value pairs. This simple differentiation changes the way both of these data structures are used and operated on. With an ordered list, computation, simple math, and basic logical functionality and operations are easily achieved with arrays. Simply put, numbers are useful. However, names are useful for humans and programmers, so giving every value a name is very useful when describing a taxonomy and value: maybe head, body, arms, legs and so on.*/

//Here's an Array
var myArray = ["Lions","Tigers","Bears"];

//And here's an Object
var myObject = {animal1:"Lions",animal2:"Tigers",animal3:"Bears"};

//Arrays have lots of methods that process the array in useful ways. The most common is length (which is actually a property of the array object, but we'll discuss that later), which returns the length of the array. This is a big difference right away.

console.log(myArray.length); //logs 3

console.log(myObject.length) //logs undefined

//Check out all of the array methods https://www.w3schools.com/jsref/jsref_obj_array.asp. The most useful ones also let you add elements to the array list.

myArray.push("Oh My!");

console.log(myArray); //logs ["Lions", "Tigers", "Bears", "Oh My!"] 

myArray.reverse();

console.log(myArray); //logs ["Oh My!", "Bears", "Tigers", "Lions"]


/*One immediately useful thing objects can do is protect the global name space. Javascript even has an "object literal" like this built in - the Math object. Other built in javascript objects, like Date, need to be constructed first for you to use them.*/

console.log(Math.PI);//logs 3.141592653589793

console.log(Date) //just logs the "constructor function"

var theDate = new Date();

console.log(theDate); // logs Mon Mar 06 2017 11:16:31 GMT-0800 (PST) as of this second.



/*The real secret is that objects can contain functions. We call these methods of the objects. We can also test if a variable is in an object with the "in" keyword.*/

var body = {
	head:1,
	torso:1,
	arms:2,
	legs:2,
	feet:2,
	hands:2,
	count: function(){
		return body.head+body.torso+body.arms+body.legs+body.feet+body.hands
	}
};

console.log(body.count()); //logs 10
console.log("legs" in body);//logs true

//This code works, but we can use a much smarter pronoun when using javascript. The "this" keyword binds the reference to the object that called the method. Check this out:

var body2 = {
	head:1,
	torso:1,
	arms:2,
	legs:2,
	feet:2,
	hands:2,
	count: function(){
		return this.head+this.torso+this.arms+this.legs+this.feet+this.hands
	}
};

console.log(body2.count()); //logs 10

//There is a global object, which when working with web browsers is the window.

var aValue = 100;
console.log("aValue" in window) //logs true
console.log(window.aValue)//logs 100

//Methods don't even have to live within a specific object. 

var pizza = {};

//add a varaiable inside the object, assign it a value.
pizza.toppings = function(topping){
	console.log("Piping hot pizza with " + topping);
}

pizza.toppings("cheese");

//Could we do this but with a generalized function? Here's how.

function toppings(){
		console.log("Piping hot pizza with " + this.type);
}

var meatLovers = {type:"pepperoni", toppings:toppings};

//You can use the apply method of functions to give "this" a value based on the object that is being passed. apply(),bind() and call() all work similarly. bind binds the function to the object while apply() and call() let you pass an array of arguments. Further reading: http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/ */

toppings.apply(meatLovers); // logs Piping hot pizza with pepperoni

/*
Objects almost always have "prototypes". In addition to their own properties, a prototype is another object that is used in the background as a fall back source of properties. If an object doesn't have a value, javascript will search the prototype. And since prototypes can be built on prototypes, it can search up the chain, until it reaches the entity behind almost all objects, Object.prototype */


//create the prototype
var protoPizza = {
	toppings: function(){
		console.log("Piping hot pizza with " + this.type);
	}
}
//create an instance
var veggieLovers = Object.create(protoPizza);
//add the type variable and give it a value
veggieLovers.type = "Onions, Mushrooms, Olives";
//call the method
veggieLovers.toppings();


/* There is a more elegant and convenient way of doing this: Constructors. The "new" keyword will create an instance of that object, and bind the "this" keyword to that instance. This combines the functionality of the previous two examples. Some other programming langages call this a "class" system. */

//the Pizza prototype object
function Pizza(type){
	this.type = type;
}

//extend the prototype with a method
Pizza.prototype.toppings = function(){
	console.log("Crispy Crust with " + this.type);
}

//create a pizza object
var californiaPie = new Pizza("arugula");

//call the toppings method
californiaPie.toppings();


//Inheritence: Prototypes may have prototypes. Using our pizza example, we may want to have another type of object that also uses crust: a sweet pie. It makes sense for these two objects to share properties.

//Here's our Pie base class





