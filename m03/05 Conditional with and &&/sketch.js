// Example from http://coursescript.com/notes/interactivecomputing/interactivity/

var isOverRectangle;
var bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(255);
}
 
function draw() {
  background(bgColor);
 
  // check if mouse is inside the rectangle
  // mouseX >= x && mouseX <= x+width && mouseY >= y && mouseY <= y+height
  
	if (mouseX >= 150 && mouseX <= 150+100 && mouseY >= 150 && mouseY <= 150+100) {
		isOverRectangle = true;
	} else {
		isOverRectangle = false;
	}
  
  // draw a rectangle
  stroke(0);
  strokeWeight(5);
  rectMode(CORNER);
  rect(150, 150, 100, 100);


}
 
function mousePressed(){
  if(isOverRectangle){
    bgColor = color(random(255), random(255), random(255));
  }
  print(isOverRectangle);
}
