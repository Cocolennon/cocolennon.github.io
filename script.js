let grid = document.getElementById("grid");
let gridHalfWidth = grid.offsetWidth / 2;

document.onmousemove = function(e) {
    grid.style.left = e.pageX - gridHalfWidth + "px";
    grid.style.top = e.pageY - gridHalfWidth + "px";
}