# Squircle Morphing Avatar

## What does this do?

Continuously morphs an avatar container between circle, squircle, and diamond shapes using `@keyframes` that animate `clip-path: path()` — the image fill is unchanged, only the clip mask morphs.

## How is it used?

```html
<!-- Default morph -->
<div class="avatar-morph">
  <img src="photo.jpg" alt="User avatar" />
</div>

<!-- Slow status pulse with online ring -->
<div class="avatar-morph avatar-morph--slow avatar-morph--online" style="--delay: 0s">
  <img src="photo.jpg" alt="User avatar" />
</div>

<!-- Staggered group -->
<div class="avatar-pile">
  <div class="avatar-morph" style="--delay: 0s"><img src="u1.jpg" alt="" /></div>
  <div class="avatar-morph" style="--delay: -1.25s"><img src="u2.jpg" alt="" /></div>
  <div class="avatar-morph" style="--delay: -2.5s"><img src="u3.jpg" alt="" /></div>
</div>
```

## Why is it useful?

`border-radius` only produces ellipses — it cannot generate the squircle (superellipse) shape used in Apple's iOS icons, Linear, Figma, and Loom. `clip-path: path()` supports arbitrary shapes, and CSS can interpolate between paths when they share identical point counts. This fills a real gap: a CSS-native animated shape morph for avatars and profile images. Includes `prefers-reduced-motion` compliance and size/speed modifier classes.
