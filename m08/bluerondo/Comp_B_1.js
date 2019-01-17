/* Animation Composition B, variation 1

Divide the 3 count into 3 rectangles and repeat 3 times. 
Add in variations on transparency fills, numeral labels, & dots.

*/


function CompB1(x,y,width,height,myTimer){
//modules paramaters
	this.width = width;
	this.height = height;
	this.timer = myTimer;
	this.x = x;
	this.y = y;

//comp paramaters
this.colorIDs = [2,3,4,5,6];

shuffle(this.colorIDs,true);


this.parallelogram1 = new Parallelogram(this.x,this.y,this.width,this.height,this.colorIDs);
this.parallelogram2 = new Parallelogram(this.x,this.y,this.width,this.height,this.colorIDs);
this.parallelogram3 = new Parallelogram(this.x,this.y,this.width,this.height,this.colorIDs);

this.xSlide1 = 35;
this.xSlide2 = 45;
this.xSlide3 = 37;


};

CompB1.prototype.init = function(){
}

CompB1.prototype.go = function(){

this.show1 = function(){
push();
translate((this.x * 3) - (this.xSlide1/480 * this.width) - cover.x ,(100/480 * this.height));
scale(-1,1);
var t = this.timer - threeOne;

this.xSlide1 = drawLines(25,65,6,t);

this.parallelogram1.animateMe(t);
this.parallelogram1.show();
pop();

}

this.show2 = function(){
push();


translate((this.xSlide2/480 * this.width),(192/480 * this.height));
var t = this.timer - threeTwo;


this.xSlide2 = drawLines(35,75,6,t);

this.parallelogram2.animateMe(t);
this.parallelogram2.show();
pop();	

};

this.show3 = function(){

push();
translate(this.x*3 - (this.xSlide3/480 * this.width) - cover.x,(282/480 * this.height));
scale(-1,1);
var t = this.timer - threeThree;

this.xSlide3 = drawLines(27,67,6,t);

this.parallelogram3.animateMe(t);
this.parallelogram3.show();
pop();
	
};


//show the paralelograms
if (this.timer>=threeThree){
this.show3();
this.show2();
this.show1();

}else if (this.timer>=threeTwo) {
this.show2();
this.show1();

}else if (this.timer>=threeOne+1){
this.show1();
}

}



