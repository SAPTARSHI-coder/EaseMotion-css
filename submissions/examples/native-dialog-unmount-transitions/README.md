# Native Dialog & Unmount Transitions

Native dialog open/close transitions plus an unmount fade-out using the dialog element and CSS transitions, no JS library.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — styles (pure CSS where possible; minimal vanilla JS only where interaction requires it)
- `README.md` — this guide


## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-ndut"><button class="ease-ndut__open" type="button">Open dialog</button><dialog class="ease-ndut__dialog"><p>Native dialog with transitions.</p><form method="dialog"><button class="ease-ndut__close" type="submit">Close</button></form></dialog></div>
```


## Accessibility
- Decorative animation elements marked `aria-hidden="true"`.
- Interactive controls use native elements with `:focus-visible` outlines.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #75661
