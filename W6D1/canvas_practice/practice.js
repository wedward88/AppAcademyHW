document.addEventListener("DOMContentLoaded", function(){
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "red";
    ctx.fillRect(100,100,300, 300);

    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "Black";
    ctx.lineWidth = "10";
    ctx.stroke();
});
