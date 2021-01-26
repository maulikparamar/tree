const canvas = document.querySelector(".mycanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight - 20
var angle = Math.PI /5;
var rangeslider = document.getElementById("sliderRange");

var t = 0;

function draw() {
    
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,width,height)
    ctx.strokeStyle = "white";
    ctx.translate(width/2, height);
    branch(200,angle);
}
function branch(len,angle) {
    
    ctx.beginPath();    
    ctx.moveTo(0, -len);   
    ctx.lineWidth = 2;
    ctx.lineTo(0, 0);  
    ctx.translate(0, -len);
    if(len > 4){
        ctx.save();
        ctx.rotate(angle);
    ctx.moveTo(0, -len * 0.64);   
    ctx.lineTo(0, 0);  
    ctx.stroke();
    branch(len * 0.64,angle);
    ctx.restore();

    ctx.save();
    ctx.rotate(-angle);
    ctx.moveTo(0, -len * 0.64);   
    ctx.lineTo(0, 0);  
    ctx.stroke();
    branch(len * 0.64,angle);
    ctx.restore()
    }
    
}
draw();