# Spinning Gradient Border Card

A striking card component that features a continuously spinning, glowing neon gradient along its border.

## Preview
Open `demo.html` in your browser. You will see a dark card with a neon cyan/magenta border actively spinning around its perimeter.

## Implementation
- The effect is an illusion created with CSS pseudo-elements.
- `.border-card::before` is a large square behind the card content containing a `conic-gradient`. It rotates continuously using `@keyframes`.
- `.border-card::after` is a slightly smaller dark rectangle placed directly over the conic gradient.
- Because it is slightly smaller (`inset: 4px`), the spinning gradient is only visible at the edges, creating a "border" effect.
