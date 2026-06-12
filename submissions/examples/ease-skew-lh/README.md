# Skew Motion Utilities (`ease-skew-lh`)

A simple, lightweight, CSS-only utility set that applies skew and tilt transformations on interaction or page load. This feature is proposed under GSSoC 2026 Issue #1614.

## What does this do?

This module provides classes that tilt elements on hover (X, Y, or dual-axis), tilt elements on click/active states, wobble elements continuously, or slide them in with a skew entrance effect.

## How is it used?

Include the stylesheet, then apply the utility classes:

### Hover Effects

```html
<!-- Skew X on hover -->
<div class="ease-skew-x-lh">Hover me</div>

<!-- Skew Y on hover -->
<div class="ease-skew-y-lh">Hover me</div>

<!-- Skew both axes on hover -->
<div class="ease-skew-xy-lh">Hover me</div>

<!-- Opposite X direction skew -->
<div class="ease-skew-reverse-x-lh">Hover me</div>
```

### Click / Active Deformation Modifier

Combine this with any hover class to create a squash/squeeze click effect:

```html
<button class="ease-skew-xy-lh ease-skew-active-lh">Click Me</button>
```

### Entrance Animation (On Load)

```html
<h1 class="ease-skew-entrance-lh">Fades in with skew</h1>
```

### Looping / Swaying Badges

```html
<span class="ease-skew-loop-lh">HOT SALE!</span>
```

---

## Customizable CSS Tokens

You can override these design variables in your root stylesheet to fine-tune the skew behavior:

```css
:root {
  --ease-skew-x: 8deg; /* Horizontal tilt angle */
  --ease-skew-y: 8deg; /* Vertical tilt angle */
  --ease-skew-speed: 0.35s; /* Transition speed */
  --ease-skew-timing: cubic-bezier(...); /* Transition timing curve */
  --ease-skew-loop-duration: 4s; /* Continuous sway interval */
}
```

## Why is it useful?

It provides UI developers with an expressive, three-dimensional look without relying on heavy WebGL libraries or complex JavaScript intersection observers. It is suitable for interactive banners, cards, buttons, badges, and pricing lists.

## Tech Stack

- HTML5
- Pure Vanilla CSS (No build step, zero dependencies, responsive-ready)
- Accessibility: Integrates with `prefers-reduced-motion` settings.
