## What does this do?

Provides `ease-overscroll` utility classes for controlling overscroll behavior — preventing scroll chaining in modals, sidebars, and custom scroll containers.

## How is it used?

```html
<div class="ease-overscroll-contain-za">Scroll bounces inside, not on body</div>
```

## Why is it useful?

EaseMotion core has no overscroll-behavior utilities. `overscroll-behavior: contain` is essential for modals, sidebars, and any scrollable region where scroll should not propagate to the parent page.
