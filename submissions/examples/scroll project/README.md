# Scroll Progress Bar

A responsive, sticky top bar component whose visual fill maps dynamically to how far a scrollable panel or article has been read.

## Category
`Progress`

## Overview
This component tracks reading depth across long-form content or scrollable containers. It uses a lightweight JS scroll listener to update a CSS custom variable (`--scroll-progress`), delegating smooth rendering and transitions entirely to CSS.

## Features
- **Zero Dependencies:** Pure HTML, CSS, and vanilla JS.
- **High Performance:** Dynamic values update CSS variables with passive scroll listeners to avoid layout jank.
- **Fully Responsive:** Adapts instantly across desktop and mobile screens.
- **Accessible:** Uses `aria-hidden="true"` to prevent visual indicator distraction for screen readers.

## Files
- `demo.html`: Interactive, self-contained demonstration with sample long-form content.
- `style.css`: Modern dark-theme styling, gradient bar fill, and layout rules.
- `README.md`: Component documentation and usage instructions.

## Quick Start

### 1. HTML Markup
Add the progress container at the top of your `<body>`:

```html
<div class="progress-container" aria-hidden="true">
  <div class="progress-bar" id="progressBar"></div>
</div>
