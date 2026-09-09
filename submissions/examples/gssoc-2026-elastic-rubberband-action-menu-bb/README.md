# Elastic Rubber-Band Action Menu (GSSoC 2026)

## 1. What does this do?
The **Elastic Rubber-Band Action Menu** component creates a Floating Action Button (FAB) speed dial that expands with elastic rubber-band spring physics timing (`cubic-bezier(0.68, -0.6, 0.32, 1.6)`), revealing staggered menu items with contextual tooltips.

## 2. How is it used?
Link the CSS stylesheet into your project head:
```html
<link rel="stylesheet" href="style.css">
```
Structure your markup using a checkbox trigger input and `.fab-menu` item wrapper:
```html
<div class="fab-container">
  <input type="checkbox" id="fab-toggle" class="fab-checkbox">
  <label for="fab-toggle" class="fab-button">+</label>
  <div class="fab-menu">
    <button class="menu-item item-1">...</button>
  </div>
</div>
```

## 3. Why is it useful?
- **Tactile Rubber-Band Motion**: Provides natural spring physics feedback on button interactions.
- **Zero-JavaScript Execution**: Pure HTML checkbox state binding manages expanded menu states seamlessly.
- **Compact & Space-Saving**: Ideal for mobile web apps, dashboard quick actions, and contextual tool palettes.
