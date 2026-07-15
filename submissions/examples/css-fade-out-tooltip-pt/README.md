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

---

## Full Feature Reference

### CSS-Only Click / Tap Toggle (No JavaScript)

Pin a tooltip open using the checkbox hack. The hidden checkbox drives the
reveal, and dismissing still plays the smooth fade-out decay.

```html
<div class="ease-tooltip-container-pt">
  <input type="checkbox" id="t1" class="ease-tooltip-toggle-pt" aria-hidden="true" />
  <label class="ease-tooltip-label-pt btn-tech-pt" for="t1" aria-describedby="tip1">
    PIN ME
  </label>
  <div class="ease-tooltip-content-pt ease-tooltip-top-pt" id="tip1" role="tooltip">
    Pinned open via CSS only.
  </div>
</div>
```

### Size Variants

- `.ease-tooltip-sm-pt` — compact padding/font/arrow
- `.ease-tooltip-lg-pt` — larger padding, wider `max-width`

### Arrow Alignment Modifiers

Shift the arrow toward an edge to align with off-center triggers:

- `.ease-tooltip-arrow-start-pt`
- `.ease-tooltip-arrow-end-pt`

### Entrance Keyframe Animations

- `.ease-tooltip-anim-rise-pt` — slides up while fading in
- `.ease-tooltip-anim-pop-pt` — springy scale pop
- `.ease-tooltip-anim-blur-pt` — blur-to-sharp reveal

The fade-out decay transition still governs the exit, so dismissing always
feels smooth regardless of entrance choice.

### Rich Content Layouts

Inner helpers for dense dashboards:

- `.tooltip-progress-pt` (with inner `<span style="width:NN%">`) — meter
- `.tooltip-tags-pt` (with `<span>` children) — chip row
- `.tooltip-divider-pt` — hairline separator
- `.tooltip-icon-row-pt` — icon + text row

### Icon-Only Triggers

`.ease-tooltip-icon-trigger-pt` renders a square, accessible icon button that
still exposes a tooltip on hover/focus.

### Status Accent Modifiers

Semantic color states that recolor border, glow and status dot:

- `.ease-tooltip-success-pt`
- `.ease-tooltip-info-pt`
- `.ease-tooltip-danger-pt`

### Delay Modifiers

Control the appear delay without affecting the fade-out decay:

- `.ease-tooltip-delay-none-pt` (`0ms`)
- `.ease-tooltip-delay-short-pt` (`120ms`)
- `.ease-tooltip-delay-long-pt` (`320ms`)

### Responsive, Touch, Forced-Colors & Print

- `@media (max-width: 600px)` widens `max-width` and stacks the grid.
- `@media (hover: none)` disables sticky hover and relies on focus-within +
  the click toggle for touch.
- `@media (forced-colors: active)` swaps to high-contrast `CanvasText`.
- `@media print` hides tooltips (interactive overlays, not printed content).

### Exposed Custom Properties (full list)

```css
:root {
  --tooltip-bg: rgba(10, 15, 30, 0.95);
  --tooltip-color: #f8fafc;
  --tooltip-border-color: rgba(0, 242, 254, 0.25);
  --tooltip-border-width: 1px;
  --tooltip-border-radius: 6px;
  --tooltip-font-family: "Outfit", "JetBrains Mono", monospace;
  --tooltip-font-size: 0.775rem;
  --tooltip-line-height: 1.4;
  --tooltip-padding: 8px 14px;
  --tooltip-shadow: 0 12px 30px -10px rgba(0,0,0,0.75);
  --tooltip-z-index: 1000;
  --tooltip-fade-in-duration: 180ms;   /* snappy feedback */
  --tooltip-fade-out-duration: 350ms;  /* smooth decay */
  --tooltip-easing: cubic-bezier(0.16, 1, 0.3, 1);
  --tooltip-scale-start: 0.94;
  --tooltip-translate-offset: 8px;
  --tooltip-arrow-size: 5px;
  --tooltip-appear-delay: 0ms;         /* used by delay modifiers */
}
```
