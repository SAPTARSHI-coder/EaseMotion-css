# Skew-Active Neon Tooltip

A pure CSS tooltip component with a **skew-active interaction transition**, styled for
Cyberpunk Neon interfaces. Built with zero JavaScript — works on hover and keyboard
focus alike.

## ✨ Features

- **Skew-active animation** — the tooltip rests at a skewed angle and straightens
  out (`skewX(var(--tooltip-skew)) → skewX(0deg)`) as it becomes active, paired
  with a fade + scale for a punchy cyberpunk pop-in.
- **Four positions** — top, bottom, left, right, each with a matching directional
  arrow/notch.
- **Fully keyboard accessible** — uses `:focus-within` and `:focus-visible` so
  tooltips appear for keyboard users tabbing through triggers, not just mouse hover.
- **Responsive** — tooltip text wraps and shrinks on small screens instead of
  overflowing.
- **Reduced motion support** — respects `prefers-reduced-motion` and disables the
  transform/transition for users who need it.
- **Customizable via CSS custom properties** — no need to touch the core rules to
  retheme or retime the component.

## 🎛️ Custom Properties

All configurable via CSS variables on `:root` or scoped to a specific trigger:

| Variable              | Default                          | Description                                  |
|-----------------------|-----------------------------------|-----------------------------------------------|
| `--tooltip-bg`         | `#0d0221`                        | Tooltip background color                     |
| `--tooltip-border`     | `#ff00d4`                        | Border / glow accent color (magenta neon)    |
| `--tooltip-glow`       | `#00fff9`                        | Secondary glow / trigger accent (cyan neon)  |
| `--tooltip-text`       | `#f5f5ff`                        | Tooltip text color                           |
| `--tooltip-font-size`  | `0.85rem`                        | Tooltip text size                            |
| `--tooltip-duration`   | `260ms`                          | Transition duration                          |
| `--tooltip-easing`     | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Transition easing (default has slight overshoot) |
| `--tooltip-scale`      | `1`                              | Scale factor applied on activation           |
| `--tooltip-skew`       | `-8deg`                          | Resting skew angle, resolves to 0 when active|
| `--tooltip-offset`     | `12px`                           | Gap between trigger and tooltip              |

### Example: overriding per-instance

```css
.neon-trigger--fast {
  --tooltip-duration: 130ms;
  --tooltip-scale: 1.08;
  --tooltip-skew: -14deg;
}
```

This is demonstrated live in `demo.html` via the "Fast & Punchy" trigger.

## 🧩 Usage

```html
<div class="tooltip-wrap">
  <button
    class="neon-trigger"
    data-tooltip="Your text here"
    data-position="top"
    aria-describedby="tip-id"
  >
    Hover or Tab to me
  </button>
  <span class="neon-tooltip neon-tooltip--top" id="tip-id" role="tooltip">
    Your text here
  </span>
</div>
```

- Swap `neon-tooltip--top` for `--bottom`, `--left`, or `--right` to change
  placement.
- `aria-describedby` on the trigger should match the tooltip's `id` for screen
  reader support.
- `role="tooltip"` marks the span for assistive tech.

## ♿ Accessibility Notes

- Tooltip visibility is driven by `:hover` **and** `:focus-within` /
  `:focus-visible`, so keyboard-only users see the same tooltip as mouse users.
- `aria-describedby` + `role="tooltip"` gives screen readers the relationship
  between trigger and tooltip content.
- Respects `prefers-reduced-motion` by disabling the skew/scale transform.

## 📁 Files

- `demo.html` — live showcase with all four tooltip positions plus a
  custom-timing example
- `style.css` — component styles and CSS custom properties
- `README.md` — this file

## 🔗 Issue

Closes #34340 — Enhancement: Add CSS Skew-Active Tooltip for Cyberpunk Neon Layouts