# Reduced-motion Loaders

## What does this do?

Four loading indicators (ring, dots, bar, orb) that keep communicating "busy"
when `prefers-reduced-motion: reduce` is set, instead of freezing or vanishing.

## How is it used?

```html
<div class="rml-ring" role="progressbar" aria-label="Loading"></div>
<div class="rml-dots" role="progressbar" aria-label="Loading">
  <span></span><span></span><span></span>
</div>
```

Enable **Reduce motion** in your OS settings and reload `demo.html`; the page
prints which preference is active, so the two states can be compared directly.

## Why is it useful?

`components/loaders.css` has no `prefers-reduced-motion` block at all — it is one
of 25 stylesheets in `core/` and `components/` with no reduced-motion handling.
Loaders are the worst place for that gap: a spinner is *defined* by its motion,
so the two common shortcuts both fail. Killing the animation outright leaves a
frozen arc that looks like a rendering bug, and hiding the loader removes the
only signal that the app is still working.

The pattern here keeps a signal in every case. Rotation and travel — the
transforms implicated in vestibular discomfort — are replaced with a slow
two-second opacity breath, which is explicitly permitted under WCAG 2.3.3
(Animation from Interactions) because it involves no movement. The ring swaps its
conic sweep for a solid annulus so the shape still reads, and the indeterminate
bar adopts a static partial fill rather than pretending to travel.

That makes reduced-motion a *designed* state rather than a fallback, which is the
standard the rest of EaseMotion's animation-first philosophy should be held to.
