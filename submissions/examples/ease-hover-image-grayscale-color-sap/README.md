# ease-hover-image-grayscale-color-sap

An image that transitions from grayscale to full color on hover, paired with a slight zoom.

## Notes
- `filter: grayscale()` is a smoothly animatable CSS property, giving a clean color transition without any image-swap trick.
- Respects `prefers-reduced-motion`: zoom transform removed, grayscale-to-color transition remains as the primary (non-motion) hover cue.