# ease-loading-bar-indeterminate-sap

Indeterminate loading bar — a short filled segment sweeps back and forth across the track to signal in-progress work with no known duration. Pure CSS keyframe animation, no JS.

## Usage
1. Copy `style.css` into your project.
2. Copy the `.loading-bar-sap > .loading-bar-sap__fill` markup from `demo.html`.
3. Toggle visibility with your own show/hide logic while a request is pending.

## Customization
- Change `width: 40%` on the fill to adjust sweep segment length.
- Edit the `1.4s ease-in-out` duration to speed up/slow the sweep.
- Swap the gradient colors to restyle.

## Accessibility
`role="progressbar"` included for indeterminate state; respects `prefers-reduced-motion` by showing a static full bar instead of animating.

## Browser support
All modern browsers.