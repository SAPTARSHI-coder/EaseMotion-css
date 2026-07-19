# Neo-Brutalism Tooltip

A stark, high-contrast tooltip component that pops into view instantly with a hard drop shadow.

## Files
- `demo.html`: The HTML structure utilizing a `data-tooltip` attribute.
- `style.css`: The styling to create the pure CSS tooltip using `::after` pseudo-elements.
- `README.md`: This file.

## Features
- **Pure CSS:** No JavaScript required. Relies on `attr(data-tooltip)` and `:hover`.
- **High Visibility:** Bright, neon background colors and thick black borders ensure it commands attention.
- **Instant Pop:** Avoids soft fades in favor of a mechanical scale-and-snap animation.

## Usage
Add the `.neo-tooltip-wrapper` class to an element and provide your text in `data-tooltip="..."`.
