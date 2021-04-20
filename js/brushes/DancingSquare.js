
window.brushes.DancingSquare = {
  name: 'DancingSquare',
  draw: function () {
      if (mouseIsPressed && !window.dragging) {
          fill(random(100, 255), mouseX, mouseY);
          noStroke();
          rect(mouseX, mouseY, mouseX/4, mouseY/4);
          console.log(mouseX, mouseY);
    }
  }
}
