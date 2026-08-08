# Reduced Motion Safe — Selector Interop Fix

## Bug

The current `prefers-reduced-motion` handler in `core/animations.css` uses an overly broad selector:

```css
@media (prefers-reduced-motion: reduce) {
  [class*="ease-"] {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

**Problem:** `[class*="ease-"]` matches any element whose `class` attribute contains the substring `"ease-"` — including classes from other CSS frameworks:

- **Tailwind CSS**: `ease-in`, `ease-out`, `ease-in-out` (timing function utilities)
- **Bootstrap**: `ease-in-out` (transition timing)
- **Any framework** with classes containing "ease-"

This causes unintended animation disabling for non-EaseMotion elements, breaking interop.

## Solution

Replace the broad `[class*="ease-"]` selector with an explicit allowlist of EaseMotion animation class prefixes:

```css
@media (prefers-reduced-motion: reduce) {
  [class*="ease-bounce"],
  [class*="ease-fade-"],
  [class*="ease-slide-"],
  [class*="ease-hover-"],
  [class*="ease-card-"],
  [class*="ease-skeleton-"],
  [class*="ease-rotate"],
  [class*="ease-pulse"],
  [class*="ease-wave"],
  [class*="ease-ping"],
  [class*="ease-shake"],
  [class*="ease-flip"],
  [class*="ease-blur-"],
  [class*="ease-zoom-"],
  [class*="ease-float"],
  [class*="ease-shimmer"],
  [class*="ease-squish"],
  [class*="ease-gradient-"],
  [class*="ease-contract-"],
  [class*="ease-expand-"],
  [class*="ease-typewriter"],
  [class*="ease-count-"],
  [class*="ease-reveal"],
  [class*="ease-snap-"] {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }

  [class*="ease-hover-"],
  [class*="ease-card-"] {
    transition: none !important;
    transform: none !important;
  }
}
```

## Why This Matters

1. **Framework Interop**: Projects using EaseMotion alongside Tailwind, Bootstrap, or other CSS frameworks won't have their non-EaseMotion animations accidentally disabled.
2. **Specificity**: The allowlist approach is more intentional and less likely to cause surprise side effects.
3. **Maintainability**: Each prefix is explicit, making it clear which classes are targeted.
4. **Accessibility**: Still fully respects `prefers-reduced-motion` for all EaseMotion animations.

## How to Test

1. Open the `demo.html` file in a browser
2. Open DevTools → Rendering tab → Enable "Emulate CSS media feature prefers-reduced-motion: reduce"
3. Observe that EaseMotion animations stop, but the Tailwind-style `ease-in-out` transition on the yellow box continues to work

## Files

- `demo.html` — Interactive before/after comparison
- `style.css` — The fixed CSS with the safer selector approach
- `README.md` — This file

## Related Issues

- #800 — Duration and delay utility classes do not affect hover animation
- #740 — Remove duplicate keyframe definitions in animations.css
