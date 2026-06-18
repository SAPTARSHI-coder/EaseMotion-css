# CSS-only Dropdown / Menu Component

## What does this do?
Adds a CSS-only dropdown/menu component with hover and click variants, positioning modifiers, animations, dividers, and dark mode support. Uses `.ease-dropdown`, `.ease-dropdown-trigger`, `.ease-dropdown-menu`, and `.ease-dropdown-item` classes.

## How is it used?
```html
<div class="ease-dropdown">
  <button class="ease-dropdown-trigger">
    Trigger <span class="ease-dropdown-arrow">&#9662;</span>
  </button>
  <div class="ease-dropdown-menu">
    <button class="ease-dropdown-item">Item</button>
    <div class="ease-dropdown-divider"></div>
    <button class="ease-dropdown-item">Other</button>
  </div>
</div>
```

### Modifiers
- `.ease-dropdown-right` — right-aligned dropdown
- `.ease-dropdown-up` — opens upward
- `.ease-dropdown-click` — click-to-open variant (requires JS)

## Why is it useful?
EaseMotion CSS lacked a dropdown component essential for navigation menus, action menus, and context menus. This component provides:
- **CSS-only hover variant** — works without JavaScript
- **Click variant** — with keyboard navigation (Escape, Arrow keys, Enter/Space)
- **4 positions** — default (bottom-left), right, up, with modifier classes
- **Animations** — fade + slide on open/close
- **Arrow rotation** — visual indicator rotates when open
- **Dividers** — separate menu item groups
- **Dark mode** — adapts via `data-theme` CSS variables
- **Reduced motion** — respects `prefers-reduced-motion`

Fixes #12449
