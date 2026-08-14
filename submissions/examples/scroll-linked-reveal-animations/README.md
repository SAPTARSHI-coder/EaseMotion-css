# Scroll-linked Reveal Animations

Scroll-linked reveal animations using animation-timeline: view(), pure CSS with a fallback.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — styles (pure CSS where possible; minimal vanilla JS only where interaction requires it)
- `README.md` — this guide


## Usage
```html
<link rel="stylesheet" href="./style.css" />
<section class="ease-slr"><article class="ease-slr__item">Reveal on scroll A</article><article class="ease-slr__item">Reveal on scroll B</article><article class="ease-slr__item">Reveal on scroll C</article></section>
```


## Accessibility
- Decorative animation elements marked `aria-hidden="true"`.
- Interactive controls use native elements with `:focus-visible` outlines.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #71871
