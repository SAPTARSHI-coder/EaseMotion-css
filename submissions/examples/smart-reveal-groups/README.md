# Smart Reveal Groups

Adds reusable group reveal utilities that automatically stagger direct child animations and work naturally with scroll-triggering. This feature helps entire sections reveal with one wrapper class while preserving compatibility with existing EaseMotion entrance utilities.

## What this does

- `ease-reveal-group` applies progressive reveal delays to direct children.
- `ease-reveal-group-fast` and `ease-reveal-group-slow` adjust the stagger interval.
- `ease-reveal-group-reverse` flips the reveal order for smart reverse sequencing.
- Works with scroll-trigger logic by toggling `is-visible` on the group.

## Usage

```html
<section class="ease-reveal-group">
  <article class="card ease-slide-up">Feature 1</article>
  <article class="card ease-slide-up">Feature 2</article>
  <article class="card ease-slide-up">Feature 3</article>
</section>
```

```html
<nav class="ease-reveal-group ease-reveal-group-fast ease-reveal-group-reverse">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```

## Variants

- `ease-reveal-group` — default 120ms interval.
- `ease-reveal-group-fast` — tighter 70ms interval.
- `ease-reveal-group-slow` — relaxed 180ms interval.
- `ease-reveal-group-reverse` — reveal children from last to first.

## Accessibility

- The feature respects `prefers-reduced-motion: reduce`.
- When reduced motion is enabled, children become visible immediately and all delays are removed.

## Why it fits EaseMotion CSS

Smart Reveal Groups keep motion declarative, readable, and composable. They let developers animate entire content sections with one container utility while preserving the existing EaseMotion animation classes on each child.
