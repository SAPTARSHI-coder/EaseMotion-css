# ease-progress-bar-striped-xk

Animated striped progress bars with a diagonal stripe pattern that scrolls.

## How to use

```html
<link rel="stylesheet" href="style.css" />

<div class="progress-item">
  <div class="progress-label">
    <span>Skill</span>
    <span>85%</span>
  </div>
  <div class="progress-track">
    <div class="progress-bar striped" style="width:85%"></div>
  </div>
</div>
```

## Customisation

```css
:root {
  --pb-h: 12px;              /* track height */
  --pb-radius: 6px;          /* corner rounding */
  --pb-bg: #1e293b;          /* track background */
  --pb-color: #6366f1;       /* bar colour */
  --pb-stripe: rgba(255,255,255,.12);  /* stripe highlight */
  --pb-duration: 1s;         /* stripe scroll speed */
}
```

Set the bar width via the `style` attribute (`style="width:65%"`).

## Accessibility

- Stripe animation pauses when `prefers-reduced-motion: reduce` is set
