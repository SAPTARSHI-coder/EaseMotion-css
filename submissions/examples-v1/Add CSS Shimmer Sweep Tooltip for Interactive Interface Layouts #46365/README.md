# CSS Shimmer Sweep Tooltip for Interactive Interfaces

A pure CSS tooltip component tailored for "Interactive Interfaces" (e.g., control panels, gaming HUDs, data-dense applications). It combines a clean entrance animation with a glossy "Shimmer Sweep" effect that sweeps across the tooltip surface.

## Features
- **Pure CSS**: Zero JavaScript required.
- **Shimmer Sweep Animation**: Uses an animated `.shimmer-overlay` element with a linear gradient and `skewX` to create a sweeping sheen effect when the tooltip appears. This effect triggers on hover and focus.
- **Interactive Aesthetic**: Features a high-contrast dark theme, inset shadows, neon accents, and a grid background to emulate a digital/control panel environment.
- **Accessible & Responsive**: Employs `:focus-within` for keyboard navigability and uses standard responsive layout practices.
- **Custom Properties**: Highly customizable via variables like `--shimmer-duration`, `--tooltip-bg`, `--tooltip-shimmer-color`, and `--interface-accent`.

## Usage

Include the `easemotion.css` framework and the local `style.css`. The tooltip enters smoothly using `@starting-style`, and the shimmer effect is triggered on hover/focus via standard CSS keyframes.

```html
<div class="tooltip-container">
  <button class="control-btn" aria-describedby="tooltip-1">
    <!-- Icon -->
  </button>
  
  <div class="tooltip-wrapper" id="tooltip-1" role="tooltip">
    <div class="tooltip-content">
      <strong>Feature Name</strong>
      <p>Description goes here.</p>
      <!-- The element that handles the sweeping gradient -->
      <div class="shimmer-overlay"></div>
    </div>
  </div>
</div>
```
