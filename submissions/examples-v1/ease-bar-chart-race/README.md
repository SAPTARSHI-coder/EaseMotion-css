# ease-bar-chart-race

A pure CSS animated bar chart race component. Bars grow, shrink, and reorder on a continuous loop to simulate ranking changes over time — no JavaScript required.

Resolves #40780.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-bar-chart-race" role="img" aria-label="Animated bar chart race showing ranking changes over time">
  <div class="ease-bcr-row" style="--rank-order: 1;">
    <span class="ease-bcr-label">Chrome</span>
    <div class="ease-bcr-track">
      <div class="ease-bcr-bar ease-bcr-bar-1"></div>
    </div>
    <span class="ease-bcr-value ease-bcr-value-1"></span>
  </div>
  <!-- add ease-bcr-row / ease-bcr-bar-N / ease-bcr-value-N up to 5 items -->
</div>
```

## Classes

| Class | Purpose |
|---|---|
| `.ease-bar-chart-race` | Container. Holds CSS custom properties for sizing/color. |
| `.ease-bcr-row` | One ranked item (label + track + value). |
| `.ease-bcr-label` | Item name. |
| `.ease-bcr-track` | Background track the bar animates inside. |
| `.ease-bcr-bar`, `.ease-bcr-bar-1`…`.ease-bcr-bar-5` | The animated bar. Suffix selects color + width keyframes. |
| `.ease-bcr-value`, `.ease-bcr-value-1`…`.ease-bcr-value-5` | Numeric readout, animated via `content` on `::before`. |
| `.ease-bcr-compact` | Modifier for a smaller footprint (sidebar/card use). |

## Customization

All sizing and color is exposed via CSS custom properties on `.ease-bar-chart-race`:

```css
.ease-bar-chart-race {
  --ease-bcr-duration: 8s;      /* full loop length */
  --ease-bcr-bar-height: 2rem;
  --ease-bcr-gap: 0.75rem;
  --ease-bcr-radius: 0.4rem;
  --ease-bcr-track-bg: #eef1f5;
  --ease-bcr-label-width: 5.5rem;
  --ease-bcr-value-width: 3.5rem;
  --ease-bcr-color-1: #4f46e5;
  --ease-bcr-color-2: #06b6d4;
  --ease-bcr-color-3: #f59e0b;
  --ease-bcr-color-4: #ef4444;
  --ease-bcr-color-5: #10b981;
}
```

## Notes

- Supports up to 5 ranked rows out of the box (`ease-bcr-bar-1` … `ease-bcr-bar-5`); extend the keyframe set following the same pattern for more.
- Reordering uses the CSS `order` property driven by `@keyframes`, so rows physically swap position in sync with each bar's width change — the "race" effect.
- Respects `prefers-reduced-motion: reduce` by disabling all animation.
- Zero dependencies, zero JavaScript.
