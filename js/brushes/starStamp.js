/* global mouseIsPressed */
window.brushes.starStamp = {
  name: 'star stamp',
  draw: function () {
    if (mouseIsPressed && !window.dragging) {
      fill(255, 0, 0)
      ellipse(mouseX, mouseY, 50)
    }
  }
}
