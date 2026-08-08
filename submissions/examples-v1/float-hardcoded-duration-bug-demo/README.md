# Float: Hardcoded 3s duration instead of design token

**Issue:** `#5868`  
**File:** `core/animations.css`

## Problem

`.ease-float` uses a hardcoded `3s` duration (`animation: ease-float 3s ease-in-out infinite`) instead of referencing a CSS custom property token. This prevents users from customising the speed via a single token override.

Additionally, the keyframe is named `ease-float` instead of following the `ease-kf-*` convention used by other keyframes.

## Expected

```css
.ease-float {
  animation: ease-float var(--ease-float-speed, 3s) ease-in-out infinite;
}
```

## Demo

Open `demo.html` to see the float animation with the hardcoded 3s duration shown in the CSS source.
