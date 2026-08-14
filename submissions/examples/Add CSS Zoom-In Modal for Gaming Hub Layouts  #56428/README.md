# CSS Zoom-In Modal (Gaming Hub Layouts)

A pure CSS interactive modal featuring a snappy spring-bounced **Zoom-In** transition designed for competitive **Gaming Hub & Matchmaking Lobby Layouts**.

## Features

- **Pure CSS State Management**: Powered entirely by the `:target` pseudo-class and anchor hyperlinks (`#modal-id`), requiring zero JavaScript for modal opening or backdrop closing.
- **EaseMotion Integrated**: Uses core design variables and the `.ease-squish-button` micro-interaction utility class.
- **Snappy Zoom-In Physics**: Smoothly scales from `--zoom-start-scale` to `scale(1)` using a bouncy spring cubic-bezier easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Cyber-Neon HUD Styling**: Features glowing cyan/purple borders, dark glassmorphism (`backdrop-filter: blur(20px)`), and monospace telemetry grids.
- **Accessible & Responsive**: Full ARIA dialog semantics (`role="dialog"`, `aria-modal="true"`) and `@media (prefers-reduced-motion: reduce)` support that disables zoom scaling for instant, accessible overlay rendering.

## Custom Properties

```css
:root {
  --zoom-duration: 0.4s;
  --zoom-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --zoom-start-scale: 0.75;
  --neon-cyan: #00f0ff;
  --neon-purple: #8b5cf6;
}
```

## Usage

Include `easemotion.css` and `style.css`, link an anchor button to the modal's ID, and add an overlay closer:

```html
<a href="#modal-id" class="hud-btn ease-squish-button">Open Modal</a>

<div id="modal-id" class="modal-overlay" role="dialog" aria-modal="true">
  <a href="#" class="modal-close-bg" aria-label="Close modal"></a>
  <div class="modal-box">
    <a href="#" class="modal-close" aria-label="Close modal">&times;</a>
    <h2 class="modal-title">Title</h2>
    <p class="modal-desc">Description</p>
  </div>
</div>
```
