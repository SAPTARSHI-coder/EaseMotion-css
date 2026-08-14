# CSS Build Status Badge

A responsive CSS-only build status component displaying common CI states:
**Passing**, **Failing**, and **Pending**.

The component uses CSS animations and visual indicators to communicate
different build states without JavaScript.

## Features

- Pure HTML and CSS
- Passing, failing, and pending states
- Animated status indicators
- Responsive layout
- Hover interaction
- Accessible status labels
- No external dependencies
- `prefers-reduced-motion` support
- Suitable for CI/CD dashboards and developer tools

## Files

- `demo.html` — Component markup and demo
- `style.css` — Complete styling and animations
- `README.md` — Documentation

## Status Types

### Passing

The green badge indicates that the build has completed successfully.

### Failing

The red badge indicates that one or more checks have failed.

### Pending

The amber badge indicates that the build is still waiting or processing.

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">