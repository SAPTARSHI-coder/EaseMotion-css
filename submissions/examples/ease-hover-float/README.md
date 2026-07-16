# Hover Float (`ease-hover-float`)

A beginner-friendly hover utility component that lifts an element off the surface on `:hover` while its shadow simultaneously spreads and softens beneath it — simulating a real physical float rather than a flat translate.

## Technical Composition Breakdown

- **Vertical Lift on Hover:** Applies `transform: translateY(-6px)` on `:hover` and `:focus-visible`, configurable via the `--float-distance` custom property for stronger or subtler lifts.
- **Dual-Layer Shadow Growth:** The resting `box-shadow` is tight and close (`0 2px 6px`); on hover it transitions to a two-layer shadow that both spreads wider and blurs softer, including a faint accent-tinted glow — not just a longer offset, but genuine growth in spread and blur radius.
- **Bouncy Cubic-Bezier Easing:** Uses `cubic-bezier(0.34, 1.56, 0.64, 1)` — an overshoot curve that lifts slightly past its target before settling, giving the motion a weightless, physical quality rather than a mechanical linear rise.
- **Synchronized Transitions:** Both `transform` and `box-shadow` transition on the same duration and easing curve so the lift and the shadow growth read as one cohesive physical motion, not two separate effects.
- **Element-Agnostic:** Works identically on cards, buttons, and icon chips — demonstrated across all three in the demo — since the class only touches `transform` and `box-shadow`.
- **Keyboard Accessible:** Hover state is mirrored on `:focus-visible`, so keyboard users tabbing through the page get the same lift feedback as mouse users.
- **Reduced Motion Architecture:** Under `@media (prefers-reduced-motion: reduce)`, the `translateY` movement is dropped entirely while the shadow feedback is preserved, keeping the interaction perceivable without motion.

## Workspace Tree Map

```
submissions/examples/ease-hover-float/
├── demo.html     # Live hover demo across cards, button, and icon chips
├── style.css     # Modular hover-float utility stylesheet
└── README.md     # This file
```

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**