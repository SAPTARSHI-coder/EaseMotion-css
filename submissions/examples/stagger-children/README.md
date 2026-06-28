# Stagger Children

Submission for EaseMotion CSS — resolves [Issue #2668](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2668)

---

## 1. What does this do?

Animates a group of child elements in a sequenced cascade — each child enters
one after the other with an automatic staggered delay — using only a single
class on the parent element. No JavaScript required.

---

## 2. How is it used?

```html
<!-- Every direct child slides up + fades in, 100ms apart -->
<ul class="stagger-children">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<!-- Fade-only variant (no movement) -->
<div class="stagger-fade">
  <div>Card 1</div>
  <div>Card 2</div>
</div>

<!-- Slide from left (great for nav menus) -->
<nav class="stagger-slide">
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>

<!-- Speed modifiers stack onto any variant -->
<ul class="stagger-children stagger-fast">...</ul>
<ul class="stagger-children stagger-slow">...</ul>

<!-- Manual delay on individual elements -->
<span class="ease-fade-in delay-1">Line one</span>
<span class="ease-fade-in delay-2">Line two</span>
<span class="ease-fade-in delay-3">Line three</span>
```

---

## 3. Why is it useful?

EaseMotion CSS is built on composability — stacking modifier classes freely.
Stagger utilities are the natural extension of that idea to groups of elements.
A single class on the parent replaces what would otherwise require a JavaScript
loop or manually writing nth-child rules in every project.

This is one of the most common animation patterns in modern UI — lists, grids,
nav menus, hero text reveals — and it fits perfectly in an animation-first
framework. The implementation is pure CSS keyframes and nth-child selectors,
zero dependencies, zero JavaScript.

Includes prefers-reduced-motion support: users who opt out of motion see
content immediately with no animation applied.

The maintainer can replace hard-coded delay values with a CSS variable such as
--ease-stagger-step during integration into core/animations.css.

---

## Files

| File        | Purpose                                                     |
|-------------|-------------------------------------------------------------|
| `style.css` | 3 animation variants, 2 speed modifiers, 6 delay helpers   |
| `demo.html` | 5 demos: list, grid, nav, fast stagger, hero text reveal   |
| `README.md` | This file                                                   |

---

Proposed ease-* names (maintainer decides):
ease-stagger-children · ease-stagger-fade · ease-stagger-slide · ease-stagger-fast · ease-stagger-slow · ease-delay-[0-5]
