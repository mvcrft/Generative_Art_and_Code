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
 

 
 int[] depth = kinect2.getRawDepth();
 
 
 stroke(255);
 strokeWeight(2);
 
 pushMatrix();
 translate(width/2,height/2,-2000);
 rotateY(a);
 
 int skip = 10;
  
  
  
beginShape(POINTS);

 for (int x = 0; x < kinect2.depthWidth; x+=skip){
   for (int y = 0; y < kinect2.depthHeight; y+=skip){
     int offset = x + y * kinect2.depthWidth;
      int d = depth[offset];
      PVector point = depthToPointCloudPos(x,y,d);
      
      vertex(point.x,point.y,point.z);
   }
 }
 
 endShape();
 
 
 popMatrix();
 
 fill(255);
 
a += .00015;
 
 
}


//calculte the xyz camera position based on the depth data
PVector depthToPointCloudPos(int x, int y, float depthValue) {
  PVector point = new PVector();
  point.z = (depthValue);// / (1.0f); // Convert from mm to meters
  point.x = (x - CameraParams.cx) * point.z / CameraParams.fx;
  point.y = (y - CameraParams.cy) * point.z / CameraParams.fy;
  return point;
}


//camera information based on the Kinect v2 hardware
static class CameraParams {
  static float cx = 254.878f;
  static float cy = 205.395f;
  static float fx = 365.456f;
  static float fy = 365.456f;
  static float k1 = 0.0905474;
  static float k2 = -0.26819;
  static float k3 = 0.0950862;
  static float p1 = 0.0;
  static float p2 = 0.0;
}