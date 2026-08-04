# Firefox Animation Delay Cascade Patch

An interaction repair patch resolving a structural parsing quirk under issue #13299 that prevents animation delays from processing reliably inside Mozilla Firefox.

## Bug Resolution Analysis

- **The Problem:** Components declaring baseline animations via the CSS shorthand property (`animation: name duration timing-function iteration-count;`) implicitly map omitted parameters like `animation-delay` to their default initialization state (`0s`). While Blink-based browsers allow subsequent utility classes to override individual properties later down the cascade, Firefox's Gecko engine strictly matches utility modifiers against the initial shorthand declaration, stripping out un-isolated cascade variants.
- **The Solution:** Appends explicit structural `!important` markers to all standalone `.ease-delay-*` timing utilities. This preserves specificity constraints across separate utility classes, shielding the tracking offset value from shorthand resets without altering core layout properties.

## Usage Layout Structure
```html

<div class="ease-animate-pulse ease-delay-500"></div>
```

Closes #13299
