/* global mouseIsPressed */
window.brushes.starStamp = {
  name: 'star stamp',
  draw: function () {
    if (mouseIsPressed && !window.dragging) {
      fill(0)
      ellipse(mouseX, mouseY, 50)
    }
  }
}
