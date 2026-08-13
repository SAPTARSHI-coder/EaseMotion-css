# CSS Step Counter Progress

A responsive pure CSS step counter progress component that visually represents
daily walking progress toward a step goal.

## Features

- Pure HTML and CSS
- No JavaScript required
- Animated progress bar
- Animated shoe icon
- Daily step goal visualization
- Progress percentage and remaining steps
- Responsive design
- Accessible progressbar semantics
- `prefers-reduced-motion` support
- Keyboard-friendly static content

## Files

- `demo.html` — Component markup and demo
- `style.css` — Styling and animations

## Usage

Open `demo.html` directly in a modern browser.

The example displays:

- Current steps: 7,500
- Daily goal: 10,000
- Progress: 75%
- Remaining: 2,500 steps

To customize the component, update the values in `demo.html` and adjust the
`width` of `.progress-fill` to match the desired percentage.

## Accessibility

The progress bar uses:

- `role="progressbar"`
- `aria-label`
- `aria-valuemin`
- `aria-valuemax`
- `aria-valuenow`

The decorative shoe icon is hidden from assistive technologies with
`aria-hidden="true"`.

The component also respects the user's reduced-motion preference.

## Browser Support

Works in modern browsers supporting standard CSS animations, gradients,
transforms, and media queries.