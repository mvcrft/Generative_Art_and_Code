//Let's learn about rect to polar co-ordinates. This makes it easy to build graphics based on circles and angles.

//First, instead of x and y positions, polar coordiantes takes two values, theta (the value of the angle) and the radius (how big is the circle?)

var radius = 200;
var theta = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}
 
function draw() {

//we will set up some basic shapes and styles, and translate our polar coordinates to the center of the canvas
	background(255);
	stroke(0);
	fill(0);
	translate(width / 2, height / 2);

//Here's where we do the conversion. This uses the trigonometric functions to convert the circle to the square world of cartiesian coordinates. 

	var xPos = radius * cos(theta);
	var yPos = radius * sin(theta);

//draw the circle and line
	ellipse( xPos, yPos, 50, 50 );
	line( 0, 0, xPos, yPos );

//increment theta to increase the angle - this will move around in a circle!
	theta += .01;
}

/* How do you convert from rect back to polar? A little trig knowledge will make quick work of this task. First, you need to calculate r. This is easily done with computing the distance:

r = sqrt( x * x + y * y); 

Although, you could also use r = dist(x,y) if you are using p5, (this is the same thing).

Finally, we need to calculate the angle, which leads us to SOH CAH TOA. Also remember the arc functions - they let you undo the trig functions (for example, asin() is the inverse of sin() ), Tangent = Opposite/hypotneuse (or XVal/yVal in our case) and then need to undo the tangent to derive the angle.

theta = atan( y / x);

*/ 

