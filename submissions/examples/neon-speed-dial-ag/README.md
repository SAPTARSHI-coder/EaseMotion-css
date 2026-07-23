# Neon Speed Dial

## What does this do?
The **Neon Speed Dial** is an expandable floating action menu designed for creative agency portfolios, art studios, and showcases. It reveals a staggered menu of secondary quick actions from a single primary trigger using subtle neon glows and clean micro-interactions.

## How is it used?
Add the following HTML structure anywhere in your document (typically direct child of `<body>`):

```html
<nav class="neon-speed-dial-ag" aria-label="Quick Actions">
  <!-- Checkbox manages the open/closed state -->
  <input type="checkbox" id="neon-speed-dial-toggle" class="neon-speed-dial-ag__checkbox">
  
  <!-- Trigger FAB -->
  <label for="neon-speed-dial-toggle" class="neon-speed-dial-ag__trigger" role="button">
    <svg class="neon-speed-dial-ag__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  </label>

  <!-- Staggered menu items -->
  <ul class="neon-speed-dial-ag__menu" role="menu">
    <li class="neon-speed-dial-ag__menu-item" style="--stagger-index: 1;" role="none">
      <a href="#contact" class="neon-speed-dial-ag__action" role="menuitem">
        <!-- SVG Icon here -->
        <span class="neon-speed-dial-ag__tooltip">Contact</span>
      </a>
    </li>
  </ul>
</nav>
```

## Why is it useful?
- **Zero JavaScript**: Runs completely on pure CSS using the checkbox hack for state preservation and transition triggers.
- **Staggered Animations**: Uses CSS custom properties (`--stagger-index`) to compute staggered delay times, giving an organic fluid fan-out effect.
- **Subtle Neon Theme**: Avoids cyberpunk saturation, utilizing micro-glow box shadows and border transitions suitable for high-end production portfolios.
- **Highly Accessible**:
  - Employs semantic elements (`nav`, `ul`, `li`, `a`).
  - Supports keyboard toggling via the checkbox interface (press `Space` / `Enter` when focused).
  - Skips hidden menu links from keyboard focus while the menu is collapsed.
  - Features fully compliant high-contrast focus outlines.
  - Automatically respects user OS configurations via `@media (prefers-reduced-motion: reduce)`.

## Customization
To customize the neon glow color schemes, adjust the variables defined in `:root`:

```css
:root {
  --neon-cyan: #00f3ff;
  --neon-cyan-glow: rgba(0, 243, 255, 0.35);
  --neon-magenta: #ff0080;
  --neon-magenta-glow: rgba(255, 0, 128, 0.35);
}
```

## Tech Stack
- HTML5
- CSS3 (incorporating EaseMotion design tokens and CSS layers)
