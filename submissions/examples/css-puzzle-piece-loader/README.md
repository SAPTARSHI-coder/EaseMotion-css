# CSS Puzzle Piece Loader

A lightweight CSS-only loading animation where four puzzle pieces move together and assemble into a complete puzzle.

## Features

* Pure CSS implementation
* No JavaScript required
* Four animated puzzle pieces
* Smooth assembly animation
* Responsive design
* Accessible loading status
* Supports reduced-motion preferences
* Easy to customize

## Files

```text
css-puzzle-piece-loader/
├── demo.html
├── style.css
└── README.md
```

## How It Works

The loader is created using four HTML elements styled as puzzle pieces.

CSS `@keyframes` animations move each piece from an offset position toward the center, creating the effect of the pieces assembling together.

The animation repeats continuously to represent a loading state.

## Usage

Open `demo.html` in a modern browser.

No build tools, JavaScript, or external dependencies are required.

## Customization

You can customize:

* Puzzle piece size
* Animation duration
* Animation timing
* Colors
* Piece spacing
* Rotation angle
* Background
* Border radius

For example:

```css
.piece {
    animation-duration: 2.4s;
}
```

## Accessibility

The loader uses:

* `role="status"` to communicate the loading state
* An accessible `aria-label`
* Visually hidden loading text
* `aria-hidden="true"` for decorative puzzle pieces
* `prefers-reduced-motion` support

## Reduced Motion

For users who prefer reduced motion, the animation is disabled:

```css
@media (prefers-reduced-motion: reduce) {
    .piece {
        animation: none;
    }
}
```

## Browser Support

Designed for modern browsers supporting:

* CSS Animations
* CSS Transforms
* CSS Pseudo-elements
* CSS Media Queries

## Technologies

* HTML5
* CSS3

## License

This example is contributed to the EaseMotion CSS project and follows the repository's contribution and licensing guidelines.