// //Either Dots or Numeral Labels
function Parallelogram(x,y,width,height,colorIDs ){

this.color1 = colorIDs[0];
this.color2 = colorIDs[1];
this.color3 = colorIDs[2];
this.color4 = colorIDs[3];

this.width = width;
this.height = height;
this.x = x;
this.y = y;

//The Outline 

//line A

this.outlineAx1 = this.x + 0/480 * this.width;                  
this.outlineAy1 = this.y + 0/480 * this.height;

this.outlineAx2 = this.x + 0/480 * this.width;
this.outlineAy2 = this.y + 0/480 * this.height;

//line B

this.outlineBx2 = this.x + 240/480 * this.width;
this.outlineBy2 = this.y + 0/480 * this.height;

this.outlineBx3 = this.x + 240/480 * this.width;
this.outlineBy3 = this.y + 0/480 * this.height;

//line C

this.outlineCx3 = this.x + 340/480 * this.width;
this.outlineCy3 = this.y + 90/480 * this.height;

this.outlineCx4 = this.x + 340/480 * this.width;
this.outlineCy4 = this.y + 90/480 * this.height;

//line D

this.outlineDx4 = this.x + 100/480 * this.width;
this.outlineDy4 = this.y + 90/480 * this.height;

this.outlineDx5 = this.x + 100/480 * this.width;                
this.outlineDy5 = this.y + 90/480  * this.height;


//downline A

this.downlineAx1 = this.x + 80/480 * this.width;
this.downlineAy1 = this.y + 0/480 * this.height;
this.downlineAx2 = this.x + 80/480 * this.width;
this.downlineAy2 = this.y + 0/480 * this.height;

//downline B

this.downlineBx1 = this.x + 160/480 * this.width;
this.downlineBy1 = this.y + 0/480 * this.height;
this.downlineBx2 = this.x + 160/480 * this.width;
this.downlineBy2 = this.y + 0/480  * this.height;


//downline C

this.downlineCx1 = this.x + 240/480 * this.width; 
this.downlineCy1 = this.y + 0/480 * this.height;
this.downlineCx2 = this.x + 240/480 * this.width;
this.downlineCy2 = this.y + 0/480  * this.height;

//crosslineA

this.crossAx1 = this.x + 80/480 * this.width;
this.crossAy1 = this.y + 0/480 * this.height;
this.crossAx2 = this.x + 80/480 * this.width;
this.crossAy2 = this.y + 0/480  * this.height;

//crossline B

this.crossBx1 = this.x + 160/480 * this.width;
this.crossBy1 = this.y + 0/480 * this.height;
this.crossBx2 = this.x + 160/480 * this.width;
this.crossBy2 = this.y + 0/480  * this.height;

//fillshapeA


this.fillshapeAvertex1 = this.x + 160/480 * this.width ;
this.fillshapeAvertey1 = this.y + 0/480 * this.height;
this.fillshapeAvertex2 = this.x + 260/480 * this.width ;
this.fillshapeAvertey2 = this.y + 90/480  * this.height;
this.fillshapeAvertex3 = this.x + 160/480 * this.width ;
this.fillshapeAvertey3 = this.y + 90/480 * this.height ;

this.fillshapeAalpha = 0;


//fillshapeB

this.fillshapeBvertex1 = this.x + 0/480 * this.width;
this.fillshapeBvertey1 = this.y + 0/480 * this.height;
this.fillshapeBvertex2 = this.x + 80/480 * this.width ;
this.fillshapeBvertey2 = this.y + 0/480 * this.height;
this.fillshapeBvertex3 = this.x + 180/480 * this.width;
this.fillshapeBvertey3 = this.y + 90/480  * this.height;
this.fillshapeBvertex4 = this.x + 100/480 * this.width;
this.fillshapeBvertey4 = this.y + 90/480  * this.height;

this.fillshapeBalpha = 0;

//fillshapeC

this.fillshapeCvertex1 = this.x + 160/480 * this.width;
this.fillshapeCvertey1 = this.y + 0/480 * this.height;
this.fillshapeCvertex2 = this.x + 240/480  * this.width;
this.fillshapeCvertey2 = this.y + 0/480  * this.height;
this.fillshapeCvertex3 = this.x + 340/480  * this.width;
this.fillshapeCvertey3 = this.y + 90/480   * this.height;
this.fillshapeCvertex4 = this.x + 260/480  * this.width;
this.fillshapeCvertey4 = this.y + 90/480  * this.height;

this.fillshapeCalpha = 0;

}

Parallelogram.prototype.show = function(){

drawingContext.setLineDash([]);
drawingContext.shadowOffsetX = 0;
drawingContext.shadowOffsetY = 0;
sizeAvg = (width + height) / 2;
thick = sizeAvg/200;
thin = sizeAvg/300;

// //draw the downlines
strokeWeight(thin);
stroke(assignColors(this.color3));

line(this.downlineAx1,this.downlineAy1,this.downlineAx2,this.downlineAy2);
line(this.downlineBx1,this.downlineBy1,this.downlineBx2,this.downlineBy2);
line(this.downlineCx1,this.downlineCy1,this.downlineCx2,this.downlineCy2);


// //draw the crosslines
stroke(assignColors(this.color1));
line(this.crossAx1 ,this.crossAy1 , this.crossAx2 ,this.crossAy2 );
line(this.crossBx1 ,this.crossBy1 , this.crossBx2 ,this.crossBy2 );


// //draw the fillshapes

// //Fill shape A
noStroke();
fill(assignColors(this.color3)[0],assignColors(this.color3)[1],assignColors(this.color3)[2],this.fillshapeAalpha);

beginShape();
vertex(this.fillshapeAvertex1,this.fillshapeAvertey1);
vertex(this.fillshapeAvertex2,this.fillshapeAvertey2);
vertex(this.fillshapeAvertex3,this.fillshapeAvertey3);
endShape();

// //Fill shape B

fill(assignColors(this.color3)[0],assignColors(this.color3)[1],assignColors(this.color3)[2],this.fillshapeBalpha);

beginShape();
vertex(this.fillshapeBvertex1,this.fillshapeBvertey1);
vertex(this.fillshapeBvertex2,this.fillshapeBvertey2);
vertex(this.fillshapeBvertex3,this.fillshapeBvertey3);
vertex(this.fillshapeBvertex4,this.fillshapeBvertey4);
endShape();


// //Fill shape C
fill(assignColors(this.color2)[0],assignColors(this.color2)[1],assignColors(this.color2)[2],this.fillshapeCalpha);

beginShape();
vertex(this.fillshapeCvertex1,this.fillshapeCvertey1);
vertex(this.fillshapeCvertex2,this.fillshapeCvertey2);
vertex(this.fillshapeCvertex3,this.fillshapeCvertey3);
vertex(this.fillshapeCvertex4,this.fillshapeCvertey4);
endShape();


//draw the outline last
//draw the fourth line out of order

strokeWeight(thick);
stroke(assignColors(this.color1));

line(this.outlineAx1,this.outlineAy1,this.outlineAx2,this.outlineAy2);
line(this.outlineBx2,this.outlineBy2,this.outlineBx3,this.outlineBy3);

line(this.outlineDx4,this.outlineDy4,this.outlineDx5,this.outlineDy5);

line(this.outlineCx3,this.outlineCy3,this.outlineCx4,this.outlineCy4);


}



