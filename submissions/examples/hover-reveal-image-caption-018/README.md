# Hover Reveal Image Caption

A lightweight image-card interaction that reveals contextual information
from the bottom of the visual when hovered or focused.

## What does it do?

The component provides:

- Bottom-to-top caption reveal.
- Smooth opacity transition.
- Mouse hover support.
- Keyboard focus support.
- Subtle background visual movement.
- Responsive card layout.
- Reduced-motion support.
- No JavaScript.
- No external assets or libraries.

## How do I use it?

Create a card with a media element and caption:

```html
<figure class="hover-caption-card">
  <div
    class="hover-caption-card__media"
    role="img"
    aria-label="Example image"
    tabindex="0"
  >
    Visual
  </div>

  <figcaption class="hover-caption-card__caption">
    <strong>Featured Work</strong>
    <span>A smooth caption reveal interaction.</span>
  </figcaption>
</figure>
```