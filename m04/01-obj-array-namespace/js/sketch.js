// Academy of Art University
// WNM 498 Generative Art & Creative Code

var x = 50;
var y = 50;
var w = 25;
var h = 25;


var globals = {
	x : 150,
	y : 150,
	w : 75,
	h : 75	
};

var myArray = [100,100,10,10];

function setup(){
	createCanvas(200,200);
};

function draw() {
	ellipse(myArray[0],myArray[1],myArray[2],myArray[3]);
};
