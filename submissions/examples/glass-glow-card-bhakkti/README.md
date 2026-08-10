# Glass Glow Card

A pure CSS glassmorphic card with a rotating gradient border and a soft neon-like glow effect.

## Features

- Frosted glass finish with `backdrop-filter: blur()`
- Rotating conic-gradient border via `.ease-glass-glow-card-border`
- Soft aura behind the card via `.ease-glass-glow-card-glow`
- Hover interaction that slightly lifts the card and strengthens the glow
- Reduced-motion support for accessibility

## Usage

1. Copy the files into your project.
2. Link the stylesheet in your HTML:

```html
<link rel="stylesheet" href="./style.css" />
```

3. Use the following structure:

```html
<div class="glass-card-shell">
  <div class="ease-glass-glow-card-glow" aria-hidden="true"></div>
  <div class="ease-glass-glow-card">
    <div class="ease-glass-glow-card-border" aria-hidden="true"></div>
    <div class="ease-glass-glow-card-content">
      <h1>Glassmorphic Glow Card</h1>
      <p>Your content goes here.</p>
    </div>
  </div>
</div>
```

## Customization

The component uses CSS variables so the palette can be adjusted easily:

```css
:root {
  --ease-glow-card-bg: rgba(255, 255, 255, 0.16);
  --ease-glow-card-border-a: #7dd3fc;
  --ease-glow-card-border-b: #a78bfa;
  --ease-glow-card-border-c: #f472b6;
  --ease-glow-card-glow: rgba(125, 211, 252, 0.55);
  --ease-glow-card-text: #f8fafc;
  --ease-glow-card-muted: rgba(248, 250, 252, 0.82);
}
```

## Notes

This example is intentionally written in pure CSS and does not depend on JavaScript.
