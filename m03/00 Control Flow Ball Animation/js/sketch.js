var ball = {x:50,y:50,xSpeed:10,ySpeed:10};

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}
 
function draw() {
	ball.x = ball.x + ball.xSpeed;
	ball.y = ball.y + ball.ySpeed;
	console.log(ball.x);

	background(255); 
	fill(255, 0, 0);

	stroke(0);
	if ( (ball.x >= width) || (ball.x<=0) ){
		ball.xSpeed = ball.xSpeed * -1;
	}
	if ( (ball.y>=height) || (ball.y<=0)  ){
		ball.ySpeed = ball.ySpeed * -1;

	}
	ellipse(ball.x,ball.y,50,50);


}