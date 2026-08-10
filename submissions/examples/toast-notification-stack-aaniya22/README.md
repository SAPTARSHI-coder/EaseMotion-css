# Toast Notification Stack (`ease-toast`)

Closes #60856

A stack of dismissible toast notifications built with **pure CSS** — no JavaScript. Toasts slide/fade in on load, stack vertically in the bottom-right corner, and collapse with a fade + slide-out animation when dismissed.

## What does this add?

- `.toast-stack` — fixed-position container that stacks toasts vertically with consistent spacing
- `.toast` — individual toast card with entrance animation
- `.toast-success` / `.toast-error` / `.toast-info` — color-coded left-border variants
- `.toast-icon` — leading icon slot
- `.toast-message` — message text
- `.toast-close` — dismiss control (a `<label>` bound to a hidden checkbox)

## How does a developer use it?

Each toast needs a hidden checkbox (checked = visible) placed **before** `.toast-stack` in the DOM, and a `.toast-close` label pointing at that checkbox's `id`:

```html
<input type="checkbox" id="toast-1" class="toast-toggle" checked />

<div class="toast-stack">
  <div class="toast toast-success">
    <span class="toast-icon">✔</span>
    <span class="toast-message">Changes saved successfully.</span>
    <label for="toast-1" class="toast-close">&times;</label>
  </div>
</div>
```

Clicking the `×` unchecks the box, which drives the exit animation via a `:not(:checked) ~` sibling selector — no JS required. Toast order in the markup must match checkbox order (`#toast-1` → 1st `.toast`, `#toast-2` → 2nd, etc.), since plain CSS can't target an arbitrary toast by ID match alone without repeating the selector per position.

## Why does it fit EaseMotion CSS?

- Matches the issue's requirement of pure CSS entry/exit animation with checkbox-hack dismissal
- No JS, no dependencies, self-contained
- Respects `prefers-reduced-motion`
- Responsive: stack goes full-width with tighter padding under 480px
- Uses the suggested class names (`toast-stack`, `toast`, `toast-success`, `toast-error`, `toast-icon`, `toast-message`, `toast-close`) directly, so it can be dropped into the component library largely as-is

## Known limitation

Because this is a pure-CSS approach, a dismissed toast can't be "re-shown" without a page reload or reset of the checkbox state (there's no JS to flip it back). This matches the constraint of the checkbox-hack pattern generally and is consistent with how the issue scoped the feature (no JS).

## Browser support

Relies on `:checked`, the general sibling combinator (`~`), and `:not()` — all broadly supported in evergreen browsers. No experimental features used.