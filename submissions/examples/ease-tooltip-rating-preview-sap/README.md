# ease-tooltip-rating-preview-sap

A hover tooltip on a star rating that reveals the full 5-to-1-star distribution as mini bars, rather than just a plain numeric tooltip.

## Usage
1. Copy `style.css` into your project.
2. Copy the `.rating-preview-sap` markup from `demo.html`, setting each `.rating-preview-sap__bar span` inline `width` to your actual percentage breakdown per star level.

## Customization
- Adjust `width: 180px` on the card to resize.
- Change bar `background` colors to restyle.
- Reposition via `top`/`left` on `.rating-preview-sap__card` for above/below/side placement.

## Accessibility
`tabindex="0"` on the trigger plus `:focus-visible` reveal makes this keyboard-accessible; add `aria-label` summarizing the distribution for screen readers.

## Browser support
All modern browsers.