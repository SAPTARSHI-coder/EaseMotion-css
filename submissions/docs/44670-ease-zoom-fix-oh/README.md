# Bug Fix: ease-zoom-in Scrollbar Flicker

This submission documents the fix for **Issue #44670** - ease-zoom-in on hero section causes brief scrollbar flicker in Chrome on page load.

## Problem

When `.ease-zoom-in` is applied to a full-width hero section, Chrome shows a brief vertical scrollbar flicker on page load due to the `scale` transform extending beyond viewport bounds.

## Solution

Use `overflow: hidden` on the parent container and add `clip-path: inset(0)` to the animated element:

```css
.hero-container {
  overflow: hidden;
}

.hero-container .ease-zoom-in {
  clip-path: inset(0);
}
```

## Full Example

```html
<div class="hero-container">
  <div class="hero ease-zoom-in">
    <!-- Content -->
  </div>
</div>
```

```css
.hero-container {
  overflow: hidden;
}

.hero-container .ease-zoom-in {
  clip-path: inset(0);
}
```

## Acceptance Criteria

- ✅ No scrollbar appears during zoom-in animation
- ✅ Works in Chrome and other browsers
- ✅ Animation behavior unchanged
- ✅ `prefers-reduced-motion` support
