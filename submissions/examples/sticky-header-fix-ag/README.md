# Sticky Navigation Header Fix

## What does this do?

Keeps the top navigation header stuck to the top of the viewport (`position: sticky`) as users scroll down the page, preventing it from scrolling out of view.

## How is it used?

Apply a sticky position and top constraint to your navigation container, making sure no parent element overrides its display/positioning styles:

```html
<header class="docs-header">
  <nav class="nav-links">
    <!-- Links here -->
  </nav>
</header>
```

```css
.docs-header {
  position: sticky;
  top: 0;
  z-index: 200;
  background-color: var(--header-bg);
}
```

## Why is it useful?

It provides continuous access to navigation links and site actions (like the theme toggle and search elements), reducing friction for users browsing extensive documentation and improving overall usability.
