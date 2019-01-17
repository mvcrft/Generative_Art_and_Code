let song;
let button;
let FFT;
let amp;

let beatHoldFrames = 30

// what amplitude level can trigger a beat?
let beatThreshold = 0.08 

// When we have a beat, beatCutoff will be reset to 1.1*beatThreshold, and then decay
// Level must be greater than beatThreshold and beatCutoff before the next beat can trigger.
let beatCutoff = 0
let beatDecayRate = 0.98 // how fast does beat cutoff decay?
let framesSinceLastBeat = 0 

let PALETTE = []
let patternLayers = []



function setup() {
	createCanvas(windowWidth, windowHeight);
	song = loadSound("SEVDALIZA-HUMAN.mp3", loaded); //developer >> ("SEVDALIZA-HUMAN.mp3", togglePlaying)
	// button = createButton("play");
	// button.mousePressed(togglePlaying);

	FFT = new p5.FFT(.5,32);
	FFT.setInput(song);

	amp = new p5.Amplitude(0.9);
	amp.setInput(song);

	PALETTE = [
			//melancholy muted
			// color(220, 0 ,220, 220), 
			// color(0, 220, 0,220),
			// color(0, 0, 0),
			// color(0, 0, 0),
			// color(220, 220, 0,220)
		color(74,102,112),	// navy
		color(102,143,128),	// teal
		color(160,175,132),	// green
		color(195,181,159),	// warm gray
		color(214,162,173), // pink
		color(255,255,255) // white
	]

	rectMode(CENTER);
	angleMode(DEGREES);

	onBeat();
}

function draw() {
	freq = FFT.analyze();
	level = amp.getLevel();

	detectBeat(level);

	push();
		translate(width / 2, height / 2);
		makeThing();
	// if(song.currentTime() > 26.7 && song.currentTime() < 27){
	 //  	const turn = 60;
	 //  	rotate(turn);
	 //  }
	pop();

	//frameRate();
	console.log(frameRate());
}

/*===========================================================
<<<<<<<<<<<<<<<<<<<<<<<< AUDIO LOGIC >>>>>>>>>>>>>>>>>>>>>>>>
============================================================*/

function makeThing(){

	if (song.currentTime() > 5.05 && song.currentTime() < 5.8){ 
		onBeat();
	} 

	picker = random(1);

	if (picker > 0.4 && freq[12] > 30) {
		// (size, number of shapes)
		const circles = new Circles(freq[8] * 2, 12);
		// (x, y)
		circles.render(0, 0);
	};

	if (picker < 0.3 && freq[3] > 150) {
		// (size)
		const outlineShapes = new OutlineShapes(freq[3] * 2);
		outlineShapes.render(0, 0);
	}

	if (picker < 0.4 && freq[22] > 1)  {
		// (size, number of lines or rays)
		const dots = new Dots(freq[22] * 5, freq[22] / 4);
		// x, y, size of dots
		dots.render(0, 0, 3);
	}

	if (picker > 0.7 && freq[16] > 120) {
		//(size)
		const middleShape = new MiddleShape(freq[16] * 2);
		middleShape.render(0, 0);
		frameRate(30);
	} else {
		frameRate(60);
	}

	if (picker > 0.4 && freq[9] > 170 ) {
		// (size, number of shapes)
		const repeatedShapes = new RepeatedShapes(freq[9] * 4 , 12);
		repeatedShapes.render(0, 0);
	}

	if (picker > 0.4 && freq[1] > 150) {
		// (size, number of lines or rays)
		const simpleLines = new SimpleLines(freq[1] * 2, floor(level * 45));
		simpleLines.render(0, 0);
	}

	if (picker > 0.4 && song.currentTime() > 115 && song.currentTime() < 128 && freq[22] > 1) {
		//(maxSize, minNumRepeats, maxNumRepeats)
		const repeatedHex = new RepeatedHex(freq[22] * 30, 8, 18);
		repeatedHex.render(0, 0);
	}

}

