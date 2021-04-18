/* global preload, mouseIsPressed, image, createImage, loadImage, mouseX, mouseY */
let shark;

function preload(){
  shark = loadImage('images/pinkshark.png')
}

window.brushes.sharkStamp = {
  name: 'shark stamp',
  draw: function () {
    if (mouseIsPressed){
    createImage('shark', mouseX, mouseY, 50, 50)
    }
  }
}
