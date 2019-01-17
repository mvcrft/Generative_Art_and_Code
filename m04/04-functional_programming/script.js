//Introduction to Functional Programming

//functions can return functions
function helloWorld(a){
	return function(b){
		return a+b;
	}
}

var a = helloWorld(10);
var b = a(10);
console.log(b);



//Here's a loop
var myArray = [5,3,2,5];
for(i=0;i<myArray.length;i++){
	console.log(myArray[i]);
}

//Here's the functional programming way. 
function forEachItem(array,action){
	for(i=0;i<array.length;i++){
		action(array[i]);
	}
}

forEachItem(myArray,console.log);

//Functions can be parameters. You could make up an anonymous function on the spot.

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}


var numbers = [1, 2, 3, 4, 5];

sum = 0;

forEach(numbers, function(number) {
  sum += number;
});

console.log(sum);

//notice that there is a "hole" left for the computation

