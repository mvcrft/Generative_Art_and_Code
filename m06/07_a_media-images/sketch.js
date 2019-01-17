
var img1;
var img2;

var count = 20

function preload(){

img = loadImage("assets/bird.png");
img2 = loadImage("assets/flower.png")

}

function setup(){

	createCanvas(windowWidth,windowHeight);
	background(200,170,10);

//here's a for loop to spread the images out.
	for (var i = 0; i < count; i ++){

//let's add some variation to the image sizes
		s = random(2,3.5);
//let's use a function to return flipped states
		f = flip();

//create a new image, give it the loaded image, place it in space, and give it a size
		image(img2, width/count * i, height/2, img.width/s  , img.height/s);

//let's use push and pop to flip the birds left and right

		push();
		//center the translation, let's place the birds a bit lower, too
		translate(width/count * i,height/2 + 10)
		//f returns either -1 or 1 to flip the bid horizontally or vertically
		scale(f,1);
		image(img, 0, 0, img.width/s, img.height/s );
		pop();
	}

};


function draw(){

};

//here's my flip function. It just randomly returns a value of -1 or 1.
function flip(){
	var r = random();
	if (r>.5){
		return -1;
	} else {
		return 1;
	}
}
