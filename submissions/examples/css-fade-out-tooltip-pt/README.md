# CSS Fade-Out Tooltip (Minimalist Tech Theme)

### 1. What does this do?

This feature implements a pure CSS tooltip system utilizing an asymmetric transition strategy (snappy fade-in, smooth fade-out decay) styled specifically to complement minimalist tech and cyberpunk-themed developer interfaces.

### 2. How is it used?

Wrap the trigger element and the tooltip box in a `.ease-tooltip-container-pt` wrapper. The tooltip content is targetable with `.ease-tooltip-content-pt` and a placement modifier.

```html
<!-- Example of Top Placed Tooltip -->
<div class="ease-tooltip-container-pt">
  <button class="ease-tooltip-trigger-pt" aria-describedby="tooltip-desc">
    Trigger Element
  </button>
  <div
    class="ease-tooltip-content-pt ease-tooltip-top-pt"
    id="tooltip-desc"
    role="tooltip"
  >
    Tooltip Text Content
  </div>
</div>
```

#### Placements Available:

- `.ease-tooltip-top-pt` (Top placement with downward-pointing arrow)
- `.ease-tooltip-bottom-pt` (Bottom placement with upward-pointing arrow)
- `.ease-tooltip-left-pt` (Left placement with rightward-pointing arrow)
- `.ease-tooltip-right-pt` (Right placement with leftward-pointing arrow)

#### Theme Accent Skins Available:

- `.ease-tooltip-cyan-pt` (Neon Cyan border & glow)
- `.ease-tooltip-magenta-pt` (Neon Magenta border & glow)
- `.ease-tooltip-orange-pt` (Warning Orange status border & glow)
- `.ease-tooltip-hud-pt` (Translucent tech glassmorphism with double borders)
- `.ease-tooltip-holo-pt` (Holographic linear gradient borders)

#### Exposed Custom Variables:

Exposes developer-friendly CSS custom properties for easy tweaking:

```css
:root {
  --tooltip-bg: rgba(10, 15, 30, 0.95);
  --tooltip-color: #f8fafc;
  --tooltip-border-color: rgba(0, 242, 254, 0.25);
  --tooltip-border-radius: 6px;
  --tooltip-padding: 8px 14px;
  --tooltip-fade-in-duration: 180ms; /* snappy feedback on active/hover */
  --tooltip-fade-out-duration: 350ms; /* smooth decay to avoid flicker */
  --tooltip-scale-start: 0.94; /* initial pop scale factor */
  --tooltip-translate-offset: 8px; /* slide-in translation distance */
}
```

### 3. Why is it useful?

It aligns perfectly with EaseMotion's philosophy of delivering premium, responsive animations with **zero Javascript overhead**.

- **Accidental Pointer Slip Protection**: The asymmetric transition applies a fast entry response (`180ms`) and a slower, smooth exit decay (`350ms`), ensuring the tooltip doesn't immediately vanish or flicker if the user's cursor briefly slips off the trigger.
- **Accessibility out-of-the-box**: Features complete keyboard accessibility (supports hover and focus-within triggering), is screen-reader friendly (aria-describedby and role="tooltip"), and natively respects `@media (prefers-reduced-motion)` for motion-sensitive users.
- **Visual WOW factor**: Provides sophisticated glassmorphic backdrops, double borders, status light indicators, and neon glow effects tailored to elevate developer panels, analytics dashboards, and tech showcases.
