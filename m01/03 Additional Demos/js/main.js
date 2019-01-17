

//Most p5 sketches by default include two functions, setup(), which includes commands that will be called once, and draw() which is a loop.

function setup(){

	//CreateCanvas makes a new HTML canvas element. There are some built in variables we can use that read the values stored in the window object.

	createCanvas(windowWidth, windowHeight);

	//we can also fill the canvas with black.
	background(0);
}

//We're going to create the draw loop.

function draw(){

	background(0);

//remember, these variables will be both instantiated and updated everytime through the loop.
	var a = 1;
	var b = 0;

//let's test a quick conditional.
	if( a > b ){
		//tracing values in the console is easy with the print() command.
		print("Hello Class.")
	}

// let's test some variables. MouseIsPressed OR touchIsDown.

if ( mouseIsPressed || touchIsDown ){

		strokeWeight(10);
		stroke(0);
		ellipse(mouseX, mouseY, 50, 50);
		ellipse(mouseX, mouseY, 250, 250);


	}else{

		fill(255,0,0);
		ellipse(mouseX, mouseY, 10, 10);

	}

	stroke(255);
	line(mouseX, mouseY, width / 2 , height /2);

}

//There's other functions I can call as well. Here's a useful function that's triggered when the window resizes.

function windowResized(){
	//this command will update the values of the windowWidth and windowHeight variables.
	resizeCanvas(windowWidth, windowHeight);
	//and also clear the background.
	background(0);
}

