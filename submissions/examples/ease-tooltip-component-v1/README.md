# Ease Tooltip Component

## What does this do?

A modern, pure-CSS **Tooltip Component** designed to provide lightweight, high-performance contextual help, action hints, or input label details without writing any JavaScript. It features 8 coordinate placements, 10 aesthetic themes (including gradient support), smooth entry slide-in transitions, and keyboard focus states for accessibility.

## How is it used?

Include `style.css` in your project and structure your HTML following these classes:

### 1. Basic Tooltip

Add the trigger class `ease-tooltip-trigger`, specify a placement class (e.g., `ease-tooltip-top`), and include a `data-ease-tooltip` attribute:

```html
<button
  class="ease-tooltip-trigger ease-tooltip-top"
  data-ease-tooltip="Contextual details here"
>
  Hover or Focus Me
</button>
```

### 2. Sizing and Placement Options

You can configure the tooltip to display in 8 different directions:

- `.ease-tooltip-top` (Above center)
- `.ease-tooltip-top-start` (Above, aligned left)
- `.ease-tooltip-top-end` (Above, aligned right)
- `.ease-tooltip-bottom` (Below center)
- `.ease-tooltip-bottom-start` (Below, aligned left)
- `.ease-tooltip-bottom-end` (Below, aligned right)
- `.ease-tooltip-left` (Left center)
- `.ease-tooltip-right` (Right center)

Example for a right-aligned tooltip:

```html
<button
  class="ease-tooltip-trigger ease-tooltip-right"
  data-ease-tooltip="Aligned to the right side"
>
  Right Positioned
</button>
```

### 3. Themed Color Modifiers

Color variables can be customized using these classes:

- `.ease-tooltip-primary`
- `.ease-tooltip-secondary`
- `.ease-tooltip-success`
- `.ease-tooltip-warning`
- `.ease-tooltip-danger`
- `.ease-tooltip-info`
- `.ease-tooltip-light`
- `.ease-tooltip-dark`
- `.ease-tooltip-gradient`

Example for a success theme:

```html
<button
  class="ease-tooltip-trigger ease-tooltip-top ease-tooltip-success"
  data-ease-tooltip="Action completed successfully!"
>
  Success Check
</button>
```

## Features

- **No JavaScript Needed**: Pure CSS implementation using attributes and pseudo-elements.
- **Full Placements**: Top, bottom, left, right, and corner alignments covered.
- **A11y (Accessibility) Compliant**: Automatically triggers tooltips on keyboard `:focus-visible` (e.g. tabbing) as well as `:hover`.
- **Arrow Anchors**: Triangle arrow pointers align to match their placement background.
- **Hardware Accelerated**: Transforms and opacity properties drive the slide-in transition smoothly.
- **Flexible Styling**: Fully customized via CSS custom properties (`--tooltip-bg`, `--tooltip-color`, `--tooltip-arrow-color`).

## Tech Stack

- HTML
- CSS (Custom properties, transitions, absolute positioning offsets, borders for arrows)

## Preview

Open `demo.html` directly in your browser to test tooltip alignments, check color states, and verify accessibility tab navigation!

## Contribution Notes

- Class naming was handled by the contributor.
- Maintainer will rename to ease-\* convention before merging.
