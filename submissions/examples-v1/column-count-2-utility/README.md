# Column Count 2 Utility

Introduces the core multi-column balancing layout utility token (`.ease-cols-2`) under issue #15195.

## Functional Mechanics

- **The Problem:** Setting up side-by-side text content distributions without utilizing heavy structural flex wrappers often leaves line densities uneven across fluid layout windows.
- **The Solution:** Interfaces with browser-native multi-column text distribution engines. The `.ease-cols-2` token divides reading strings directly across two equal columns with built-in balancing thresholds.

## Usage Layout Structure
```html
<div class="ease-cols-2">
  <p>Continuous dual-split paragraph string text...</p>
</div>
```

Closes #15195
