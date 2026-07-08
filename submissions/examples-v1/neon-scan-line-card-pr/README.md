# Neon Scan Line Card Effect

## What does this do?
A futuristic card animation featuring a glowing neon scan line that
continuously moves from top to bottom across the card surface, creating
a cyberpunk-style scanning appearance.

## How is it used?

```html
<div class="ease-scan-card">
  <h2>System Online</h2>
  <p>Scanning active...</p>
</div>

<!-- Preset color variants -->
<div class="ease-scan-card ease-scan-card-magenta">...</div>
<div class="ease-scan-card ease-scan-card-green">...</div>
```

Customize the scan color via:

```css
.my-card {
  --ease-scan-color: #f59e0b;
}
```

## Why is it useful?
Inspired by cyberpunk interfaces, sci-fi HUD systems, futuristic control
panels, and gaming UI dashboards. Transforms a static card into a visually
dynamic component, ideal for modern dashboards and creative landing pages.
Pure CSS, no JS required, with prefers-reduced-motion support.