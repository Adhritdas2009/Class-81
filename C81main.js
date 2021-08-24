canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");

color = "seagreen";
width = 3;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(300, 300, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouseX= e.clientX -canvas.offsetLeft;
mouseY= e.clientY - canvas.offsetTop;
circle(mouseX,mouseY);
}

function circle(mouseX,mouseY){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(mouseX, mouseY, 40, 0, 2*Math.PI);
ctx.stroke();
}