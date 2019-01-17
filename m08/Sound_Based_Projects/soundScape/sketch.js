
var layer1;
var layer2;
var layer3;
var layer4;

var animal1;
var animal2;
var animal3;

//run before start
function preload() {
  layer1 = loadSound('audio/autumn1.mp3');
  layer2 = loadSound('audio/autumn2.mp3');
  layer3 = loadSound('audio/autumn3.mp3');
  layer4 = loadSound('audio/autumn4.mp3');
  
  animal1 = loadSound('audio/animal1.mp3');
  animal2 = loadSound('audio/animal2.mp3');
  animal3 = loadSound('audio/animal3.mp3');
  
  animal1.setVolume(0.5);
  animal2.setVolume(0.5);
  animal3.setVolume(0.5);
}

//run once
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  layer1.loop();
  layer2.loop();
  layer3.loop();
  layer4.loop();
  
}

function draw() {
  //create some points
  var p1 = createVector(40, 10);
  var p2 = createVector(width-100, 300);
  var p3 = createVector(width-30, height-40);
  var p4 = createVector(340, height-30);
  
  //find the distances
  var d1 = dist(mouseX, mouseY, p1.x, p1.y);
  var d2 = dist(mouseX, mouseY, p2.x, p2.y);
  var d3 = dist(mouseX, mouseY, p3.x, p3.y);
  var d4 = dist(mouseX, mouseY, p4.x, p4.y);
  
  //find the volumes
  //100 is the max distance
  var v1 = map(d1, 0, width, 1, 0);
  v1 = constrain(v1, 0, 1);
  
  var v2 = map(d2, 0, width/2, 1, 0);
  v2 = constrain(v2, 0, 1);
  
  var v3 = map(d3, 0, width/3, 1, 0);
  v3 = constrain(v3, 0, 1);
  
  var v4 = map(d4, 0, width/1.5, 1, 0);
  v4 = constrain(v4, 0, 1);
  
  layer1.setVolume(v1);
  layer2.setVolume(v2);
  layer3.setVolume(v3);
  layer4.setVolume(v4);
  
  background(map(mouseX, 0,width,0,255), map(mouseY, 0,height,0,255),255);
  
  noStroke();
  fill(255,255,255);
  
  //draw the dots
  ellipse(p1.x, p1.y, 10, 10);
  ellipse(p2.x, p2.y, 10, 10);
  ellipse(p3.x, p3.y, 10, 10);
  ellipse(p4.x, p4.y, 10, 10);
}

function mousePressed() {
  
  //randomize between 1 and 3 (only integers)
  var randomId = floor(random(1,4));
  
  if(randomId==1) {
    animal1.play();
    }
    
  if(randomId==2) {
    animal2.play();
    }
    
  if(randomId==3) {
    animal3.play();
    }
}