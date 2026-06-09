# Directional Hover Tooltips Pack

A clean, pure-CSS directional tooltip component system with micro-animations when hovering.

## Features

- Direct hovering logic using CSS `:hover` states (zero JS dependencies).
- Smooth position offset transitions utilizing `transform` properties.
- Support for 4 positioning guidelines:
  - `.em-tooltip-top`
  - `.em-tooltip-bottom`
  - `.em-tooltip-left`
  - `.em-tooltip-right`
- Standardized triangle arrows pointing to the parent target.

## Usage

Wrap the target button/link and the tooltip inside a container with `.em-tooltip-container`:

```html
<div class="em-tooltip-container">
  <button class="btn">Hover me</button>
  <span class="em-tooltip em-tooltip-top">I am on top!</span>
</div>
```
