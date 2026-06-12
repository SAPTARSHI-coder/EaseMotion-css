# ease-stagger-system

Composable staggered entrance utility system — automatic delays based on child index using CSS variables.

## Files

| File                        | Description           |
| --------------------------- | --------------------- |
| 📄 [demo.html](./demo.html) | Interactive demo      |
| 🎨 [style.css](./style.css) | Stagger system styles |
| 📖 [README.md](./README.md) | Documentation         |

## Classes

| Class                    | Effect    | Stagger Step |
| ------------------------ | --------- | ------------ |
| `ease-stagger-auto`      | Fade up   | 80ms         |
| `ease-stagger-fade-up`   | Fade up   | 80ms         |
| `ease-stagger-fade-left` | Fade left | 80ms         |
| `ease-stagger-zoom`      | Zoom in   | 80ms         |
| `ease-stagger-fast`      | Fade up   | 40ms         |
| `ease-stagger-slow`      | Fade up   | 150ms        |

## CSS Variables

| Variable          | Default  | Description                      |
| ----------------- | -------- | -------------------------------- |
| `--stagger-delay` | 80ms     | Delay between each child         |
| `--base-delay`    | 40ms     | Initial delay before first child |
| `--i`             | Auto-set | Child index (1-6)                |

## Usage

```html
<!-- Auto-stagger parent (up to 6 children) -->
<div class="ease-stagger-auto">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Different effects -->
<div class="ease-stagger-fade-up">...</div>
<div class="ease-stagger-fade-left">...</div>
<div class="ease-stagger-zoom">...</div>

<!-- Different speeds -->
<div class="ease-stagger-fast">Fast (40ms step)</div>
<div class="ease-stagger-slow">Slow (150ms step)</div>

<!-- Custom stagger using CSS variables -->
<div style="--stagger-delay: 100ms; --base-delay: 50ms;">
  <div style="--i: 1;">Item 1</div>
  <div style="--i: 2;">Item 2</div>
</div>
```
