# Seamless Infinite Scroll Marquee

## What does this do?

This contribution corrects a visually jarring stutter/jump inside the infinite horizontal marquee component. By adjusting the keyframe translation from `-50%` to `calc(-50% - var(--marquee-gap) / 2)`, the animation loop now perfectly accounts for the margins and track gap separating repeated item sets.

## How is it used?

Build a marquee container enclosing a track containing two duplicates of your content items:

```html
<link rel="stylesheet" href="style.css" />

<div class="marquee-hn marquee-fade-edges-hn">
  <div class="marquee-track-hn">
    <!-- Original Set -->
    <div class="marquee-item">Logo 1</div>
    <div class="marquee-item">Logo 2</div>

    <!-- Duplicate Set -->
    <div class="marquee-item">Logo 1</div>
    <div class="marquee-item">Logo 2</div>
  </div>
</div>
```

## Why is it useful?

It updates the visual fidelity of the marquee animation to a premium tier. Standard marquees that translate by exactly half the track width experience a sudden snap or shift when looping due to the layout gap offset. Correcting this offset provides seamless, infinite scrolling.
