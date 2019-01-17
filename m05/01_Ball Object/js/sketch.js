var balls = [];

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);

  for(var i = 0;i<50;i++){
    balls[i] = new Ball(1+i*2,150,i+1,i+1,50,255);
  }

}

function draw(){
  background(0);

  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display(); 
  }

}

