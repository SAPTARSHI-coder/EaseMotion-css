# hover-fill-animation

A collection of smooth, GPU-accelerated background-fill hover effects built with pure CSS pseudo-elements. No JavaScript, no dependencies.

---

## What does this do?

When a user hovers over (or focuses) an element, a coloured background layer sweeps in — either **bottom-to-top** or **left-to-right** — creating a polished "flooding fill" effect. The fill is entirely visual; it never disrupts layout or accessibility.

Two directional variants are included:

| Variant      | CSS class modifier | Mechanism                                              |
| ------------ | ------------------ | ------------------------------------------------------ |
| Bottom → Top | `fill-bottom-top`  | `scaleY(0 → 1)` with `transform-origin: bottom center` |
| Left → Right | `fill-left-right`  | `scaleX(0 → 1)` with `transform-origin: left center`   |

---

## How is it used?

### 1. Add `style.css` to your page

```html
<link rel="stylesheet" href="style.css" />
```

### 2. Apply a component class + a direction modifier

#### Fill Button — bottom-to-top

```html
<button class="fill-button fill-bottom-top">
  <span>Get Started</span>
</button>
```

#### Fill Button — left-to-right

```html
<button class="fill-button fill-left-right">
  <span>Learn More</span>
</button>
```

#### Outline Button with Fill

```html
<button class="outline-fill fill-bottom-top">
  <span>Subscribe</span>
</button>
```

#### Fill Link

```html
<a href="/docs" class="fill-link fill-link--ltr">Documentation</a>

<!-- Bottom-to-top highlight variant -->
<a href="/docs" class="fill-link fill-link--btt">Changelog</a>

<!-- Gold accent fill -->
<a href="/docs" class="fill-link fill-link--ltr fill-link--gold">Source Code</a>
```

#### Fill Card

```html
<article class="fill-card fill-card--btt">
  <h3 class="card-title">Performance</h3>
  <p class="card-body">GPU-accelerated, silky smooth.</p>
</article>

<!-- Left-to-right card -->
<article class="fill-card fill-card--ltr">…</article>
```

#### Slide Fill (pills / tags)

```html
<button class="slide-fill">Design</button>
<button class="slide-fill slide-fill--active">CSS</button>
```

### 3. Customise via CSS variables

Override these properties anywhere in your stylesheet:

```css
:root {
  --fill-white: rgba(255 255 255 / 1); /* default fill colour */
  --fill-gold: #c9a84c; /* accent fill colour  */
  --dur-fill: 0.38s; /* animation duration  */
  --ease-fill: cubic-bezier(0.4, 0, 0.2, 1); /* easing curve        */
}
```

---

## How the pseudo-element fill animation works

```
┌──────────────────────────┐
│  .fill-button            │  ← position: relative; overflow: hidden
│  ┌────────────────────┐  │
│  │  ::before          │  │  ← position: absolute; inset: 0
│  │  (fill layer)      │  │    transform: scaleY(0)        ← hidden
│  │  background: white │  │    transform-origin: bottom    ← grows up
│  └────────────────────┘  │
│  <span> text  z-index:1  │  ← floats ABOVE the fill
└──────────────────────────┘

           ON HOVER:
    ::before → transform: scaleY(1)   ← fill floods upward
```

**Step-by-step:**

1. **Containment** — The parent element is `position: relative` and `overflow: hidden`. This makes it the reference box for the fill layer, and ensures the fill is clipped to the element's border-box.

2. **The fill layer** — `::before` is `position: absolute; inset: 0` so it exactly covers the parent. It starts with `transform: scaleY(0)` (invisible, zero height) and a `transform-origin` pointing to the edge the fill grows _from_.

3. **GPU acceleration** — Only `transform` and `transition` are used. No `height`, `clip-path` toggling, or `opacity`. This ensures the browser handles the animation entirely on the compositor thread — no layout recalculation, no paint — resulting in consistently smooth 60 fps motion.

4. **Text visibility** — Child elements (`<span>`, `.card-title`, etc.) are given `position: relative; z-index: 1` so they stack above the `::before` fill layer at all times. The text colour transition (`transition: color`) ensures legibility is maintained throughout the sweep.

5. **Direction variants** — Changing `transform-origin` and toggling between `scaleY` and `scaleX` produces the two directional variants with zero additional markup.

---

## Why is it useful?

**1. Pure CSS — no runtime cost.**  
No JavaScript event listeners, no RAF loops, no DOM mutations. The entire effect is declarative and browser-native.

**2. Performance-safe by design.**  
`transform` transitions are composited separately from the main thread. The animation cannot cause layout reflow or style recalculation in the elements around it.

**3. Accessible out of the box.**

- Works on `:focus-visible` — keyboard users get the same feedback as pointer users.
- Respects `prefers-reduced-motion: reduce` — a single media query in `style.css` collapses all transition durations to near zero.
- The fill is purely decorative; no semantic information is conveyed through the animation.

**4. Composable.**  
Direction modifier classes (`fill-bottom-top`, `fill-left-right`) are independent of component classes (`fill-button`, `fill-card`, etc.). Mix and match freely.

**5. Themeable.**  
All colours and timing values are CSS custom properties. Adapting to any brand palette requires overriding two or three variables — no source editing required.

---

## File structure

```
submissions/examples/hover-fill-animation/
├── demo.html    ← open directly in any browser
├── style.css    ← all components and utilities
└── README.md    ← this file
```

---

## Browser support

All modern browsers (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+).  
Uses: `position`, `overflow: hidden`, `transform`, `transition`, `::before`, CSS custom properties — all baseline-available.
