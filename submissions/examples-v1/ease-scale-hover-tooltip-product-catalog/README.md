# EaseMotion Product Catalog Tooltip

An interactive, high-performance scale-hover tooltip component designed specifically for E-commerce Product Catalogs.

## What does this do?
The **EaseMotion Product Catalog Tooltip** is a pure HTML & CSS component configured for dense interfaces like product grids and card configurations. It facilitates quick actions, swatch detail definitions, stock breakdowns, ratings, and specification guidance without any JavaScript reliance.

---

## How is it used?

Wrap the trigger item (like a button, swatch circle, or badge) and the tooltip inside a container with class `.ease-catalog-tooltip-wrapper`.

### 1. Color / Switch Swatch Trigger
Perfect for clothing, hardware, or keyboard switches:

```html
<div class="ease-catalog-tooltip-wrapper">
  <button class="swatch-btn" style="background-color: #ef4444;" aria-label="Cherry MX Red Swatch" aria-describedby="tooltip-swatch-red"></button>
  <span id="tooltip-swatch-red" class="ease-catalog-tooltip ease-catalog-tooltip-top" role="tooltip">
    Cherry MX Red: Linear & Quiet
  </span>
</div>
```

### 2. Rating Stars Trigger
Show review breakdown charts on ratings:

```html
<div class="ease-catalog-tooltip-wrapper rating-row">
  <div class="stars-list">
    <!-- Star Icons Here -->
  </div>
  <span class="ease-catalog-tooltip ease-catalog-tooltip-bottom ease-catalog-tooltip-warning" role="tooltip">
    4.8 / 5.0 stars (1,240 reviews)
  </span>
</div>
```

### 3. Specifications Panel Trigger
Render multi-line rich details inside a tooltip positioned left or right:

```html
<div class="ease-catalog-tooltip-wrapper spec-info-btn">
  <span>Specs</span>
  <span class="ease-catalog-tooltip ease-catalog-tooltip-left ease-catalog-tooltip-glass" role="tooltip">
    <div class="rich-spec-tooltip">
      <div class="spec-title">Product Specs</div>
      <ul class="spec-list">
        <li><span class="spec-label">Weight:</span> <span>1.2 kg</span></li>
        <li><span class="spec-label">Material:</span> <span>Aluminium</span></li>
      </ul>
    </div>
  </span>
</div>
```

---

## Placement Options
Add these modifiers to `.ease-catalog-tooltip`:
- `.ease-catalog-tooltip-top` - Positioned above, arrow pointing down.
- `.ease-catalog-tooltip-bottom` - Positioned below, arrow pointing up.
- `.ease-catalog-tooltip-left` - Positioned to the left, arrow pointing right.
- `.ease-catalog-tooltip-right` - Positioned to the right, arrow pointing left.

---

## Thematic Options
- `.ease-catalog-tooltip-accent` - Primary brand color theme.
- `.ease-catalog-tooltip-success` - Green status indicator (e.g. stock highlights).
- `.ease-catalog-tooltip-danger` - Red status indicator (e.g. out of stock / alerts).
- `.ease-catalog-tooltip-warning` - Amber rating indicator.
- `.ease-catalog-tooltip-light` - Premium light mode theme with border shadows.
- `.ease-catalog-tooltip-glass` - Translucent card style using `backdrop-filter: blur()`.

---

## CSS Variables Customization API
You can control tooltip styling globally or locally per wrapper instance via these Custom Properties:

| Variable | Description | Fallback Mapping |
| :--- | :--- | :--- |
| `--ease-catalog-tooltip-bg` | Tooltip background and arrow border color | `var(--ease-color-neutral-900)` (`#0f172a`) |
| `--ease-catalog-tooltip-color` | Text color | `var(--ease-color-neutral-50)` (`#f8fafc`) |
| `--ease-catalog-tooltip-radius` | Border radius | `var(--ease-radius-md)` (`0.5rem` / `8px`) |
| `--ease-catalog-tooltip-shadow` | Box shadow strength | `var(--ease-shadow-lg)` |
| `--ease-catalog-tooltip-spacing` | Margin offset space from trigger | `var(--ease-space-2)` (`8px`) |
| `--ease-catalog-tooltip-duration` | Transition animation time | `var(--ease-speed-medium)` (`300ms`) |
| `--ease-catalog-tooltip-easing` | Custom timing function curve | `var(--ease-ease-bounce)` |
| `--ease-catalog-tooltip-scale-factor`| Initial scaling size on hover entrance | `0.92` (scales up to `1`) |

---

## Core Technical Features

### ⚡ GPU Acceleration
All hover and focus transitions are bound entirely to `opacity` and `transform: translate() scale()`. Since these properties run directly on the compositing layer, the browser avoids page layout reflows and repaints, resulting in smooth 60fps rendering.

### 📱 Responsive Alignment Fallback
In dense product grids, left/right tooltips can overflow the screen on mobile devices. Media queries (`max-width: 768px`) automatically force left (`.ease-catalog-tooltip-left`) and right (`.ease-catalog-tooltip-right`) tooltips to align to the **top** (`.ease-catalog-tooltip-top`) with a downward pointing arrow, preventing any overflow.

### ♿ Accessibility (A11y)
- **Focus Rings**: Employs `:focus-visible` styling to mark focused triggers.
- **Form Auditing**: Integrates with `:focus-within` on the wrapper, so tabbing through inputs immediately triggers tooltips.
- **Motion Reduction**: Respects system preferences via `@media (prefers-reduced-motion: reduce)`, disabling scaling transitions and setting the fade transition to a fast `50ms`.
