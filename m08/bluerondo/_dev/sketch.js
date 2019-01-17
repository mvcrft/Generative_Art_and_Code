//Blue Rondo by Colin Sebestyen
//Credit to Daniel Shiffman, Ryan Berkey, S. Neil Fujita, and Dave Brubeck Quartet
//Made with P5.js
//@colin_movecraft


// function preload(){
// 	brubeck = loadSound("assets/bluerondo.mp3");
// }

var m;

var counter = 0;

function setup(){
	w = windowWidth;
	h = windowHeight;
	createCanvas(960,960);

	m = new module(480,480,480,0,"A");
	s = { scale: 0 };
	tween = new TWEEN.Tween(s);

	tween.to({scale:500},3000);
	tween.start();
	tween.easing(TWEEN.Easing.Exponential.InOut);

 	drawingContext.shadowOffsetX = 15;
  	drawingContext.shadowOffsetY = 15;
  	drawingContext.shadowBlur = 0;
  	drawingContext.shadowColor = "gray";
  	drawingContext.setLineDash([15,15]);
  	//CanvasRenderingContext2D.setLineDash()


	//brubeck.play();

};


function draw(){

	m.display();
	stroke(15);
	strokeWeight(1);
	noFill();
	ellipse(50,50,s.scale,s.scale);


	TWEEN.update();

	if (counter < 2147483647){
		counter ++;
	}

	text(counter,10,60);
};


function module(w, h, x ,y ,type){
	this.w = w;
	this.h = h;
	this.x = x;
	this.y = y;
	this.type = type;
}

module.prototype.display = function(){
	
	// var xWidth = 0;
	// var tween = new TWEEN.Tween(xWidth);
	// tween.to(500,1000);
	// tween.easing(TWEEN.Easing.Exponential.InOut);
	// //tween.start();

	background(50);
	noStroke();
	rect(this.x,this.y,this.w/3,this.h);
	fill(220);
	rect(this.w/3+this.x,this.y,this.w/3,this.h);

}



function mousePressed(){
	var fs = fullScreen()
	fullScreen(!fs);
}