# ease-stacked-scroll-deck

> A zero-JavaScript stacked card scroll effect using the native **CSS Scroll-Driven Animations API** (`animation-timeline: view()`).
> Part of the [EaseMotion CSS](../../) component library.

---

## What does this do?

`ease-stacked-scroll-deck` creates a **stacked card deck** that reveals and recedes as the user scrolls — with no JavaScript whatsoever.

Each card uses `position: sticky` to pin itself to the viewport while the page scrolls. As a card's containing element exits the viewport, the browser's native **Scroll-Driven Animations API** fires a `@keyframes` animation tied directly to scroll position. The card smoothly **scales down, fades, and blurs** to reveal the card beneath it, producing a premium "deck of cards" peeling effect.

The entire interaction is driven by a single CSS property:

```css
animation-timeline: view();
```

`view()` creates an anonymous **ViewTimeline** scoped to the element's scroll container. The `animation-range: exit-crossing 0% exit-crossing 100%` range maps the animation progress 1-to-1 with how far the card's bounding box has crossed the scroll-container's exit boundary — giving pixel-perfect, scrub-friendly control with zero JS event listeners.

---

## How is it used?

Add the wrapper and card classes to your HTML, then link `style.css`. No scripts needed.

### HTML

```html
<div class="ease-stacked-scroll-deck">

  <div class="ease-scroll-card card-1">
    <!-- your card content -->
  </div>

  <div class="ease-scroll-card card-2">
    <!-- your card content -->
  </div>

  <div class="ease-scroll-card card-3">
    <!-- your card content -->
  </div>

</div>
```

> **Tip:** Add a tall spacer (`height: 100vh`) after the last card so the final card has enough scroll distance to complete its exit animation.

### Key CSS pattern

The entire effect relies on the combination of `position: sticky` (to keep the card in view) and `animation-timeline: view()` (to drive the animation from scroll progress):

```css
.ease-scroll-card {
  /* 1. Pin the card so it stays visible while the deck scrolls */
  position: sticky;
  top: 2rem;

  /* 2. Define the exit animation */
  animation: ease-scale-down linear forwards;

  /* 3. Tie the animation to the element's scroll visibility — no JS */
  animation-timeline: view();
  animation-range: exit-crossing 0% exit-crossing 100%;
}

@keyframes ease-scale-down {
  to {
    transform: scale(0.85);
    opacity: 0.4;
    filter: blur(4px);
  }
}
```

| Property | Role |
|---|---|
| `position: sticky; top: 2rem` | Holds the card in the viewport as the page scrolls |
| `animation-timeline: view()` | Creates a scroll-linked timeline scoped to the element's visibility in the scroller |
| `animation-range: exit-crossing …` | Maps animation progress to how far the element has exited the scroll container |
| `@keyframes ease-scale-down` | Defines the visual exit state (scale + opacity + blur) |

### Customising the stacking offset

Each card gets a unique `top` offset so they visually stack. Use CSS custom properties or `nth-child` selectors for this:

```css
.ease-scroll-card:nth-child(1) { top: 2rem; z-index: 1; }
.ease-scroll-card:nth-child(2) { top: 3rem; z-index: 2; }
.ease-scroll-card:nth-child(3) { top: 4rem; z-index: 3; }
```

---

## Why is it useful?

### Replaces heavy JavaScript animation libraries — entirely

Historically, this type of scroll-intersection card effect required one of:

- **GSAP ScrollTrigger** (~60 KB gzipped) — attaches `scroll` event listeners, calculates element positions on every tick, and uses `requestAnimationFrame` to synchronise DOM updates.
- **Framer Motion** (~40 KB gzipped) — React-specific, requires a JS runtime, and uses `IntersectionObserver` + `useTransform` hooks to link scroll values to motion values.
- **Custom IntersectionObserver code** — verbose, brittle across scroll containers, and still runs on the main thread.

`ease-stacked-scroll-deck` replaces all of the above with **five lines of CSS**.

### Runs on the compositor thread

Because `animation-timeline: view()` is a native browser primitive, the browser can run the scroll-linked animation **entirely on the GPU compositor thread** — the same thread that handles smooth scrolling. This means:

- **No jank** from main-thread JavaScript blocking.
- **No layout thrash** from repeated `getBoundingClientRect()` calls.
- **No dropped frames** under heavy CPU load (e.g., during parsing or network activity).

The scroll progress is calculated natively by the rendering engine and handed directly to the compositor, bypassing JavaScript entirely.

### Zero runtime cost

| Metric | GSAP ScrollTrigger | `animation-timeline: view()` |
|---|---|---|
| JS bundle size | ~60 KB gzipped | **0 KB** |
| Main-thread scroll listeners | Yes | **No** |
| Compositor-thread animation | No | **Yes** |
| Works with `prefers-reduced-motion` | Manual setup | `@media` query only |
| CSP compatibility | Requires `unsafe-eval` in some configs | **Full CSP safe** |

### Progressive enhancement

The effect degrades gracefully: browsers that do not yet support Scroll-Driven Animations (e.g., Firefox < 110 without the flag) simply display the cards as standard sticky-positioned elements with no animation — still fully readable and usable.

```css
/* Optional: disable for reduced-motion users */
@media (prefers-reduced-motion: reduce) {
  .ease-scroll-card {
    animation: none;
  }
}
```

---

## Browser Support

| Browser | Version |
|---|---|
| Chrome / Edge | 115+ ✅ |
| Safari | 18+ ✅ |
| Firefox | 110+ (with flag), 132+ (stable) ✅ |

---

## Files

```
submissions/examples/ease-stacked-scroll-deck/
├── demo.html   ← Self-contained demo, zero JS
├── style.css   ← Component styles + scroll animation
└── README.md   ← This file
```

---

## Related Issues

Closes **#62924** — `ease-stacked-scroll-deck` using CSS `view()` timelines.
