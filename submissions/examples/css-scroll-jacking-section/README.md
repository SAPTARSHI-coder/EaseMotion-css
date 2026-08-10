# CSS Scroll Jacking Section

A responsive, CSS-only scroll snapping section that creates a controlled full-screen scrolling experience using modern CSS.

## Features

* Pure CSS implementation
* Uses CSS Scroll Snap
* Full-screen section-based scrolling
* Smooth scrolling between sections
* Responsive design for desktop, tablet, and mobile
* Keyboard-accessible navigation
* Focus-visible states for interactive elements
* Supports `prefers-reduced-motion`
* No JavaScript or external libraries required

## Files

```text
css-scroll-jacking-section/
├── demo.html
├── style.css
└── README.md
```

## How It Works

The component uses:

```css
scroll-snap-type: y mandatory;
```

on the scroll container and:

```css
scroll-snap-align: start;
```

on each section.

This makes each section naturally snap into the viewport while scrolling.

## Usage

Open `demo.html` in a modern web browser.

The page contains:

1. A hero section
2. Multiple scroll-snap panels
3. Navigation links between sections
4. A final information section

## Accessibility

The component includes:

* Semantic HTML elements
* Accessible navigation labels
* Keyboard-focusable links
* Visible focus indicators
* Reduced-motion support
* Responsive layouts

## Browser Support

The demo is intended for modern browsers that support CSS Scroll Snap, including current versions of:

* Chrome
* Firefox
* Edge
* Safari

## Technologies

* HTML5
* CSS3
* CSS Scroll Snap
* CSS Media Queries
* CSS Transitions

## License

This example is provided as part of the EaseMotion CSS project and follows the repository's contribution and licensing guidelines.
