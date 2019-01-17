var one = 0; 
var two = 19;
var three = 37;
var four = 56;
var beat = 9;
var timer = 0;

// var positions = [];
var dot1,dot2;

var factor= .5;
// var keys = keyValues(one,two,three,four,beat);
// // var brubeck;



// function preload(){
// 	brubeck = loadSound("assets/bluerondo.mp3");
// }

function setup(){

dot2 = new Dot(myColors.c4);
dot1 = new Dot(myColors.c5);

createCanvas(windowWidth,windowHeight);
positions = [];
gridValues();

x = randomX();
y = randomY();

var keys = keyValues(one,two,three,four,beat);

dot1.initialize(width,height,keys);
dot2.initialize(width,height,keys);
// brubeck.play();
};


function draw(){

background(myColors.c1);

if (timer == 0){
	dot1.animate1(x,y);
	dot2.animate2(x,y);
};
	dot1.lineDraw(width,height,timer);
	dot2.lineDraw(width,height,timer);

	dot2.display2(width,height,timer);
	dot1.display1(width,height,timer);

drawBorder();

timer++;
	
TWEEN.update();

};




function gridValues(){

xMargin = width / 16;
yMargin = height / 16;

x = [];
y = [];
//populate the arrays with the grid values
for (i = 0; i <11; i++){
		x.push((i*width/16)+xMargin*2);
		y.push((i*height/16)+yMargin*2);
}
//randomize them
shuffle(x,true);
shuffle(y,true);

//populate the global array with values
for (i = 0 ; i < 11 ; i++){
	positions.push([x[i],y[i]]);
	};

}

function makeGrid(){
	stroke(10,10,10,10);

	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 0;
	//draw a grid
	for (i = 0 ; i < 13 ; i++){
		strokeWeight(2);
		line(width/8, height/8 + (i*height/16), width - width/8, height/8 + (i*height/16));
		line(width/8 + (i* width/16), height/8 , width/8 + (i* width/16), height - height/8);
	};

};

function drawBorder(){
	//draw the border
	noFill();
	strokeWeight(((width+height)/2)/8);
	stroke(myColors.c3);
	sizeAvg = (width + height /2)
	
	drawingContext.shadowOffsetX = sizeAvg/32;
	drawingContext.shadowOffsetY = sizeAvg/32;
	rect(0,0,width,height);

};

function Dot(color){
	this.x = 90;
	this.y = 90;
	this.positionx = 90;
	this.positiony = 90;
	this.targetposition1x = 0;
	this.targetposition1y = 0;
	this.targetposition2x = 0;
	this.targetposition2y = 0;
	this.targetposition3x = 0;
	this.targetposition4y = 0;
	this.color = color;
	this.myWidth = 0;
	this.myHeight = 0;
	this.keys = [150];
	//draw a circle
	this.topx=0,
	this.topx1=this.myHeight/2,
	this.topx2=-this.myHeight/2,
	this.topy=-this.myHeight/2,
	this.topy1=-this.myWidth/2,
	this.topy2=-this.myWidth/2,
	this.rightx=this.myWidth/2,
	this.rightx1=this.myHeight/2,
	this.rightx2=this.myHeight/2,
	this.righty=0,
	this.righty1=-this.myWidth/2,
	this.righty2=this.myWidth/2,
	this.bottomx=0,
	this.bottomx1=this.myHeight/2,
	this.bottomx2=-this.myHeight/2,
	this.bottomy=this.myHeight/2,
	this.bottomy1=this.myWidth/2,
	this.bottomy2=this.myWidth/2,
	this.leftx=-this.myWidth/2,
	this.leftx1=-this.myHeight/2,
	this.leftx2=-this.myHeight/2,
	this.lefty=0,
	this.lefty1=this.myWidth/2,
	this.lefty2=-this.myWidth/2

	this.shadowDepth = 0;
};


