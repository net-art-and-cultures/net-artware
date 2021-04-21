/* global mouseIsPressed, random, colorMode, fill, stroke, sin, ellipse,
 HSB, frameCount, mouseX, mouseY */
let start = 0
let inc = 0.005
let xoff = 0
window.brushes.waterWave = {
  name: 'water wave',
  draw: function () {
    if (mouseIsPressed && !window.dragging) {
      colorMode(RGB)
      stroke(30,random(10,100),(100,150),random(30,255))
      noFill()
      translate(0,mouseY)
      beginShape()
      vertex(0,height)
      xoff = start
      for(var x = 0;x<width; x++){
        let y = noise(xoff)*(height-100)
        vertex(x+mouseX,y)
        xoff+=inc
      }
      endShape()
      start+= 0.01
    }
  }
}
