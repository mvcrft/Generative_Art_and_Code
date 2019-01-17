/*Animation Composition A, variation 1

Divide the space into thirds, either horizontally or vertically. The first 2/3 should get divided into thirds again, with rectangles representing the 2 counts.

Fill the last 1/3 with a larger rectangle, visualizing the proportions of the 3 count.

*/

function CompA1(x,y,width,height,myTimer){
//module params
	this.width = width;
	this.height = height;
	this.timer = myTimer;
	this.x = x;
	this.y = y;

//comp params
	this.rects = [];
	this.order = [0,1,2];
	this.globalR = 0;

};


CompA1.prototype.init = function(){
	// this creates the three "twoOne" type this.rects
for (i=0; i < 3; i++ ){
	shuffle(this.order,true); //shuffle the array to randomize the this.order of appearance
	var pos = this.order[ 2 - i ]; //return the last value of the array
	this.rects[i] = new animRect(0,0,0,0,pos,"twoOne", [0,0,0]); //adds the object
	this.order.pop(); //remove the last value of the array 
	}

this.rects.push(new animRect(0,0,0,0,3,"oneThree",[0,0,0]));

for (var i = 0; i <4; i++) {
	this.rects[i].initialize(this.x, this.y, this.width,this.height);
	}

	//rotate them 50% of the time

	this.globalR = random(0,100);
if (this.globalR>50){
	for (var i = 0; i <4; i++) {
		this.rects[i].rotateMe(this.x, this.y, this.width,this.height);
		}
	}
}


CompA1.prototype.go = function(x,y,w,h){

	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;


	if (this.timer>one){
		this.rects[0].display(this.width,this.height);
	};

	if (this.timer>two){
		this.rects[0].display(this.width,this.height);
		this.rects[1].display(this.width,this.height);
	};

	if (this.timer>three){
		this.rects[0].display(this.width,this.height);
		this.rects[1].display(this.width,this.height);
		this.rects[2].display(this.width,this.height);
	};

	if (this.timer>four){
		this.rects[0].display(this.width,this.height);
		this.rects[1].display(this.width,this.height);
		this.rects[2].display(this.width,this.height);
		this.rects[3].display(this.width,this.height);
	};
};

//here's the rect class
function animRect(x, y, width, height, pos, type, color){
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.type = type;
	this.pos = pos;

	this.style = "solid";
	this.colorId = "c1";
	this.color = color;

	this.myTimer = 0;
}

animRect.prototype.initialize = function(x,y,width,height){
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
				this.x = xMargin + x;
				this.y = yMargin + y;
				this.width = ((width/3) * 2) / 3 - xMargin;
				this.height = height - yMargin * 2;
				break;
			case 1:
				this.x = ((width / 3) * 2 )/ 3 + xMargin + x;
				this.y = yMargin + y;
				this.width = ((width/3) * 2) / 3 - xMargin;
				this.height = height - yMargin * 2;
				break;
			case 2:
				this.x = (((width/3) * 2) / 3) * 2 + xMargin + x;
				this.y = yMargin + y;
				this.width = ((width/3) * 2) / 3 - xMargin;
				this.height = height - yMargin * 2;
				break;

			default:
				break;
		}

	} else if (this.type == "oneThree"){
		//Here's the canvas divided in third, which represents the "3" count.
		this.x = ((width / 3) * 2 ) + xMargin + x; 
		this.y = yMargin + y;
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
		this.colorID = 2;
		this.color = myColors.c2;
	} else if (r<=35){
		this.colorID = 3;
		this.color = myColors.c3;
	} else if (r<=65){
		this.colorID = 4;
		this.color = myColors.c4;
	} else if (r<=85){
		this.colorID = 5;
		this.color = myColors.c5;
	} else if (r<=100){
		this.colorID = 6;
		this.color = myColors.c6;
	} 

	this.myTimer = 0;

}


animRect.prototype.rotateMe = function(x,y,width,height){

//just reverse all the ratios for a 90 degree rotation

	xMargin = width / 16;
	yMargin = height / 16;

	if (this.type == "twoOne"){

	// 2/3 of the canvas divided into thirds, which represents the "2" count of Blue Rondo Ala Turk

		switch(this.pos){
			case 0:
				this.x = xMargin + x;
				this.y = yMargin + y;
				this.width = width - xMargin * 2;
				this.height = ((height/3) * 2) / 3 - yMargin;
				break;
			case 1:
				this.x = xMargin + x;
				this.y =  ((height / 3) * 2 )/ 3 + yMargin + y;
				this.width =  width - xMargin * 2;
				this.height = ((height/3) * 2) / 3 - yMargin;
				break;
			case 2:
				this.x = xMargin + x;
				this.y = (((height/3) * 2) / 3) * 2 + yMargin + y;
				this.width =  width - xMargin * 2;
				this.height = ((height/3) * 2) / 3 - yMargin;
				break;

			default:
				break;
		}

	} else if (this.type == "oneThree"){
		//Here's the canvas divided in third, which represents the "3" count.
		this.x = xMargin + x
		this.y = ((height / 3) * 2 ) + yMargin + y;
		this.width =  width - xMargin * 2;
		this.height = (height / 3) - yMargin*2 ;
	}

}


animRect.prototype.display = function(width, height){


	stkWt = width + height / 2;
	//building the boxes with lines
	strokeWeight(stkWt/200);

	stroke(assignColors(this.colorID));

	this.myTimer++; 

	if (this.style == "dotted"){
		drawingContext.setLineDash([stkWt/32,stkWt/32]);
	} else {
		//drawingContext.setLineDash();
		drawingContext.setLineDash([]);
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


