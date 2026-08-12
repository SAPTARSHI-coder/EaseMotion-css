# Pure CSS Smooth Auto-Height Accordion

A fully accessible FAQ accordion component that animates smoothly between closed state and `height: auto` using pure CSS without fixed height hacks or JavaScript calculations.

## How It Works

Instead of animating `max-height` (which causes jumpy timing curves), this implementation uses CSS Grid row height interpolation (`grid-template-rows: 0fr` $\rightarrow$ `1fr`) wrap around standard `<details>` elements.

## Features

- **Pure CSS**: Zero JavaScript or external runtime dependencies.
- **Native Keyboard Navigation**: Standard `<details>` element behavior supports native <kbd>Tab</kbd> and <kbd>Space</kbd>/<kbd>Enter</kbd> interactions.
- **Fluid Animation**: Interpolates actual inner content dimensions dynamically.

## Usage

Place `demo.html` markup into your layout and import `style.css`.