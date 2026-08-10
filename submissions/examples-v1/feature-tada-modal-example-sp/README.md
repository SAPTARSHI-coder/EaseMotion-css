# Tada Modal Example

## What does this do?

A standalone HTML/CSS modal that plays a smooth **tada** entrance animation when opened.

## How is it used?

Open `demo.html` in a browser, then click **Open modal**.

```html
<div class="tada-modal-sp">Hover me</div>
```

In this demo the tada class is applied when the dialog opens:

```html
<div class="tada-modal-sp is-tada-sp" role="dialog" aria-modal="true">
  ...
</div>
```

## Why is it useful?

Tada is a clear attention-seeker for confirmations and success dialogs. The example stays beginner-friendly, uses readable class names, and keeps accessibility in mind (dialog roles, Escape to close, focus restore, and `prefers-reduced-motion`).

## Accessibility

- `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` on the modal
- Close via button, backdrop click, or Escape
- Focus moves into the modal on open and returns to the trigger on close
- Under `prefers-reduced-motion: reduce`, the tada animation is disabled

## Files

```
submissions/examples/feature-tada-modal-example-sp/
├── demo.html
├── style.css
└── README.md
```
