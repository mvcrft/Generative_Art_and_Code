function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}
 
 
function draw() {
	background(255);
	stroke(0);
	fill(0);
	translate(width / 2, height / 2);

	ellipse( 200, 200, 50, 50 );
	line( 0, 0, 200, 200 );

}

