var osc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();
}

function draw() {
  background("#eee2b2");
  noStroke();
  
  //
  
  if(mouseIsPressed)
    {
    //change oscillator type
    if(mouseX < width/3)
      {
        osc.setType('sine');
        fill("#965374");
        rect(0, mouseY, width/3, height-mouseY);
      }
    else if(mouseX < 2*width/3)
      {
        osc.setType('square');
        fill("#f18a81");
        rect(width/3, mouseY, width/3, height-mouseY);
      }
    else
      {
        osc.setType('triangle');
        fill("#ec4e81");
        rect(2*width/3, mouseY, width, height-mouseY);
      }
    
    var f = map(mouseY, 0, height, 2000, 180);
    osc.freq(f);
    //increase the volume of low frequencies
    var v = map(mouseY, 0, height, 0.5, 1);
    osc.amp(v);
    }
  
}

function mousePressed() {
  osc.amp(0.5, 0.05);
}

function mouseReleased() {
  osc.amp(0, 0.05);
}

