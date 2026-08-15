# Paper Reveal Transition

## What does this do?

It unfolds an element from the top using a 3D perspective transition, simulating the opening of a folded sheet of paper.

## How is it used?

Wrap the unfolding panel inside a container styled with the `paper-reveal-container-uj` class, and apply `paper-reveal-uj` to the target card:

```html
<div class="paper-reveal-container-uj">
  <div class="paper-reveal-uj">
    <h3>Note Title</h3>
    <p>Note contents unfold smoothly here...</p>
  </div>
</div>
```

The container class provides the necessary 3D perspective setup (`perspective: 1000px`) to project the rotation depth correctly.

## Why is this useful?

This transition offers an elegant, physical alternative to standard slides or fades, making it perfect for notifications, sticky notes, task lists, and dropdown panels. It runs completely via compositor-optimized transformations (`rotateX`), ensuring high framerates on mobile devices, and bypasses motion styles when users prefer reduced motion.
