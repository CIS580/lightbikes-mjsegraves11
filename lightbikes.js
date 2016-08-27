var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');
var frameSpeed = 1/16/1000;
var x = 0;
var y = 0;
var input = {
	up: false,
	down: false,
	right: false,
	left: false
}


window.onkeydown = function(event) {
	event.preventDefault();
	switch(event.keyCode){
		//up 38 w 87
		case 38:
			input.up = true;
			input.down = false;
			input.right = false;
			input.left = false;
			break;

		//left 37 a 65
		case 37:
			input.up = false;
			input.down = false;
			input.right = false;
			input.left = true;
			break;

		//right 39 d 68
		case 39:
			input.up = false;
			input.down = false;
			input.right = true;
			input.left = false;
			break;

		//down 40 s 83
		case 40:
			input.up = false;
			input.down = true;
			input.right = false;
			input.left = false;
			break;

	}
}
/*
window.onkeyup = function(event) {
	event.preventDefault();
	switch(event.keyCode){
		//up 38 w 87
		case 38:
			input.up = false;
			break;

		//left 37 a 65
		case 37:
			input.left = false;
			break;

		//right 39 d 68
		case 39:
			input.right = false;
			break;

		//down 40 s 83
		case 40:
			input.down = false;
			break;

	}
}
*/

function loop() {
	context.fillStyle = "blue";
	context.fillRect(x,y,10,10);

	if(input.up) y-=1;
	if(input.down) y+=1;
	if(input.right) x+=1;
	if(input.left) x-=1;

	setTimeout(loop, frameSpeed);
}
loop();