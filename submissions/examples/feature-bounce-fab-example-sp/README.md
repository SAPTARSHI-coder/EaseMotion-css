# Bounce FAB Example

## What does this do?

A floating action button (FAB) with a smooth bounce attention-seeker animation.

## How is it used?

Open `demo.html` in a browser. Hover or focus the FAB:

```html
<div class="bounce-fab-sp">Hover me</div>
```

In this demo the FAB is a real button:

```html
<button type="button" class="bounce-fab-sp" aria-label="Create new item">+</button>
```

## Why is it useful?

Bounce draws attention to primary actions (compose, add, chat) without cluttering the layout. The example is beginner-friendly and keeps accessibility in mind.

## Accessibility

- Uses a semantic `<button>` with `aria-label`
- Visible `:focus-visible` outline
- Under `prefers-reduced-motion: reduce`, bounce is disabled and a static glow ring is used instead

## Files

```
submissions/examples/feature-bounce-fab-example-sp/
├── demo.html
├── style.css
└── README.md
```
