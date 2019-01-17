// Academy of Art University
// WNM 498 Generative Art & Creative Code


var myCount = 23;
var scaleFactor = 1;
var myWidth = 2400 / scaleFactor;
var myHeight = 3600 / scaleFactor;
var margin = ( (myWidth+myHeight) / 2 )    / 3;


function setup(){
createCanvas(myWidth,myHeight);

	background(205,205,205);

	xVal = (myWidth - margin) / myCount 
	yVal = (myHeight - margin) / myCount

	translate(margin/2,margin/2);

	for (i = 0 ; i < myCount; i ++){
		for(j = 0; j <myCount; j++){
		stroke(random(50,250));
		strokeWeight(random(xVal/12));
		noFill();
		ellipse(xVal*i,yVal*j,xVal - random(xVal/4),xVal -random(xVal/4));
			}
	}
	stroke(255,255,80);
	ellipse(xVal*4,yVal*4,xVal,xVal);

}




function draw() {
}

function mousePressed(){
	saveCanvas("poster","jpg");
}