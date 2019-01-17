myWidth = window.innerWidth;
myHeight = window.innerHeight;

cp1 = new ControlPoint(100,100,20);
cp2 = new ControlPoint(500,100,20);
cp3 = new ControlPoint(100,500,20);
cp4 = new ControlPoint(700,500,20);
tb = new theBezier(cp1,cp2,cp3,cp4,0);
t = 0; //counter
timing = 120; //in frames

function setup(){
	myCanvas = createCanvas(windowWidth,windowHeight);
};


function draw(){

	background(250,245,240);

	cp1.drag();
	cp2.drag();
	cp3.drag();
	cp4.drag();

	t++;
	timer = (t%timing)/timing;
	dpTime = easeInOutQuart(timer, 0, 1, 1);

	tb.update(cp1,cp2,cp3,cp4,dpTime);

	tb.displayMe();
	cp1.displayMe();
	cp2.displayMe();
	cp3.displayMe();
	cp4.displayMe();

};

//control point function
function ControlPoint(x,y,radius){
	this.x = x;
	this.y = y;
	this.radius = radius;

}
//make it dragable
ControlPoint.prototype.drag = function(){
	//test if the mouse is pressed and within the distance of the control point
	if (mouseIsPressed == 1 && dist(this.x,this.y,mouseX,mouseY) < (this.radius + 40) ){
		this.x = mouseX;
		this.y = mouseY;
	};

}

//draw the control point on screen
ControlPoint.prototype.displayMe = function(){
	noStroke();
	fill(250,125,250);

	ellipse(this.x, this.y, this.radius, this.radius)
}

//create the bezier object

function theBezier(cp1,cp2,cp3,cp4,bp){
	this.cp1x = cp1.x;
	this.cp1y = cp1.y;
	this.cp2x = cp2.x;
	this.cp2y = cp2.y;
	this.cp3x = cp3.x;
	this.cp3y = cp3.y;
	this.cp4x = cp4.x;
	this.cp4y = cp4.y;					
	this.bezierPoint = bp;
	};

//an update function
theBezier.prototype.update = function(cp1,cp2,cp3,cp4,bp){
	this.cp1x = cp1.x;
	this.cp1y = cp1.y;
	this.cp2x = cp2.x;
	this.cp2y = cp2.y;
	this.cp3x = cp3.x;
	this.cp3y = cp3.y;
	this.cp4x = cp4.x;
	this.cp4y = cp4.y;
	this.bezierPoint = bp;	
}

theBezier.prototype.displayMe = function(){

	//draw the bezier
	strokeWeight(3)
	stroke(150,250,250);
	noFill();
	bezier(this.cp1x,this.cp1y,this.cp2x,this.cp2y,this.cp3x,this.cp3y,this.cp4x,this.cp4y);

	//draw the control handles
	strokeWeight(1);
	stroke(150,150,150);
	line(this.cp1x,this.cp1y,this.cp2x,this.cp2y);
	line(this.cp3x,this.cp3y,this.cp4x,this.cp4y);

	//calculate the point along the bezier and display it
	x = bezierPoint(this.cp1x, this.cp2x, this.cp3x, this.cp4x, this.bezierPoint);
  	y = bezierPoint(this.cp1y, this.cp2y, this.cp3y, this.cp4y, this.bezierPoint);
  	ellipse(x, y, 25, 25);


};

//penner easing Quart
function easeInOutQuart(t, b, c, d) {
	if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
	return -c/2 * ((t-=2)*t*t*t - 2) + b;
};


window.onresize = function(){
	myCanvas.size(windowWidth, windowHeight);
}

