<script src="js/brushes/peep.js"></script>

/* global mouseIsPressed, image, mouseX, mouseY, shark */

window.brushes.peep = {
  name: 'peep',
  draw: function () {
    if (mouseIsPressed){
    image(peep, mouseX, mouseY, 100, 100)
    }
  }
}

/* global createCanvas, resizeCanvas */
let peep;

function preload () {
  window.setupMenuLogic()
  peep = loadImage('/images/peep.png')
}

function setup () {