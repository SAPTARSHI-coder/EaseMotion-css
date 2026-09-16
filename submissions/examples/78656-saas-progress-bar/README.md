# SaaS Modern Progress Bar

A responsive SaaS-style progress bar component built with pure HTML and
Vanilla CSS.

## Features

- Modern SaaS visual design
- Overall project progress indicator
- Multiple task progress bars
- Animated progress entrance
- Subtle gradient shine effect
- Status indicator
- Progress percentage labels
- Responsive layout
- Hover interaction
- Semantic accessibility attributes
- Reduced-motion support
- No JavaScript
- No external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` in a browser.

Progress values can be customized by changing the width of the corresponding
`.progress__fill` elements and their `aria-valuenow` values.

Example:

```html
<div
  class="progress__fill progress__fill--blue"
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="75"
></div>