Parallelogram.prototype.animateMe = function(timer){
	
	var outlineOffset = 2;
	var outlineDuration = 3;

	var t = timer;
	var t1 = timer-outlineOffset;
	var t2 = timer-outlineOffset*2;
	var t3 = timer-outlineOffset*3;
	var t4 = timer-outlineOffset*4;
	var t5 = timer-outlineOffset*5;



//outlines

	this.outlineAx2 = drawLines(
		this.x + (0/480 * this.width),
		this.x + (240/480 * this.width),
		outlineDuration,t
		);

	this.outlineBx3 = drawLines(
		this.x + (240/480 * this.width),
		this.x + (340/480 * this.width),
		outlineDuration,t1
	);

	this.outlineBy3 = drawLines(
		this.y + (0/480  * this.height),
		this.y + (90/480 * this.height),
		outlineDuration,t1
	);

	this.outlineCx4 = drawLines(
		this.x + (340/480 * this.width),
		this.x + (100/480 * this.width),
		outlineDuration,t2
	);

	this.outlineDx5 = drawLines(
		this.x + (100/480 * this.width),
		this.x + (0/480 * this.width),
		outlineDuration,t3
	);

	this.outlineDy5 = drawLines(
		this.y + (90/480  * this.height),
		this.y + (0/480 * this.height),
		outlineDuration,t3
	);


//downlines

	this.downlineAy2 = drawLines(
		this.y + 0/480  * this.height,
		this.y + 70/480 * this.height,
		outlineDuration,t1
	);

	this.downlineBy2 = drawLines(
		this.y + 0/480  * this.height,
		this.y + 90/480  * this.height,
		outlineDuration,t2
	);

	this.downlineCy2 = drawLines(
		this.y + 0/480  * this.height,
		this.y + 90/480 * this.height,
		outlineDuration,t3
	);


//crossline

	this.crossAx2 = drawLines(
		this.x + 80/480 * this.width,
		this.x + 180/480 * this.width,
		outlineDuration,t2
	);

	this.crossAy2 = drawLines(
		this.y + 0/480 * this.height,
		this.y + 90/480  * this.height,
		outlineDuration,t2
	);

	this.crossBx2 = drawLines(
		this.x + 160/480 * this.width,
		this.x + 260/480 * this.width,
		outlineDuration,t3
	);

	this.crossBy2 = drawLines(
		this.y + 0/480 * this.height,
		this.y + 90/480  * this.height,
		outlineDuration,t3
	);

//fills

	this.fillshapeAalpha = drawLines(
		0,
		200,
		outlineDuration,t4
	);

	this.fillshapeBalpha = drawLines(
		0,
		100,
		outlineDuration,t4
	);

	this.fillshapeCalpha  = drawLines(
		0,
		100,
		outlineDuration,t5
	);

}

function drawLines(original,destination,duration,timer){
		t = timer;
		o = original;
		d = destination;
		c = d - o;
		dur = duration;
		if (t<=0){t=0};
		if (t>=dur){t=dur};
		return easeInOutQuart(t, o, c, dur);
	}

