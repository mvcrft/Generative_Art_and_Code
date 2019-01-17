// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ParticleSystem = function(num, position, c) {

	this.origin = position.copy();
	this.particles = [];
  this.myFill = 50;
  //this.c = c;

  for (var i = 0; i < num; i++) {
      var c2 = c;
      console.log(c2);
      this.particles.push(new Particle(this.origin,c2));    // Add "num" amount of particles to the arraylist
      }


  this.addParticle = function(col) {
    var c = col;
  	this.particles.push(new Particle(this.origin,c));
  };

  this.run = function() {
  	for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };
};
