# Card Content Slide Reveal

A reusable card interaction where secondary content smoothly slides upward
into view when the card is hovered or receives keyboard focus.

## What does it do?

The component provides:

- Secondary content reveal.
- Smooth upward slide.
- Subtle card lift.
- Hover interaction.
- Keyboard focus interaction.
- Responsive layout.
- Reduced-motion support.
- No JavaScript.
- No external libraries or assets.

## How do I use it?

Create a card with a primary content section and a details section:

```html
<article class="ease-slide-card">
  <div class="ease-slide-card__main">
    <h3>Project Alpha</h3>
    <p>Short project description.</p>
  </div>

  <div class="ease-slide-card__details">
    <p>Additional project information.</p>
    <a href="#">Explore project</a>
  </div>
</article>
```