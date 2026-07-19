# Jukebox

### What does this do?

It shows a retro jukebox playing a record. The rainbow arch light cycles through its colors, a vinyl record spins behind the glass, the selection keys press themselves in sequence, and an equalizer bounces along the bottom. Under reduced motion everything holds still.

### How is it used?

```html
<div class="jukebox">
  <span class="arch"></span>
  <div class="window"><span class="record"></span></div>
  <div class="grille"></div>
  <div class="bars"><span class="bar bl1"></span></div>
</div>
```

The glowing arch is a gradient border painted with two `background` layers and `border-box` clipping, cycled with a `hue-rotate` filter. The record is a `repeating-radial-gradient` of grooves with a label, spinning behind a rounded glass window, and the equalizer bars scale on staggered delays.

### Why is it useful?

Retro, music, and diner themes use a jukebox. This builds a playing jukebox with pure CSS gradients and animation, no images, with a reduced motion fallback.
