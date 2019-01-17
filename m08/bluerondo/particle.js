// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

var Particle = function(position,c) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(0,0);
  this.position = position.copy();
  this.lifespan = p.life;
  this.myFill = c;
  this.rand = random(-24,24);
  this.scale = this.lifespan;// * .1 + random(-1,1)*24;

  this.run = function() {
    this.update();
    this.display();
  };

  // Method to update position
  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);


    if (this.lifespan < 2){
      this.scale = 0;
    }

    this.scale = this.rand//this.lifespan * .2 //+ this.rand;
    this.scale *= .9;
    this.lifespan -= 1;

  };

  // Method to display
  this.display = function(m) {
    //stroke(255, this.lifespan);
    //strokeWeight(2);
    noStroke();
    var f = this.myFill.concat(this.lifespan);
    fill(f);
    ellipse(this.position.x, this.position.y, this.scale, this.scale);
  };

  // Is the particle still useful?
  this.isDead = function(){
    if (this.lifespan < 0.0) {
        return true;
    } else {
      return false;
    }
  };
};
