# Flip Effect for a Pricing Card

## What does this example do?
This example demonstrates a 3D animated pricing card component. By default, it displays high-level pricing information (the "Front"). When a user interacts with the card (either by hovering over it with a mouse or tabbing to it with a keyboard), the card smoothly rotates 180 degrees in 3D space to reveal a detailed feature list and a call-to-action button (the "Back").

## How is it used?
Wrap two sibling containers (front and back) inside an inner `.ease-flip-inner` wrapper, and place that inside a `.pricing-card` container. 

```html
<section class="pricing-card" tabindex="0">
    <div class="ease-flip-inner">
        <div class="ease-flip-front">
            <!-- Front content: Price, Name -->
        </div>
        <div class="ease-flip-back">
            <!-- Back content: Features, CTA button -->
        </div>
    </div>
</section>
```

The outer container establishes a 3D perspective (`perspective: 1000px`). The inner container handles the actual transition (`transform-style: preserve-3d`), and the individual front/back faces use `backface-visibility: hidden`.

## Why is it useful?
Pricing pages often struggle to balance simplicity with comprehensiveness. Showing too much detail upfront creates clutter, while showing too little fails to sell the product. A 3D flip card solves this by utilizing the Z-axis, allowing you to provide a clean initial glance and a detailed secondary view in the exact same footprint.

This implementation is:
- **Lightweight**: Pure CSS, requiring zero JavaScript overhead.
- **Accessible**: Uses `tabindex="0"` on the outer container and triggers the flip on `:focus` and `:focus-within`, ensuring screen-reader and keyboard-only users can access the back of the card. It includes a `@media (prefers-reduced-motion: reduce)` fallback that disables the transition entirely, instantly swapping the views.
- **Performant**: Uses a hardware-accelerated `transform: rotateY()` alongside a polished `cubic-bezier` timing function.
