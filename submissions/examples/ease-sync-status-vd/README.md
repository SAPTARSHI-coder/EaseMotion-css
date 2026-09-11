# Ease Sync Status

## What does this do?

A synchronization status pill for displaying Synced, Syncing, and Failed states.

---

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="sync-status synced">
    <span class="sync-icon">✓</span>
    <span>Synced</span>
</div>
```

### Available states

```html
<div class="sync-status synced">
    <span class="sync-icon">✓</span>
    <span>Synced</span>
</div>

<div class="sync-status syncing">
    <span class="sync-icon">↻</span>
    <span>Syncing</span>
</div>

<div class="sync-status failed">
    <span class="sync-icon">!</span>
    <span>Failed</span>
</div>
```

### Features

- Synced, Syncing, and Failed states
- Status icons
- Animated syncing state
- Color variants
- Responsive layout
- Lightweight CSS implementation

---

## Why is it useful?

Sync status indicators are commonly used in cloud applications, file managers, dashboards, and collaboration tools.

This component provides a compact and reusable way to communicate synchronization status with clear visual feedback while following the animation-first philosophy of EaseMotion CSS.