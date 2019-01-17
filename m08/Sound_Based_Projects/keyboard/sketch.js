
//sound samples
var c2, e2, g1;

var bgColor;
var sustain;

function preload() {
  c2 = loadSound('audio/c2.wav');
  e2 = loadSound('audio/e2.wav');
  g1 = loadSound('audio/g1.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(255,255,255);
}

function draw() {
  background(bgColor);
  
  if(sustain>0)
    {
    fill("#e2ce8f");
    rectMode(CENTER);
    noStroke();
    rect(width/2, height/2, sustain*30,sustain*30);
    sustain--;
    }
}

function keyPressed() {
  
  
  
  if (key == "A") {
    c2.play();
    bgColor = color("#965374");
    sustain = 20;
  } 
  else if (key == "S") {
    e2.play();
    bgColor = color("#ec4e81");
    sustain = 20;
  }
  else if (key == "D") {
    g1.play();
    bgColor = color("#f18a81");
    sustain = 20;
  }
  
}
