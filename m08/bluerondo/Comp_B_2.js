/* Animation Composition B, variation 2

Set 9 points radially for each beat and connect lines from and to each point.

*/


function CompB2(x,y,width,height,myTimer){
//modules paramaters
	this.width = width;
	this.height = height;
	this.timer = myTimer;
	this.x = x;
	this.y = y;

	this.colorID =1;

//comp paramaters

	this.places = [];

};

CompB2.prototype.init = function(){

for (i = 0; i <= 9; i++){

	increment = 1/9 * 360;
	this.colorID = Math.floor(random(2,6.99));

	this.places[i] = createVector(Math.sin(radians(i*increment))*this.width*.4 + this.x + this.width/2,Math.cos(radians(i*increment))*this.height*.4 + this.y + this.height/2);
}


}

CompB2.prototype.go = function(){


count = map(this.timer,0,74,1,9);
count = Math.ceil(count);

strokeWeight(3);
stroke(assignColors(this.colorID));

function nonagon(places){

//Reset any dashed lines
drawingContext.setLineDash([]);

//This is not pretty but it works -  want to set up some wrapping values.
	wrap = 1;
//Place the values in an array
	ar = [0,1,2,3,4,5,6,7,8,9];
//shift the array based on wrap value and add it to the front of the list
	for (l = 0; l<=ar.length-wrap;l++){
		popIndex = ar.pop();
		ar.unshift(popIndex);
	}
//duplicate the array and shift everything over an index
	ar2 = ar.slice(0);
	popIndex2 = ar2.pop();
	ar2.unshift(popIndex2);


	for(j = 0; j <= count-1; j++){
		for(k = 0; k <=count-1;k++){

			line(places[ar[j]].x,places[ar[j]].y,places[ar2[k]].x,places[ar2[k]].y);
		}


}


}

nonagon(this.places);

}


