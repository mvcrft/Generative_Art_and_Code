// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var sound;
 
function preload(){
  // if the mp3 is not supported by the browser it will automatically load the ogg file
  sound = loadSound('audio/real.mp3');

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
	playButton();
}
 
function mousePressed() {
  if ( sound.isPlaying() ) { // .isPlaying() returns a boolean
  	
	sound.pause();
	background(255);
	pauseButton();

  } else {
	sound.play(); // playback will resume from the pause position
	playButton();
  }
}







function playButton(){
	background(255);
	push();
	translate( width / 2, height / 2);
	fill(0);
	triangle( -50, 50, -50, -50, 30, 0);
	pop();
}

function pauseButton(){
	background(0,255,0);
	push();
	translate( width / 2, height / 2);
	fill(0);
	triangle( -50, 50, -50, -50, 30, 0);
	pop();
}