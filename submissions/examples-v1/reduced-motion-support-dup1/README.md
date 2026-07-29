# Prefers Reduced Motion Support

This submission fixes Issue #38162 by adding `@media (prefers-reduced-motion: reduce)` support.  
Users with motion sensitivity who enable "Reduce Motion" at the OS level will now see animations disabled or shortened.

## Usage

```css
@media (prefers-reduced-motion: reduce) {
  .animated-box {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
