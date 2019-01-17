
//Global Variables can be held outside of the functions.


var greenColor = [0,255,0];

//Notice that some p5 objects won't work unless inside their respective functions. 
//This will throw an error:

//var red = color(255,0,0);

//so how do we get around this? Javascript allows undefined variables. 

 var red;


function setup() {

  //And then in setup, we can initialize the value of red.
  red = color(255,0,0);

  // set canvas size
  createCanvas(400, 200);
}
 
function draw() {
  // set background color
  background(255);
  noStroke();
  rectMode(CENTER);
 
  // draw a green rectangle
  fill(red);
  rect(100, 100, 50, 50);

  fill(greenColor);
  rect(300, 100, 50, 50);
  
}