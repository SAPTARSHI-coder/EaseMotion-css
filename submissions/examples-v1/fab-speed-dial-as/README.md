# Floating Action Button Speed Dial

### What does this do?

It shows a floating action button that fans out a set of smaller action buttons on hover or focus, each with a staggered delay, while the main plus rotates into a close icon.

### How is it used?

```html
<div class="fab">
  <div class="fab-actions">
    <button class="fab-action" type="button" aria-label="New note">N</button>
    <button class="fab-action" type="button" aria-label="New event">E</button>
    <button class="fab-action" type="button" aria-label="New task">T</button>
  </div>
  <button class="fab-main" type="button" aria-label="Open quick actions">+</button>
</div>
```

Hover or focus the `.fab` and the actions rise into view. Each action button has its own `aria-label`.

### Why is it useful?

A speed dial groups related quick actions behind one button, common in mobile and dashboard interfaces. This reveals the actions with staggered transforms driven by hover and `:focus-within`, so it needs no JavaScript. The buttons show focus rings, and the motion is reduced under `prefers-reduced-motion: reduce`.
