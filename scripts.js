// RED CIRCLE PAGE //

var ellipseDiameter = 200;
var shape;

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  document.getElementById("red").addEventListener("click", function () {
    fill('#FF0000');
  })
  document.getElementById("blue").addEventListener("click", function () {
    fill('#0000FF');
  })
  document.getElementById("yellow").addEventListener("click", function () {
    fill('#FFFF00');
  })
 document.getElementById("circle").addEventListener("click", function () {
   shape = "circle"
 })
 document.getElementById("triangle").addEventListener("click", function () {
   shape = 'triangle'
 })
 document.getElementById("square").addEventListener("click", function () {
   shape = 'square'
   square(mouseX, mouseY, 100);
 })
if(shape == 'circle'){
  ellipse(mouseX, mouseY, ellipseDiameter, ellipseDiameter);
} else if(shape == 'triangle'){
  triangle(mouseX - 100, mouseY + 190, mouseX, mouseY, mouseX + 100, mouseY + 190);
} else if(shape == 'square') {
 square(mouseX - 87.5, mouseY - 87.5, 175);
}
}

// add shape outline/shadow or something to indicate that it's  been clicked
// add indicator of what the user should do once the page loads....text animation?
