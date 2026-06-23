# Animated Toggle Switch / Checkbox — Issue #14169

## What does this do?
A CSS-only animated toggle switch built on a hidden checkbox input. The knob slides smoothly between off (grey) and on (green) states using `transform: translateX` with a 250ms cubic-bezier transition. Pure CSS — no JavaScript required for the toggle animation.

## How is it used?
```html
<label class="ease-toggle">
  <input type="checkbox" class="ease-toggle-input">
  <span class="ease-toggle-track">
    <span class="ease-toggle-thumb"></span>
  </span>
</label>
```

## Classes
| Class | Description |
|---|---|
| `.ease-toggle` | Wrapper label; holds input, track, and thumb |
| `.ease-toggle-input` | Hidden checkbox (`opacity: 0; width: 0; height: 0`) |
| `.ease-toggle-track` | Pill-shaped background; green when checked, grey when unchecked |
| `.ease-toggle-thumb` | Circular knob that slides via `translateX` |
| `.ease-toggle-sm` | Small variant: 36x20px track, 14px thumb |
| `.ease-toggle-lg` | Large variant: 64x34px track, 26px thumb |

## Behavior
- **Checked state:** `:checked + .ease-toggle-track` sets background to `--ease-toggle-track-on` (emerald green), and `.ease-toggle-thumb` translates to the right edge
- **Focus ring:** `.ease-toggle:focus-within .ease-toggle-track` shows a blue box-shadow ring for keyboard navigation
- **Disabled:** `opacity: 0.4` with `cursor: not-allowed`
- **Dark/light mode:** CSS custom properties switch via `[data-theme]` on body

## Why is it useful for EaseMotion CSS?
Toggles are a high-demand pattern for settings pages. This provides a drop-in component with accessible keyboard handling, size variants, and disabled state.
