//p5 globals
var motionSickness;
var samples = 1024;

function preload(){
motionSickness = loadSound("assets/motion.mp3");
}


function setup(){
createCanvas(windowWidth,windowHeight);
background(0);
}

function draw(){
//we will need a for loop to draw the rects
noFill();
rectMode(CENTER);
rect(50,50,50,50);


};


