const canvas = document.querySelector("canvas"); // получим canvas
const ctx = canvas.getContext('2d');
const img = document.createElement('img');
img.src = "like.png";
document.addEventListener('mousemove', function (e) {
    ctx.drawImage(img, e.pageX, e.pageY, 32, 32);
});
/* canvas.onmousedown = function(event) {
    canvas.onmousemove = function(event) {
        var x = event.offsetX;
        var y = event.offsetY;
        ctx.drawImage(img, e.pageX, e.pageY, 300, 300);
    }
} */