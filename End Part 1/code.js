var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
const SW = canvas.width;
const SH = canvas.height;
const TILE_W = 25;
var bgcolor = "green";


class Vector{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
}

var startPos = new Vector(100,0);

var pathData = [
	new Vector(0,200),
	new Vector(550,0),
	new Vector(0,250),
	new Vector(-500,0)
];


function update(){
	
}

function renderPath(){
	let drawPos = new Vector(startPos.x,startPos.y);
	
	context.fillStyle = "gray";
	
	pathData.forEach(function(path){
		if (path.x == 0){
			let x = drawPos.x - TILE_W;
			let y = drawPos.y - TILE_W;
			let w = TILE_W * 2;
			let h = path.y + TILE_W * 2;
			
			context.fillRect(x,y,w,h);
		}
		else{
			let x = drawPos.x - TILE_W;
			let y = drawPos.y - TILE_W;
			let w = path.x + TILE_W * 2;
			let h = TILE_W * 2;
			
			context.fillRect(x,y,w,h);
		}
		
		drawPos.x += path.x;
		drawPos.y += path.y;
	});
}

function renderGrid(){
	context.fillStyle = "black";
	
	let x = 0;
	for (let i = 0; i < SW / TILE_W; i++){
		context.beginPath();
		context.moveTo(x,0);
		context.lineTo(x,SH);
		context.stroke();
		
		x += TILE_W;
	}
	
	let y = 0;
	for (let i = 0; i < SH / TILE_W; i++){
		context.beginPath();
		context.moveTo(0,y);
		context.lineTo(SW,y);
		context.stroke();
		
		y += TILE_W;
	}
	
}

function render(){
	context.fillStyle = bgcolor;
	context.fillRect(0,0,SW,SH);
	
	renderPath();
	renderGrid();
}

function play(){
	update();
	render();
}

setInterval(play,1000/60);