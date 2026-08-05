# CSS Stacking Notification Toasts

A pure HTML and CSS toast stack demo that layers notification cards behind newer messages using CSS transitions and stacking behavior.

## What does this do?
This adds a stackable notification toast pattern where new alerts appear above older toasts and each message is revealed using only HTML and CSS.

## How is it used?
Use a fixed toast container and toast cards with modifier classes:

```html
<div class="toast-stack" aria-live="polite" aria-atomic="true">
  <div class="toast toast--success">
    <div class="toast-icon">✓</div>
    <div class="toast-content">
      <strong>Success</strong>
      <p>Action completed successfully.</p>
    </div>
  </div>
</div>
```

Modifier classes:
- `.toast` — base toast card
- `.toast--success` — success accent
- `.toast--warning` — warning accent
- `.toast--error` — error accent
- `.toast--info` — info accent

## Why is it useful?
It fits EaseMotion CSS by demonstrating a modern notification layout without any JavaScript, using only CSS stacking, transitions, and accessible HTML structure for web UI patterns.
