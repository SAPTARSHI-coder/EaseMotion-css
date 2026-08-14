# Blur-to-Clear Reveal

A blur-to-clear reveal where content blurs and fades in on scroll-into-view, pure CSS via animation-timeline.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — styles (pure CSS where possible; minimal vanilla JS only where interaction requires it)
- `README.md` — this guide


## Usage
```html
<link rel="stylesheet" href="./style.css" />
<section class="ease-bcr"><article class="ease-bcr__item">Blur to clear reveal A</article><article class="ease-bcr__item">Blur to clear reveal B</article></section>
```


## Accessibility
- Decorative animation elements marked `aria-hidden="true"`.
- Interactive controls use native elements with `:focus-visible` outlines.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #76931
