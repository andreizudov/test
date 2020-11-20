let canvastest = document.getElementById('can1')
let ctx = canvastest.getContext("2d")
ctx.lineWidth = '3'
ctx.strokeStyle='red'
for (var i = 1; i <= 20; i++) {
	ctx.moveTo(100, 100);
	ctx.lineTo(10*i, 10);
}
ctx.stroke();


ctx.beginPath()
ctx.strokeStyle = "blue"
ctx.moveTo(150,150)
ctx.lineTo(175,175)
ctx.moveTo(150,175)
ctx.lineTo(175,150)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = 'green'
ctx.lineWidth = '1'

for (var i = 1; i <= 20; i++) {
	ctx.moveTo(0*i, 10*i);
    ctx.lineTo(200, 10*i);
    ctx.moveTo(10*i,0) 
    ctx.lineTo(10*i,200)
}
ctx.stroke();
function getRadians(degrees) {
	return (Math.PI/180)*degrees;
}

var myColor = 'black'
document.getElementById('color').oninput = function()
{
	myColor =this.value
}


canvastest.onmousedown = function (event){
canvastest.onmousemove = function(event){
	var x = event.offsetX;
	var y = event.offsetY;
	ctx.fillRect(x,y,5,5);
	ctx.fillStyle = myColor
	ctx.fill()
canvastest.onmouseup = function()
{
	canvastest.onmousemove= null
}
}}



ctx.beginPath()
var pi = Math.PI
ctx.lineWidth= 5;
ctx.strokeStyle = 'black'
ctx.fillStyle= "red"
ctx.arc(100,100,50,0,2*pi,false)
ctx.fill()
ctx.stroke ()