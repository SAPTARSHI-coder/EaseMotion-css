# CSS Download Button with Progress

A responsive CSS-only download button that transforms into an animated progress bar and completed state when activated.

## Features

* Pure HTML and CSS
* No JavaScript required
* Animated download-to-progress transition
* Animated progress indicator
* Completed/downloaded state
* Keyboard-accessible native checkbox control
* Visible focus indicator
* Responsive design
* Reduced-motion support
* No external dependencies

## Files

```text
css-download-button-progress/
├── demo.html
├── style.css
└── README.md
```

## How It Works

The component uses a visually hidden native checkbox as the interaction state.

When the checkbox is activated:

1. The initial Download state fades out.
2. The button changes into a progress state.
3. The progress bar animates from 0% to 100%.
4. The button changes to a completed state.
5. A checkmark indicates that the simulated download has finished.

CSS `:checked` selectors and `@keyframes` are used to control the entire visual transition.

## Usage

Open `demo.html` in a modern web browser.

No build tools, JavaScript, external libraries, or dependencies are required.

## Accessibility

The component provides:

* A native checkbox for keyboard interaction
* An associated `<label>` for activation
* Visible `:focus-visible` styling
* Semantic button labeling
* Responsive layout
* `prefers-reduced-motion` support

## Customization

The main colors and sizing can be customized using CSS variables:

```css
:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --track: #e2e8f0;
    --success: #16a34a;
}
```

You can also customize:

* Download duration
* Button width
* Progress-bar height
* Border radius
* Hover effects
* Completion animation
* Typography

## Important Limitation

This implementation provides a CSS-only **visual download progress simulation**.

CSS cannot detect the actual progress of a file download. For a real download workflow with actual percentage updates, JavaScript and a download API would be required.

## Technologies

* HTML5
* CSS3
* CSS Animations
* CSS Transitions
* CSS Custom Properties
* CSS Media Queries

## Browser Support

Designed for modern browsers supporting CSS custom properties, transitions, animations, pseudo-classes, and media queries.

## License

This example follows the EaseMotion CSS repository's contribution and licensing guidelines.
