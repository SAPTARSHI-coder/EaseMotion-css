# CSS 3D Card Flip

**What does this do?**
Creates a CSS-only card that flips 180 degrees around the Y-axis with perspective depth, hidden backfaces, and no layout shift.

**How is it used?**
```html
<article class="flip-card" tabindex="0" style="--ease-flip-duration: 760ms; --ease-flip-perspective: 980px;">
  <div class="flip-card-inner">
    <div class="flip-face flip-front">Front content</div>
    <div class="flip-face flip-back">Back content</div>
  </div>
</article>
```

**Why is it useful?**
Flip cards are useful for compact product highlights, profile details, feature reveals, and stats that should stay in the same grid position. This fits EaseMotion CSS because the maintainer can turn the pattern into a small configurable utility for duration, perspective, radius, and accent color while keeping the effect dependency-free.
