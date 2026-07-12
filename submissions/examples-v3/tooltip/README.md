# ease-tooltip Component

This submission fixes Issue #40443 by adding a reusable tooltip component.  
It shows a tooltip on hover or focus with a fade + translate animation.

## Usage

```html
<button class="ease-btn" aria-describedby="tip1">
  Hover me
  <span class="ease-tooltip" id="tip1">I am a tooltip!</span>
</button>
