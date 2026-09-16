# CSS Stacked Bar Chart

## Overview

A responsive stacked horizontal bar chart built with semantic HTML and CSS. Each row combines several percentage segments, while CSS custom properties control the segment widths and keyframes animate the bars into view.

## Features

- Pure HTML and CSS implementation
- Four stacked horizontal chart rows
- Reusable segment widths through CSS custom properties
- Animated segment entrance with staggered timing
- Responsive chart layout for tablet and mobile screens
- Semantic headings and chart-row descriptions
- Keyboard-focusable rows with visible focus treatment
- `prefers-reduced-motion` support
- No JavaScript or external dependencies

## Structure

The chart uses an ordered collection of `.bar-row` elements. Each row contains a readable quarter label and a visual `.bar` containing four `.segment` elements. The segment widths are supplied through the `--value` custom property so the same styling can represent different datasets.

The visual bars are marked `aria-hidden` while each row provides a complete text alternative through `aria-label`. This prevents screen readers from attempting to interpret the decorative layout while preserving the actual data in accessible text.

## Animation

The `grow-segment` keyframe starts every segment at zero horizontal scale and expands it to its configured width. Small delays create a left-to-right cascade across the stack. The animation is intentionally short so the chart communicates its data without delaying access to the content.

When reduced motion is requested, animations and transitions are effectively disabled while the final layout remains available.

## Files

- `demo.html` — semantic chart markup, legend, data rows, and implementation notes
- `style.css` — chart layout, segment colors, animations, responsive rules, and accessibility styling
- `README.md` — component documentation

## Usage

Open `demo.html` directly in a modern browser. No build tooling or dependency installation is required.

To reuse the component, add or remove `.segment` elements and change their `--value` values. The values for each row should add up to 100% for a complete stack.

## Responsive Behavior

Desktop layouts place the row label beside the full-width bar. At smaller widths the label moves above the bar, giving the visualization enough horizontal room without forcing narrow segments into an unreadable layout.

The supporting implementation cards change from four columns to two and then one column as the viewport becomes narrower.

## Accessibility

Each chart row can receive keyboard focus and exposes a complete textual summary. Focus styling makes the active row visible without relying on color alone. Decorative bar graphics are hidden from assistive technology because the accessible data is already available through the row labels.

## Issue

EaseMotion CSS issue #70353.
