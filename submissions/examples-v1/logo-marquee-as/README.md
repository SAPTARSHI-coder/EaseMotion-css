# Logo Marquee

### What does this do?

It scrolls a horizontal strip of logos in an endless loop with a soft fade on both edges. The list of logos is duplicated so the loop has no visible seam, and the animation pauses on hover. It uses only CSS.

### How is it used?

```html
<div class="marquee">
  <div class="marquee-track">
    <span class="logo">Acme</span>
    <span class="logo">Globex</span>
    <!-- repeat the same set once for a seamless loop -->
  </div>
</div>
```

The track animates to `translateX(-50%)`, so it must contain the logo set twice. The second copy is marked `aria-hidden` so screen readers do not hear duplicates.

### Why is it useful?

Trusted by logo strips are common on landing pages. This builds a seamless infinite marquee with edge fades and a hover pause, using only CSS keyframes. Under reduced motion the scroll is disabled.
