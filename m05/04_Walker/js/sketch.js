
var w1;
var w2;



function setup() {
createCanvas(windowWidth, windowHeight);
w1 = new Walker(5,5,50);
w2 = new Walker(10,10,150);

}

function draw() {

w1.walk();
w1.show();

w2.walk();
w2.show();


}


function Walker(xSpd,ySpd,color){
  this.x = width/2;
  this.y = height/2
  this.xSpeed = xSpd;
  this.ySpeed = ySpd;
  this.color = color;
}

Walker.prototype.show = function(){
  noStroke();
  fill(this.color);
  ellipse(this.x,this.y,4,4);
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



