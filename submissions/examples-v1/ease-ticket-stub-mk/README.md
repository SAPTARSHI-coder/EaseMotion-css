# CSS-Only Ticket Stub Component

### What does this do?
This adds a stylized event/movie ticket component with perforated cutout edges created entirely using CSS `mask-image`, along with a subtle tactile hover animation.

### How is it used?
```html
<div class="ticket-stub">
  <div class="ticket-content">
    <h3>Event Name</h3>
    <p>Details</p>
  </div>
  <div class="ticket-tear-section">
    <span>#123</span>
  </div>
</div>
```

### Why is it useful?
It provides a physical-world, skeuomorphic UI component to the framework without needing inline SVGs, pseudo-element masking hacks, or extra HTML nodes. By leveraging advanced CSS masking, it remains lightweight, composable, and fits the animation-first philosophy with its playful hover state.
