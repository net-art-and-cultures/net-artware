/* global createCanvas, resizeCanvas, loadImage */
let shark
let toad

function preload () {
  window.setupMenuLogic()
  shark = loadImage('../images/pinkshark.png')
  toad = loadImage('../images/toad.png')
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
  resizeCanvas(window.innerWidth, window.innerHeight)
}
