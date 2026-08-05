# Accessibility Fix: Enhanced Reduced Motion Support

## Summary
This PR enhances accessibility by ensuring all animations respect the `prefers-reduced-motion` user preference and adds focus visibility styles.

## Problem
1. Not all animations respect `prefers-reduced-motion` media query
2. Missing visible focus states for keyboard users

## Changes Required

### 1. Enhanced Reduced Motion Support
Add to `core/animations.css`:

```css
/* Enhanced reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Replace complex animations with simple fades */
  .ease-fade-in,
  .ease-slide-up,
  .ease-bounce {
    opacity: 1 !important;
    transform: none !important;
  }
}

/* User-controlled reduced motion class */
.motion-reduced *,
.motion-reduced *::before,
.motion-reduced *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
  scroll-behavior: auto !important;
}
```

### 2. Focus Visibility Styles
Add to `core/utilities.css`:

```css
/* Visible focus styles for keyboard navigation */
:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Don't hide focus for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}

/* Ensure focus is visible on all interactive elements */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.2);
}
```

### 3. Toggle Class for Users
```javascript
// Allow users to manually toggle reduced motion
document.body.classList.toggle('motion-reduced');
```

## WCAG Compliance
- WCAG 2.1 2.3.1 (Level A) - Three Flashes or Below Threshold
- WCAG 2.1 2.4.7 (Level AA) - Focus Visible
- WCAG 2.1 2.4.11 (Level AA) - Focus Not Obscured

## References
- Fixes #61605
- Fixes #61609
- Reported by automated bug hunter
