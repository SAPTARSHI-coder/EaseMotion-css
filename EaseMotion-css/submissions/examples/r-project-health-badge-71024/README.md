# CSS Project Health Badge

A responsive project health badge using a Red-Amber-Green status system to communicate project condition at a glance.

## Features

- Healthy, Attention, and Critical states
- Red-Amber-Green status system
- Pure CSS implementation
- Animated status indicator
- Hover elevation effect
- Responsive layout
- Semantic HTML
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` — Interactive health badge demonstration
- `style.css` — Component styling and animations
- `README.md` — Feature documentation

## Usage

The component can be used as a status card:

```html
<article class="health-card healthy">
  <div class="health-content">
    <span class="status-label">PROJECT HEALTH</span>
    <h2>Healthy</h2>
    <p>All systems are operating normally.</p>
  </div>

  <span class="health-dot" aria-hidden="true"></span>
</article>