# Pulse Image Example

## What does this do?

An image card that pulses out as an exit animation when dismissed.

## How is it used?

Open `demo.html` in a browser:

```html
<div class="pulse-image-sum">Hover me</div>
```

## Why is it useful?

Pulse exits make dismissals feel intentional on image previews and media cards without a motion library.

## Accessibility

- `role="img"` with `aria-label` and live region updates
- Dismiss button has a clear `aria-label`
- Under `prefers-reduced-motion: reduce`, exit becomes a simple fade

## Files

```
submissions/examples/feature-pulse-image-example-sum/
├── demo.html
├── style.css
└── README.md
```

Related issue: #50749
