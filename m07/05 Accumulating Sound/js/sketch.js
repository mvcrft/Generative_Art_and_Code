var amp,
	theta = 0;

function preload(){
  background(255);
  sound = loadSound('audio/real.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	sound.play();
	amp = new p5.Amplitude(.8); // Adding a number between 0.0 and .999 will smooth the amplitude reading

}
 
function draw() {

	background(255);
	stroke(0);
	fill(0);

	translate(width / 2, height / 2);

	var level = amp.getLevel(); // Get the amplitude level in a 0.0 - 1.0 range then scaling it by ampScale

	var radius = 200;
	theta += 1 * level *.5;

	//polar coordinates
	var xPos = radius * cos(theta);
	var yPos = radius * sin(theta);

	var diameter = map( level, 0, 1, 10, 250);
	ellipse( xPos, yPos, diameter, diameter );
	line( 0, 0, xPos, yPos );

}

