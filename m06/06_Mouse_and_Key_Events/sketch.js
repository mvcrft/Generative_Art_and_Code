function setup(){
	createCanvas(windowWidth,windowHeight);
	background(60)
	
};

/*let's explore some of the event handlers that are built into p5.
What is an event? 
HTML events are "things" that happen to HTML elements.
When JavaScript is used in HTML pages, JavaScript can "react" to these events.
*/

function draw(){

//first lets look at two variables that are always tested in p5, mouseIsPressed and keyIsPressed. These are great for simple tests.

var myColor = [255,0,0];

if (mouseIsPressed){
	myColor = [0,255,0];
};

if (keyIsPressed){
	myColor = [0,0,255];
};

//You also test for which mouse button is pressed with mouseButton options are LEFT, MIDDLE, RIGHT

if (mouseIsPressed){
	if (mouseButton == RIGHT){
		myColor = [255,255,255];
	}
}

//Very similarly, you can test keys using the variable key for ASCII keys (Letters and numerals) and keyCode for special keys. KeyCode can be used to detect BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.

if (keyIsPressed){

	if (key == "a"){
		myColor = [255,255,0];	
	}

	if (keyCode == UP_ARROW){
		myColor = [0,0,0];
	}
}

noStroke();
fill(myColor);
ellipse(width/2, height/2, width/8, width/8);	

};


//while mouseIsPressed and keyIsPressed are always being tested in the loop, mousePressed() triggers once as an event. Notice that these are seperate p5 functions!

function mousePressed() {
  ellipse(mouseX, mouseY, 25, 25);
  // prevent default, or false positives
  return false;
}
//mouseMoved is triggered everytime the mouse is moved.
function mouseMoved() {
	fill(30);
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}
//mouseReleased is triggered everytime the mouse button is released.
function mouseReleased() {
	fill(100,100,100,100);
  ellipse(mouseX, mouseY, 55, 55);
  // prevent default
  return false;
}

//use keyPressed() with a switch statment to build keyboard interactions. key will aslo store the last key used in memory. This is useful for user input, making a music keyboard, or simple games.

function keyPressed(){
	switch(key){
		case "1":
		fill(random(255));
		text(key,50,50);
		break;
		case "2":
		fill(random(255));
		text(key,150,50);
		break;
		case "3":
		fill(random(255));
		text(key,250,50);
		break;
		default:
		break;
	}
}




