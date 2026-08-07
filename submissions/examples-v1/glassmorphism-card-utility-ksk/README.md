# Glassmorphism Card Utility (`glassmorphism-card-utility-ksk`)

1. What does this do?  
A reusable Glassmorphism Card Utility class (`.glass-card`) that creates a frosted-glass effect using backdrop blur, translucent background fills, and luminous borders. It fits modern UI aesthetics for dashboards, login forms, hero blocks, and feature cards.

2. How is it used?  
Add `.glass-card` to any container element. Optionally append utility modifiers like `.glass-card-hover`, `.glass-card-dark`, or `.glass-card-glow`:

```html
<div class="glass-card">
  <h2>Glass Card</h2>
  <p>This is a reusable glassmorphism card utility.</p>
</div>
```

Customize glass refraction tokens via CSS custom properties:
```css
.glass-card {
  --glass-bg:            rgba(255, 255, 255, 0.15);
  --glass-blur:          12px;
  --glass-border:        1px solid rgba(255, 255, 255, 0.25);
  --glass-shadow:        0 8px 24px rgba(0, 0, 0, 0.15);
  --glass-radius:        16px;
}
```

3. Why is it useful?  
Adheres to the EaseMotion CSS philosophy by offering a single-class, lightweight, and human-readable UI effect. Enhances modern interfaces without requiring custom CSS or heavy frameworks.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #53622 / #53626.*
