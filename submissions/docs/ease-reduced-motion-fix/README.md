# Reduced Motion Support

## What does this do?
Ensures all EaseMotion CSS animations respect the user's `prefers-reduced-motion` system preference and provides a `.motion-reduced` class for manual control.

## How is it used?
Apply animations normally with EaseMotion classes, and the browser will automatically disable them for users who prefer reduced motion:

```html
<!-- Automatic reduction based on system preference -->
<div class="ease-fade-in ease-bounce">Content</div>

<!-- Manual control via class -->
<body class="motion-reduced">
  <!-- All animations disabled -->
</body>
```

## Why is it useful?
- **Accessibility**: Respects users with vestibular disorders who need reduced motion
- **WCAG 2.1 Compliance**: Meets Level AA requirements for animation safety
- **User Control**: Provides both automatic (system) and manual (class) options
- **No Breaking Changes**: Existing animations work without modification

## Implementation
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.motion-reduced *,
.motion-reduced *::before,
.motion-reduced *::after {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

## WCAG References
- [WCAG 2.1 2.3.1 (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) - Three Flashes or Below Threshold
- [WCAG 2.1 2.3.2 (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html) - Three Flashes
