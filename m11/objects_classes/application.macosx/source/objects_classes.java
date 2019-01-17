import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class objects_classes extends PApplet {


Ball[] balls;
int count = 5000;

public void setup(){
  
  
  background(0);
  balls = new Ball[count];
  
  for (int i = 0; i<=count-1;i++){
    balls[i] = new Ball(width/2,height/2);
  }
  noStroke();
};

public void draw(){
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
  
  public void update(){
  x += random(-10,10);
  y += random(-10,10);
  }
  
  public void display(){
  ellipse(x,y,radius,radius);
  }
  
}
  public void settings() {  size(500,500, P2D); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "objects_classes" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
