var a;
var g;

function setup(){
	c = createCanvas(480,480);
	g = createGraphics(100,100);
	a = new Asterix(50,50,g);
	a2 = new Asterix(200,200,c);
}


function draw(){
	background(myColors.c1);

	//a.display.bind(c);
	//background(myColors.c5);
	a.display();
	a2.display();
	//ellipse(25,0,35,35);
	//fill(myColors.c2);
	noStroke();

	image(g,50,150);
}

function Asterix(x,y,c){
	this.x = x;
	this.y = y;
	this.ctx = c;
}

Asterix.prototype.display = function() {
	this.ctx.fill(myColors.c2);
	//this.ctx.noStroke();
	//console.log(this.x);
	this.ctx.fill(myColors.c3);
	this.ctx.rect(0,0,100,100);
	this.ctx.fill(myColors.c2);
	this.ctx.ellipse(this.x,this.y,50,50);
	this.ctx.stroke(4);
	this.ctx.fill(myColors.c3);
	this.ctx.line(this.x,this.y,this.x+25,this.y+25);

};

function mousePressed(){
	console.log(c);
}