# Scroll-Reveal Staggered Cards

A reusable scroll-reveal pattern that progressively brings a group of cards
into view with a subtle staggered animation.

## What does it do?

The component combines opacity and vertical movement to reveal cards one after
another when their container enters the viewport.

It provides:

- Viewport-triggered reveal.
- Sequential card timing.
- Responsive card layouts.
- Subtle opacity and vertical movement.
- One-time animation for each card group.
- Reduced-motion support.
- No external libraries or assets.

## How do I use it?

Create a card group with the `stagger-grid` class:

```html
<div class="stagger-grid">
  <article class="stagger-card">
    <h2>Discover</h2>
    <p>Card content.</p>
  </article>

  <article class="stagger-card">
    <h2>Explore</h2>
    <p>Card content.</p>
  </article>

  <article class="stagger-card">
    <h2>Create</h2>
    <p>Card content.</p>
  </article>
</div>
```