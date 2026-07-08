# Scroll Trigger Progress

A vertical progress bar that fills based on the page scroll position.

## Usage

Include `style.css` and add the progress bar element:

```html
<div class="stp-bar" id="stpBar"></div>
```

JavaScript calculates scroll percentage and sets `--stp-progress`:

```js
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  bar.style.setProperty('--stp-progress', Math.min(pct, 100));
});
```

## CSS Variables

| Variable                      | Default  | Description             |
|-------------------------------|----------|-------------------------|
| `--stp-bar-color`             | `#6366f1`| Progress bar fill color |
| `--stp-bg-color`              | `#e5e7eb`| Bar track background    |
| `--stp-height`                | `4px`    | Bar thickness           |
| `--stp-transition-duration`   | `0.1s`   | Width transition speed  |

## Browser Support

All modern browsers supporting CSS custom properties.
