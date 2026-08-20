# ease-tooltip-rich-preview-sap

A rich hover tooltip showing an image + text preview card above a link, rather than plain single-line tooltip text. Pure CSS, opacity/transform-based reveal.

## Usage
1. Copy `style.css` into your project.
2. Wrap link text with `.tooltip-preview-sap__card` containing your image/text, matching `demo.html`.

## Customization
- Change `width: 240px` on the card to resize the preview.
- Adjust the `bottom: calc(100% + 12px)` offset to change gap above the trigger.
- Swap `.tooltip-preview-sap__img` for any preview content.

## Accessibility
Reveals on `:focus-visible` as well as `:hover` for keyboard users. Respects `prefers-reduced-motion`.

## Browser support
All modern browsers.