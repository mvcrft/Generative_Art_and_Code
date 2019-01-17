// ParticleSystem with Auxillary particles.
// Particular

function p1(x,y,width,height,myTimer){

//module params
this.width = width;
this.height = height;
this.timer = myTimer;
this.x = x;
this.y = y;


//Comp params
this.auxsystems = [];
this.mainSystem = {};
this.life = 210;
this.amplitude={};
this.colors = [myColors.c5,myColors.c3,myColors.c4];
this.rate = 4;//frame period
this.aux = true; //auxsystem
this.auxRate = 12 // frame period

};


p1.prototype.init = function(){
this.amplitude = new p5.Amplitude();
this.mainSystem = new ParticleSystem(1,createVector(width/2,height/2),myColors.c2);

}

p1.prototype.go = function(){

	var level = this.amplitude.getLevel();

	this.mainSystem.origin.x = this.x + this.width/2 + Math.sin(frameCount*.05)*(this.width/2 - this.width/32);
	this.mainSystem.origin.y = this.y + this.height*.25 - (level * 1000);
	this.rate = Math.floor(level * 20);


	for (i=0;i<this.mainSystem.particles.length;i++){
		this.mainSystem.particles[i].acceleration.y = .02;
	}
	if (frameCount % this.rate == 0)
	{
	var pColor = colorRand(this.colors); 

	this.mainSystem.addParticle(pColor);

	};

	this.mainSystem.run();

	// stkWt = this.width + this.height / 2;
	// drawingContext.shadowOffsetX = stkWt/32;
	// drawingContext.shadowOffsetY = stkWt/32;
	// drawingContext.shadowBlur = 0;
	// drawingContext.shadowColor = rgb2hex(myColors.c7);


//Here's the Auxillary system
if (this.aux){
	for (var i = 0; i<this.mainSystem.particles.length;i++){
		if (this.mainSystem.particles[i].lifespan == this.life -1){
			var pColor2 = this.mainSystem.particles[i].myFill;

			this.auxsystems.push(new ParticleSystem(1, createVector(this.mainSystem.particles[i].position.x, this.mainSystem.particles[i].position.y),pColor2));
		}
		if (this.mainSystem.particles[i].lifespan == 1){
			this.auxsystems.splice(i,1);
		}
	}


  for(var j = 0; j < this.auxsystems.length; j++){
  	if (this.mainSystem.particles[j].lifespan % this.auxRate == 0){
  		this.auxsystems[j].origin.x = this.mainSystem.particles[j].position.x;
  		this.auxsystems[j].origin.y = this.mainSystem.particles[j].position.y;

  		for (var k = 0; k <this.auxsystems[j].particles.length;k++){
  			this.auxsystems[j].particles[k].lifespan = 30;
  		}

    	this.auxsystems[j].addParticle(this.mainSystem.particles[j].myFill);

}
    this.auxsystems[j].run();
}

}


}

function colorRand(arr){
var r = Math.round(random(0,arr.length-1));
return arr[r]; 
}


// function preload(){
// this.brubeck = loadSound("swing.mp3");
// }


// function setup() {
//   	createCanvas(640,360);
//   	amplitude = new p5.Amplitude();
//   	this.brubeck.play();
//   	this.mainSystem = new ParticleSystem(1,createVector(width/2,height/2),myColors.c2);
// }


// function draw() {

// 	background(myColors.c1);

// 	var level = amplitude.getLevel();

// 	this.mainSystem.origin.x = width/2 + Math.sin(frameCount*.05)*(width/2 - width/32);
// 	this.mainSystem.origin.y = height*.4 - (level * 1000);
// 	this.rate = Math.floor(level * 20);



// 	for (i=0;i<this.mainSystem.particles.length;i++){
// 		this.mainSystem.particles[i].acceleration.y = .01;
// 	}
// 	if (frameCount % this.rate == 0)
// 	{
// 	var pColor = colorRand(this.colors); 

// 	this.mainSystem.addParticle(pColor);

// 	};

// 	this.mainSystem.run();


// if (this.aux){
// 	for (var i = 0; i<this.mainSystem.particles.length;i++){
// 		if (this.mainSystem.particles[i].lifespan == this.life -1){
// 			//console.log(mainSystem.particles[i].myFill);
// 			var pColor2 = this.mainSystem.particles[i].myFill;
// 			this.auxsystems.push(new ParticleSystem(1, createVector(this.mainSystem.particles[i].position.x, this.mainSystem.particles[i].position.y),pColor2));
// 		}
// 		if (this.mainSystem.particles[i].lifespan == 1){
// 			this.auxsystems.splice(i,1);
// 		}
// 	}


//   for(var j = 0; j < this.auxsystems.length; j++){
//   	if (this.mainSystem.particles[j].lifespan % this.auxRate == 0){
//   		this.auxsystems[j].origin.x = this.mainSystem.particles[j].position.x;
//   		this.auxsystems[j].origin.y = this.mainSystem.particles[j].position.y;

//   		for (var k = 0; k <this.auxsystems[j].particles.length;k++){
//   			this.auxsystems[j].particles[k].lifespan = 30;
//   		}

//     	this.auxsystems[j].addParticle(this.mainSystem.particles[j].myFill);

// }
//     this.auxsystems[j].run();
// }

// }

// }


