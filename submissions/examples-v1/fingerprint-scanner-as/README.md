# Fingerprint Scanner

### What does this do?

It shows a fingerprint scanner animation. A dim fingerprint made of arced ridges is progressively revealed in glowing green as a scan line sweeps down and back, with a status label below. Under reduced motion the print shows fully with no sweep.

### How is it used?

```html
<div class="fp">
  <svg class="fp-base">...</svg>
  <svg class="fp-scan">...</svg>
  <span class="scan-line"></span>
</div>
```

Two copies of the fingerprint stack: a dim `fp-base` and a bright `fp-scan`. An animated `clip-path: inset(...)` reveals the green copy top to bottom while a glowing `scan-line` sweeps in sync, giving the reading effect.

### Why is it useful?

Auth screens, security demos, and device unlock flows use a fingerprint scan. This builds the animation with pure CSS clip paths and a sweeping line, with no images or script, and a static fallback.
