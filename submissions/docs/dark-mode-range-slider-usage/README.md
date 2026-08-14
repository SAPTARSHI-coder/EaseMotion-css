# Dark Mode Range Slider — Basic Usage

## What this documents
Usage documentation for the `ease-range-slider` component: a styled `<input type="range">` designed dark-mode-first, with a light-mode override modifier and accent color modifiers.

## Quick start
```html
<div class="ease-range-slider" style="--ease-range-value: 50%;">
  <div class="range-label-row">
    <span class="range-name">Volume</span>
    <span class="range-value">50%</span>
  </div>
  <input type="range" min="0" max="100" value="50" aria-label="Volume" />
</div>
```

Add this small script once per page to keep the fill in sync as the user drags:
```js
document.querySelectorAll('.ease-range-slider').forEach((wrap) => {
  const input = wrap.querySelector('input[type=range]');
  const label = wrap.querySelector('.range-value');
  input.addEventListener('input', () => {
    wrap.style.setProperty('--ease-range-value', input.value + '%');
    label.textContent = input.value + '%';
  });
});
```

## Class naming conventions

| Class | Purpose |
|---|---|
| `ease-range-slider` | Base container (required). Dark palette by default, following EaseMotion's `ease-` prefix convention. |
| `ease-range-slider--light` | BEM-style modifier switching to the light-mode palette. |
| `ease-range-slider--pink` | Modifier changing the fill/thumb accent color. |
| `range-label-row` | Optional label + live-value row above the input (not prefixed, since it's an internal structural element, not a standalone utility). |

Modifiers follow BEM (`block--modifier`) so they compose predictably: `class="ease-range-slider ease-range-slider--light ease-range-slider--pink"` applies both overrides together.

## CSS custom property overrides

| Property | Default (dark) | Description |
|---|---|---|
| `--ease-range-value` | *(required, set by dev/JS)* | Current fill percentage — drives the visual fill position |
| `--ease-range-track-bg` | `#1a1a2e` | Unfilled track color |
| `--ease-range-fill` | `#38bdf8` | Filled track / thumb accent color |
| `--ease-range-thumb-size` | `20px` | Thumb diameter |
| `--ease-range-height` | `6px` | Track thickness |

Override any of these inline or in your own stylesheet:
```html
<div class="ease-range-slider" style="--ease-range-fill: #22c55e; --ease-range-value: 40%;">
```

## Accessibility & keyboard interaction

Built on a native `<input type="range">`, so standard range-input keyboard behavior works with zero extra code:

| Key | Action |
|---|---|
| `←` / `↓` | Decrease value by one step |
| `→` / `↑` | Increase value by one step |
| `Home` | Jump to minimum value |
| `End` | Jump to maximum value |
| `Page Up` / `Page Down` | Larger increment/decrement steps |

- Always provide a descriptive `aria-label` (or associate a real `<label for="">`) — visible label text next to the input is **not** automatically read by screen readers unless linked.
- Focus state uses a visible `box-shadow` ring (`:focus-visible`), not just a color change, for visibility in both palettes.
- Respects `prefers-reduced-motion` by disabling the thumb's hover/active scale transition.

## Files
- `demo.html` — interactive usage guide covering basic markup, light-mode override, color modifiers, the sync script, and full reference tables
- `style.css` — demo styling plus the documented `ease-range-slider` implementation
- `README.md` — this file