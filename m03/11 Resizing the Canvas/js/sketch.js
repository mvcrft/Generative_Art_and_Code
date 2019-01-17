// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//
// Using p5.dom.js to resize the canvas when the window is resized

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
}
 
function draw() 
{
  background(255);
 
  fill(240, 80, 5); 
  noStroke(); 

  ellipse( width / 2, height / 2, width / 4, width / 4 );  

}

// Window event handler when the browser window size changes
// When resized it calls the anonymous function
window.onresize = function(){
	resizeCanvas(windowWidth, windowHeight);
}

// function windowResized(){
// 	resizeCanvas(windowWidth, windowHeight);
// }