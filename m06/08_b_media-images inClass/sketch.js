
function setup(){
	createCanvas(windowWidth,windowHeight);
	background(200,170,10);

};



//here's my flip function. It just randomly returns a value of -1 or 1.
function flip(){
	var r = random();
	if (r>.5){
		return -1;
	} else {
		return 1;
	}
}
