Mover[] movers = new Mover[50];

void setup(){
  background(0);
  size(3840,768);
  for(int i= 0; i <movers.length;i++){
    movers[i] = new Mover(random(width),random(height),1,1);
  }
}

void draw(){
  //background(0);
  for(int i = 0; i <movers.length; i++){
  movers[i].update();
  movers[i].display();
  }
  fill(0,0,0,10);
  rect(0,0,width,height);
}

class Mover {
  PVector position;
  PVector velocity;
  PVector acceleration;
  float topSpeed;
  
  Mover(float x, float y, float vx,float vy){
  position = new PVector(x,y);
  velocity = new PVector(vx,vy);
  acceleration = new PVector(1,1);
  topSpeed = 10;
  }
  
  void update(){
    PVector mouse = new PVector(mouseX,mouseY);
    PVector acceleration = PVector.sub(mouse,position);
    acceleration.setMag(.2);
    velocity.add(acceleration);
    velocity.limit(topSpeed);
    position.add(velocity);
  } 
  
  void edgeWrap(){ 
  if (position.x>width){
    position.x = 0;
  }
  if (position.x<0){
    position.x = width;
  }
  if(position.y > height){
    position.y = 0;
  }
  if (position.y <0){
    position.y = height;
  }
  
  }
  void display(){
  fill(255,255,255,100);
  noStroke();
  ellipse(position.x,position.y,50,50);
  } 
}