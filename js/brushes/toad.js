/* global mouseIsPressed, image, mouseX, mouseY */
window.brushes.toad = {
  name: 'toad',
  draw: function () {
    if (mouseIsPressed) {
      image(toad, mouseX, mouseY, 50, 50);
    }
  }
}
