//Blue Rondo by Colin Evoy Sebestyen
//Credit to S. Neil Fujita, Dave Brubeck Quartet
//Many thanks to the teachings of Daniel Shiffman, Ryan Berkey
//Made with P5.js - http://www.p5js.org
//@colin_movecraft
//www.movecraft.com

//GLOBALS
var cycleNum = 1;
var one = 0; 
var two = 19;
var three = 37;
var four = 56;
var beat = 9;
var measure = 83;
var cycle = 332;

var section = 1;

var threeOne = 0;
var threeTwo = measure/3 ;
var threeThree = measure/3*2 ;


var timer = 0;

var brubeck;

var modules = [];
var comps = [];

var p;

var mute = true;
var mytimeout;


//cover dimensions
var cover = {
	width : 800,
	height : 800,
	x : 150,
	y : 100
}

function preload(){
	brubeck = loadSound("assets/bluerondo.mp3");
}


function setup(){

c = createCanvas(windowWidth,windowHeight);


addBrubeckCues();
updateCoverFrame();
populateModules(timer,1);
populateComps();
p = new p1(cover.x,cover.y,cover.width,cover.height);
p.init();
drawingContext.setLineDash([]);

//play the track
brubeck.play();
brubeck.setVolume(1.0)

};


function draw(){

background(myColors.c1);
//Updates
updateCoverFrame();

TWEEN.update();

updateTimer(timer,measure);

//update the comps with the modules internal timers
//need to find a way to tweak the timer

//here's the section switching from the cues
switch(section){
	case 1:
	for (i = 0; i < 4; i++){
		comps[i].timer = modules[i].timer;
		//animate the populated Comps
		comps[i].go(cover.x,cover.y,cover.width,cover.height);
	}
	displayModules();
	break;
	case 2:
		//test
		comps = [];
		p.go();
		
	break;
}

timer++;

//draw the cover frame
drawCoverFrame();

};

//Main timing cues
function addBrubeckCues(){

//First section
brubeck.addCue(5.46, cue, "nineeight" );	//A
brubeck.addCue(10.9166, cue, "nineeight" ); //A
brubeck.addCue(16.6666, cue, "nineeight" ); //B
brubeck.addCue(22.25, cue, "nineeight" ); //B
brubeck.addCue(27.8833, cue, "nineeight" ); //C
brubeck.addCue(33.4666, cue, "nineeight" ); //C
brubeck.addCue(39.0333, cue, "nineeight" ); //D
brubeck.addCue(44.45, cue, "nineeight" ); //D
brubeck.addCue(50.1666, cue, "nineeight" ); //E
brubeck.addCue(55.6333, cue, "nineeight" ); //E
brubeck.addCue(61.4833, cue, "nineeight" ); //F
brubeck.addCue(67.1, cue, "nineeight" ); //F
brubeck.addCue(72.9166, cue, "nineeight" ); //F
brubeck.addCue(78.6, cue, "nineeight" ); //F
brubeck.addCue(84.2666, cue, "nineeight" ); //G
brubeck.addCue(90, cue, "nineeight" ); //G
brubeck.addCue(95.55, cue, "nineeight" ); //G //six bars!
brubeck.addCue(105.2, cue, "nineeight" ); //G

//Trade fours
brubeck.addCue(112.4833, cue, "fourfour" ); //4/4
brubeck.addCue(116.5166, cue, "nineeight" ); //9/8
brubeck.addCue(119.4666, cue, "fourfour" ); //4/4
brubeck.addCue(123.4666, cue, "nineeight" ); //9/8
brubeck.addCue(126.4166, cue, "fourfour" ); //4/4
brubeck.addCue(130.3, cue, "nineeight" ); //9/8

//Paul's solo
brubeck.addCue(133.2666, cue, "fourfour" ); //
brubeck.addCue(157.3833, cue, "fourfour" ); //
brubeck.addCue(181.4666, cue, "fourfour" ); //
brubeck.addCue(206.3833, cue, "fourfour" ); //

//Dave's solo
brubeck.addCue(231.95, cue, "fourfour" ); //
brubeck.addCue(257.5166, cue, "fourfour" ); //
brubeck.addCue(283.4666, cue, "fourfour" ); //
brubeck.addCue(309.1, cue, "fourfour" ); //

//Trade Fours
brubeck.addCue(334.6833, cue, "fourfour" ); //4/4
brubeck.addCue(338.95, cue, "nineeight" ); //9/8
brubeck.addCue(341.8666, cue, "fourfour" ); //4/4
brubeck.addCue(346.05, cue, "nineeight" ); //9/8
brubeck.addCue(348.9833, cue, "fourfour" ); //4/4
brubeck.addCue(353.15, cue, "nineeight" ); //9/8

//End Section
brubeck.addCue(358.9, cue, "nineeight" );	
brubeck.addCue(364.6833, cue, "nineeight" ); 
brubeck.addCue(370.4, cue, "nineeight" ); 
brubeck.addCue(376.0666, cue, "nineeight" ); 
brubeck.addCue(381.75, cue, "nineeight" ); 
brubeck.addCue(386.3666, cue, "nineeight" ); 
brubeck.addCue(391.35, cue, "nineeight" ); 

//Coda
brubeck.addCue(396.5333, cue, "nineeight" ); 

//Completed
brubeck.addCue(400.9, cue, "nineeight" ); 
}


