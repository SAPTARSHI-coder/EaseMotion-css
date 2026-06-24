# Staggered Feature Cards Grid

A responsive feature grid template where cards stagger in sequentially on load or scroll, using pure CSS `nth-child` animation delays. Features structured icon + title + description card layouts with interactive hover highlights.

## EaseMotion CSS Classes Showcased

This feature submits a self-contained prototype demonstrating staggered entrance delays.

### Classes:
- `.ease-feature-grid`: Container grid wrapping card elements.
- `.ease-feature-card`: Custom layout card combining title and text wrappers. Applies `.ease-slide-up` and `.ease-fade-in` entrance patterns.
- Stagger delays: Configured programmatically inside CSS using `nth-child(n)` targeting for automatic animation offset increments.

### Usage in HTML:
```html
<div class="ease-feature-grid">
  <div class="ease-feature-card ease-fade-in ease-slide-up">
    <div class="feature-icon">🚀</div>
    <h3>Launch Faster</h3>
    <p>Deploy applications immediately with zero setup lag.</p>
  </div>
</div>
```

---
Created as a contribution to EaseMotion CSS. Open `demo.html` in any browser to view the interactive prototype!
