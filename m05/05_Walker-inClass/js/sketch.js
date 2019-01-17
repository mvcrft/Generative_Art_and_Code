
var john;

function setup() {
createCanvas(windowWidth, windowHeight);

john = new Walker(width/2,height/2);

}

function draw() {
	background(20,20,20,5);
	john.step();
	john.display();

}

function Walker(x,y){
	this.x = x;
	this.y = y;
	this.stepSize = 10;
}

Walker.prototype.display = function() {
	noStroke();
	fill(150);
	ellipse(this.x,this.y,15,15);
};

Walker.prototype.step = function(){
	this.x += random(-this.stepSize,this.stepSize);
	this.y += random(-this.stepSize,this.stepSize);
} 