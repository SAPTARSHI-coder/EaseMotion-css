# Robot

### What does this do?

It shows a friendly robot hovering in place. Its antenna light blips, its two eyes blink every few seconds, and a row of status lights on its chest flash in sequence while the whole robot floats gently up and down. Under reduced motion the robot rests with its lights on.

### How is it used?

```html
<div class="robot">
  <span class="antenna"></span>
  <div class="head"><div class="face">...</div></div>
  <div class="body">...</div>
</div>
```

The head and body are rounded gradient blocks, the glowing eyes and antenna bulb use radial gradients, and separate animations drive the hover, the eye blink, the antenna blip, and the staggered chest lights.

### Why is it useful?

Tech mascots, loaders, and playful empty states use a robot. This builds an animated robot with pure CSS shapes and animation, no images, with a reduced motion fallback.
