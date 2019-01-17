class Mybutton{
	constructor(x,y,w,h,fillColor,myLabel){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.fillColor = fillColor;
		this.textLabel = myLabel;
	}

	display(){
	fill(0,0,255,100);
	rect(this.x,this.y,this.w,this.h);
	fill(255,0,0);
	textSize(12);
	text(this.textLabel,this.x+this.w*.25,this.y+this.h*.5);
	}

	onClick(myIndex){

	var top = mouseX>this.x;
	var left = mouseY>this.y;
	var right = mouseX < this.x+this.w;
	var bottom =  mouseY<this.y+this.h;

	if ( top && left && right && bottom){	
		txtChoice = myIndex+1;
		}
	}
}


function mousePressed(){
	buttons.forEach(function(element,index){
		element.onClick(index);
	})
}


var buttons = [];
txtDisplay = [" ","George","Paul","John","Ringo"];
var txtChoice = 0;

var backgroundColor = 0;

function setup() {
  // put setup code here
  background(0);
  createCanvas(500,800);

	buttons[0] = new Mybutton(50,50,50,20,10,"btn1");
	buttons[1] = new Mybutton(150,50,50,20,50,"btn2");
	buttons[2] = new Mybutton(250,50,50,20,150,"btn3");
	buttons[3] = new Mybutton(350,50,50,20,225,"btn4");
}

function draw() {
	background(backgroundColor);

	buttons.forEach(function(element){
		element.display();
	})

	fill(255,255,0);
	textSize(64);
	text( txtDisplay[txtChoice] ,200,400 );
}



