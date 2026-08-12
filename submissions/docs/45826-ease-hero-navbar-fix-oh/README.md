# Bug Fix: ease-hero-navbar-spacing

This submission documents the fix for **Issue #45826** - Hero section overlaps with fixed navbar after switching to Light Theme.

## Problem

After switching to the Light Theme, the hero section was partially hidden behind the fixed navigation bar.

## Solution

Use a CSS custom property `--navbar-height` to define the fixed navbar height:

```css
:root {
  --navbar-height: 64px;
}

.ease-hero-section {
  padding-top: calc(var(--navbar-height) + 3rem);
}
```

## Usage

```css
/* For content following a fixed navbar */
.my-section {
  scroll-margin-top: var(--navbar-height);
  padding-top: calc(var(--navbar-height) + spacing);
}
```

## Acceptance Criteria

- ✅ Hero section fully visible below fixed navbar
- ✅ Spacing consistent across light/dark themes
- ✅ Responsive design maintained
- ✅ `prefers-reduced-motion` support
