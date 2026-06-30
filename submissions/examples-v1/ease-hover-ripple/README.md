# Cursor Ripple (`ease-hover-ripple`)

An intermediate hover utility component where a circular ripple expands outward from the exact cursor position on hover. A tiny JavaScript snippet tracks the pointer and writes two CSS custom properties — `--ease-cursor-x` and `--ease-cursor-y` — while CSS owns 100% of the actual animation work.

## Technical Composition Breakdown

- **Cursor-Positioned Pseudo-Element:** The ripple is a `::after` pseudo-element pinned via `left: var(--ease-cursor-x)` and `top: var(--ease-cursor-y)`, with negative margins equal to half its size so it's always centered exactly on the live coordinate rather than offset by its own dimensions.
- **Clean JS/CSS Separation:** JavaScript's only responsibility is a `pointermove` listener that converts the event's viewport coordinates into element-relative pixels via `getBoundingClientRect()` and writes them to the two custom properties — it never touches `transform`, `opacity`, `class`, or any animation logic. All visual behavior (`scale(0) → scale(4)`, opacity fade) lives entirely in CSS transitions on `:hover`.
- **Scale + Opacity Expansion:** On `:hover`, the pseudo-element transitions from `scale(0)`/`opacity: 0` to `scale(4)`/`opacity: 0.35` over `--ease-ripple-duration` (default `0.6s`) with an `ease-out` curve, matching the acceptance criteria's `scale(0) → scale(4)` requirement precisely.
- **Real-Time Tracking, Not Click-Triggered:** Because the JS listens on `pointermove` rather than `click`, the ripple's origin updates continuously as the cursor moves across the element — hovering near one corner and then the opposite corner relocates the ripple's center accordingly, rather than freezing at the entry point.
- **Configurable Color and Size:** `--ease-ripple-color` and `--ease-ripple-size` (the pseudo-element's base diameter before scaling) are exposed as overridable custom properties, demonstrated with violet, teal, and rose card variants in the demo.
- **Isolation and Clipping:** The host element uses `overflow: hidden` and `isolation: isolate` so the expanding ripple never bleeds outside the element's rounded corners or interferes with stacking elsewhere on the page.
- **Touch Fallback:** A `pointerdown` listener scoped to `pointerType === 'touch'` sets the ripple origin to the tap point, since touch devices have no continuous `pointermove` before contact.
- **Reduced Motion Architecture:** Under `@media (prefers-reduced-motion: reduce)`, the long scale transition is replaced with a brief opacity-only fade to a modest `scale(1.5)`, preserving the interaction cue without the larger expanding motion.

## Workspace Tree Map

```
submissions/examples/ease-hover-ripple/
├── demo.html     # Live demo with cards, button, and large surface — includes the cursor-tracking script
├── style.css     # Modular ripple utility stylesheet
└── README.md     # This file
```

---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**
