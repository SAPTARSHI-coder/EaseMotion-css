# Animation Performance & Jank-Debugging Guide

## 1. What does this do?
A hands-on demo pairing two common performance mistakes with their fixes:
(a) animating `top`/`left` vs. `transform`, and (b) rendering long
off-screen lists eagerly vs. using `content-visibility: auto`.

## 2. How is it used?
Open `demo.html`, open Chrome DevTools → Performance panel, hit record,
click "Run both." You'll see the `.bad` box triggers **Layout** and
**Paint** entries every frame; the `.good` box (same visual result) only
triggers **Composite Layers**.

```html
<!-- Avoid -->
<div style="transition: top 0.6s, left 0.6s">...</div>

<!-- Prefer -->
<div style="transition: transform 0.6s">...</div>
```

For long lists, mark off-screen items with `content-visibility: auto` and
a `contain-intrinsic-size` placeholder to avoid layout shift once they
scroll into view.

### `will-change` budgeting
Only apply `will-change: transform` right before an animation starts
(e.g. on `mouseenter` or via JS just before `.animate()` runs), and remove
it on `animationend`/`transitionend`. Leaving it on permanently forces the
browser to keep a composited layer alive for every such element, which
costs GPU memory and can *hurt* performance at scale — the opposite of
its intent.

## 3. Why is it useful?
Most animation docs describe *what* properties do, not how to verify
their actual cost. This gives contributors a concrete, profileable
before/after and a checklist for auditing any page built with
EaseMotion classes: prefer `transform`/`opacity`, contain off-screen
content, and budget `will-change` instead of applying it globally.