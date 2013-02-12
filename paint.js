function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	window.addEventListener("mousemove",bucky,false);
}
function bucky(e){
	var xPos = e.clientX;
	var yPos = e.clientY;
	canvas.fillRect(xPos-40,yPos-40,30,30);
}
window.addEventListener("load", doFirst, false);
