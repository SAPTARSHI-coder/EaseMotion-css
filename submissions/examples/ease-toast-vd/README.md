# Ease Toast

## What does this do?

A temporary toast notification component with success, error, and info variants.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="toast toast-success">
    <span class="toast-icon">✓</span>
    <span class="toast-message">Changes saved successfully.</span>
    <button class="toast-close" aria-label="Close">×</button>
</div>
```

### Available variants

```html
<div class="toast toast-success">
    ...
</div>

<div class="toast toast-error">
    ...
</div>

<div class="toast toast-info">
    ...
</div>
```

### Features

- Success, error, and info variants
- Message text
- Close control
- Animated entrance
- Responsive positioning
- Pure CSS
- No JavaScript required

## Why is it useful?

Toast notifications are commonly used to provide temporary feedback after user actions such as saving, submitting, updating, or deleting content.

This component provides a compact notification pattern with subtle entrance animation while following the animation-first philosophy of EaseMotion CSS.