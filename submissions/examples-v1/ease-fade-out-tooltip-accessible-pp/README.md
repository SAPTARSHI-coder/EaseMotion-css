# CSS Fade-Out Tooltip for Accessible Web Layouts

A pure CSS animated tooltip component that reveals with a smooth **fade-out**
interaction transition, styled to complement **Accessible Web** aesthetics. It is
fully responsive, keyboard accessible, WCAG AA compliant, and exposes its
timing, easing, and lift factors through standard CSS custom properties — with
**zero JavaScript required** for the animation.

---

## 1. What does this do?

It renders a tooltip that, on hover or keyboard focus, fades and settles into
place, then **fades and lifts away** on dismiss (the "fade-out" interaction).
The look matches accessible web UI: high contrast colors meeting WCAG AA
ratios, clear focus indicators, reduced motion support, and semantic HTML.

---

## 2. How is it used?

Wrap a focusable trigger inside `.pp-tooltip-trigger`, then place a
`.pp-fade-tooltip` element inside it with a position modifier
(`--top`, `--bottom`, `--left`, `--right`):

```html
<!-- Keyboard-accessible tooltip trigger wrapper -->
<div class="pp-tooltip-trigger" tabindex="0">
  <button type="button" class="pp-a11y-btn">Hover me</button>

  <!-- Tooltip element with a position class -->
  <div class="pp-fade-tooltip pp-fade-tooltip--top" role="tooltip">
    Fade-out tooltip text
  </div>
</div>
```

Optional skins:

```html
<div class="pp-fade-tooltip pp-fade-tooltip--right pp-fade-tooltip--accent" role="tooltip">
  Accent skin
</div>

<div class="pp-fade-tooltip pp-fade-tooltip--bottom pp-fade-tooltip--danger" role="tooltip">
  This action is irreversible.
</div>
```

Rich tooltips with a title + body use the helper classes:

```html
<div class="pp-fade-tooltip pp-fade-tooltip--top" role="tooltip">
  <span class="pp-fade-tooltip__title">Sync complete</span>
  <span class="pp-fade-tooltip__body">All 1,204 files were uploaded successfully.</span>
</div>
```

---

## 3. Why is it useful?

- **Zero JavaScript overhead** — the entire fade-out animation is driven by CSS
  transitions, so it ships with no runtime cost.
- **Accessible Web aesthetic** — WCAG AA compliant contrast ratios, clear
  focus indicators (3px outline), `prefers-reduced-motion` support, and
  `prefers-contrast: more` media query handling.
- **Accessible by default** — the trigger wrapper is focusable
  (`tabindex="0"`) and the tooltip shows on `:focus-within`, so keyboard and
  screen-reader users get the same experience as mouse users. `role="tooltip"`
  is applied, and `prefers-reduced-motion` disables the lift for users who
  request it.
- **Fully tunable** — every animation parameter is a CSS custom property, so
  teams can re-theme timing, lift distance, blur, and easing without touching
  the markup.
- **Conflict-free** — the component lives entirely inside
  `submissions/examples/`, so it never edits core framework files.

---

## Technical Specifications & Suffix

- **Folder Path:** `submissions/examples/ease-fade-out-tooltip-accessible-pp/`
- **Contributor Suffix:** `pp` (Pratyush Panda)
- **Resolved Ticket:** [Issue #46237](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46237)

### Included Files

| File | Purpose |
|------|---------|
| `demo.html` | Self-contained showcase (open directly in a browser) |
| `style.css` | The raw component + demo styling |
| `README.md` | This documentation |

### Tunable CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--tooltip-fade-duration` | `200ms` | Length of the fade in/out transition |
| `--tooltip-fade-easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Easing curve for the fade |
| `--tooltip-fade-lift` | `6px` | Vertical travel distance while fading |
| `--tooltip-fade-blur` | `0px` | Optional blur applied on entry |
| `--tooltip-bg` | `#1a1a2e` | Tooltip surface color |
| `--tooltip-fg` | `#ffffff` | Tooltip text color |
| `--tooltip-radius` | `6px` | Corner radius |
| `--tooltip-padding-y` / `--tooltip-padding-x` | `8px` / `12px` | Inner padding |
| `--tooltip-font-size` | `0.8125rem` | Text size |
| `--tooltip-max-width` | `260px` | Max width before wrapping |
| `--tooltip-gap` | `10px` | Gap between trigger and tooltip |
| `--tooltip-z-index` | `9999` | Stacking order |
| `--tooltip-arrow-size` | `7px` | Arrow (caret) size |
| `--tooltip-glow` | accent ring + shadow | Elevation / glow of the bubble |

### Position Variants

- `.pp-fade-tooltip--top`
- `.pp-fade-tooltip--bottom`
- `.pp-fade-tooltip--left`
- `.pp-fade-tooltip--right`

### Skin Variants

- `.pp-fade-tooltip--accent` (accessible blue)
- `.pp-fade-tooltip--success` (accessible green)
- `.pp-fade-tooltip--danger` (accessible red)

### Accessibility Notes

- Trigger wrapper carries `tabindex="0"` so it is reachable by keyboard.
- `:focus-within` reveals the tooltip, mirroring the hover behavior.
- `role="tooltip"` is set on each bubble.
- A `prefers-reduced-motion: reduce` block removes the lift transform and
  shortens the fade so motion-sensitive users are respected.
- A `prefers-contrast: more` block increases contrast and outline thickness.
- All colors meet WCAG AA contrast ratios (4.5:1 for text, 3:1 for UI components).
- Focus indicators use 3px solid outlines with offset for visibility.

### Demo Controls

The `demo.html` includes an optional control dashboard (driven by a tiny,
non-required script) that live-updates the CSS custom properties — duration,
lift distance, entry blur, and easing preset — plus a light/dark theme toggle.
The tooltip animation itself works without any script.