# ease-fade-in-progress-bar

Pure CSS progress bars where each row fades and slides up into place, then the fill sweeps in behind it. Zero JavaScript.

Resolves #54434.

## What it does

A set of labeled progress bars. On page load, each row fades in and slides up slightly, then its fill bar sweeps from 0% to its target width with a matching fade — staggered per row via `animation-delay` for a cascading entrance.

## How to use it

Copy `style.css` into your project, then mark up a bar like this:

```html
<div class="ease-progress-fade" style="--ease-progress-fade-duration: 0.9s; --ease-progress-fade-easing: ease-out; --ease-progress-fade-offset: 0.6rem;">
  <div class="ease-progress-fade__item" style="--ease-progress-fade-value: 64%;">
    <div class="ease-progress-fade__label">
      <span>Project completion</span>
      <span class="ease-progress-fade__pct">64%</span>
    </div>
    <div class="ease-progress-fade__track" role="progressbar" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" aria-label="Project completion">
      <div class="ease-progress-fade__fill"></div>
    </div>
  </div>
</div>
```

Add more `.ease-progress-fade__item` blocks for additional bars, giving each an `animation-delay` inline (e.g. `0.12s`, `0.24s`) to stagger the cascade. Open `demo.html` directly in a browser — no build step or server needed.

### Customizing

| Property | Default | Set on | Effect |
|---|---|---|---|
| `--ease-progress-fade-duration` | `0.9s` | `.ease-progress-fade` | Length of the entrance + fill animation |
| `--ease-progress-fade-easing` | `ease-out` | `.ease-progress-fade` | Timing function for both animations |
| `--ease-progress-fade-offset` | `0.6rem` | `.ease-progress-fade` | Starting slide-up distance for each row |
| `--ease-progress-fade-value` | `0%` | each `.ease-progress-fade__item` | Target fill width — **required** per bar |

## Why it fits EaseMotion CSS

- **No JavaScript**: driven entirely by `@keyframes` and CSS custom properties — the row entrance and fill sweep are both pure CSS animations that run automatically on load.
- **Accessible**: each track carries `role="progressbar"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax` and a descriptive `aria-label`.
- **Respects `prefers-reduced-motion`**: animations are disabled and each bar appears directly in its final state.
- **Responsive**: tracks grow slightly thicker on small viewports for touch legibility; layout is a simple flex column that reflows naturally at any width.
- Distinct from the framework's zoom-in progress bar variant: whole-row fade + slide entrance instead of a label bounce, teal palette instead of indigo, softer rounded track instead of a full pill shape.

## Browsers tested

Chrome · Firefox · Edge