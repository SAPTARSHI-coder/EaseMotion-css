# CSS Paper Shredder Effect

A lightweight paper shredding deletion animation created entirely with HTML and CSS.

## Features

* Pure CSS animation
* No JavaScript
* Paper separates into individual strips
* Falling and rotating shred animation
* CSS-only shredder design
* Responsive layout
* Reduced-motion support
* No external dependencies

## Files

* `demo.html` - Demo markup for the paper shredder effect
* `style.css` - Shredder styling, paper strips, animations, and responsive behavior

## Usage

Open `demo.html` in any modern browser.

No JavaScript, external libraries, or build tools are required.

## How It Works

The paper is divided into multiple vertical strips using separate HTML elements.

CSS keyframes animate each strip independently by changing:

* `translateY()` for the falling motion
* `rotate()` for natural strip movement
* `scaleY()` for the shredding effect
* `opacity` to make the strips disappear

Small animation delays create a staggered shredding effect.

## Accessibility

The decorative animation is marked with `aria-hidden="true"` so it does not create unnecessary content for screen readers.

The demo also respects the `prefers-reduced-motion` media query. When reduced motion is enabled, the shredding animation is disabled.

## License

Part of the EaseMotion CSS project.
