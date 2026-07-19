# Horizontal Roll Tooltip

A pure CSS animated tooltip for marketing landing pages, styled with a
Vercel / Framer / Linear-inspired card layout. The tooltip uses a smooth
horizontal roll interaction, appears on hover and keyboard focus, and exposes
its motion settings through CSS custom properties.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Standalone centered-card demo |
| `style.css` | Tooltip styles and landing-page presentation |
| `README.md` | Usage and customization notes |

## Usage

```html
<div class="tooltip tooltip--top">
  <a class="cta-button" href="#features" aria-describedby="explore-tooltip">
    Explore Components
  </a>

  <span class="tooltip__bubble" id="explore-tooltip" role="tooltip">
    Browse animated components built with accessible CSS patterns.
  </span>
</div>
```

## Custom Properties

```css
:root {
  --tooltip-duration: 360ms;
  --tooltip-easing: cubic-bezier(0.22, 1, 0.36, 1);
  --tooltip-distance: 18px;
  --tooltip-scale-start: 0.94;
  --tooltip-scale-end: 1;
  --tooltip-gap: 14px;
  --tooltip-radius: 14px;
  --tooltip-bg: #111827;
  --tooltip-color: #ffffff;
  --tooltip-shadow: 0 18px 44px rgba(17, 24, 39, 0.22);
  --tooltip-max-width: 260px;
}
```

Override variables globally or on a single tooltip:

```html
<div
  class="tooltip tooltip--top"
  style="--tooltip-duration: 520ms; --tooltip-distance: 24px;"
>
  ...
</div>
```

## Accessibility

- The trigger references the tooltip with `aria-describedby`.
- The bubble uses `role="tooltip"`.
- The tooltip opens on both `:hover` and `:focus-within`.
- The CTA has a visible `:focus-visible` outline.
- The `prefers-reduced-motion` media query removes the roll movement while
  keeping the tooltip available.
- Tooltip content wraps with a viewport-aware max width on small screens.

## Design Notes

- Background: `#f8fafc` with subtle gradient depth.
- Accent: `#6366f1`.
- Button hover: `#4f46e5`.
- Text: `#111827`.
- Secondary text: `#6b7280`.
- Card: centered, 24px radius, soft shadow, generous responsive padding.