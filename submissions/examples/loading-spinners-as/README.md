# Animated Loading Spinners

### What does this do?

It shows a set of loading spinners: a rotating ring, three bouncing dots, and pulsing bars, each looping continuously in pure CSS.

### How is it used?

```html
<span class="spinner spinner-ring" role="status" aria-label="Loading"></span>

<span class="spinner spinner-dots" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</span>

<span class="spinner spinner-bars" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
</span>
```

Pick the style that fits by using `spinner-ring`, `spinner-dots`, or `spinner-bars`. The dots and bars use inner spans that animate with staggered delays.

### Why is it useful?

Loaders signal that work is in progress and appear across almost every app. These are drawn with CSS from simple keyframes, so there are no images and no JavaScript. Each spinner has a `status` role with a label, and the animations slow down under `prefers-reduced-motion: reduce`.
