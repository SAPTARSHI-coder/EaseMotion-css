# ease-glassmorphism — Glassmorphism Utility Classes

## What does this do?

Applies the popular glassmorphism aesthetic — semi-transparent background with backdrop blur, subtle border, and soft shadow for a "frosted glass" effect.

## How is it used?

```html
<div class="ease-glass">
  <h2>Frosted Card</h2>
  <p>This has the glass effect.</p>
</div>

<div class="ease-glass ease-glass-dark">
  <p>Dark-themed glass.</p>
</div>
```

### Classes

| Class | Effect |
|---|---|
| `.ease-glass` | Light glass background (white/0.15, blur 12px) |
| `.ease-glass-dark` | Dark glass background (black/0.2, blur 12px) |
| `.ease-glass-sm` | Subtle glass (blur 8px) |
| `.ease-glass-lg` | Pronounced glass (blur 20px) |
| `.ease-glass-primary` | Primary-tinted glass |
| `.ease-glass-border` | Adds a subtle border to glass elements |
