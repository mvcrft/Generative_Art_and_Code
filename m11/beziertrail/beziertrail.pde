
float[] x = new float[20];                       // **change** array of 0's to be float[] x = new float[20]
float[] y = new float[20];                       // **change** array of 0's to be float[] x = new float[20]
float segLength = 18;                            // **change** var to float

void setup() {                                   // **change** function setup() to void setup() 
  size(640, 360);                                // **change** createCanvas() to size()
  strokeWeight(9);
  stroke(255, 100);
}

void draw() {                                    // **change** function draw() void draw()
  background(0);
  dragSegment(0, mouseX, mouseY);
  for(int i=0; i<x.length-1; i++) {              // **change** var i to int i
    dragSegment(i+1, x[i], y[i]);
  }
}

void dragSegment(int i, float xin, float yin) {  // **change** function drawSegment() to void drawSegment(). add type declarations.
  float dx = xin - x[i];                         // **change** var to float
  float dy = yin - y[i];                         // **change** var to float
  float angle = atan2(dy, dx);                   // **change** var to float
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

void segment(float x, float y, float a) {        // **change** function segment() to void segment(). add type declarations.
  pushMatrix();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  popMatrix();
}