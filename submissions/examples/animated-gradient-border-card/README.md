# Animated Gradient Border Card

A lightweight card pattern with a continuously moving gradient around its
border.

## What does it do?

The component creates an animated frame around card content while keeping the
inner surface static and readable.

It provides:

- Continuously rotating gradient border.
- Multiple gradient variations.
- Static and readable card content.
- Optional hover elevation.
- Responsive card layout.
- Reduced-motion support.
- No JavaScript.
- No external libraries or assets.

## How do I use it?

Create a card using the `gradient-border-card` class:

```html
<article class="gradient-border-card">
  <div class="gradient-border-card__content">
    <span>Featured</span>
    <h2>Animated Surface</h2>
    <p>
      A subtle moving gradient creates depth around the card.
    </p>
  </div>
</article>