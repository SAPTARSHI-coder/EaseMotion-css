# Fix: ease-rotate Hardcoded Duration Ignores Speed Token

**Issue:** [#5527](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5527)

## Problem

`.ease-rotate` had its animation duration hardcoded:

```css
/* ❌ Before — hardcoded, ignores token system */
.ease-rotate {
  animation: ease-kf-rotate 1.2s linear infinite;
}
```

Changing `--ease-speed-medium` in `variables.css` had no effect on
rotation speed, making `.ease-rotate` inconsistent with other animation
classes like `.ease-pulse` and `.ease-fade-in`.

## Fix

Replace `1.2s` with a CSS variable that falls back through the token chain:

```css
:root {
  --ease-rotate-speed: var(--ease-speed-medium, 1.2s);
}

/* ✅ After — respects token system */
.ease-rotate {
  animation: ease-kf-rotate var(--ease-rotate-speed) linear infinite;
}
```

## Usage

```html
<!-- Default speed (inherits --ease-speed-medium) -->
<div class="ease-rotate"></div>

<!-- Override globally -->
<style>:root { --ease-speed-medium: 600ms; }</style>

<!-- Override per element -->
<div class="ease-rotate" style="--ease-rotate-speed: 0.4s;"></div>

<!-- Use speed tokens -->
<div class="ease-rotate" style="--ease-rotate-speed: var(--ease-speed-fast);"></div>
```

## How to Verify

1. Open `demo.html`
2. Drag the slider to change `--ease-speed-medium`
3. The **fixed** spinner immediately changes speed
4. The **buggy** spinner stays at 1.2s regardless

## Files
- `style.css` — the fix
- `demo.html` — side-by-side comparison + live slider demo