# Accessibility Guide: prefers-reduced-motion

## What is prefers-reduced-motion?
A CSS media query that detects if the user has requested reduced motion
in their OS settings. Helps users who experience discomfort or seizures
from animations.

## The CSS Pattern
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
```

## How to Test
**Windows:** Settings → Ease of Access → Display → Show animations
**Mac:** System Preferences → Accessibility → Display → Reduce Motion
**iOS:** Settings → Accessibility → Motion → Reduce Motion
**Android:** Settings → Accessibility → Remove Animations

## EaseMotion Classes That Respect It
All EaseMotion classes respect `prefers-reduced-motion` automatically
since the global rule above is included at the bottom of `animations.css`:
- `.ease-fade-in` / `.ease-fade-out`
- `.ease-slide-up` / `.ease-slide-down`
- `.ease-slide-in-left` / `.ease-slide-in-right`
- `.ease-bounce`, `.ease-pulse`, `.ease-rotate`
- `.ease-blur-to-focus`
- All exit animations (`.ease-*-exit`)
- All hover animations (`.ease-hover-*`)

## Why This Matters
Users with vestibular disorders, epilepsy, or motion sensitivity rely
on this setting. Always ensure your animations degrade gracefully.