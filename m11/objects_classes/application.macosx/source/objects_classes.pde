
Ball[] balls;
int count = 5000;

void setup(){
  
  size(500,500, P2D);
  background(0);
  balls = new Ball[count];
  
  for (int i = 0; i<=count-1;i++){
    balls[i] = new Ball(width/2,height/2);
  }
  noStroke();
};

void draw(){
  for (Ball b : balls){
    b.update();
    b.display();
  }
};


class Ball {
  float x;
  float y;
  float radius;
  
  Ball(float xPos, float yPos){
  x = xPos;
  y = yPos;
  radius = 2;
  }
  
  void update(){
  x += random(-10,10);
  y += random(-10,10);
  }
  
  void display(){
  ellipse(x,y,radius,radius);
  }
  
}