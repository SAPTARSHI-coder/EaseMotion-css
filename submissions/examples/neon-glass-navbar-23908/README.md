# Neon Glass Navigation Bar

## What does this do?

A CSS-only navigation bar combining glassmorphism (`backdrop-filter: blur()`) and neon glow effects. Features frosted glass background, glowing link hover states, animated underline indicators, and gradient CTA button.

## How is it used?

```html
<nav class="neon-glass-navbar">
  <div class="logo">Brand</div>
  <ul class="nav-links">
    <li><a href="#" class="active">Home</a></li>
    <li><a href="#">Link</a></li>
  </ul>
  <button class="cta-btn">Action</button>
</nav>
```

| Variant | Effect |
|---------|--------|
| `neon-glass-navbar` | Cyan/magenta neon |
| `neon-glass-navbar-green` | Green/blue neon |
| `neon-glass-navbar-dark` | Denser glass overlay |

Customize colors via CSS variables: `--neon-cyan`, `--neon-magenta`, `--neon-green`, `--glass-bg`.

## Why is it useful?

Demonstrates real-world component combining glassmorphism, neon glow, animated indicators, and responsive behavior — all CSS-only. Respects `prefers-reduced-motion`.
