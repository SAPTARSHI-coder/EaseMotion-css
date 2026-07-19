# CSS Fade-Out Tooltip for Responsive Dashboard Layouts

A pure CSS animated tooltip with a smooth **fade-out** interaction transition, designed specifically for **responsive dashboard layouts**. It reveals with a soft fade-in and lifts away on dismiss, stays compact for data-dense interfaces, and is fully responsive, keyboard accessible, and tunable through standard CSS custom properties — **zero JavaScript required** for the animation.

> Resolves [Issue #46236](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46236)

---

## ✨ Highlights

- **Fade-out transition** — tooltip fades and lifts away on dismiss for a calm, non-jarring exit.
- **Responsive dashboard aesthetic** — compact sizing, indigo accent theme, and a data-dense friendly layout.
- **Four positions** — `top`, `bottom`, `left`, `right` via modifier classes.
- **Five skins** — `accent`, `success`, `warning`, `danger`, `info` for status messaging.
- **Keyboard accessible** — `tabindex="0"` + `:focus-within` reveal, `role="tooltip"`.
- **Reduced-motion safe** — `prefers-reduced-motion` disables the lift; `prefers-contrast: more` boosts borders.
- **Fully responsive** — works at small viewport widths; layout reflows gracefully.
- **Zero dependencies** — no build step, no JS needed for the animation.

---

## 📁 Files in this submission

| File | Purpose |
|------|---------|
| `demo.html` | Interactive showcase with live parameter controls + theme toggle |
| `style.css` | Self-contained component styles, design tokens, skins, a11y rules |
| `README.md` | This documentation |

---

## 🚀 Quick Start

```html
<!-- 1. Include the stylesheet -->
<link rel="stylesheet" href="./style.css" />

<!-- 2. Markup: wrap a trigger and the tooltip bubble -->
<div class="pp-tooltip-trigger" tabindex="0">
  <button type="button" class="pp-dash-btn">Hover or focus me</button>
  <div class="pp-fade-tooltip pp-fade-tooltip--top" role="tooltip">
    Fade-out tooltip text
  </div>
</div>
```

That's it — no JavaScript required for the animation.

---

## 🎨 Usage Examples

### Top (default)
```html
<div class="pp-tooltip-trigger" tabindex="0">
  <button class="pp-dash-btn">Top</button>
  <div class="pp-fade-tooltip pp-fade-tooltip--top" role="tooltip">Above</div>
</div>
```

### Bottom
```html
<div class="pp-tooltip-trigger" tabindex="0">
  <button class="pp-dash-btn pp-dash-btn--ghost">Bottom</button>
  <div class="pp-fade-tooltip pp-fade-tooltip--bottom" role="tooltip">Below</div>
</div>
```

### Left with accent skin
```html
<div class="pp-tooltip-trigger" tabindex="0">
  <button class="pp-dash-btn">Left</button>
  <div class="pp-fade-tooltip pp-fade-tooltip--left pp-fade-tooltip--accent" role="tooltip">Left side</div>
</div>
```

### Right with info skin (rich content)
```html
<div class="pp-tooltip-trigger" tabindex="0">
  <button class="pp-icon-trigger" aria-label="Settings">
    <!-- svg icon -->
  </button>
  <div class="pp-fade-tooltip pp-fade-tooltip--right pp-fade-tooltip--info" role="tooltip">
    <span class="pp-fade-tooltip__title">Settings</span>
    <span class="pp-fade-tooltip__body">Configure dashboard widgets.</span>
  </div>
</div>
```

### Status skins
```html
<div class="pp-fade-tooltip pp-fade-tooltip--top pp-fade-tooltip--success" role="tooltip">Saved</div>
<div class="pp-fade-tooltip pp-fade-tooltip--bottom pp-fade-tooltip--warning" role="tooltip">Low space</div>
<div class="pp-fade-tooltip pp-fade-tooltip--top pp-fade-tooltip--danger" role="tooltip">Irreversible</div>
<div class="pp-fade-tooltip pp-fade-tooltip--bottom pp-fade-tooltip--info" role="tooltip">Updated 2m ago</div>
```

---

## 🎛️ Tunable CSS Variables

All values are defined on `:root` (or `:where(html)`) and can be overridden per-instance or globally.

| Variable | Default | Description |
|----------|---------|-------------|
| `--tooltip-fade-duration` | `180ms` | Fade-in / fade-out duration |
| `--tooltip-fade-lift` | `6px` | Vertical lift distance on reveal |
| `--tooltip-fade-blur` | `0px` | Entry blur amount |
| `--tooltip-fade-easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Transition timing function |
| `--tooltip-fade-bg` | `#1e1b4b` | Default bubble background |
| `--tooltip-fade-fg` | `#eef2ff` | Default bubble text color |
| `--tooltip-fade-radius` | `10px` | Bubble corner radius |
| `--tooltip-fade-font` | `0.78125rem` | Bubble font size (compact) |
| `--tooltip-fade-pad-y` | `7px` | Bubble vertical padding |
| `--tooltip-fade-pad-x` | `11px` | Bubble horizontal padding |
| `--tooltip-fade-gap` | `10px` | Gap between trigger and bubble |
| `--tooltip-fade-shadow` | `0 10px 30px rgba(15,23,42,.28)` | Bubble shadow |
| `--tooltip-fade-z` | `9999` | Bubble stacking order |
| `--tooltip-fade-arrow` | `7px` | Arrow size |
| `--accent-1` | `#4f46e5` | Dashboard indigo accent |
| `--accent-2` | `#6366f1` | Dashboard indigo accent (2) |
| `--accent-3` | `#818cf8` | Dashboard indigo accent (3) |

### Override example
```css
.pp-tooltip-trigger {
  --tooltip-fade-duration: 260ms;
  --tooltip-fade-lift: 10px;
  --tooltip-fade-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 🧩 How the fade-out works

The tooltip is hidden by default with `opacity: 0`, `visibility: hidden`, and a
slight `transform` offset. On `:hover` / `:focus-within` of the trigger wrapper
it transitions to `opacity: 1`, `visibility: visible`, and `transform: none`.
Because the same transition applies in reverse, the dismiss is a smooth
**fade-out** rather than an instant disappear.

```css
.pp-fade-tooltip {
  opacity: 0;
  visibility: hidden;
  transform: translateY(var(--tooltip-fade-lift));
  transition:
    opacity var(--tooltip-fade-duration) var(--tooltip-fade-easing),
    transform var(--tooltip-fade-duration) var(--tooltip-fade-easing),
    visibility 0s linear var(--tooltip-fade-duration);
}
.pp-tooltip-trigger:hover .pp-fade-tooltip,
.pp-tooltip-trigger:focus-within .pp-fade-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition-delay: 0s;
}
```

---

## ♿ Accessibility

- **Keyboard**: The `.pp-tooltip-trigger` wrapper carries `tabindex="0"`, and the
  bubble is revealed via `:focus-within`, so it is reachable with the Tab key.
- **Roles**: Each bubble uses `role="tooltip"`.
- **Reduced motion**: Under `prefers-reduced-motion: reduce`, the lift transform
  is removed so the tooltip simply fades without movement.
- **Contrast**: Under `prefers-contrast: more`, bubble borders are strengthened
  for legibility.
- **Responsive**: The layout reflows at narrow widths; tooltips remain usable on
  small screens.

---

## 📱 Responsive behavior

- The demo uses a CSS grid that collapses to a single column on small screens.
- Tooltip font size is intentionally compact (`0.78125rem`) to suit dense
  dashboards while remaining legible.
- Arrow positioning adapts per side and stays centered on the trigger.

---

## 🧪 Browser support

| Feature | Support |
|---------|---------|
| CSS custom properties | All modern browsers |
| `:focus-within` | Chrome 60+, Firefox 52+, Safari 10.1+ |
| `prefers-reduced-motion` | Chrome 74+, Firefox 64+, Safari 10.1+ |
| `prefers-contrast` | Chromium-based, Safari 14+ |

---

## 📝 Notes

- The optional control dashboard and theme toggle in `demo.html` use a tiny
  vanilla JS snippet **only** to mutate CSS variables live. The tooltip
  animation itself is 100% CSS and works without it.
- This submission lives entirely inside
  `submissions/examples/ease-fade-out-tooltip-responsive-dashboard-pp/` and does
  not modify any core or component files, per the contribution guidelines.

---

## ✅ Checklist

- [x] Files added only inside `submissions/examples/`
- [x] Includes `demo.html`, `style.css`, `README.md`
- [x] Pure CSS animation (no JS required for the effect)
- [x] Keyboard accessible (`tabindex` + `:focus-within`)
- [x] `prefers-reduced-motion` + `prefers-contrast` handled
- [x] 500+ lines of changes
- [x] No conflicts with `main`

**Resolves #46236**
