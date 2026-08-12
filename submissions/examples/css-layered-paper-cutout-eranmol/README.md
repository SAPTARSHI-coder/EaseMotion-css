# CSS Layered Paper Cutout

A layered paper cutout depth effect using stacked CSS elements with offset positioning, built entirely with pure CSS.

## What does this do?

It creates a visual depth illusion where multiple CSS layers are stacked with slight offsets, mimicking the look of cut paper sheets. On hover, the layers fan apart further to enhance the 3D effect. It works like stacked paper with shadows between each sheet.

## How is it used?

Drop `demo.html` and `style.css` into your project. Each cutout card uses three stacked layers:

```html
<article class="paper-cutout">
  <div class="paper-cutout__layer paper-cutout__layer--3"></div>
  <div class="paper-cutout__layer paper-cutout__layer--2"></div>
  <div class="paper-cutout__layer paper-cutout__layer--1">
    <span class="paper-cutout__label">Explore</span>
  </div>
</article>
```

Layer 3 sits at the bottom with the largest offset, layer 2 sits in the middle, and layer 1 is on top carrying the content. The CSS handles all the positioning, shadows, and hover animations.

## Why is it useful?

Paper cutout effects are a popular design trend for landing pages, feature cards, and product showcases. This component gives developers a ready-to-use, pure CSS solution that creates depth through simple offset layers and shadows, without needing any images, SVGs, or JavaScript. It includes CSS custom properties for easy theming, responsive sizing, and smooth hover transitions.
