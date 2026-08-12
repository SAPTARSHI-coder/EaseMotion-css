# Floating Animation Utility

## What does this do?

This submission adds a lightweight floating motion that moves interface elements
up and down with a calm, continuous rhythm.

## How is it used?

Add one of the demo classes to any card, icon, badge, or decorative element:

```html
<article class="float-card floating-soft">...</article>
<article class="float-card floating-delayed">...</article>
<article class="float-card floating-large">...</article>
```

The motion is pure CSS and includes a `prefers-reduced-motion` fallback for users
who disable animation.

## Why is it useful?

Floating motion gives static UI accents a sense of depth without requiring
JavaScript. It fits EaseMotion CSS because it is reusable, composable, and easy
for the maintainer to standardize into the framework's final naming convention.
