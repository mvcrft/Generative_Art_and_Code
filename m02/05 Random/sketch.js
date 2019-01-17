function setup(){
createCanvas(1920,1080);	
background(250,250,100);

};

function draw(){

fill(255);
r = random(-100,100);
ellipse(mouseX+r,mouseY+r,r,r);
	

};