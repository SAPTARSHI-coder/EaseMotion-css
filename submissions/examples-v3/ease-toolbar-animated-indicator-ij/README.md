# Toolbar Animated Indicator

**EaseMotion CSS Showcase** · `submissions/examples/ease-toolbar-animated-indicator-ij/`

A horizontal toolbar with icon buttons where a colored underline bar slides smoothly between items on click. Built with pure CSS transitions and minimal vanilla JS.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/ease-toolbar-animated-indicator-ij/demo.html
```

---

## Design Theme

Clean, modern toolbar UI with a playful spring‑like easing curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for the indicator motion.

| Token | Value | Purpose |
|---|---|---|
| `--tai-primary` | `#6366f1` | Active indicator bar / active icon color |
| `--tai-surface` | `#ffffff` | Toolbar background |
| `--tai-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Overshoot‑spring easing for indicator |

---

## Component Breakdown

### 1. Toolbar (`.tai-toolbar`)
- A flex container with `overflow: hidden` to clip the indicator bar.
- Each button (`.tai-item`) is a flex‑column layout with an SVG icon and label.

### 2. Animated Indicator (`.tai-indicator-bar`)
- An absolutely‑positioned bar pinned to the bottom of the toolbar.
- Uses `transition: transform 0.4s var(--tai-ease), width 0.4s var(--tai-ease)` to slide to the active item's position whenever the `.tai-active` class changes.

### 3. JavaScript Behavior
- On click, `.tai-active` is removed from all items and added to the clicked one.
- The indicator's `width` and `translateX` are calculated from `getBoundingClientRect()` and applied as inline styles for a hardware‑accelerated slide.

---

## File Structure

```
ease-toolbar-animated-indicator-ij/
├── demo.html   — Full demo page
├── style.css   — Styles & animations
└── README.md   — This documentation
```
