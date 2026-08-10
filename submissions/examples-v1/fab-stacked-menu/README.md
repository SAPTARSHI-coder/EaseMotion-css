# Floating Action Menu with Stacked Items

**Implements:** #8023

---

## Overview

A floating action button (FAB) that expands into a vertical stack
of secondary action buttons when clicked. Common pattern for mobile
and dashboard interfaces, providing quick access to related actions
without cluttering the UI.

## Classes

| Class | Effect |
|-------|--------|
| `.ease-fab-container` | Wrapper, fixed-positioned in corner |
| `.ease-fab-main` | Main toggle button (rotates 45° when open) |
| `.ease-fab-stack` | Container for stacked secondary buttons |
| `.ease-fab-item` | Individual stacked action button |
| `.ease-fab-open` | State class toggled via JS to reveal the stack |

## How to Use

```html
<div class="ease-fab-container">
  <div class="ease-fab-stack">
    <button class="ease-fab-item">✏️</button>
    <button class="ease-fab-item">🔗</button>
    <button class="ease-fab-item">🗑️</button>
  </div>
  <button class="ease-fab-main" id="fabToggle">+</button>
</div>

<script>
  const fab = document.querySelector('.ease-fab-container');
  document.getElementById('fabToggle').addEventListener('click', () => {
    fab.classList.toggle('ease-fab-open');
  });
</script>
```

## How to Test

1. Open `demo.html` in any modern browser
2. Click the main floating button (bottom-right corner)
3. Observe the stacked items animate in with a staggered delay
4. Click again to collapse

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 80+            |
| Firefox | 80+            |
| Safari  | 14+            |
| Edge    | 80+            |