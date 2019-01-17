//global variables

//the song
var tune;

var fft;

//visual stuff
var bgColor;

//run before start
function preload() {
    tune = loadSound('audio/closeYourEyes.mp3');
    
    //prepare the fft analysis (smoothing, sample) 
    //smoothing: 0-1
    //sample: Must be a power of two between 16 and 1024
    fft = new p5.FFT(0.8, 16);
}

//run once
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  tune.setVolume(0.5);
  tune.play();  
  
  //(time in second, name of the function, parameter)
  tune.addCue(6.042, cue, "bassDrop" );
  tune.addCue(12.031, cue, "scratch" );
  //you can add and cleas cues automatically
  //http://p5js.org/reference/#/p5.SoundFile
  
  bgColor = color(255, 204, 0, 30);
}

//run continuously
function draw() {
  
  
    
  //fft transform
  var spectrum = fft.analyze(); 
  
  background(bgColor);
  
  //visualization
  noStroke();
  
  //find an interesting threshold
  if(spectrum[15] > 60)
    {
    rectMode(CENTER);
    fill(255, 100, 0);
    
    var h = map(spectrum[15], 0, 255, 2, 20);
    rect(width/2, height/2, width, h);
    }
    
  
  var size = map(spectrum[4], 0, 255, 0, height);
  fill(255, 255, 255);
  
  ellipse(width/2, height/2, size,size);
  
}

function cue(id) {
  
  if(id == "bassDrop") {
  bgColor = color(0,0,0,30);
  }
  
  if(id == "scratch") {
  fill(255,255,255);
  rect(0, 0, width, height);
  }
  
}