Dot.prototype.initialize = function(width,height,keys){

//assign the position values to the 4 positions

	myIndex = round(random(0,positions.length-1));
	this.positionx = positions[myIndex][0];
	this.positiony = positions[myIndex][1];
	this.x = positions[myIndex][0];
	this.y = positions[myIndex][1];
	positions.splice(myIndex,1);

	myIndex1 = round(random(0,positions.length-1));
	this.targetposition1x = positions[myIndex1][0];
	this.targetposition1y = positions[myIndex1][1];
	positions.splice(myIndex1,1);

	myIndex2 = round(random(0,positions.length-1));
	this.targetposition2x = positions[myIndex2][0];
	this.targetposition2y = positions[myIndex2][1];
	positions.splice(myIndex2,1);

	myIndex3 = round(random(0,positions.length-1));
	this.targetposition3x = positions[myIndex3][0];
	this.targetposition3y = positions[myIndex3][1];
	positions.splice(myIndex3,1);

//intialize the width and height
	sizeAvg = (width + height /2);
	this.myWidth = sizeAvg /16;
	this.myHeight = sizeAvg /16;
	this.keys = keys;

	f = 0.5;

	this.topx=0,
	this.topx1=this.myHeight/2*f,
	this.topx2=-this.myHeight/2*f,
	this.topy=-this.myHeight/2,
	this.topy1=-this.myWidth/2,
	this.topy2=-this.myWidth/2,
	this.rightx=this.myWidth/2,
	this.rightx1=this.myHeight/2,
	this.rightx2=this.myHeight/2,
	this.righty=0,
	this.righty1=-this.myWidth/2*f,
	this.righty2=this.myWidth/2*f,
	this.bottomx=0,
	this.bottomx1=this.myHeight/2*f,
	this.bottomx2=-this.myHeight/2*f,
	this.bottomy=this.myHeight/2,
	this.bottomy1=this.myWidth/2,
	this.bottomy2=this.myWidth/2,
	this.leftx=-this.myWidth/2,
	this.leftx1=-this.myHeight/2,
	this.leftx2=-this.myHeight/2,
	this.lefty=0,
	this.lefty1=this.myWidth/2*f,
	this.lefty2=-this.myWidth/2*f

	this.shadowDepth = sizeAvg/32;


}



Dot.prototype.display2 = function(width,height){

	sizeAvg = (width + height /2)
	
	drawingContext.shadowOffsetX = this.shadowDepth;
	drawingContext.shadowOffsetY = this.shadowDepth;
	drawingContext.shadowBlur = 0;
	drawingContext.shadowColor = rgb2hex(myColors.c7);

	strokeWeight(sizeAvg/128);	
	stroke(this.color);

	noStroke();

	fill(this.color);

	push();

	translate(this.positionx,this.positiony);
	//draw the BG circle
	fill(myColors.c7);
	ellipse(0, 0, this.myWidth, this.myHeight);
	//draw the animate circle
	fill(this.color);
		beginShape();
			vertex(this.topx,this.topy);
			bezierVertex(this.topx1,this.topy1,this.rightx1,this.righty1,	this.rightx,this.righty);
			bezierVertex(this.rightx2,this.righty2,this.bottomx1,this.bottomy1,		this.bottomx,this.bottomy);
			bezierVertex(this.bottomx2,this.bottomy2,this.leftx1,this.lefty1,	this.leftx,this.lefty);
			bezierVertex(this.leftx2,this.lefty2,this.topx2,this.topy2,		this.topx,this.topy);		
		endShape();
	pop();

}


