/*Animation Composition A, variation 2

Divide the space into a grid with margins. Move two dots alternating horizontally and vertically to random locations on the grid in time to the first three 2 counts. Trace their paths in time and space.

On the final 3 count, discontinue tracing, and randomly move both dots to 1 of 9 evenly divided locations and unite their form.

*/

function CompA2(x,y,width,height,timer){

//module params
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.timer = timer;

//comp params
this.colorVals = [myColors.c3,myColors.c4,myColors.c5];
this.colorIDs = [3,4,5];

//shuffle the colors to add a bit of variation
shuffle(this.colorVals,true);
shuffle(this.colorIDs,true);
this.dot1 = new Dot( assignColors(this.colorIDs[0]), this.colorIDs[0] );
this.dot2 = new Dot( assignColors(this.colorIDs[1]), this.colorIDs[1] );
this.positions = [];
this.keys = [];
this.finalXY = [];

}

CompA2.prototype.keyValues = function(one,two,three,four,five){
	this.keys =[one,two,three,four,five];
}

CompA2.prototype.posFinalXY = function(){
	xpos = [this.width*.25, this.width*.5, this.width*.75];
	ypos = [this.height*.25, this.height*.5, this.height*.75];
	this.finalXY = [ xpos[ round( random(0, xpos.length-1))] + this.x,  ypos[ round( random(0, ypos.length-1)) ]+this.y ]; 

};

CompA2.prototype.gridValues = function(){

xMargin = this.width / 16;
yMargin = this.height / 16;

x = [];
y = [];
//populate the arrays with the grid values
for (i = 0; i <9; i++){
		x.push((i*this.width/16)+xMargin*2 + this.x);
		y.push((i*this.height/16)+yMargin*2 + this.y);
}
//randomize them
shuffle(x,true);
shuffle(y,true);

//populate the global array with those values
for (i = 0 ; i < 9 ; i++){
	this.positions.push([x[i],y[i]]);
};


}

CompA2.prototype.drawBorder = function(){
	//draw the border
	noFill();
	rectMode(CORNER);
	sizeAvg = (this.width + this.height /2)
	strokeWeight(sizeAvg/32);
	stroke( assignColors(this.colorIDs[2]) );

	
	drawingContext.shadowOffsetX = sizeAvg/32;
	drawingContext.shadowOffsetY = sizeAvg/32;

	rect(this.x+sizeAvg/64,this.y+sizeAvg/64,this.width - sizeAvg/32,this.height - sizeAvg/32);

};

CompA2.prototype.go = function(){
drawingContext.setLineDash([]);

if (this.timer == 1 ){

this.dot1.animate1();
this.dot2.animate2();

};

if (this.timer > 1 ){

this.dot1.lineDraw(this.width,this.height,this.timer);
this.dot2.lineDraw(this.width,this.height,this.timer);

this.dot2.display2(this.width,this.height,this.timer);
this.dot1.display1(this.width,this.height,this.timer);

this.drawBorder();


};


}

CompA2.prototype.init = function(){

//the random values generated with RandomX and RandomY should be integrated into gridValues and keyValues

xpos = [this.width*.25 , this.width*.5, this.width*.75];
ypos = [this.height*.25, this.height*.5 , this.height*.75];
finalXY = [ xpos[ round( random(0, xpos.length-1))],  ypos[ round( random(0, ypos.length-1)) ] ]; 

// finalXY = this.finalXY();
this.gridValues();
this.posFinalXY();
this.keyValues(one,two,three,four,beat);

//make sure these values come from the modules
this.dot1.initialize(this, this.width, this.height, this.keys, this.finalXY);
this.dot2.initialize(this, this.width , this.height, this.keys, this.finalXY);


}



//here's the dot class

function Dot(color, colorID){
	this.x = 90;
	this.y = 90;
	this.positionx = 90;
	this.positiony = 90;
	this.targetposition1x = 50;
	this.targetposition1y = 50;
	this.targetposition2x = 50;
	this.targetposition2y = 50;
	this.targetposition3x = 50;
	this.targetposition4y = 50;
	this.finalX = 0;
	this.finalY = 0;
	this.color = color;
	this.colorID = colorID;
	this.myWidth = 50;
	this.myHeight = 50;
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


Dot.prototype.initialize = function(a,width,height,keys,finalXY){

//assign the position values to the 4 a.positions

	myIndex = round(random(0,a.positions.length-1));
	this.positionx = a.positions[myIndex][0];
	this.positiony = a.positions[myIndex][1];
	this.x = a.positions[myIndex][0];
	this.y = a.positions[myIndex][1];
	a.positions.splice(myIndex,1);

	myIndex1 = round(random(0,a.positions.length-1));
	this.targetposition1x = a.positions[myIndex1][0];
	this.targetposition1y = a.positions[myIndex1][1];
	a.positions.splice(myIndex1,1);

	myIndex2 = round(random(0,a.positions.length-1));
	this.targetposition2x = a.positions[myIndex2][0];
	this.targetposition2y = a.positions[myIndex2][1];
	a.positions.splice(myIndex2,1);

	myIndex3 = round(random(0,a.positions.length-1));
	this.targetposition3x = a.positions[myIndex3][0];
	this.targetposition3y = a.positions[myIndex3][1];
	a.positions.splice(myIndex3,1);


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

	this.finalX = finalXY[0];
	this.finalY = finalXY[1];

}

Dot.prototype.display2 = function(width,height){

	sizeAvg = (width + height /2)
	
	drawingContext.shadowOffsetX = this.shadowDepth;
	drawingContext.shadowOffsetY = this.shadowDepth;
	drawingContext.shadowBlur = 0;
	drawingContext.shadowColor = rgb2hex(myColors.c7);

	strokeWeight(sizeAvg/128);	
	stroke( assignColors(this.colorID) );

	noStroke();

	fill( assignColors(this.colorID) );

	push();

	translate(this.positionx,this.positiony);
	//draw the BG circle
	fill(myColors.c1);

	ellipse(0, 0, this.myWidth, this.myHeight);
	//draw the animate circle
	fill( assignColors(this.colorID) );
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

	fill(assignColors(this.colorID));

	push();

	translate(this.positionx,this.positiony);

	fill(assignColors(this.colorID));
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
Dot.prototype.animate2 = function(){

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

		positionx: this.finalX,
		positiony: this.finalY,
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
Dot.prototype.animate1 = function(){

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

		positiony: this.finalY- h/1.5, 
		positionx: this.finalX+ w/1.5, 
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

Dot.prototype.lineDraw = function(width,height,timer){

	//style
	stroke(myColors.c3);
	sizeAvg = (width + height /2);
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 0;
	strokeWeight(sizeAvg/128);

//test for timing, subtract current value from target value from total to get draw-on effect.

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

