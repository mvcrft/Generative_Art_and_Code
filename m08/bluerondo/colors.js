//default color pallete

myColors = {
		c1: [247,244,238], //white background
		c2: [79,176,157], //aqua
		c3: [53,77,90],//dark blue
		c4: [222,122,76], //orange
		c5: [237,199,96], //yellow
		c6: [219,92,81], //red
		c7: [218,219,219] //shadow
};

// //snow white
// myColors = {
// 		c1: [247,244,238], //white background
// 		c2: [255,255,255], //aqua
// 		c3: [255,255,255],//dark blue
// 		c4: [255,255,255], //orange
// 		c5: [255,255,255], //yellow
// 		c6: [255,255,255], //red
// 		c7: [218,219,219] //shadow
// };


//color helper functions

function rgb2hex(RGB) {
	return "#" + toHex(RGB[0])+toHex(RGB[1])+toHex(RGB[2])
};

function toHex(n) {
	n = parseInt(n,10);
 	if (isNaN(n)) return "00";
	n = Math.max(0,Math.min(n,255));
	return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
}

function assignColors(colorID){
	switch(colorID){
		case 1:
			return myColors.c1;
			break;	
		case 2:
			return myColors.c2;
			break;
		case 3:
			return myColors.c3;
			break;
		case 4:
			return myColors.c4;
			break;
		case 5:
			return myColors.c5;
			break;
		case 6:
			return myColors.c6;
			break;
		case 7:
			return myColors.c6;
			break;
	}

}
