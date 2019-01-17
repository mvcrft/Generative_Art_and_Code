
// Example adapted from Lauren McCarthy, Intro to Creative Programming @ RISD
// http://risd-creative-programming.github.io/fa13-introtocreativeprogramming/examples.html


var setup = function() {

	createCanvas(600, 400);
	noStroke();
	background(0, 150, 255);
	
};

var draw = function() {

	background(120);
	fill(255);

	var w = width / 6;
	ellipse(w * 2, height / 2 , 100, 100);
	ellipse(w * 4, height / 2, 100, 100);

	var d1 = dist(w * 2, height/2, mouseX, mouseY);
	var d2 = dist(w * 4, height/2, mouseX, mouseY);

	if (d1 < 50 || d2 < 50) {
		fill(0);
	} else {
		fill(200);
	}

	ellipse(mouseX, mouseY, 50, 50);

};

