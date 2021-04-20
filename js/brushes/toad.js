/* global preload, mouseIsPressed, image, createImage, loadImage, mouseX, mouseY */
let toad;

function preload() {
  toad = loadImage('images/toad.png');
}

window.brushes.toad = {
  name: 'toad',
  draw: function () {
    if (mouseIsPressed) {
      createImage('toad', mouseX, mouseY, 50, 50);

    }
  }
}
