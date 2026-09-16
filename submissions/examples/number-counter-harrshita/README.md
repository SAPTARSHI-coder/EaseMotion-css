# Animated Number Counter

CSS-animated number counter that counts up when it enters the viewport, using
Intersection Observer and CSS keyframes.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-counter" data-target="10000" data-suffix="+">
  <div class="ease-counter__icon">&#128101;</div>
  <div class="ease-counter__value" aria-live="polite">0</div>
  <div class="ease-counter__label">Users</div>
</div>

<script>
  // Intersection Observer triggers animation when counter enters viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = "1";
        animateCounter(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll(".ease-counter").forEach(el => observer.observe(el));
</script>
```

## Data Attributes

| Attribute | Description |
|-----------|-------------|
| `data-target` | Target number to count up to |
| `data-suffix` | Optional suffix (e.g., `+`, `%`, `K`) |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-counter` | Counter card wrapper |
| `.ease-counter__icon` | Emoji or SVG icon |
| `.ease-counter__value` | The animating number |
| `.ease-counter__label` | Descriptive label |
| `.ease-counter--animated` | Added by JS to trigger CSS animation |
| `.ease-counter-grid` | Grid layout wrapper for multiple counters |

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-ct-accent` | `#6c63ff` | Number color |
| `--ease-ct-radius` | `14px` | Card border radius |
| `--ease-ct-shadow` | box-shadow | Card shadow |
| `--ease-ct-duration` | `2000` | Count-up duration in ms |

## Accessibility

- `aria-live="polite"` on the value element announces updates to screen readers
- Static `0` shown without JS
- Animation disabled via `prefers-reduced-motion`

Closes #67720
