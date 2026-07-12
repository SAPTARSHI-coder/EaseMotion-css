# Accessible Web Zoom-In Tooltip

A pure CSS tooltip where **accessibility is the design language**, not a
footnote. The tooltip zooms in gently on `:hover` / `:focus-visible` with
deliberately calm motion, and every visual decision is measured: contrast
ratios, focus visibility, target size, motion safety, and Windows High
Contrast support. Zero JavaScript.

Resolves Issue: #34287

## ✨ Features

- **Calm Zoom-In** — scales from `0.8` to full size on a plain ease-out
  curve (`cubic-bezier(0.33, 1, 0.68, 1)`); no overshoot, nothing that
  could disorient. Fully tunable via `--ax-tt-*` custom properties.
- **Measured contrast** — tooltip is near-black on warm paper with
  `#f5f2ea` text (≈13.9:1) and a gold heading (≈10.9:1); button and body
  text pairs all clear WCAG AA, most clear AAA.
- **Unmissable focus indicator** — a double ring (3px paper gap + 3px blue
  ring) via `box-shadow`, so keyboard position is obvious on any backdrop.
- **44px+ touch targets** — every trigger is a real `<button>` with
  `min-height: 46px` and generous padding.
- **Larger tooltip type** — 0.85rem body at 1.6 line-height; hint text that
  people can actually read.
- **`forced-colors` support** — under Windows High Contrast the component
  keeps visible borders, swaps the focus ring for a system `Highlight`
  outline, and lets the system repaint fills.
- **Motion-safe** — `prefers-reduced-motion` removes the scale journey
  entirely.
- **Zero JavaScript** — sibling-selector reveal (`.ax-btn:hover + .ax-tip`),
  identical path for pointer and keyboard, wired with `aria-describedby` →
  `role="tooltip"`.

## 🔧 Custom Properties

| Property             | Default                           | Role                |
| -------------------- | --------------------------------- | ------------------- |
| `--ax-tt-scale-from` | `0.8`                             | Starting scale      |
| `--ax-tt-duration`   | `220ms`                           | Zoom time           |
| `--ax-tt-ease`       | `cubic-bezier(0.33, 1, 0.68, 1)`  | Ease-out curve      |
| `--ax-focus-ring`    | double ring recipe                | Focus indicator     |

## 🚀 Usage

```html
<span class="ax-anchor">
  <button class="ax-btn" type="button" aria-describedby="my-tip">
    A+ Text Size
  </button>
  <span class="ax-tip" id="my-tip" role="tooltip">
    <span class="ax-tip-heading">Larger Text</span>
    Plain-language description of what the control does.
  </span>
</span>
```

## 📂 Files

- `demo.html` — public-library "reading tools" toolbar with three controls.
- `style.css` — contrast-measured tokens, calm zoom engine, reduced-motion
  and forced-colors guards.
- `README.md` — this document.
