# RubberBand Banner Example

## What does this do?

A status banner that exits with a smooth rubberband animation when dismissed.

## How is it used?

Open `demo.html` and click **Dismiss**:

```html
<div class="rubberband-banner-sp">Hover me</div>
```

Exit state:

```html
<div class="rubberband-banner-sp is-exiting-sp">...</div>
```

## Why is it useful?

Rubberband exits feel playful and polished for toasts/banners without needing a JS animation library. Fits EaseMotion’s readable, animation-first style.

## Accessibility

- `role="status"` and `aria-live="polite"`
- Dismiss control is a labeled button with focus styles
- Under `prefers-reduced-motion: reduce`, rubberband motion is replaced by a simple fade-out

## Files

```
submissions/examples/feature-rubberband-banner-example-sp/
├── demo.html
├── style.css
└── README.md
```
