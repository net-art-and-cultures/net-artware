
/* global createCanvas, resizeCanvas */
let shark;
function preload () {
  window.setupMenuLogic()
  shark = loadImage('/images/pinkshark.png')
/* global createCanvas, resizeCanvas, preload, mouseIsPressed, let, createImage, loadImage, mouseX, mouseY */
let toad;

function preload () {
  window.setupMenuLogic()
  toad = loadImage('js/imgs/toad.png');
  // }
}

function setup () {
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw () {
  const selected = window.settings.selectedBrush
  if (selected) {
    const brush = window.brushes[selected]
    brush.draw()
  }
}

function windowResized () {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