function detectBeat(level) {
  if (level  > beatCutoff && level > beatThreshold){
    onBeat()
    beatCutoff = level * 1.2
    framesSinceLastBeat = 0
  } else{
    if (framesSinceLastBeat <= beatHoldFrames){
      framesSinceLastBeat ++
    }
    else{
      beatCutoff *= beatDecayRate
      beatCutoff = Math.max(beatCutoff, beatThreshold)
    }
  }
}

function onBeat(){
	background(randomColorFromPalette());
}

function loaded() {
	onBeat();
	song.play();

}


function onBeat(){
	background(randomColorFromPalette());
}

/*===========================================================
<<<<<<<<<<<<<<<<<<<<< DEVELOPER TOOLS >>>>>>>>>>>>>>>>>>>>>>>
============================================================*/

// function togglePlaying() {
// 	if (!song.isPlaying()){
// 		song.play();
// 		button.html("pause");
// 		loop();
// 	} else {
// 		song.pause();
// 		button.html("play");
// 		noLoop();
// 	}
// }

// function test(_size, _numLines){
// 	let kaleidoSize = 400;
// 	let numLines = 18;
									/* 
										ternary operator
											shorthand for 'if' statements
											condition ? expr1 : expr2

											? = is this TRUE 
													run the LEFT side of the colon
													FALSE run the RIGHT side

											if (randomChance50Percent()) {
												numShapes = numLines
											} else {
												numShapes = numLines * 2
											}
											
									*/
// 	let numShapes = randomChance50Percent() ? numLines : numLines * 2;
// 	let patternColor = randomColorFromPalette();

// 	noFill();
// 	strokeWeight(3);

// 	push();
// 		translate(width/2, height/2);
// 		stroke(PALETTE[0]);
// 		ellipse(0, 0, kaleidoSize, kaleidoSize);

// 		stroke(patternColor);
// 		let angle = 360 / numShapes;
// 		for (let i = 0; i < numShapes; i++) {
// 			line(0, 0, 0, kaleidoSize / 2);
// 			rotate(angle);
// 		}
// 	pop();
// }



/*===========================================================
<<<<<<<<<<<<<<<<<<<<<< COMPLEX SHAPES >>>>>>>>>>>>>>>>>>>>>>>
============================================================*/

function hexagon (posX, posY, radius){
	let rotAngle = 360 / 6;
	beginShape();
		for (let i = 0; i < 6; i++) {
			let thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
			vertex(thisVertex.x, thisVertex.y);
		}
	endShape(CLOSE);
}

function pointOnCircle (posX, posY, radius, angle){
	let x = posX + radius * cos(angle);
	let y = posY + radius * sin(angle);
	return createVector(x, y);
}

function equTriangle (center, radius, direction) {
  if (direction) {
    beginShape();
	    vertex(center + radius * cos(0), radius * sin(0));
	    vertex(center + radius * cos(120), radius * sin(120));
	    vertex(center + radius * cos(240), radius * sin(240));
    endShape(CLOSE); 
  } else {
    beginShape();
	    vertex(center + radius * cos(180), radius * sin(180));
	    vertex(center + radius * cos(300), radius * sin(300));
	    vertex(center + radius * cos(60), radius * sin(60));
    endShape(CLOSE);
  }
}


/*===========================================================
<<<<<<<<<<<<<<<<<<<<<<< SECRET SAUCE >>>>>>>>>>>>>>>>>>>>>>>>
============================================================*/

function randomChance50Percent(){
	let randomNum = random(1)

	// flip a coin
	return randomNum > 0.5 ? true : false

	// if (randomNum > 1) {
	// 	return true
	// } else {
	// 	return false
	// }
}

function randomColorFromPalette(){
		let randomColor = floor(random(0, PALETTE.length))
		return PALETTE[randomColor]
}


/*===========================================================
<<<<<<<<<<<<<<<<<<<<<<<<<<  CLASSES  >>>>>>>>>>>>>>>>>>>>>>>>
============================================================*/

