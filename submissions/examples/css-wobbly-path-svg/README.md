# CSS Wobbly Path SVG

A lightweight SVG animation demonstrating a wobbly and morphing path using CSS animations.

## Features

* Pure CSS animation
* SVG-based wobbly path
* Smooth continuous path movement
* No JavaScript required
* Responsive layout
* Lightweight and easy to customize
* Works with modern browsers
* Supports reduced-motion preferences

## Files

```text
css-wobbly-path-svg/
├── demo.html
├── style.css
└── README.md
```

## How It Works

The demo uses an SVG `<path>` element as the animated shape.

CSS `@keyframes` are used to create the wobbling effect by changing the path's visual properties and applying smooth transformations.

The animation runs continuously to create a soft, organic motion effect.

## Usage

Open `demo.html` in any modern web browser.

The demo displays an SVG path with a smooth wobbling animation.

## Customization

You can customize the animation by modifying:

* Animation duration
* SVG path shape
* Stroke width
* Stroke style
* Transform values
* Animation timing function
* Background and surrounding layout

Example:

```css
.wobbly-path {
    animation: wobble 4s ease-in-out infinite;
}
```

## Accessibility

The example follows accessibility-friendly practices:

* Decorative SVG can use `aria-hidden="true"` when it does not convey information.
* Reduced-motion users are supported using `prefers-reduced-motion`.
* The animation does not require keyboard interaction.
* No flashing or rapidly changing effects are used.

## Reduced Motion

Users who prefer reduced motion will have the animation disabled:

```css
@media (prefers-reduced-motion: reduce) {
    .wobbly-path {
        animation: none;
    }
}
```

## Browser Support

The demo is designed for modern browsers supporting:

* SVG
* CSS Animations
* CSS Transforms
* CSS Media Queries

## Technologies

* HTML5
* SVG
* CSS3

## License

This example is contributed to the EaseMotion CSS project and follows the repository's contribution and licensing guidelines.
