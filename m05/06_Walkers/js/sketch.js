var w = [];
var w1;
var c;

//a color pallete

var myColors = [ [200,16,157,5], [209,200,20,5] ];
var someVals = [60,145,200];

function setup() {
createCanvas(1280, 384);
for (var i = 0; i < 1000; i++){
  w.push(new Walker(random(1,5),random(1,5),random(myColors)));
}

w1 = new Walker(5,5,50);

}

function draw() {

for (var j = 0; j < w.length; j++){
  w[j].adjustScale("OSCILLATE");
  w[j].walk();
  w[j].show();
}

c = frameCount; 
//saveCanvas(frameCount.toString(),"jpg");

}


function Walker(xSpd,ySpd,color){
  this.x = random(width);
  this.y = height/2
  this.xSpeed = xSpd;
  this.ySpeed = ySpd;
  this.color = color;
  this.size = 3;
}

Walker.prototype.show = function(){
  stroke(this.color);

  line(this.x,this.y,Math.sin(frameCount*.2)*width/2 + width/2 + Math.sin(frameCount*.02)*width/2,Math.cos(frameCount*.1)*height/2 + height/2);
  //noStroke();
  fill(255);
  strokeWeight(.5);

  stroke(this.color);
  ellipse(this.x,this.y,this.size,this.size);
}

Walker.prototype.adjustScale = function(state) {

  switch (state){
    case "OSCILLATE":
      this.size += (Math.sin(frameCount));
    break;
    default:
    break;
  }
}


Walker.prototype.walk = function(){
  r = random();
  r2 = random();

  if (r>.5){
    vx = this.xSpeed;
  }else{
    vx = -this.xSpeed;
  }

  if (r2>.5){
    vy = this.ySpeed;
  }else{
    vy = -this.ySpeed;
  }

  this.x = this.x + vx;
  this.y = this.y + vy;
}

function mousePressed() {
  saveFrames("out", "png", 3, 24);
}

