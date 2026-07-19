# Bounce Image Example

## What does this do?

An image card that bounces to seek attention.

## How is it used?

Open `demo.html` in a browser:

```html
<div class="bounce-image-sum">Hover me</div>
```

## Why is it useful?

Bounce attention seekers highlight featured media in marketing and gallery UIs without JS animation libraries.

## Accessibility

- `role="img"` with `aria-label`
- Keyboard focusable with visible focus ring
- Under `prefers-reduced-motion: reduce`, bounce stops and a static inset cue remains

## Files

```
submissions/examples/feature-bounce-image-example-sum/
├── demo.html
├── style.css
└── README.md
```

Related issue: #50751
