# Global prefers-reduced-motion Support Showcase

## What does this do?
Documents and demonstrates the existing global `prefers-reduced-motion` support already present in `core/animations.css` and `core/base.css`, which addresses vestibular-safety concerns raised in issue #64481.

## How is it used?
No opt-in required — it's automatic. Any element using EaseMotion animation classes (e.g. `.ease-fade-in`, `.ease-bounce`, custom `em=""` engine animations) already respects the user's OS/browser-level reduced motion setting:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

The included `demo.html` shows a set of heavy animations (3D flip, bounce, wobble) with a toggle that simulates `prefers-reduced-motion: reduce`, so reviewers can see the graceful degradation live.

## Why is it useful?
Issue #64481 requested a global, framework-wide fallback for `prefers-reduced-motion` to protect users with vestibular disorders from motion sickness caused by heavy animations (3D flips, bounces, wobbles). Investigation showed this already exists in `core/animations.css` (global override on `*, *::before, *::after`) and `core/base.css` (scroll-behavior). This submission:
1. Provides a visual, interactive demo confirming the existing rule degrades complex 3D/bounce/wobble animations to near-instant, satisfying WCAG 2.1 SC 2.3.3 (Animation from Interactions) intent.
2. Flags one gap for the maintainer to consider: the current rule reduces animation *duration* to near-zero but doesn't fully disable `transform`-based motion paths (e.g. a 3D flip still visually "snaps" to its end state extremely fast rather than being fully static) — an alternative approach using `animation: none !important;` and `transform: none !important;` inside the query could be considered for full compliance in a future core update.

Relates to #64481.