//oscillator
var osc;
//array with the gesture coordinates
var points;
//the "playhead" for reproduction
var index;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //points is an array
  points = [];
  index = 0;
  
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();
}

function draw() {
  background("#eee2b2");
  
  if(mouseIsPressed)
    {
    var f = map(mouseY, 0, height, 2000, 180);
    osc.freq(f);
    //increase the volume of low frequencies
    var v = map(mouseY, 0, height, 0.5, 1);
    osc.amp(v);
    
    //createVector creates an object with properties x and y
    var point = createVector(mouseX, mouseY);
    points.push(point);
    }
else if(index<points.length) //reproduce the sound
  {
  var f = map(points[index].y, 0, height, 2000, 180);
  osc.freq(f);
  //increase the volume of low frequencies
  var v = map(points[index].y, 0, height, 0.5, 1);
  osc.amp(v);
  
  //draw point
  fill("#eb4d7e");
  noStroke();
  ellipse(points[index].x, points[index].y, 30, 30);
  
  //advance the playhead
  index++;
  
  //if end is reached restart
  if(index==points.length)
    index = 0;
  }

}

function mousePressed() {
  osc.amp(0.5, 0.05);
  
  //empty the array
  points = [];
  index = 0;
}

function mouseReleased() {
  osc.amp(0, 0.05);
}

