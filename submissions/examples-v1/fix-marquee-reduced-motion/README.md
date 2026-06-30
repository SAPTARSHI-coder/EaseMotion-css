# Fix for Marquee Reduced Motion

Resolves Issue #8430.

## Description
This submission fixes an accessibility issue where the marquee content becomes inaccessible when a user prefers reduced motion. 

The original code correctly stops the animation (`animation: none`), but leaves `overflow-x: hidden` on the `.ease-marquee` container. As a result, the user cannot manually scroll to read the content that is off-screen.

This fix adds a `prefers-reduced-motion` override that changes `overflow-x: hidden` to `overflow-x: auto`, allowing manual scrolling when the animation is disabled.

## How to Apply
Maintainers should update `components/ease-marquee.css` around line 133:

```css
  /* ============================================
     RESPONSIVE BEHAVIOR
     ============================================ */
  @media (prefers-reduced-motion: reduce) {
    .ease-marquee {
      overflow-x: auto; /* Added */
    }
    
    .ease-marquee-track {
      animation: none;
    }
  }
```
