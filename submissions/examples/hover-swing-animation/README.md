# hover-swing-animation

**EaseMotion Submission** · Pure CSS hover effect that makes elements swing like a pendulum.

---

## What does this do?

When a user hovers over an element with a swing class, the element swings left and right — mimicking the damped oscillation of a real pendulum. It starts with a bold arc, each return swing is slightly smaller than the last, and the element gracefully settles back to its resting position.

The entire effect is driven by CSS `@keyframes` and `transform: rotate()`. No JavaScript. No libraries. No dependencies beyond the stylesheet.

There are three built-in speed variants:

| Class                          | Duration | Best for                                    |
| ------------------------------ | -------- | ------------------------------------------- |
| `swing-badge` / `swing-quick`  | 0.65s    | Small elements — badges, labels, pills      |
| `swing-button` / `swing-hover` | 0.85s    | Medium elements — buttons, links, nav items |
| `swing-card` / `swing-slow`    | 1.3s     | Large elements — cards, tiles, signboards   |

---

## How is it used?

### 1. Include the stylesheet

Place `style.css` anywhere in your project and link it in `<head>`:

```html
<link rel="stylesheet" href="path/to/style.css" />
```

### 2. Add a class to any element

```html
<!-- Button -->
<button class="swing-button">Book a seat</button>

<!-- Card -->
<div class="card swing-card">...</div>

<!-- Badge -->
<span class="badge swing-badge">● Live</span>

<!-- Navigation item -->
<a class="swing-nav-item" href="#">About</a>

<!-- Generic element (default speed) -->
<div class="swing-hover">Anything here</div>

<!-- Generic element with explicit speed modifiers -->
<div class="swing-hover swing-quick">Fast</div>
<div class="swing-hover swing-slow">Slow</div>
```

### 3. Expressive aliases

Two semantic aliases are available for contexts where the class name should describe the visual metaphor rather than the component type:

```html
<!-- pendulum-effect: same as swing-hover, default speed -->
<div class="pendulum-effect">Swing me</div>

<!-- hanging-element: adds a decorative string via ::before -->
<div class="hanging-element">♦</div>
```

### Available classes at a glance

| Class                     | Speed   | Notes                                   |
| ------------------------- | ------- | --------------------------------------- |
| `swing-hover`             | Default | Generic utility — apply to anything     |
| `swing-hover swing-quick` | Quick   | Speed modifier                          |
| `swing-hover swing-slow`  | Slow    | Speed modifier                          |
| `swing-button`            | Default | Semantic wrapper for buttons / links    |
| `swing-card`              | Slow    | Semantic wrapper for cards / tiles      |
| `swing-badge`             | Quick   | Semantic wrapper for badges / pills     |
| `swing-nav-item`          | Quick   | Semantic wrapper for navigation items   |
| `pendulum-effect`         | Default | Expressive alias for swing-hover        |
| `hanging-element`         | Slow    | Adds a decorative string pseudo-element |

---

## Why is it useful?

### Personality without noise

Most hover effects change colour, scale, or opacity — all useful, but visually silent. The swing effect adds motion in a direction users don't expect, making an element feel alive without being intrusive. It fires once on hover and stops, so it never becomes annoying.

### Physicality and delight

The damped oscillation mirrors how real objects behave under gravity. That physical realism registers subconsciously as "crafted" rather than "generated", contributing to a perception of quality in the interface.

### Versatile and lightweight

The entire animation system is under 120 lines of CSS. It attaches to any HTML element without restructuring markup, and three speed variants cover everything from a tiny notification badge to a large product card.

### Accessibility-safe

The stylesheet includes a `prefers-reduced-motion` media query that disables all swing animations for users who have requested reduced motion in their OS settings:

```css
@media (prefers-reduced-motion: reduce) {
  .swing-hover:hover,
  .swing-button:hover,
  /* … all swing classes … */ {
    animation: none;
  }
}
```

---

## How the pendulum effect works

### The physics model

A real pendulum swings through arcs that get progressively smaller because energy is lost to air resistance and friction — a process called _damping_. CSS cannot simulate physics equations, so the keyframes encode a hand-tuned approximation of that decay curve:

```
Angle sequence (degrees):  0 → -18 → +13 → -9 → +6 → -3.5 → +1.8 → -0.8 → 0
Damping ratio each step:   ~28%   ~31%   ~33%   ~42%   ~49%   ~49%   ~56%
```

Each swing is roughly 28–56% smaller than the previous one, creating a convincing illusion of energy loss.

### Why `transform-origin: top center` is required

`transform-origin` sets the fixed point around which a CSS transform rotates. The default is `50% 50%` — the geometric center of the element.

If you left it at the default, `rotate()` would spin the element around its own middle, like a coin being flipped. That is not a pendulum; it is a propeller.

A pendulum's pivot is at the **top**. The weight hangs below and arcs through space. Setting `transform-origin: top center` moves the pivot point to the top edge of the element. When `rotate()` fires, the bottom of the element sweeps left and right while the top stays anchored — exactly replicating pendulum motion.

```css
/*
  Without this line, rotate() spins around the center.
  With this line, rotate() swings around the top edge.
  One property is the entire secret of the pendulum illusion.
*/
.swing-button {
  transform-origin: top center;
}
```

### Why `display: inline-block` is required

CSS transforms have no effect on purely inline elements (e.g. a bare `<a>` or `<span>`). Adding `display: inline-block` (or any block-level display) gives the element a definite bounding box, which `transform-origin` and `rotate()` need to calculate the pivot point and arc correctly.

### The easing function

```css
animation: swing-pendulum 0.85s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
```

The `cubic-bezier(0.36, 0.07, 0.19, 0.97)` curve adds a slight initial acceleration and a firm deceleration at the end of each arc, mimicking the way a pendulum speeds up at the bottom of its swing and slows to a momentary stop at the top. Combined with the decreasing angle values in the keyframes, this produces the characteristic "heavy weight on a string" feel.

---

## File structure

```
submissions/examples/hover-swing-animation/
├── demo.html      ← Open directly in any browser
├── style.css      ← The animation library
└── README.md      ← This file
```

---

## Browser support

All modern browsers. The `@keyframes` and `transform` properties used here have been universally supported since 2013. The `prefers-reduced-motion` query is supported in all modern browsers.

---

_EaseMotion — handcrafted CSS animation primitives._
