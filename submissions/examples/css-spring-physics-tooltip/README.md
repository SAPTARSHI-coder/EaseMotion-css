# CSS Spring Physics Tooltip

This submission implements a **pure CSS animated tooltip** utilizing smooth spring physics interaction transitions for **Modern SaaS layouts**. Issue **#46282**.

## Description

The `spring-tooltip` component provides a lightweight, zero-JavaScript tooltip with realistic spring physics animation. It uses CSS custom properties to expose spring parameters (tension, friction, scale, timing) for full customization. The tooltip supports four positions (top, bottom, left, right), multiple animation variants (bounce, wobble), and respects `prefers-reduced-motion` for accessibility.

## Acceptance Criteria

- Pure CSS animated tooltip with spring physics interaction transition
- Styled for Modern SaaS interface aesthetics
- Fully responsive (desktop + mobile)
- Keyboard accessible (Tab focus, Escape to close)
- Custom parameters via CSS custom properties:
  - `--spring-duration` — animation timing
  - `--spring-scale-start` — entrance scale factor
  - `--spring-bounce`, `--spring-tension`, `--spring-friction` — spring physics tuning
  - `--tooltip-bg`, `--tooltip-color`, `--tooltip-radius` — appearance tokens
- Supports `prefers-reduced-motion` for motion-sensitive users
- Supports `prefers-color-scheme: dark` mode
- Supports `forced-colors` (high contrast) mode
- Zero JavaScript dependency for core functionality

## Usage

### HTML Structure

```html
<div class="spring-tooltip spring-tooltip--top" tabindex="0" role="tooltip" aria-describedby="tip-1">
  <button class="trigger-btn">Hover Me</button>
  <div class="spring-tooltip__content" id="tip-1" role="tooltip">
    Your tooltip content here.
  </div>
</div>
```

### CSS Custom Properties

Override any of these on `:root` or a parent element:

```css
:root {
  --spring-duration: 0.4s;       /* Animation timing */
  --spring-scale-start: 0.85;    /* Start scale (0-1) */
  --spring-scale-end: 1;         /* End scale */
  --tooltip-bg: #1a1a2e;         /* Background color */
  --tooltip-color: #ffffff;      /* Text color */
  --tooltip-radius: 10px;        /* Border radius */
  --tooltip-padding: 12px 18px;  /* Inner padding */
  --tooltip-font-size: 14px;     /* Font size */
  --tooltip-shadow: 0 8px 32px rgba(0, 0, 0, 0.25); /* Shadow */
  --tooltip-max-width: 280px;    /* Max width */
}
```

### Animation Variants

```html
<!-- Default spring (cubic-bezier) -->
<div class="spring-tooltip spring-tooltip--top">...</div>

<!-- Bounce variant (keyframe-based) -->
<div class="spring-tooltip spring-tooltip--top spring-tooltip--bounce">...</div>

<!-- Wobble variant (playful) -->
<div class="spring-tooltip spring-tooltip--top spring-tooltip--wobble">...</div>
```

### Inline Customization

```html
<div class="spring-tooltip spring-tooltip--top"
     style="--spring-duration: 0.25s; --tooltip-bg: #6c63ff; --tooltip-radius: 14px">
  <button>Fast Branded Tip</button>
  <div class="spring-tooltip__content">Custom spring parameters.</div>
</div>
```

## Files

| File | Purpose |
|------|---------|
| `style.css` | Core CSS with spring physics animations, all positions, responsive, accessibility |
| `demo.html` | Self-contained demo page showcasing all variants |
| `README.md` | This documentation file |

## Why This Fits EaseMotion

EaseMotion is an animation-first CSS framework. This component:

- Adds a highly requested modern aesthetic pattern (spring physics tooltips) to the library
- Requires zero JavaScript overhead — pure CSS animations
- Uses CSS custom properties for runtime customization
- Follows the framework's philosophy of human-readable, accessible CSS
- Provides multiple animation variants for different UI contexts

## Browser Support

- Chrome 66+
- Firefox 52+
- Safari 13.1+
- Edge 79+

## Accessibility

- Keyboard navigable via `tabindex="0"` and focus/blur events
- `role="tooltip"` and `aria-describedby` for screen reader support
- `prefers-reduced-motion` disables animations for motion-sensitive users
- `forced-colors` mode adds proper borders for high contrast
- Focus indicator with visible outline
