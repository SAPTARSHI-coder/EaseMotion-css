# Bug Fix #79354: ease-zoom-in scrollbar flicker in Chrome on page load

## What does this do?
Fixes a brief vertical/horizontal scrollbar flicker in Chrome when `.ease-zoom-in` is applied to a full-width (`100vw`) hero section: the `scale()` transform momentarily pushes content outside the viewport before settling.

## Root cause
`ease-kf-zoom-in` animates `transform: scale(0.85) -> scale(1)`. A scaled full-bleed box extends beyond the viewport during the animation, so Chrome shows a transient scrollbar in the first ~200ms before the transform settles.

## Fix
- `contain: layout paint` on `.ease-zoom-in` so the scaled box cannot trigger layout/scroll changes in the viewport.
- `will-change: transform` to promote the element to its own compositor layer (scaling no longer reflows the page).
- `overflow: clip` + a `contain-intrinsic-size` hint on the animated element/host to keep layout stable before first paint and prevent the scaled content reaching the viewport edge.
- A hero-specific guard (`.ease-zoom-in.is-hero`) ensures full-bleed heroes cannot push scrollbars during zoom.

## How is it used?
No HTML changes required. Apply the CSS patch from `core-patch/zoom.css` to `easemotion/zoom.css` (or include it after the EaseMotion bundle).

```html
<link rel="stylesheet" href="easemotion.min.css" />
<link rel="stylesheet" href="./core-patch/zoom.css" />
<section class="hero ease-zoom-in is-hero">...</section>
```

## Expected behavior
No scrollbar appears during the zoom-in animation on a full-width hero in Chrome.

## Accessibility
- `prefers-reduced-motion: reduce` reverts `contain`/`will-change` so the reduced-motion path has no residual layout constraints.

## Files
- `core-patch/zoom.css` — the patch
- `demo.html` — verification (full-bleed hero with zoom-in)
- `README.md` — this guide

Closes #79354
