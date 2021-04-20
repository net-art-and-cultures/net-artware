/* global mouseIsPressed, image, mouseX, mouseY, shark */

window.brushes.sharkStamp = {
  name: 'shark stamp',
  draw: function () {
    if (mouseIsPressed){
    image(shark, mouseX, mouseY, 100, 100)
    }
  }
}
