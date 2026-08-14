# RTL-Aware Slide Animations Workaround

## The Bug
When a document's text direction is set to Right-To-Left (`dir="rtl"`) on the `html` or `body` element, layout direction and horizontal flow are mirrored to suit languages like Arabic, Hebrew, and Urdu. However, standard CSS keyframe animations with hardcoded coordinate values:
- `transform: translateX(-100%)` (starts on the left)
- `transform: translateX(100%)` (starts on the right)

Do not dynamically mirror themselves because translate coordinates are always screen-absolute (negative X is always left, positive X is always right). As a result, `.ease-slide-in-left` slides in from the wrong side (the end instead of the start) and `.ease-slide-in-right` does the opposite.

## Suggested Fix: CSS Variable Overrides in Keyframes
To achieve writing-direction-aware animations without duplicating animation keyframes, we back keyframe translation offsets with CSS custom properties.

### 1. Keyframe Refactoring
Define keyframes using CSS variables with LTR-default fallbacks:
```css
@keyframes ease-kf-slide-in-from-left {
  from {
    opacity: 0;
    transform: translateX(var(--ease-slide-from-left, -100%));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes ease-kf-slide-in-from-right {
  from {
    opacity: 0;
    transform: translateX(var(--ease-slide-from-right, 100%));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### 2. RTL Override Rules
Create logical selectors targeting elements nested inside elements with `dir="rtl"` to flip/mirror the offsets:
```css
/* Standard LTR configuration default is active */
.ease-slide-in-from-left {
  animation: ease-kf-slide-in-from-left 0.5s ease-out both;
}

.ease-slide-in-from-right {
  animation: ease-kf-slide-in-from-right 0.5s ease-out both;
}

/* RTL overrides to invert the direction */
[dir="rtl"] .ease-slide-in-from-left {
  --ease-slide-from-left: 100%;
}

[dir="rtl"] .ease-slide-in-from-right {
  --ease-slide-from-right: -100%;
}
```

This ensures slide animations remain logical: sliding "from the start of inline layout" in both LTR (starts on left) and RTL (starts on right).
