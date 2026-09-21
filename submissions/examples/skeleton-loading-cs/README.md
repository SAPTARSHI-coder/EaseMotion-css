# Skeleton Loading Shimmer
A dependency-free skeleton loading utility for EaseMotion CSS.
The component provides two loading-placeholder styles:
* `.em-skeleton` — animated sweeping shimmer effect.
* `.em-skeleton-pulse` — subtle opacity pulse alternative.

## Usage
### Shimmer
```html
<div class="em-skeleton"></div>
```
The `.em-skeleton` element uses a moving linear gradient to create the shimmer effect.
### Pulse
```html
<div class="em-skeleton-pulse"></div>
```
The pulse variant uses opacity animation instead of a moving highlight.

## Example
```html
<div class="em-skeleton em-skeleton-avatar"></div>
<div class="em-skeleton em-skeleton-title"></div>
<div class="em-skeleton em-skeleton-line"></div>
```
The component intentionally separates the animation utility from dimensions, allowing the same animation to be reused for avatars, cards, text lines, images, and other placeholders.

## Customization
The primary variables are:
```css
:root {
  --em-skeleton-base: #20202d;
  --em-skeleton-highlight: #343247;
  --em-shimmer-duration: 1.7s;
  --em-pulse-duration: 1.8s;
}
```
Adjust the duration to control the perceived loading speed.

## Accessibility
The animation respects `prefers-reduced-motion: reduce`.
Skeleton elements used purely as visual placeholders are marked with `aria-hidden="true"` in the demo so they do not create unnecessary content for assistive technologies.
For production interfaces, replace the skeleton with the actual content when loading completes and provide an appropriate loading/status message when necessary.

## Browser Support
Uses standard CSS animations, gradients, custom properties, and media queries supported by modern browsers.
No JavaScript or external dependencies are required.
