
var img1;
var img2;

function preload(){

img = loadImage("assets/bird.png");
img2 = loadImage("assets/flower.png")

}

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(random(155,255),random(155,255),random(155,255));
	strokeWeight(1.5);
	stroke(random(155,255),random(155,255),random(155,255));
	for (var i = 0; i <20; i++) {
	fill(random(155,255),random(155,255),random(155,255),random(50));
	s = random(250);
	ellipse(random(0,width/2),random(0,height/2),s,s);


	};

	for (var j = 0; j < 45; j ++){
		s2 = random(155,255);
		s = random(2,3.5);
		r = random(-1,1);
		noFill();

		bezier(0,0,random(2500),random(2500), width, height, width/2, height/2);

		for (var k = 0; k <2; k++){
			fill(255);
			stroke(s2,s2,s2);
			ellipse(randomGaussian(width/2,width/4),randomGaussian(height/2,height/4),50/s,50/s);
		};

		push();
		translate(randomGaussian(width/2,width/4),randomGaussian(height/2,height/4));
		rotate(random(TAU));
		image(img2,0,0,img.width/s,img.height/s);
		pop();

		push();
		translate(randomGaussian(width/2,width/4),randomGaussian(height/2,height/4));

		random
		scale(Math.round(r),1);
		image(img,0,0,img.width/s,img.height/s);
		pop();
	}
	ellipse(width/2,height/2,50,50);
	ellipse(0,0,50,50);
};


function draw(){


};
