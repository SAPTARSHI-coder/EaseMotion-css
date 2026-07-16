# Xylophone

### What does this do?

It shows a toy xylophone being played. The mallet swings down and taps the top bar on a loop, notes float up and fade, and every bar can be struck by hand: hovering or focusing a bar presses it down and lights it up. Under reduced motion the mallet rests and the bars stop reacting.

### How is it used?

```html
<div class="xylo">
  <span class="frame"></span>
  <span class="bar bx1" tabindex="0"></span>
  <span class="bar bx2" tabindex="0"></span>
</div>
```

The mallet swings from `transform-origin: 92% 88%`, the grip at the far end of the stick, so the head travels a long arc down onto the bar while the hand end barely moves. The notes are timed to that swing rather than run on their own clock: they share the mallet's 1.6 second duration and stay invisible until 30 percent of the cycle, the moment the head lands, so the sound always appears on the strike. Each bar carries `tabindex="0"`, so a keyboard user can tab through the scale and get the same press and glow a mouse gives.

### Why is it useful?

Music, toy, and playful interface themes use a xylophone. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
