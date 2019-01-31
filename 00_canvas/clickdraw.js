let mode = 1;

const c = document.getElementById("slate");
const ctx = c.getContext("2d");

const clearBtn = document.getElementById("clear");
const dotBtn = document.getElementById("dot");
const rectBtn = document.getElementById("rect");

//ctx.fillStyle = "#ff0000"
//ctx.fillRect(50, 50, 100, 200);

clearBtn.addEventListener("click", clearCanvas);
dotBtn.addEventListener("click", function(e) {mode = 1});
rectBtn.addEventListener("click", function(e) {mode = 2});

c.addEventListener("click", draw)

var clearCanvas = function(e) {
  ctx.clearRect(0,0,canvas.width,canvas.height);
};

var rect = function(e) {
  console.log(e.clientX)
  console.log(e.clientY)
  ctx.fillRect(e.clientX,e.clientY,20,20);
};

var dot = function(e) {
  console.log(e.clientX)
  console.log(e.clientY)
  ctx.ellipse(e.clientX,e.clientY,20,20)
};

var draw = function(e) {
  if (mode == 1) {
    dot;
  };
  if (mode == 2) {
    rect;
  }
}
