
// while(counter<=10){
// console.log(counter);
// counter++;
// }

var counter = 0;

do{
console.log(counter);
counter++;
}

while(counter<10);






function setup(){
	createCanvas( windowWidth, windowHeight );
}



function draw() {

	background(255);
	//noStroke();

	for (var x=0;x<=20;x++){
		for(var y=0;y<=20;y++){
			fill(x*15,y*15,50);
			ellipse( x*50, y*50, 10, 10);
			strokeWeight(3);
			line((x + randomInt(-1,1)) * 50,(y + randomInt(-1,1)) * 50,0,0);
	}
}


}


function randomInt(min,max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max-min)) +min;
}