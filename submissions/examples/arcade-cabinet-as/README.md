# Arcade Cabinet

### What does this do?

It shows an arcade cabinet with a game actually playing on its screen. Pixel invaders march side to side, the player ship strafes below them and fires a shot upward, CRT scanlines roll over the picture, the joystick wags, the buttons mash, and the marquee cycles through its colors. Under reduced motion the game freezes.

### How is it used?

```html
<div class="cab">
  <span class="marquee"></span>
  <div class="screen">
    <span class="invader iv1"></span>
    <span class="ship"></span>
    <span class="scan"></span>
  </div>
  <div class="controls"><span class="joy"></span><span class="btn b1"></span></div>
</div>
```

The invaders and the ship are `clip-path` pixel silhouettes. The invaders `march` with a `steps()` timing so they hop rather than glide, like the real thing, and the ship's `strafe` and the shot's `fire` share the same duration so the shot always launches from the ship. The scanline overlay is a repeating gradient on top of the screen.

### Why is it useful?

Retro, gaming, and 404 or loading screens use an arcade cabinet. This builds a cabinet with a playable-looking game using pure CSS shapes and animation, no images, with a reduced motion fallback.
