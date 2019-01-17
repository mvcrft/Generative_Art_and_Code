// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//
// Wavefrom example from http://p5js.org/reference/#/p5.FFT


var sound;
var fft;

function preload(){
    sound = loadSound("audio/real.mp3");
}

function setup(){
  createCanvas( windowWidth, windowHeight );
  sound.play();
  fft = new p5.FFT();
  fft.setInput(sound);
}

function draw(){
  background(0);

  var waveform = fft.waveform();
  print(waveform);

  stroke(255,0,0); // waveform is red
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 1, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
}


















