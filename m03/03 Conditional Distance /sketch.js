
// Example from Lauren McCarthy, Intro to Creative Programming @ RISD
// http://risd-creative-programming.github.io/fa13-introtocreativeprogramming/examples.html


var setup = function() {

	createCanvas(windowWidth, windowHeight);
	noStroke();
	background(0, 150, 255);
	
};

var draw = function() {

	background(120);
	fill(255);



	// noFill();
	// strokeWeight(5);
	// stroke(200);
	// ellipse(width/2, height/2, 1000, 1000);

	var d = dist(width/2, height/2, mouseX, mouseY);
	var d2 = dist(100,100, mouseX, mouseY);
	var d3 = dist(500,800, mouseX, mouseY);

	if(d < 100 || d2 < 25 || d3 < 150) {
		fill(200);
		ellipse(width/2, height/2, 200, 200);
		ellipse(100,100, 50, 50);
		ellipse(500, 800, 300, 300);
		fill(0);
	} else {
		fill(255);
		ellipse(width/2, height/2, 200, 200);
		ellipse(100,100, 50, 50);
		ellipse(500, 800, 300, 300);
		fill(200);
	}

	noStroke();
	ellipse(mouseX, mouseY, 50, 50);

};

