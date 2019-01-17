var sound,
	fft;

function preload(){
  background(255);
  sound = loadSound('audio/real.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	sound.play();

  	fft = new p5.FFT( .5, 128 ); // Smoothing and length of the resulting array must be a power of two between 16 and 1024

}
 
function draw() {

	background(255);
	translate(0, height / 2);

	freq = fft.analyze();
	
	for ( var i = 0; i < freq.length; i++ ){

		var x = width / freq.length * i;
		var y = 0;

		rect( x, y, width / freq.length, -freq[i] );
	}

}
