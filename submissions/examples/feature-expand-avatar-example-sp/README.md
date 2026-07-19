# Expand Avatar Example

## What does this do?

An avatar that gently expands and contracts as a loading / attention indicator.

## How is it used?

Open `demo.html` in a browser to see the expand loop.

```html
<div class="expand-avatar-ab">Hover me</div>
<div class="expand-avatar-sp is-loading-sp" role="img" aria-label="User avatar loading" aria-busy="true">
  SP
</div>
```

## Why is it useful?

Expand motion is a clear, lightweight loading signal for profile cards, chat headers, and skeleton-style avatar placeholders.

## Accessibility

- Uses `role="img"`, `aria-label`, and `aria-busy="true"` while loading
- Status text uses `aria-live="polite"`
- Under `prefers-reduced-motion: reduce`, animation stops and a dashed outline indicates loading

## Files

```
submissions/examples/feature-expand-avatar-example-sp/
├── demo.html
├── style.css
└── README.md
```
