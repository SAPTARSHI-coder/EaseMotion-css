# Noise Texture Overlay

A CSS component that adds subtle grain texture to backgrounds using an SVG filter pattern, creating depth and visual interest in modern web design.

## What does this do?

This creates a noise texture overlay using a base64-encoded SVG filter pattern that can be applied to any background, with customizable opacity and blend modes via CSS custom properties.

## How is it used?

```html
<div class="noise-overlay">
  <div class="noise-overlay-content">
    <!-- Your content here -->
  </div>
</div>

<!-- Intensity variants -->
<div class="noise-overlay noise-light">...</div>
<div class="noise-overlay noise-medium">...</div>
<div class="noise-overlay noise-heavy">...</div>

<!-- Blend mode variants -->
<div class="noise-overlay noise-multiply">...</div>
<div class="noise-overlay noise-screen">...</div>
<div class="noise-overlay noise-soft-light">...</div>
```

The noise pattern is applied via a `::before` pseudo-element with an SVG filter:

```css
.noise-overlay::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200'...");
  opacity: var(--noise-opacity, 0.05);
  mix-blend-mode: var(--noise-blend, overlay);
}
```

## Why is it useful?

Noise overlays are a fundamental design pattern for adding texture and reducing the "flat" appearance of solid colors and gradients. They're essential for creating premium, polished interfaces in minimalist designs, dark themes, and creative portfolios. The CSS-only approach using base64 SVG filters demonstrates practical texture techniques without external image dependencies. The component is highly customizable with CSS custom properties for opacity and blend modes, making it versatile for different design contexts while keeping the implementation lightweight and self-contained.
