# SVG Stroke Draw Showcase

## What does this do?

Demonstrates three common SVG stroke draw animations (a signature reveal, a success checkmark, and a multi-path icon) using pure CSS `stroke-dashoffset`.

## How is it used?

```html
<svg viewBox="0 0 100 100">
  <path 
    class="draw-path" 
    style="--path-length: 283" 
    d="..." 
  />
</svg>
```

```css
@keyframes draw-stroke {
  from { stroke-dashoffset: var(--path-length); }
  to   { stroke-dashoffset: 0; }
}

.draw-path {
  stroke-dasharray: var(--path-length);
  stroke-dashoffset: var(--path-length);
  animation: draw-stroke 1.2s ease-in-out forwards;
}
```

## Why is it useful?

Drawing SVG paths is a classic animation effect, but developers frequently reach for heavy JavaScript libraries (like GSAP's DrawSVGPlugin) to achieve it because hardcoding path lengths in CSS is tedious. By setting the path length as an inline custom property (`--path-length`), we can use a single reusable `@keyframes` definition for *any* SVG path. This submission consolidates three common use-cases into one reference implementation, entirely in CSS.
