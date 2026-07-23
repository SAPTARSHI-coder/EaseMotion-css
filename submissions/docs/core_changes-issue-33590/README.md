# Accessibility: prefers-reduced-motion core implementation

## Issue #33590

This submission implements accessibility overrides to satisfy WCAG 2.1 Success Criterion 2.3.3 (Animation from Interactions) by adding core reduced motion media queries.

---

## 1. Description

We add responsive overrides to disable all auto-triggering keyframe animations and structural transitions for users who have configured "Reduce Motion" at the operating system level.

---

## 2. Proposed Core Implementation

Add this block at the end of [core/animations.css](file:///c:/Users/Harsh/EaseMotion-css/core/animations.css):

```css
/* ── Reduced Motion Override ─────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 3. WCAG Success Criterion Compliance

- **SC 2.3.3 (AAA):** Users can turn off motion triggered by interaction.
- **SC 1.4.3:** Auto-playing animations must stop within 5 seconds. Setting duration to `1ms` and iteration count to `1` satisfies this automatically.
