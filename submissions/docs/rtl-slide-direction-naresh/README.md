# RTL-Aware Slide Animations Workaround (Multiplier Approach)

## The Bug
When a document's text direction is set to Right-To-Left (`dir="rtl"`) on the `html` or `body` element, layout direction and horizontal flow are mirrored to suit languages like Arabic, Hebrew, and Urdu. However, standard CSS keyframe animations with hardcoded coordinate values:
- `transform: translateX(-100%)` (starts on the left)
- `transform: translateX(100%)` (starts on the right)

Do not dynamically mirror themselves because translate coordinates are always screen-absolute. As a result, `.ease-slide-left` slides in from the wrong side (the end instead of the start) and `.ease-slide-right` does the opposite.

## Proposed Fix: Direction Multiplier CSS Variable
To achieve writing-direction-aware animations without duplicating keyframes or override selectors, we introduce a single direction multiplier variable `--ease-slide-dir` that defaults to `1` in LTR and flips to `-1` in RTL.

### 1. Keyframe Refactoring
Define keyframes using the direction multiplier:
```css
:root {
  --ease-slide-dir: 1;
}

[dir="rtl"], [dir="rtl"] * {
  --ease-slide-dir: -1;
}

@keyframes ease-kf-logical-left {
  from {
    opacity: 0;
    transform: translateX(calc(-100% * var(--ease-slide-dir)));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes ease-kf-logical-right {
  from {
    opacity: 0;
    transform: translateX(calc(100% * var(--ease-slide-dir)));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### 2. Classes Definitions
```css
.ease-logical-left {
  animation: ease-kf-logical-left 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.ease-logical-right {
  animation: ease-kf-logical-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}
```

This ensures slide animations automatically invert translation coordinates, sliding "from the start of inline layout" in both LTR (starts on left) and RTL (starts on right).
