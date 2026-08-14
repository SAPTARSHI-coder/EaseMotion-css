# Expand Dialog Mixin (feature-expand-dialog-mixin-mixin-XX)

## What it does
A pair of SCSS mixins that animate a dialog/modal (Info State) into
view with a smooth **expand** effect — scaling up from slightly
smaller than its resting size while fading in — plus an optional
backdrop fade-in for the overlay behind it.

## How to use
```scss
@use 'ease-motion' as *;

.my-dialog {
  @include ease-expand-dialog-mixin-XX(0.4s);
}

.my-dialog-backdrop {
  @include ease-expand-dialog-backdrop-XX(0.4s);
}
```

### Parameters (`ease-expand-dialog-mixin-XX`)

| Parameter     | Type      | Default                          | Description                              |
|---------------|-----------|------------------------------------|--------------------------------------------|
| `$duration`   | time      | `0.4s`                             | How long the expand animation takes        |
| `$start-scale`| number    | `0.85`                             | Initial scale before expanding to `1`      |
| `$easing`     | timing fn | `cubic-bezier(0.16, 1, 0.3, 1)`    | Easing curve for the expand                |

### Example markup
```html
<div class="my-dialog-backdrop">
  <div class="my-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
    <h2 id="dialog-title">Information</h2>
    <p>Here's something you should know.</p>
    <button type="button">Got it</button>
  </div>
</div>
```

## Why it's useful
- **Directs attention**: the expand-from-center motion draws the eye
  to the dialog's content naturally, reinforcing that it's an
  in-context overlay rather than a full navigation change.
- **Configurable**: duration, starting scale, and easing are all adjustable.
- **Pairs with a backdrop mixin**: keeps the overlay and dialog
  entrance visually in sync without extra JS coordination.
- **Accessible**:
  - Intended for use with `role="dialog"`, `aria-modal="true"`, and
    `aria-labelledby` pointing to a heading inside the dialog.
  - Fully respects `prefers-reduced-motion: reduce` — both the dialog
    and backdrop appear immediately at full opacity/scale with no
    animation for users who prefer reduced motion.
- **Lightweight**: pure CSS animation, no dependencies, no JS.

## Accessibility notes
- Always pair with `role="dialog"` (or `role="alertdialog"` for
  urgent info) and `aria-modal="true"` so assistive tech treats it
  as a modal context.
- Move focus into the dialog when it opens and trap it there until
  dismissed — this mixin only handles the visual entrance, not focus
  management, which should be handled in your component/JS logic.
- Ensure the dialog remains fully readable immediately if
  `prefers-reduced-motion: reduce` is set, since content should never
  be gated behind animation completion.
