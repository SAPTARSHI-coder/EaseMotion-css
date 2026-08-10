\# Magnetic Button — Visible Keyboard Focus State



\## What does this add?

A visible keyboard focus indicator for `.ease-btn-magnetic`, using `:focus-visible` so the outline only appears for keyboard navigation and not on mouse clicks.



\## How does a developer use it?



```html

<button class="ease-btn-magnetic">

&#x20; Magnetic Button

</button>

```



No extra class is needed — the focus style is applied automatically via `:focus-visible` on the existing `.ease-btn-magnetic` class.



\## Why does it fit EaseMotion CSS?

This improves accessibility for keyboard users while preserving EaseMotion CSS's animation-first, human-readable philosophy. It does not affect the existing magnetic hover animation or `prefers-reduced-motion` behavior.

