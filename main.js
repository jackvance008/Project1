const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
c.canvas.width = innerWidth;
c.canvas.height = innerHeight;

//Controls
let w_key_down = false;
let a_key_down = false;
let s_key_down = false;
let d_key_down = false;
let space_key_down = false;

const block = new Block(canvas.width / 2, canvas.height / 2);

function loop()
{
	//Background clear
	c.beginPath();
	c.fillStyle = "gray";
	c.rect(0, 0, canvas.width, canvas.height);
	c.fill();

	block.draw();
	block.update();

	//Movement
	if(w_key_down){block.moveUp();}
	if(a_key_down){block.moveLeft();}
	if(s_key_down){block.moveDown();}
	if(d_key_down){block.moveRight();}
}

loop();
