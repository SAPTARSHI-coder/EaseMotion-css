# Monochrome Neo Shimmer Pulse Modal

## 1. What does this do?

This component provides a pure CSS overlay modal that fades, scales, and pulses into position with a single-shot spring overshoot while triggering an elegant silver shimmer sweep, styled in a minimalist Monochrome Neo aesthetic.

## 2. How is it used?

Anchor the modal to a trigger link using standard target IDs and wrap the inner contents with a shimmer highlight element.

### HTML Structure:

```html
<!-- Trigger Anchor Link -->
<a href="#neo-modal" class="neo-trigger-btn"> INITIALIZE MODAL </a>

<!-- Modal Overlay Wrapper (target ID matches the anchor link href) -->
<div
  id="neo-modal"
