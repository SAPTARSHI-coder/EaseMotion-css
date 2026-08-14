# CSS Breath Ring Loader

A pure CSS, rhythmic expanding and contracting ring loader designed to communicate loading states through a calm breathing cadence.

## Overview

The Breath Ring Loader provides an alternative to traditional spinning indicators by using an organic 4-stage keyframe sequence (Expand → Hold → Contract → Hold). Built entirely without JavaScript, it leverages EaseMotion design tokens and CSS scale transformations.

## Usage

```html
<div class="ease-breath-ring-wrapper" role="status" aria-live="polite">
  <div class="ease-breath-ring">
    <div class="ease-breath-ring-core"></div>
  </div>
  <span class="sr-only">Loading, please wait...</span>
</div>
```

### Variants

- **Size**: Add `.ease-breath-ring-sm` (40px) or `.ease-breath-ring-lg` (88px).
- **Themes**: Add `.ease-breath-ring-success` or `.ease-breath-ring-info`.

```html
<div class="ease-breath-ring ease-breath-ring-lg ease-breath-ring-success">
  <div class="ease-breath-ring-core"></div>
</div>
```

## Customization

The component exposes CSS custom variables for direct styling overrides:

```css
.custom-loader {
  --breath-ring-size: 72px;
  --breath-ring-color: #ec4899;
  --breath-ring-duration: 3s;
}
```

## Rhythm & Keyframes

The keyframe cycle is split into four distinct phases over the animation duration:

1. **0% – 35%**: Expand (Inhale phase)
2. **35% – 50%**: Hold (Peak scale stability)
3. **50% – 85%**: Contract (Exhale phase)
4. **85% – 100%**: Hold (Rest before repeating)

## Accessibility & Reduced Motion

- **ARIA**: Includes `role="status"` and `aria-live="polite"` with visually hidden screen reader text (`.sr-only`).
- **Reduced Motion**: Automatically pauses keyframe animations when `prefers-reduced-motion: reduce` is enabled, presenting a static, non-distracting indicator.
