# Accordion Height Transition

A smooth accordion component using CSS `max-height` transitions for expand/collapse animation. Only one item can be open at a time (accordion behavior).

## Features

- Smooth height transition using CSS `max-height`
- Chevron icon rotates on open/close
- Single open (FAQ-style) behavior
- Fully customizable via CSS custom properties
- Accessible with `aria-expanded` and `aria-controls` attributes

## Usage

Include the stylesheet and the HTML structure. Each accordion item follows this pattern:

```html
<div class="accordion-item">
  <button class="accordion-header" aria-expanded="false" aria-controls="content-1">
    <span>Heading</span>
    <span class="chevron">▼</span>
  </button>
  <div class="accordion-content" id="content-1">
    <div class="accordion-body">Content here.</div>
  </div>
</div>
```

## CSS Custom Properties

| Property                  | Default   | Description                  |
| ------------------------- | --------- | ---------------------------- |
| `--acc-duration`          | `0.35s`   | Transition duration          |
| `--acc-header-bg`         | `#ffffff` | Header background            |
| `--acc-header-hover-bg`   | `#f5f5f5` | Header hover background      |
| `--acc-content-bg`        | `#fafafa` | Content area background      |
| `--acc-border-color`      | `#e0e0e0` | Item border color            |
| `--acc-text-color`        | `#1a1a1a` | Text color                   |

## JavaScript

The component initializes automatically via an inline script that handles click events and manages `max-height` transitions across all accordion items.

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge).
