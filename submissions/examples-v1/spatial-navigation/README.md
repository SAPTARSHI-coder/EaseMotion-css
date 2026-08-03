# CSS Spatial Navigation Utilities

Relates to feature request **#41193**.

## 1. What does this do?

Provides utility classes (`.ease-nav-grid`, `.ease-nav-list`, `.ease-nav-zone`) that enable **directional keyboard navigation** (Spatial Navigation) entirely via CSS. This allows users to navigate between interactive elements using arrow keys (<kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>), TV remotes, or game controllers without any JavaScript event listeners.

## 2. How is it used?

The implementation uses the emerging CSS Spatial Navigation specification (`spatial-navigation-contain`, `nav-up`, `nav-down`, `nav-left`, `nav-right`).

**Example 1: Auto-calculated Grid**
```html
<div class="ease-nav-grid">
  <button>1</button> <button>2</button>
  <button>3</button> <button>4</button>
</div>
```
```css
.ease-nav-grid {
  /* Keeps arrow key navigation trapped inside this container */
  spatial-navigation-contain: contain;
}
.ease-nav-grid button {
  /* Browser automatically finds the best target in that direction */
  nav-up: auto; nav-down: auto; nav-left: auto; nav-right: auto;
}
```

**Example 2: Explicit ID Targeting**
```css
/* You can explicitly define exactly where an arrow key should go */
#item-1 { nav-down: #item-2; }
#item-2 { nav-up: #item-1; }
```

## 3. Why is this useful for EaseMotion CSS?

As web applications increasingly target smart TVs, kiosks, gaming consoles, and accessibility-focused interfaces, spatial navigation is crucial. Providing zero-JS utilities for this emerging CSS specification aligns perfectly with EaseMotion's philosophy of pushing the boundaries of what CSS can do.

*(Note: CSS Spatial Navigation is currently an emerging spec, often requiring polyfills or browser experimental flags like in Chromium, but this submission establishes the syntax and utility structure for EaseMotion).*
