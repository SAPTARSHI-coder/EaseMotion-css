# Reduced Motion Accessibility Fix Test

## What does this do?
This is a test case verifying the global accessibility fix for `prefers-reduced-motion` inside `core/base.css`. 
The core file was updated to include a global reset:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

## How to test?
1. Open `demo.html` in your browser.
2. Enable "Reduce Motion" in your OS accessibility settings.
3. Observe that animations (`ease-fade-in`, `ease-slide-up`, `ease-bounce`) do not play.
