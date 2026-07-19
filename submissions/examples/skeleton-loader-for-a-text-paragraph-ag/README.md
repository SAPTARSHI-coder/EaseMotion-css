# Skeleton Loader for a Text Paragraph

## What does this example do?
This example demonstrates a "skeleton" loading state for a card containing a title and a paragraph of text. It uses a CSS linear gradient and a continuous `@keyframes` animation to create a shimmering effect. This visually signals to the user that content is currently being fetched or rendered.

## How is it used?
While your actual content is loading, render a placeholder container with semantic ARIA attributes (`aria-label="Loading content" aria-busy="true"`). Inside, use the `.ease-skeleton-title` and `.ease-skeleton-line` utility classes to draw the placeholder blocks.

```html
<article class="skeleton-card" aria-label="Loading content" aria-busy="true">
    <div class="ease-skeleton-title"></div>
    <div class="skeleton-paragraph">
        <div class="ease-skeleton-line"></div>
        <div class="ease-skeleton-line"></div>
        <div class="ease-skeleton-line ease-short-line"></div>
    </div>
</article>
```

The classes apply fixed heights and relative widths to mimic the shape of text, and apply a shared `easeShimmer` animation to simulate loading progress.

## Why is it useful?
Skeleton loaders drastically improve perceived performance compared to static blank screens or traditional spinning loaders. By mimicking the layout of the content that is about to appear, they prepare the user's eyes for the final layout, reducing cognitive load and preventing jarring layout shifts (Cumulative Layout Shift - CLS) once the data actually arrives.

This implementation is:
- **Lightweight**: Pure CSS, requiring zero JavaScript overhead.
- **Accessible**: Uses `aria-busy` to inform screen readers of the loading state, and includes a `@media (prefers-reduced-motion: reduce)` fallback that disables the animation (falling back to a solid gray block) for users sensitive to motion.
- **Responsive**: The skeleton lines use percentage-based widths (e.g., `100%`, `75%`) so they naturally adapt to any container size.
