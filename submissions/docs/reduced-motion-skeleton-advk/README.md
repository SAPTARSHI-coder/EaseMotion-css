# Reduced-motion Skeleton

## What does this do?

An article skeleton whose shimmer sweep degrades to a static tonal placeholder
when the user has asked for reduced motion.

## How is it used?

```html
<section class="rms-card" aria-busy="true" aria-label="Loading article">
  <div class="rms-media"></div>
  <div class="rms-line rms-line--title"></div>
  <div class="rms-line"></div>
</section>
```

## Why is it useful?

`components/skeleton.css` animates a shimmer with no `prefers-reduced-motion`
block. A shimmer is a gradient travelling across the element on a loop — a
large-area, continuously repeating translation, which is precisely the class of
effect WCAG 2.3.3 asks authors to make suppressible.

Skeletons make the gap worse than most components because they tile: a list view
may show twenty of them at once, all sweeping on the same loop, filling the
viewport with synchronised movement while the user is trying to read the page
around them.

Simply setting `animation: none` is not sufficient either — with the sweep
removed, the leftover `background-image` freezes mid-gradient and the block reads
as broken UI. This showcase removes the gradient as well and substitutes a flat
fill plus a hairline border, so the element still says "content is loading here"
through contrast and shape rather than through movement. The `aria-busy="true"`
attribute carries the same message to assistive technology in both states.
