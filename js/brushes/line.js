/* global mouseIsPressed, random, colorMode, fill, stroke, sin, ellipse,
 HSB, frameCount, mouseX, mouseY */
window.brushes.sqaure = {
  name: 'line',
  draw: function () {

    const radius = 80
    stroke(255, 0, 0)
    textSize(30)
    if (mouseIsPressed && !window.dragging) {
      line(mouseX, mouseY, pmouseX, pmouseY)
    }
  }
}
