//Hacky Penner Tween Lib

/*
penner easing arguments
t: time
b: beginning value
c: change in value
d: duration
*/

function easeInOutQuart(t, b, c, d) {
	if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
	return -c/2 * ((t-=2)*t*t*t - 2) + b;
};
