# CSS Zoom-Out Tooltip for Modern SaaS Layouts

A pure CSS animated tooltip component that reveals with a smooth **zoom-out**
interaction transition, styled to complement modern SaaS interface aesthetics.
It is fully responsive, keyboard accessible, and exposes its timing, easing, and
scale factors through standard CSS custom properties — with **zero JavaScript
required** for the animation.

---

## 1. What does this do?

It renders a tooltip that, on hover or keyboard focus, animates from a slightly
enlarged (zoomed-in) state down to its natural size while fading and sliding
into place. The reverse happens on dismiss. The look matches modern SaaS UI:
soft elevation, rounded corners, an optional accent gradient, and crisp
typography.

---

## 2. How is it used?

Wrap a focusable trigger inside `.pp-tooltip-trigger`, then place a
`.pp-zoom-tooltip` element inside it with a position modifier
(`--top`, `--bottom`, `--left`, `--right`):

```html
<!-- Keyboard-accessible tooltip trigger wrapper -->
<div class="pp-tooltip-trigger" tabindex="0">
  <button type="button" class="pp-saas-btn">Hover me</button>

  <!-- Tooltip element with a position class -->
  <div class="pp-zoom-tooltip pp-zoom-tooltip--top" role="tooltip">
    Zoom-out tooltip text
  </div>
</div>
```

Optional skins:

```html
<div class="pp-zoom-tooltip pp-zoom-tooltip--right pp-zoom-tooltip--accent" role="tooltip">
  Accent gradient skin
</div>

<div class="pp-zoom-tooltip pp-zoom-tooltip--bottom pp-zoom-tooltip--danger" role="tooltip">
  This action is irreversible.
</div>
```

Rich tooltips with a title + body use the helper classes:

```html
<div class="pp-zoom-tooltip pp-zoom-tooltip--top" role="tooltip">
  <span class="pp-zoom-tooltip__title">Storage almost full</span>
  <span class="pp-zoom-tooltip__body">You have used 92% of your plan.</span>
</div>
```

---

## 3. Why is it useful?

- **Zero JavaScript overhead** — the entire zoom-out animation is driven by CSS
  transitions, so it ships with no runtime cost.
- **Modern SaaS aesthetic** — soft shadows, rounded surfaces, and an optional
  indigo→violet accent gradient that fits contemporary dashboards.
- **Accessible by default** — the trigger wrapper is focusable
  (`tabindex="0"`) and the tooltip shows on `:focus-within`, so keyboard and
  screen-reader users get the same experience as mouse users. `role="tooltip"`
  is applied, and `prefers-reduced-motion` disables the zoom for users who
  request it.
- **Fully tunable** — every animation parameter is a CSS custom property, so
  teams can re-theme timing, scale, travel distance, blur, and easing without
  touching the markup.
- **Conflict-free** — the component lives entirely inside
  `submissions/examples/`, so it never edits core framework files.

---

## Technical Specifications & Suffix

- **Folder Path:** `submissions/examples/ease-zoom-out-tooltip-saas-pp/`
- **Contributor Suffix:** `pp` (Pratyush Panda)
- **Resolved Ticket:** [Issue #46240](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46240)

### Included Files

| File | Purpose |
|------|---------|
| `demo.html` | Self-contained showcase (open directly in a browser) |
| `style.css` | The raw component + demo styling |
| `README.md` | This documentation |

### Tunable CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--tooltip-zoom-duration` | `260ms` | Length of the zoom-out transition |
| `--tooltip-zoom-easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Easing curve for the settle |
| `--tooltip-zoom-scale` | `1.12` | Starting scale (shrinks to `1`) |
| `--tooltip-zoom-offset` | `10px` | Distance the tooltip travels while zooming |
| `--tooltip-zoom-blur` | `0px` | Optional blur applied on entry |
| `--tooltip-bg` | `#0f172a` | Tooltip surface color |
| `--tooltip-fg` | `#f8fafc` | Tooltip text color |
| `--tooltip-radius` | `8px` | Corner radius |
| `--tooltip-padding-y` / `--tooltip-padding-x` | `8px` / `12px` | Inner padding |
| `--tooltip-font-size` | `0.8125rem` | Text size |
| `--tooltip-max-width` | `260px` | Max width before wrapping |
| `--tooltip-gap` | `10px` | Gap between trigger and tooltip |
| `--tooltip-z-index` | `9999` | Stacking order |
| `--tooltip-arrow-size` | `7px` | Arrow (caret) size |

### Position Variants

- `.pp-zoom-tooltip--top`
- `.pp-zoom-tooltip--bottom`
- `.pp-zoom-tooltip--left`
- `.pp-zoom-tooltip--right`

### Skin Variants

- `.pp-zoom-tooltip--accent` (indigo→violet gradient)
- `.pp-zoom-tooltip--success` (green)
- `.pp-zoom-tooltip--danger` (red)

### Accessibility Notes

- Trigger wrapper carries `tabindex="0"` so it is reachable by keyboard.
- `:focus-within` reveals the tooltip, mirroring the hover behavior.
- `role="tooltip"` is set on each bubble.
- A `prefers-reduced-motion: reduce` block removes the zoom transform and
  shortens the fade so motion-sensitive users are respected.

### Demo Controls

The `demo.html` includes an optional control dashboard (driven by a tiny,
non-required script) that live-updates the CSS custom properties — duration,
start scale, travel offset, entry blur, and easing preset — plus a light/dark
theme toggle. The tooltip animation itself works without any script.
