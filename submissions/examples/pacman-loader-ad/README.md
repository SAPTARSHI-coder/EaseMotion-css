# Retro Arcade Pac-Man Style Pure-CSS Loading Spinner

## 1. What does this do?
This submission implements a pure-CSS loading spinner designed after the classic 80s Pac-Man arcade game. It features a circular Pac-Man icon that opens and closes its mouth (jaw borders rotating at staggered angles) while translating/fading yellow food dots across a horizontal track.

## 2. How is it used?
Developers can use this component by placing the `.pacman-loader` container into their markup:

```html
<div class="pacman-loader">
  <div class="pacman-character">
    <div class="pacman-mouth-top"></div>
    <div class="pacman-mouth-bottom"></div>
  </div>
  <div class="pacman-dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</div>
```

## 3. Why is this useful?
It demonstrates clean pure-CSS animation techniques:
- **Rotational Border Masking:** Shows how to style circles using selective colored transparent borders and rotate them sequentially to create chewing mouth gestures.
- **Staggered Translation Loops:** Employs negative `animation-delay` offsets to sequence list elements across a linear path without complex JS interval timing.
- **Accessible Design:** Implements `aria-label` tags for screen readers alongside CSS media query safeguards for users with motion sensitivity.
