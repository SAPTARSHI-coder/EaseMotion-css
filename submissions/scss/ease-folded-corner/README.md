# SCSS Folded Paper Corner Reveal (Hardware Accelerated)

A card where the top right corner is physically "folded down" with realistic shading, which then peels back on hover to reveal content underneath.

This submission demonstrates how to achieve a flawless, physical paper-folding effect using pure SCSS, complex `clip-path` math, and `linear-gradient` shading, completely bypassing the need for SVG clipping paths or JavaScript animation libraries.

---

## 🏛️ The Architecture

### 1. Cutting the Main Card
To make the card look like its corner has been removed, we apply a `clip-path` polygon to the parent card.
Instead of a standard 4-point rectangle, we create a 5-point polygon that traces the outline of the card but "cuts out" a triangle in the top right based on the `$fold-size` variable!

```scss
clip-path: polygon(
    0% 0%, 
    0% 100%, 
    100% 100%, 
    100% $fold-size, 
    calc(100% - #{$fold-size}) 0%
);
```

### 2. Creating the "Flap"
We use the `::before` pseudo-element to create the actual physical flap that appears to be folded down over the card. We make it a perfect square matching the `$fold-size`, position it in the top right, and apply a 3-point `clip-path` triangle to it.

```scss
/* The Triangle Flap */
clip-path: polygon(100% 0, 0 100%, 0 0);
```

### 3. Realistic 3D Shading
To make the flap look like physical paper rather than a flat triangle, we apply a `linear-gradient` to it. We create a "hard stop" exactly in the middle (50%) to simulate a shadow line where the paper creases, and then transition into a slightly lighter color for the underside of the flap!

```scss
background: linear-gradient(
    to bottom left, 
    transparent 50%, 
    rgba(0, 0, 0, 0.4) 50%, /* Hard shadow line where it folds */
    #1e293b 55%    /* The color of the flap */
);
```

### 4. The Hover Reveal Animation
On hover, we animate the `clip-path` of the main card back to a standard 4-point rectangle.
Simultaneously, we animate the `width` and `height` of the flap pseudo-element down to `0px`.
This creates a flawless illusion that the flap is physically peeling backward to restore the card's shape!

Because the flap initially covers the top right corner, you can place secret elements (like a "PRO" badge) in the top right of the card, which will be physically revealed as the flap peels away!

---

## 💻 Usage

Import the mixin into your SCSS file, and apply it to your card class. You can customize the size of the fold, the background colors, and the shadow intensity!

```scss
@import 'folded-corner';

.my-card {
    @include ease-folded-corner(
        $fold-size: 70px,
        $bg-color: #0f172a,
        $fold-color: #1e293b,
        $shadow-color: rgba(0, 0, 0, 0.6)
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`.
- **DOM Manipulations:** `0`. Uses existing pseudo-elements.
- **GPU Compositor:** By applying `will-change: clip-path, width, height`, the animations are extremely performant.
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that safely strips the complex `clip-path` animations and removes the flap entirely, ensuring the card functions properly.
