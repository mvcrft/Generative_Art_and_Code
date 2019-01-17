var balls = [];

function Ball(x,y,xSpeed,ySpeed,radius,fill){
  this.x = x;
  this.y = y;
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  this.radius = radius;
  this.fill = fill;
}

Ball.prototype.update = function(){
 if (this.x >= width || this.x <= 0){
          this.xSpeed *= -1;
        };
        if (this.y >= height || this.y <= 0){
          this.ySpeed *= -1;
        };
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
}

Ball.prototype.display = function(){
  fill(this.myFill);
  strokeWeight(3);
  stroke(255,0,0);
  ellipse(this.x,this.y,this.radius,this.radius);
}
