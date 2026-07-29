# Backdrop Overlay Utilities

An isolated positional layout utility token set providing translucent masking planes to instantly manage typography contrast ratios on top of rich graphic media backdrops.

## Utility Roster API

- `.ease-overlay-dark`: Pins an absolute overlay layout layer applying a `rgba(15, 23, 42, 0.6)` slate-tinted backdrop mask. Built to preserve legibility for white text elements.
- `.ease-overlay-light`: Pins an absolute overlay layout layer applying a `rgba(255, 255, 255, 0.65)` white-tinted backdrop mask. Built to preserve legibility for dark text elements.
- `.ease-overlay-interactive`: Re-enables pointer-events on the overlay layer if it is being adapted to serve as an intercepting modal/drawer container backdrop.

## Usage Layout Structure
```html
<div class="relative-card">
  <img src="..." class="background-image" />
  
  
  <div class="ease-overlay-dark"></div>
  
  
  <div class="z-10"> ... </div>
</div>
```

Closes #13480