function cue(id){

	if (id == "nineeight"){
		restartCount();
		section = 1;
		console.log("nineeight");
	}

	if (id == "fourfour"){
		restartCount();
		section = 2;
		console.log("swingtime");
	}

}






//Cover Frame functions

function drawCoverFrame(){
drawingContext.setLineDash([]);
drawingContext.shadowOffsetX = 0;
drawingContext.shadowOffsetY = 0;
var s = 10;
strokeWeight(10);
stroke(myColors.c3);
noFill();
rect(cover.x -s/2,cover.y-s/2,cover.width+s,cover.height+s);
}


function updateCoverFrame(){
coverSize = ( (width+height) /2 ) *.75;
cover.x = ( width - coverSize ) /2;
cover.y  = 50;
cover.width = coverSize;
cover.height = coverSize;
}




//Assign Comps to modules

function populateComps(){

for (i = 0; i < 4; i++){

//populate the comps with comp objects
	if (modules[i].type == "A"){
	var rnd = random();
	if (rnd >.5){
	comps.push( new CompA1( modules[i].x, modules[i].y, modules[i].width, modules[i].height, modules[i].timer ) );
	}else{
	comps.push( new CompA2( modules[i].x, modules[i].y, modules[i].width, modules[i].height, modules[i].timer ) );
	}
}else if (modules[i].type == "B"){
	var rnd2 = random();
	if (rnd2 >.5){
	comps.push( new CompB1( modules[i].x, modules[i].y, modules[i].width, modules[i].height, modules[i].timer ) );
	}else{
	comps.push( new CompB2( modules[i].x, modules[i].y, modules[i].width, modules[i].height, modules[i].timer ) );
	}
}
}

for (j = 0; j < 4; j++){
	comps[j].init();

}

}

//Timer and count controls. Call restart count after each section.

function restartCount(){

//clear the arrays
for (i = 0; i <= modules.length-1; i++){
	comps = [];
	modules = [];
}
//clear any dashed lines
drawingContext.setLineDash([]);

//populate the modules
populateModules(0,1);
//Assign Comps to the modules
populateComps();
//reset time
timer = 0;
}


//Logic to parse out the timing of each measure to the modules
function updateTimer(t, measure){
	for (i = 0; i <= modules.length-1; i++){

	offset = measure * i;
	time = t - offset;
	if (time < 0){
		time = 0;
	}else if (time > measure){
		time = measure;
	}

	modules[i].timer = time;
	}
}

//Module functions. Display and populate

function displayModules(){
	for (i = 0; i <= modules.length-1; i++){
		if (modules[i].timer > 0){
			modules[i].display();
		}
	}
}

function populateModules(timer,comp){

	//Populate the As
	for (i = 1; i <=4; i++){
		switch(i){
			case 1:
				x = cover.x;
				y = cover.y;
			break;
			case 2:
				x = (cover.width/2)+cover.x;
				y = cover.y;
			break;
			case 3:
				x = cover.x;
				y = (cover.height/2)+cover.y;
			break;
			case 4:
				x=(cover.width/2)+cover.x;
				y=(cover.height/2)+cover.y;
			break;
			default:
				x=cover.x;
				y=cover.y;
			break;
		}

		w = cover.width/2;
		h = cover.height/2;

		if (i<4){type = "A"}else{type="B"};
		
		m = new Module(x,y,w,h,timer,type);

		modules.push(m);
	}
}



//Module object class

function Module(x,y,w,h,timer,type){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.timer = timer;
	this.comp = null;
	this.type = type;

} 

//A method just for testing display
Module.prototype.display = function(color){
	noStroke();
	fill(10,10,10,0);
	rect(this.x,this.y,this.width,this.height);
	text(this.timer);
}


///SOUND////

//Sound Mute
function mousePressed(){
	if (mute){brubeck.setVolume(0.0)};
	if (!mute){brubeck.setVolume(1.0)};
	mute = !mute;

}



//This will need update functions to all of the modules to update content

function windowResized(){

resizeCanvas(windowWidth,windowHeight);

}




//A few Utils

function framesToMillis(frames){
	fps = 60;
	return map(frames,0,fps,0,1000);
}

function millisToFrames(millis){
	fps = 60;
	return map(millis,0,1000,0,fps);
}

function choice(){
	return random(0,1);
};



