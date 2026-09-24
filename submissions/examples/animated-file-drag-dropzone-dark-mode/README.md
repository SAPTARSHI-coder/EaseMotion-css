````markdown
# Animated File Drag Dropzone — Dark Mode

A responsive, animated file drag-and-drop zone component created using
pure CSS and EaseMotion design tokens.

## Features

- Dark mode support
- Smooth hover and focus animations
- Animated upload icon
- Animated activity indicators
- Responsive layout
- Mobile, tablet and desktop support
- `prefers-reduced-motion` support
- Accessible focus states
- No JavaScript
- Zero external dependencies
- Pure HTML and CSS

## Files

```text
animated-file-drag-dropzone/
├── demo.html
├── style.css
└── README.md
````

## Usage

Include the stylesheet in the HTML:

```html
<link rel="stylesheet" href="style.css">
```

Then use the dropzone markup from `demo.html`.

## Dark Mode

The component automatically responds to the user's system color
preference using:

```css
@media (prefers-color-scheme: dark)
```

The design tokens are overridden for dark mode while keeping the
component structure unchanged.

## Accessibility

The component includes:

* Visible keyboard focus states
* Semantic headings
* Descriptive labels
* Reduced-motion support
* Sufficient interactive target sizing
* No animation requirement for usability

Users who prefer reduced motion will receive a simplified version
without continuous animations.

## Responsive Design

The component adapts to:

* Desktop
* Tablet
* Mobile

CSS media queries adjust spacing, typography, icon sizing and the
dropzone dimensions for smaller screens.

## Animation

Animations are implemented entirely with CSS.

The component uses:

* `transform`
* `opacity`
* CSS transitions
* CSS keyframes

No JavaScript animation libraries are required.

## Browser Compatibility

The component uses standard CSS features supported by modern browsers.

Recommended browsers:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

The component gracefully falls back when advanced visual effects
are unavailable.

## Dependencies

None.

## Validation Checklist

* [x] Pure CSS implementation
* [x] Zero JavaScript dependencies
* [x] EaseMotion design tokens
* [x] Dark mode support
* [x] Responsive design
* [x] Hover animation
* [x] Focus animation
* [x] Reduced-motion support
* [x] Keyboard accessibility
* [x] Cross-browser compatible CSS

```
```
