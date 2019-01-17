
//Global Variables can be held outside of the functions.

var timer = 0;


function setup() {

  createCanvas(400, 200);
}
 
function draw() {

  //increment the timer
  timer ++;
  // set background color
  background(255);
  noStroke();
  rectMode(CENTER);

//IF, THEN, ELSE

//Program Flow 

if (timer <= 120){

  fill(0,255,0);
  rect(100, 100, 50, 50);

}else{

  fill(255,0,0);
  rect(300, 100, 50, 50);

};
  
}