class Circles {
	constructor(_size, _numShapes) {
		this.shapeSize = (_size / 2) * .9375; // 15:16 >> diminished 2nd  (_size * 0.61803) >> golden mean
		this.position = (_size / 2) - (this.shapeSize / 2);
		this.numShapes = _numShapes;

		//make sure to change the angle MODE
		this.angle = 360 / this.numShapes;

		this.thinStroke = 2; 
		this.patternColor = randomColorFromPalette();
	}

	render(_x, _y) {
		this.posX = _x;
		this.posY = _y;

		noFill();
		stroke(this.patternColor);
		strokeWeight(this.thinStroke);

		push();
			translate(this.posX, this.posY);
			for (var i = 0; i <= this.numShapes; i++) {
				ellipse(this.position, 0, this.shapeSize, this.shapeSize);
				rotate(this.angle);	
			};
		pop();

	}
}

class SimpleLines {
	constructor(_size, _numLines){
		this.shapeSize = _size;
		this.numLines = _numLines;

		this.singleStep = (this.shapeSize / 2) / this.numLines;
		this.thinStroke = 3;
		this.thickStroke = 5;
		this.patternColor = randomColorFromPalette();


		this.numSteps = randomChance50Percent() ? this.numLines : int(this.numLines * 1.27201);
		this.step = (this.shapeSize / 2) / this.numSteps;
		this.start = floor(random(0, this.numSteps));
		this.stop = floor(random(this.start, this.numSteps + 1));

		this.weight = randomChance50Percent() ? this.thinStroke : this.thickStroke;
		this.randNumLines= randomChance50Percent() ? this.numLines : this.numLines * 2;
		this.angle = 360 / this.randNumLines;
	}

	render(_x, _y){
		this.posX = _x;
		this.posY = _y;

		noFill();
		strokeWeight(this.weight);
		stroke(this.patternColor);

		push();
			translate(this.posX, this.posY);
			for (let i = 0; i < this.randNumLines; i++) {
				line(this.start * this.step, 0, this.stop * this.step, 0);
				rotate(this.angle);
			};
		pop();
	}

}

class OutlineShapes {
	constructor(_size){
		this.shapeSize = _size;	
		this.thinStroke = 2;
		this.thickStroke = 5;
		this.patternColor = randomColorFromPalette();

		this.weight = randomChance50Percent() ? this.thinStroke : this.thickStroke;
		this.hexagonTrue = randomChance50Percent();
	}

	render(_x, _y){
		this.posX = _x;
		this.posY = _y;

		noFill();
		strokeWeight(this.weight);
		stroke(this.patternColor);

		push();
			translate(this.posX, this.posY);
			if (this.hexagonTrue) {
				hexagon(0, 0, this.shapeSize / 2);
			} else {
				ellipse(0, 0, this.shapeSize, this.shapeSize);
			};
		pop();
	}

}

class Dots {
	constructor(_size, _numLines){
		this.shapeSize = _size;	
		this.numLines = _numLines;

		this.singleStep = (this.shapeSize / 2.618) / this.numLines;
		this.centerOffset = this.singleStep;

		this.patternColor = randomColorFromPalette();
		this.numShapes = randomChance50Percent() ? this.numLines : this.numLines * 2;
		this.angle = 360 / this.numShapes;
		
	}

	render(_x, _y, _s){
		this.posX = _x;
		this.posY = _y;
		this.dotSize = _s;

		fill(this.patternColor);
		noStroke();
		push();
			translate(this.posX, this.posY);
			for (let i = 0; i <= this.numShapes; i++) {
				for (let x = this.centerOffset; x < this.shapeSize / 2; x += this.singleStep) {
					rect(x, 0, this.dotSize, this.dotSize);
				}
				rotate(this.angle);
			}
		pop();
	}
}

class MiddleShape {
	constructor(_maxSize){
		this.maxSize = _maxSize;
		this.numPlacements = 16;

		this.singlePlacement = (this.maxSize / 2) / this.numPlacements;
		this.patternColor = randomColorFromPalette();
		this.randomShape = random(0, 1);
		this.randShapeSize = floor(random(this.numPlacements / 2, this.numPlacements)) * this.singlePlacement;
	}

