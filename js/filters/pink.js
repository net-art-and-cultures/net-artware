/* global loadPixels, pixels, colorMode, RGB, updatePixels */
window.filters.pink = {
  name: 'pink',
  run: function () {
    colorMode(RGB)
    loadPixels()
    // loop through all the pixels
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i]
      const b = pixels[i - 1]
      const g = pixels[i - 2]

      const pink = (r + b + g) / 2
      pixels[i] = pink
      pixels[i - 1] = pink
      pixels[i - 2] = pink
    }
    updatePixels()
  }

}