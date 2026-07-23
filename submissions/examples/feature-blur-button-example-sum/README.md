# Blur Button Example

## What does this do?

A button that gently blurs as a loading indicator.

## How is it used?

Open `demo.html` in a browser:

```html
<button class="blur-button-sum">Hover me</button>
```

## Why is it useful?

Blur loading buttons give a soft busy state without a separate spinner — readable and easy to reuse.

## Accessibility

- `aria-busy="true"` and `aria-live="polite"` announce loading
- Clear `aria-label` for screen readers
- Under `prefers-reduced-motion: reduce`, blur stops and a dashed outline remains

## Files

```
submissions/examples/feature-blur-button-example-sum/
├── demo.html
├── style.css
└── README.md
```

Related issue: #50756
