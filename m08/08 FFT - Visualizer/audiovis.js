//p5 globals
var motionSickness;
var move = 0;
var samples = 1024;
var toggle = true;

//load the music
function preload(){
motionSickness = loadSound("assets/motion.mp3");
}


function setup(){

//p5 setup
motionSickness.play();
createCanvas(windowWidth,windowHeight);

fft = new p5.FFT(0.8, samples);

background(0);

}



function draw(){

spectrum = fft.analyze();
//draw the circles

noFill();
rectMode(CENTER);
for (i = 0; i < spectrum.length; i ++){
		halfScreen = width/2;
		x = halfScreen + (halfScreen/spectrum.length * i);

		stroke(spectrum[i])
	if (toggle == true){ 
	rect(x,0+move,spectrum[i],spectrum[i]);
	rect(width-x,0+move,spectrum[i],spectrum[i]);
	}else{
	ellipse(x,0+move,spectrum[i],spectrum[i]);
	ellipse(width-x,0+move,spectrum[i],spectrum[i]);	
	}
}

if (move >= height+100){
	move = -100;
}


//update the counters

move += map(mouseX,0,width,0,20);


};


