# Claw Machine

### What does this do?

It shows an arcade claw machine running a full grab on a loop. The joystick tilts, the button presses, the rig slides along its rail, the cable reels out as the claw drops into the pile of prizes, the prongs pinch shut, and everything lifts back up. Under reduced motion the claw rests at the top.

### How is it used?

```html
<div class="cabinet">
  <div class="rig">
    <span class="cable"></span>
    <div class="claw"><span class="prong lp"></span><span class="prong rp"></span></div>
  </div>
  <div class="pile"><span class="toy t1"></span></div>
</div>
```

The whole grab is choreographed by giving every part the same six second duration and lining up their keyframe percentages: the `rig` slides first, then the `cable` stretches with `scaleY` while the `claw` translates down, then the prongs `pinch` closed, and the sequence reverses. Because the timings share one clock, the parts stay in step without any JavaScript.

### Why is it useful?

Arcade, prize, and gacha themes use a claw machine. This builds a full claw grab cycle with pure CSS animation, no images, with a reduced motion fallback.
