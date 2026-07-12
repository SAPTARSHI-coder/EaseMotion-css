# ease-document-scroll-progress

**Issue #36604** — A fixed-position scroll progress bar with a floating percentage indicator.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--progress-color` | `#6c5ce7` | Color of the progress bar fill |
| `--track-color` | `#2d2d3d` | Background color of the track |
| `--progress-height` | `4px` | Height of the progress bar |
| `--indicator-bg` | `#6c5ce7` | Background color of the circular indicator |

## Usage

```html
<aside class="ease-scroll-progress">
  <div class="ease-scroll-progress__track">
    <div class="ease-scroll-progress__bar" id="bar"></div>
  </div>
  <div class="ease-scroll-progress__indicator" id="indicator">0%</div>
</aside>
```

Pair with a scroll listener that sets `bar.style.width` and `indicator.textContent` to the current scroll percentage.
