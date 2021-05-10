function setup() {
 	createCanvas(innerWidth, innerHeight);
}
 
function draw()
{
	// do nothing
}
 
function mouseDragged() 
{ 
	strokeWeight(5);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
