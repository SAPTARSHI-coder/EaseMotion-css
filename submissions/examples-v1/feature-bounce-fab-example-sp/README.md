# Bounce FAB Example

## What does this do?

A floating action button (FAB) that plays a smooth bounce attention animation on hover and keyboard focus.

## How is it used?

Open `demo.html` in a browser, then hover or Tab-focus the FAB.

```html
<div class="bounce-fab-ab">Hover me</div>
<button type="button" class="bounce-fab-sp" aria-label="Compose new message">+</button>
```

## Why is it useful?

Bounce draws attention to primary actions without cluttering the page. The example is readable, beginner-friendly, and keeps accessibility in mind.

## Accessibility

- Real `<button>` with a clear `aria-label`
- Bounce also runs on `:focus-visible` for keyboard users
- Under `prefers-reduced-motion: reduce`, bounce is disabled and a static glow ring is used instead

## Files

```
submissions/examples/feature-bounce-fab-example-sp/
├── demo.html
├── style.css
└── README.md
```
