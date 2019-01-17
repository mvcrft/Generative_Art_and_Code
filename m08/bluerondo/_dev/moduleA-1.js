var one = 0; 
var two = 19;
var three = 37;
var four = 56;
var offsetStart = 0;
var timer = 0;
var rects = [];
var order = [0,1,2];
var globalR = 0;
var brubeck;


function preload(){
	brubeck = loadSound("assets/bluerondo.mp3");
}


function setup(){
createCanvas(windowWidth,windowHeight);

populate();
globalR = random(0,100);
brubeck.play();

};



function draw(){

offsetStart++
if (offsetStart<90){
	timer =0;
}


if (r>50){

for (var i = 0; i <4; i++) {
	rects[i].rotateMe(windowWidth,windowHeight);
	}
}

background(myColors.c1);

if (timer>one){
	rects[0].display(windowWidth,windowHeight);
};
if (timer>two){
	rects[0].display(windowWidth,windowHeight);
	rects[1].display(windowWidth,windowHeight);
};
if (timer>three){
	rects[0].display(windowWidth,windowHeight);
	rects[1].display(windowWidth,windowHeight);
	rects[2].display(windowWidth,windowHeight);
};
if (timer>four){
	rects[0].display(windowWidth,windowHeight);
	rects[1].display(windowWidth,windowHeight);
	rects[2].display(windowWidth,windowHeight);
	rects[3].display(windowWidth,windowHeight);
};


if (timer>83){
	timer = 0;
	rects = [];
	order = [0,1,2];
	globalR = random(0,100);
	populate();

}

timer++;


};





function populate(){
	// this creates the three "twoOne" type rects
for (i=0; i < 3 ;i++ ){
	shuffle(order,true); //shuffle the array to randomize the order of appearance
	var pos = order[ 2 - i ]; //return the last value of the array
	rects[i] = new animRect(0,0,0,0,pos,"twoOne", [0,0,0]); //adds the object
	order.pop(); //remove the last value of the array 
}

rects.push(new animRect(0,0,0,0,3,"oneThree",[0,0,0]));

for (var i = 0; i <4; i++) {
	rects[i].initialize(windowWidth,windowHeight);
}

}



function animRect(x, y, width, height, pos, type, color){
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.type = type;
	this.pos = pos;

	this.style = "solid";
	this.color = color;

	this.myTimer = 0;
}

animRect.prototype.initialize = function(width,height){
	//random numbers for style and color.
	r = random(0,100);
	r2 = random(0,100);

	//adjustable margins

	xMargin = width / 16;
	yMargin = height / 16;

	if (this.type == "twoOne"){

	// 2/3 of the canvas divided into thirds, which represents the "2" count of Blue Rondo Ala Turk

		switch(this.pos){
			case 0:
				this.x = xMargin;
				this.y = yMargin;
				this.width = ((width/3) * 2) / 3 - xMargin;
				this.height = height - yMargin * 2;
				break;
			case 1:
				this.x = ((width / 3) * 2 )/ 3 + xMargin;
				this.y = yMargin;
				this.width = ((width/3) * 2) / 3 - xMargin;
				this.height = height - yMargin * 2;
				break;
			case 2:
				this.x = (((width/3) * 2) / 3) * 2 + xMargin;
				this.y = yMargin;
				this.width = ((width/3) * 2) / 3 - xMargin;
				this.height = height - yMargin * 2;
				break;

			default:
				break;
		}

	} else if (this.type == "oneThree"){
		//Here's the canvas divided in third, which represents the "3" count.
		this.x = ((width / 3) * 2 ) + xMargin; 
		this.y = yMargin;
		this.width = (width / 3) - xMargin*2 ;
		this.height = height - yMargin * 2;
	}

	//let's also set the dotted style. 80% chance of solid lines
	if (r>20){
		this.style = "solid";
	} else {
		this.style = "dotted";
	}

	//even distribution, weighted a bit less towards orange. Might mess with these values a bit. Haven't decided if the colors should be mutually exclusive or not.
	if (r<=15){
		this.color = myColors.c2;
	} else if (r<=35){
		this.color = myColors.c3;
	} else if (r<=65){
		this.color = myColors.c4;
	} else if (r<=85){
		this.color = myColors.c5;
	} else if (r<=100){
		this.color = myColors.c6;
	} 



}


animRect.prototype.rotateMe = function(width,height){

//just reverse all the ratios for a 90 degree rotation

	xMargin = width / 16;
	yMargin = height / 16;

	if (this.type == "twoOne"){

	// 2/3 of the canvas divided into thirds, which represents the "2" count of Blue Rondo Ala Turk

		switch(this.pos){
			case 0:
				this.x = xMargin;
				this.y = yMargin;
				this.width = width - xMargin * 2;
				this.height = ((height/3) * 2) / 3 - yMargin;
				break;
			case 1:
				this.x = xMargin;
				this.y =  ((height / 3) * 2 )/ 3 + yMargin;
				this.width =  width - xMargin * 2;
				this.height = ((height/3) * 2) / 3 - yMargin;
				break;
			case 2:
				this.x = xMargin;
				this.y = (((height/3) * 2) / 3) * 2 + yMargin;
				this.width =  width - xMargin * 2;
				this.height = ((height/3) * 2) / 3 - yMargin;
				break;

			default:
				break;
		}

	} else if (this.type == "oneThree"){
		//Here's the canvas divided in third, which represents the "3" count.
		this.x = xMargin;
		this.y = ((height / 3) * 2 ) + yMargin; 
		this.width =  width - xMargin * 2;
		this.height = (height / 3) - yMargin*2 ;
	}

}


animRect.prototype.display = function(width, height){

	stkWt = width + height / 2;
	//building the boxes with lines
	strokeWeight(stkWt/128);
	stroke(this.color);

	this.myTimer++; 

	if (this.style == "dotted"){
		drawingContext.setLineDash([stkWt/32,stkWt/32]);
	} else {
		drawingContext.setLineDash([0]);
	}

	drawingContext.shadowOffsetX = stkWt/32;
	drawingContext.shadowOffsetY = stkWt/32;
	drawingContext.shadowBlur = 0;
	drawingContext.shadowColor = rgb2hex(myColors.c7);

	if (this.myTimer>8){
	line(this.x + this.width, this.y, this.x, this.y);
	line(this.x,this.y, this.x, this.y + this.height);
	line(this.x, this.y + this.height, this.x + this.width, this.y + this.height);
	line(this.x + this.width, this.y + this.height, this.x + this.width, this.y);
	} else if (this.myTimer > 4){	
	line(this.x,this.y, this.x, this.y + this.height);
	line(this.x, this.y + this.height, this.x + this.width, this.y + this.height);
	line(this.x + this.width, this.y + this.height, this.x + this.width, this.y);
	} else if (this.myTimer > 2){ 
	line(this.x, this.y + this.height, this.x + this.width, this.y + this.height);
	line(this.x + this.width, this.y + this.height, this.x + this.width, this.y);
	} else if (this.myTimer >0){
	line(this.x + this.width, this.y + this.height, this.x + this.width, this.y);
	}



}




//Blue Rondo by Colin Sebestyen
//Credit to S. Neil Fujita, and Dave Brubeck Quartet
//Thanks to Daniel Shiffman, Ryan Berkey
//Made with P5.js
//@colin_movecraft
