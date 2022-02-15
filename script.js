var css1 = document.querySelector(".button1");
var css2 = document.querySelector(".button2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradientFirst() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css1.textContent = body.style.background + ";";
}

function setGradientSec() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css2.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradientFirst);

color2.addEventListener("input", setGradientSec);

/*Logic of our gradient*/
/*From js this file - we need our page to be interactive
so that it can read from the DOM; 
So need to read 2 inputs from color 1 and 2 and
also select h3 so we can enter some text. 
So select the DOM using query selector like
var css, color1, color*/