Dot.prototype.display1 = function(width,height){

	sizeAvg = (width + height /2)

	drawingContext.shadowOffsetX = this.shadowDepth;
	drawingContext.shadowOffsetY = this.shadowDepth;
	drawingContext.shadowBlur = 0;
	drawingContext.shadowColor = rgb2hex(myColors.c7);

	noStroke();

	fill(this.color);

	push();

	translate(this.positionx,this.positiony);

	fill(this.color);
		beginShape();
			vertex(this.topx,this.topy);
			bezierVertex(this.topx1,this.topy1,this.rightx1,this.righty1,	this.rightx,this.righty);
			bezierVertex(this.rightx2,this.righty2,this.bottomx1,this.bottomy1,		this.bottomx,this.bottomy);
			bezierVertex(this.bottomx2,this.bottomy2,this.leftx1,this.lefty1,	this.leftx,this.lefty);
			bezierVertex(this.leftx2,this.lefty2,this.topx2,this.topy2,		this.topx,this.topy);		
		endShape();
	pop();

}

//Big Yellow Dot
Dot.prototype.animate2 = function(x,y){

var tween1 = new TWEEN.Tween(this);
var tween2 = new TWEEN.Tween(this);
var tween3 = new TWEEN.Tween(this);
var tween4 = new TWEEN.Tween(this);
var tweenShape = new TWEEN.Tween(this);


tween1.to( {positionx : this.targetposition1x} , framesToMillis(this.keys[4]) );
tween1.easing( TWEEN.Easing.Cubic.Out );
tween1.start();

	// When tween ends
	tween1.onComplete( function(){
		tween2.delay(framesToMillis( this.keys[1]) - framesToMillis(this.keys[4]) );
		tween2.start();
	});

	tween2.to( {positiony : this.targetposition2y } , framesToMillis(this.keys[4]) );
	tween2.easing( TWEEN.Easing.Cubic.Out );

	tween2.onComplete( function(){
		tween3.delay(framesToMillis(this.keys[4]));
		tween3.start();
	});

	tween3.to( {positionx : this.targetposition3x} , framesToMillis(this.keys[4]) );
	tween3.easing( TWEEN.Easing.Cubic.Out );
	
	tween3.onComplete( function(){
		tween4.delay(framesToMillis(this.keys[4]));
		tweenShape.delay(framesToMillis(this.keys[4]));				
		tween4.start();
		tweenShape.start();
	})

	w = this.myWidth*2;
	h = this.myHeight*2;
	f = 0.5;

	tween4.to( {

		positionx: x,
		positiony: y,
		myWidth: w,
		myHeight: h

	} , framesToMillis(this.keys[4]) );	
	tween4.easing( TWEEN.Easing.Cubic.Out );

	tweenShape.to({

	topx:0,
	topx1:h/2*f,
	topx2:0*f, //-h/2,
	topy:-h/2,
	topy1:-w/2,
	topy2:-w/2,
	rightx:w/2,
	rightx1:h/2,
	rightx2:h/2,
	righty:0,
	righty1:-w/2*f,
	righty2:w/2*f,
	bottomx:0,
	bottomx1:h/2*f,
	bottomx2:0*f, //-h/2,
	bottomy:h/2,
	bottomy1:w/2,
	bottomy2:w/2,
	leftx: 0, //-w/2,
	leftx1:0, //-h/2,
	leftx2:0, //-h/2,
	lefty:0,
	lefty1:w/2,
	lefty2:0 //-w/2

	}, framesToMillis(this.keys[4]*2) );
	tweenShape.easing( TWEEN.Easing.Bounce.Out );



}


