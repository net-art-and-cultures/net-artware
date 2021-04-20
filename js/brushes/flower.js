/* global mouseIsPressed, colorMode, RGB, fill, noStroke, ellipse,
mouseX, mouseY */
window.brushes.flower = {
  name: 'rainbow flower',
  draw: function () {
    if (mouseIsPressed && !window.dragging) {
      colorMode(HSB)
      noStroke()
      fill(frameCount % 360, 100, 100)
      translate(mouseX, mouseY)
      for (let i = 0; i < 10; i ++) {
        ellipse(0, 30, 30, 50);
        rotate(PI/3);
      }
    }
  }
}
