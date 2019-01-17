import org.openkinect.processing.*;

Kinect2 kinect2;

void setup(){
  size(512,424, P3D);
  kinect2 = new Kinect2(this);
  kinect2.initDepth();
  kinect2.initDevice();
}

void draw(){
 background(0); 
 PImage img = kinect2.getDepthImage();
 image(img,0,0);
 sphereDetail(6);
 lights();
 int skip = 10;
 for (int x = 0; x < img.width; x+=skip){
   for (int y = 0; y < img.height; y+=skip){
     int index = x+y * img.width;
     float b = brightness(img.pixels[index]);
     fill(255-b);
     pushMatrix();
     float z = map(b,0,255,250,-250);
     translate(x,y,z);
     sphere(4);
     popMatrix();
   }
 }
}