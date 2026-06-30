# Ease Accordion Slider

A pure CSS responsive accordion slider. Hover over any panel to expand it
horizontally (or vertically on mobile), revealing image background and text
content while neighboring panels shrink.

## Features

- Zero JavaScript — flex-grow + transition only
- Smooth cubic-bezier expand animation
- Responsive: stacks vertically below 768px
- Reusable for portfolios, feature showcases, pricing boards

## Usage

Wrap any number of `.ease-accordion-card` divs (with `--bg` inline custom
property for background image) inside `.ease-accordion-wrapper`. Each card's
`.ease-accordion-content` holds the title/description revealed on hover.

## Files

- `demo.html` – working demo
- `style.css` – component styles