//Animate small dot 
Dot.prototype.animate1 = function(x,y){

var tween1 = new TWEEN.Tween(this);
var tween2 = new TWEEN.Tween(this);
var tween3 = new TWEEN.Tween(this);
var tween4 = new TWEEN.Tween(this);
var tweenShape = new TWEEN.Tween(this);


tween1.to( {positionx : this.targetposition1x} , framesToMillis(this.keys[4]) );
tween1.easing( TWEEN.Easing.Cubic.Out );
tween1.start();

	// When tween ends
	tween1.onComplete( function(){
		tween2.delay(framesToMillis( this.keys[1]) - framesToMillis(this.keys[4]) );
		tween2.start();
	});

	tween2.to( {positiony : this.targetposition2y } , framesToMillis(this.keys[4]) );
	tween2.easing( TWEEN.Easing.Cubic.Out );

	tween2.onComplete( function(){
		tween3.delay(framesToMillis(this.keys[4]));
		tween3.start();
	});

	tween3.to( {positionx : this.targetposition3x} , framesToMillis(this.keys[4]) );
	tween3.easing( TWEEN.Easing.Cubic.Out );
	
	tween3.onComplete( function(){
		tween4.delay(framesToMillis(this.keys[4]));
		tweenShape.delay(framesToMillis(this.keys[4]));				
		tween4.start();
		tweenShape.start();
	})

	w = this.myWidth;
	h = this.myHeight;
	f = 0.5;

	tween4.to( {

		positiony: y - h/1.5, 
		positionx: x + w/1.5, 
		myWidth: w,
		myHeight: h,  
		shadowDepth: 0

		} , framesToMillis(this.keys[4]) );	
	tween4.easing( TWEEN.Easing.Cubic.InOut );

	tweenShape.to({

	topx:-w/6,
	topx1:-h/4,
	topx2:-h/8,
	topy:-h/5,
	topy1:-w/8,
	topy2:-w/6,
	rightx:w/4, //w/2
	rightx1:h/10,
	rightx2:h/4,
	righty:h/4,
	righty1:-w/2*f,
	righty2:w/2*f,
	bottomx:0,
	bottomx1:h/2*f,
	bottomx2:-h/2*f,
	bottomy:h/2,
	bottomy1:w/2,
	bottomy2:w/2,
	leftx:-w/2,
	leftx1:-h/2,
	leftx2:-h/2,
	lefty:0,
	lefty1:w/2*f,
	lefty2:-w/2*f

	}, framesToMillis(this.keys[4]*3) );
	tweenShape.easing( TWEEN.Easing.Bounce.Out );

}

//draw the lines

Dot.prototype.lineDraw = function(width,height){

	//style
	stroke(myColors.c3);
	sizeAvg = (width + height /2);
	drawingContext.shadowOffsetX = 0
	drawingContext.shadowOffsetY = 0
	strokeWeight(sizeAvg/128);

//test for timing, subtract current value from target value from total to get draw on effect.

	if (timer<this.keys[1]){

	line(this.x, this.y, this.targetposition1x - (this.targetposition1x - this.positionx ), this.y );

	}else if (timer < this.keys[2]){

	line(this.x, this.y, this.targetposition1x , this.y );
	line(this.targetposition1x, this.y, this.targetposition1x, this.targetposition2y - (this.targetposition2y-this.positiony) );

	} else if (timer < this.keys[3]){

	line(this.x, this.y, this.targetposition1x , this.y );
	line(this.targetposition1x, this.y, this.targetposition1x, this.targetposition2y );	
	line(this.targetposition1x, this.targetposition2y, this.targetposition3x-(this.targetposition3x-this.positionx), this.targetposition2y );

	} else {

	line(this.x, this.y, this.targetposition1x , this.y );
	line(this.targetposition1x, this.y, this.targetposition1x, this.targetposition2y );	
	line(this.targetposition1x, this.targetposition2y, this.targetposition3x, this.targetposition2y );

	}

}


//all the helper functions
function framesToMillis(frames){
	fps = 60;
	return map(frames,0,fps,0,1000);
}

function millisToFrames(millis){
	fps = 60;
	return map(millis,0,1000,0,fps);
}

function keyValues(one,two,three,four,five){
	return [one,two,three,four,five];
}

function randomX(){
	xpos = [width*.25, width*.5, width*.75];
	return xpos[round( random(0, xpos.length-1)) ]; 
};

function randomY(){
	ypos = [height*.25, height*.5, height*.75];
	return ypos[round( random(0, xpos.length-1)) ]; 
};





//Blue Rondo by Colin Sebestyen
//Credit to S. Neil Fujita, and Dave Brubeck Quartet
//Thanks to Daniel Shiffman, Ryan Berkey
//Made with P5.js
//@colin_movecraft
