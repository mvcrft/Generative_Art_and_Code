myWidth = window.innerWidth;
myHeight = window.innerHeight;
bArray = []
colNum = 8;
rowNum = 8;
padding = 100;
var click = 0;

var snowbird;


for (i = 0; i < colNum; i++){	
	xPos = ( ( ( (myWidth - padding) / colNum * i)  ) + ( padding / 2) );
	for(j = 0; j < rowNum; j++){
		yPos = ( ( ( (myHeight - padding) / rowNum * j)  ) + ( padding / 2) );	
		bArray.push(new Ball(xPos,yPos,50))
	}
}

function preload(){
snowbird = loadSound("assets/snowbird.mp3");


}

function setup(){
	pixelDensity(3.0);
	rectMode(CENTER);
	myCanvas = createCanvas(windowWidth,windowHeight);
	snowbird.play();
	fft = new p5.FFT(0.8,colNum*rowNum);

};

xoff = 0.0;

function draw(){
	//create a spectrum
	spectrum = fft.analyze();

	background(15,35,64);
	blendMode(ADD);

	for (i=0;i<bArray.length;i++){
		//set the colors based on row/col
		r = map(i,0,bArray.length,0,2);
		c = map(i,0,bArray.length,2,0);
		//display and scale
		bArray[i].display(r,c);
		bArray[i].scale(spectrum[i]);

		//error correction
		next = i +1;
		if (next >= bArray.length){
			next = i;
		}

		//line style
		strokeWeight(1);
		stroke(222);
		//draw the lines
		if(spectrum[i]<100){
		line(bArray[i].x,bArray[i].y,bArray[next].x,bArray[next].y);
		}
		//wander the balls and wrap them
		bArray[i].wander(i,spectrum[i]);
		bArray[i].edgeWrap(myWidth,myHeight);
		//test for click
		if (click == 1){
			bArray[i].flipShape();
		}
	}
	blendMode(REPLACE);
	click = 0
};

function Ball(x,y,radius){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.shape = "ELLIPSE";
}

Ball.prototype.display = function(row,col){
	fill(this.radius*row*2,this.radius*col*1.5,this.radius*row*2,this.radius*2.5);
	noStroke();
	if (this.shape == "RECT"){
	rect(this.x,this.y,this.radius,this.radius);
	}else if (this.shape == "ELLIPSE"){
	ellipse(this.x,this.y,this.radius,this.radius);
}
}

Ball.prototype.scale = function(spectrum){
	d = dist(this.x,this.y,mouseX,mouseY);
	constrain(d,0,50);
	audioScale = map(spectrum,0,255,10,100); 
	distScale = map(d,0,500,100,0);
	this.radius =  audioScale + distScale;
}

Ball.prototype.wander = function(s,amt){
	n = noise(xoff);
	amt = map(amt,255,0,-3,3)
	n = map(n,0,1,0,amt);
	noiseSeed(s);
	this.x +=n;
	xoff += .0001;
	this.y +=n;
}

Ball.prototype.edgeWrap = function(width,height){

if (this.x >= width-this.radius/2){
	this.x = 0;
}else if ( this.x <=0+ this.radius/2){
	this.x = width-this.radius/2
}else if ( this.y >= height-this.radius/2){
	this.y = 0;
}else if ( this.y  <=0+ this.radius/2){
	this.x = width-this.radius/2;
}

}

Ball.prototype.flipShape = function(){
	if (this.shape == "RECT"){
		this.shape = "ELLIPSE";
	} else if (this.shape == "ELLIPSE")
		this.shape = "RECT";
}



function mousePressed(){
	click = 1;
}

window.onresize = function(){
	myCanvas.size(windowWidth, windowHeight);
}

