# Minimalist Floating Action Button

This guide explains how to create an accessible Minimalist Floating Action
Button (FAB) using HTML and CSS.

## Basic HTML

Use a native `<button>` element so the FAB is keyboard accessible by default.

```html
<button
  class="fab"
  type="button"
  aria-label="Create new item"
  title="Create new item">
  +
</button>
