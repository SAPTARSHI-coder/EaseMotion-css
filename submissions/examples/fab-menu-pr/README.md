# Animated Floating Action Button (FAB) Menu

## 1. What does this do?
A fixed-position floating action button that expands into a staggered menu
of sub-action buttons with smooth CSS animations on click.

## 2. How is it used?

```html
<div class="fab-container" id="fabContainer">
  <button class="fab-main" id="fabToggle">➕</button>
  <div class="fab-menu">
    <button class="fab-item" data-label="Share">📤</button>
    <button class="fab-item" data-label="Edit">✏️</button>
    <button class="fab-item" data-label="Delete">🗑️</button>
  </div>
</div>
```

Toggle the `.open` class on `.fab-container` via JavaScript to show/hide
the menu. The main button also rotates 45° to become a close icon.

## 3. Why is it useful?
FAB menus are a common mobile-first UI pattern for surfacing multiple
actions without cluttering the interface. This implementation uses only
CSS transitions with staggered delays — no external libraries — which
fits perfectly with EaseMotion CSS's philosophy of lightweight,
pure-CSS animation utilities.