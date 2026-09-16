# Interactive Audio Player Widget

A responsive, accessible audio-player component variant built using **pure HTML and CSS** with Material Design-inspired styling and EaseMotion design tokens.

## Features

* Pure CSS implementation
* Zero JavaScript dependencies
* Material Design-inspired UI
* EaseMotion CSS variables and design tokens
* Smooth hover, active, and state transitions
* Responsive mobile, tablet, and desktop layouts
* Keyboard-focus support
* Accessible ARIA labels and slider/progress semantics
* `prefers-reduced-motion` support
* No external libraries or frameworks

## Files

```text
demo.html
style.css
README.md
```

## Usage

Open `demo.html` in a modern web browser.

The component can be copied into an existing project by including:

```html
<link rel="stylesheet" href="style.css">
```

and using the structure from `demo.html`.

## Accessibility

The component includes:

* Semantic HTML elements
* Accessible labels for player controls
* `role="progressbar"` for playback progress
* `role="slider"` for volume control
* Visible keyboard focus states
* Reduced-motion support through:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, transition and animation effects are minimized.

## Responsive Behavior

### Desktop

The album artwork and player controls are displayed horizontally.

### Tablet

The component scales down while maintaining the horizontal layout.

### Mobile

The player switches to a vertical layout with centered album artwork and controls.

## Design Tokens

The component defines reusable EaseMotion-style tokens for:

* Colors
* Surface/backgrounds
* Spacing
* Border radius
* Motion easing
* Animation duration

Example:

```css
--em-color-primary: #6750a4;
--em-radius-medium: 16px;
--em-duration-medium: 300ms;
--em-ease-standard: cubic-bezier(0.2, 0, 0, 1);
```

## Browser Compatibility

The implementation uses standard HTML and CSS features supported by current versions of:

* Chrome
* Edge
* Firefox
* Safari

No JavaScript runtime or external dependency is required.

## Verification Checklist

* [x] Pure CSS implementation
* [x] Zero JS dependencies
* [x] Responsive layout
* [x] Keyboard focus states
* [x] ARIA labels
* [x] Reduced-motion support
* [x] Smooth state transitions
* [x] Material Design-inspired styling
* [x] Cross-browser compatible CSS
