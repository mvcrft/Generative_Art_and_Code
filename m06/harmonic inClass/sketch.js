myWidth = window.innerWidth;
myHeight = window.innerHeight;
bArray = []
colNum = 12;
rowNum = 12;
padding = 100;

for (i = 0; i <= colNum; i++){	
	xPos = ( ( ( (myWidth - padding) / colNum * i)  ) + ( padding / 2) );
	for(j = 0; j <= rowNum; j++){
		yPos = ( ( ( (myHeight - padding) / rowNum * j)  ) + ( padding / 2) );	
		bArray.push(new Orbit(xPos,yPos,75))
	}
}

function setup(){
	myCanvas = createCanvas(windowWidth,windowHeight);
	rate = createSlider("temp");
	radius = createSlider("radius");
	myCanvas.position(0,0);
	label1 = createP("Rate");
	label2 = createP("Radius");

	rate.position(20,50);
	radius.position(20,110);
	label1.position(20,10);
	label2.position(20,70);

	radius.value(50);
	rate.value(25);
	label1.style("color","#D3BB9A");
	label1.style("font-family","Roboto");
	label2.style("font-family","Roboto");
	label2.style("color","#D3BB9A");


};

xoff = 0.0;
counter = 0;

function draw(){
	background(63,76,74);
	for (i=0;i<bArray.length;i++){
		r = map(i,0,bArray.length,0,2);
		c = map(i,0,bArray.length,2,0);
		bArray[i].updateAngle(counter + i);
		bArray[i].display(r,c);
		bArray[i].scale(map(radius.value(),0,100,5,200));
	}
	
	rateVal = rate.value();
	counter += map(rateVal, 0, 100, .01, .15);

};

function Orbit(x,y,radius,rate){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.rate = rate;
	this.orbitx = 0;
	this.orbity = 0;
}

Orbit.prototype.display = function(row,col){
	noFill();
	stroke
	stroke(230,157,54,50);
	ellipse(this.x,this.y,this.radius,this.radius);
	noStroke();

	fill(240,100,90);
	ellipse(this.x+this.orbitx,this.y+this.orbity,10,10);
};

Orbit.prototype.updateAngle = function(angle){
	this.orbitx = Math.sin(angle)*this.radius/2;
	this.orbity = Math.cos(angle)*this.radius/2;

}

Orbit.prototype.scale = function(r){
	this.radius = r
}


window.onresize = function(){
	myCanvas.size(windowWidth, windowHeight);
}

