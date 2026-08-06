# ease-will-change Performance Hint Utilities

## What does this do?

Provides CSS utility classes using the `will-change` property to hint the browser to promote elements to a separate GPU composite layer before animation, preventing frame drops.

## How is it used?

```html
<!-- Before animating a transform, add will-change to parent -->
<div class="ease-will-change-transform">
  <div class="ease-hover-lift">...</div>
</div>

<!-- For opacity animations -->
<div class="ease-will-change-opacity">
  <div class="ease-fade-in">...</div>
</div>
```

### CSS Classes

| Class | CSS Property |
|-------|--------------|
| `.ease-will-change-transform` | `will-change: transform;` |
| `.ease-will-change-opacity` | `will-change: opacity;` |
| `.ease-will-change-scroll` | `will-change: scroll-position;` |
| `.ease-will-change-auto` | `will-change: auto;` |

## Why is it useful?

When animating large or complex elements, browsers can drop frames if the element isn't promoted to a separate composite layer on the GPU beforehand:

- ✅ Prevents animation frame drops
- ✅ Enables smooth GPU-accelerated animations
- ✅ Optimizes performance for complex animations
- ✅ Reduces jank during transitions

## Best Practices

> ⚠️ Apply `will-change` to elements **just before** they are animated (e.g., on hover parent), NOT globally. Using it on all elements can eat up RAM.

```css
/* Good: Applied on hover, just before animation */
.card:hover .ease-will-change-transform {
  will-change: transform;
}

/* Bad: Applied globally - wastes memory */
.card {
  will-change: transform; /* ❌ Don't do this */
}
```