	render(_x, _y){
		this.posX = _x;
		this.posY = _y;

		fill(this.patternColor);
		noStroke();
		push();
			translate(this.posX, this.posY);
			if (this.randomShape < 0.3) {
				rect(0, 0, this.randShapeSize * (PI / 2), this.randShapeSize * (PI / 2));
			} else 
					if (this.randomShape > 0.8) {
						ellipse(0, 0, this.randShapeSize * 2, this.randShapeSize * 2);
					} else 
							if (this.randomShape < 0.8) {
								rotate(90);
								hexagon(0, 0, this.randShapeSize);
							}
		pop();
	}
}

class RepeatedShapes {
	constructor(_size, _numShapes){
		this.shapeSize = _size;
		this.numShapes = _numShapes;

		this.angle = 360 / this.numShapes;

		this.numPlacements = 8; // number of random places to draw shapes
		this.singlePlacement = (this.shapeSize / 2) / this.numPlacements; // equal division on the radius 
		this.thinStroke = 2;
		this.thickStroke = 5;
		this.patternColor = randomColorFromPalette();

		this.randPlacementOnRadius = floor(random(1, this.numPlacements)); // don't start drawing from the center
		this.center = this.randPlacementOnRadius * this.singlePlacement; // leave enough room to draw shape
		this.randomShape = random(1);
		this.direction = randomChance50Percent();	// Triangle point in or out
		this.fillColor = randomChance50Percent() ? this.patternColor : color(0, 0); // fill w/ color :else: 100% ALPHA (shape with stroke) 
		this.weight = randomChance50Percent() ? this.thinStroke : this.thickStroke;
 
		if (this.randPlacementOnRadius < this.numPlacements / 2) {
			this.radius = floor(random(1, this.randPlacementOnRadius)) * this.singlePlacement;
		} else 
				if (this.randPlacementOnRadius > this.numPlacements / 2) {
					this.radius = floor(random(1, (this.numPlacements - this.randPlacementOnRadius))) * this.singlePlacement;
		} else {
			this.radius = floor(random(1, (this.numPlacements / 2) + 1)) * this.singlePlacement;
		}
	}

  render(_x, _y){
  	// WILL NOT LOG WITHOUT THIS
  	//console.log(this);

  	this.posX = _x;
  	this.posY = _y;

  	strokeWeight(this.weight);
    stroke(this.patternColor);
    fill(this.fillColor);

    push();
    translate(this.posX, this.posY);
    for (let i = 0; i < this.numShapes; i++) {
      if (this.randomShape < 0.33) { // 33% perecent chance
        ellipse(0, this.center, this.radius, this.radius);
        //console.log('ellipse');
      } else 
      		if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
        		rect(0, this.center, this.radius, this.radius);
        		//console.log('rect');
      } else 
		      if (this.randomShape >= 0.66) {
		        equTriangle(this.center, this.radius, this.direction);
		        //console.log('triangle');
      }
      rotate(this.angle);

    }
    pop();
  }
}

 class RepeatedHex {
 	constructor(_maxSize, _minNumRepeats, _maxNumRepeats){
 		this.maxSize = _maxSize;
 		this.minNumRepeats = _minNumRepeats;
 		this.maxNumRepeats = _maxNumRepeats;

		this.thinStroke = 2;
		this.thickStroke = 5;
		this.patternColor = randomColorFromPalette();

 		this.numRepeats = randomChance50Percent() ? this.minNumRepeats : this.maxNumRepeats; //* 1.125
 		this.centerOffset = (this.maxSize / 2) * 0.00263;
 		this.singleRepeat = ((this.maxSize / 2) - this.centerOffset) / this.numRepeats;
 		this.weight = randomChance50Percent() ? this.thinStroke : this.thickStroke;

 	}

 	render(_x, _y){
 		this.posX = _x;
 		this.posY = _y;

 		stroke(this.patternColor);
 		noFill();
 		strokeWeight(this.weight);

 		push();
 			translate(this.posX, this.posY);
 			rotate(90);
 			for (let i = 1; i < this.numRepeats; i++) {
 				hexagon(0, 0, this.centerOffset + (i * this.singleRepeat));
 			}
 		pop();
 	}
}