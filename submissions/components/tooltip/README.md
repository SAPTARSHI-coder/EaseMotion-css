# Pure CSS Tooltip with Animated Directional Arrows

## Description
This submission resolves Issue #68988 by providing a robust, pure CSS tooltip solution that eliminates the need for external JS libraries like Popper.js for static positioning.

## Features
- Pure CSS tooltips using `::before` (text) and `::after` (arrow pointer).
- Relies on `data-tooltip` attribute to define tooltip text dynamically.
- Includes four directional variations: `.ease-tooltip-top` (default), `.ease-tooltip-bottom`, `.ease-tooltip-left`, and `.ease-tooltip-right`.
- Smooth `:hover` animation combining `opacity` and a slight `transform: translate` offset to create a popping/sliding effect.

## Usage
Simply add the `.ease-tooltip` class and the `data-tooltip` attribute to any element. Add an optional directional class to override the default (top) placement.

```html
<!-- Top (Default) -->
<div class="ease-tooltip" data-tooltip="Tooltip content here">Hover me</div>

<!-- Specific Directions -->
<div class="ease-tooltip ease-tooltip-bottom" data-tooltip="Below!">Hover me</div>
<div class="ease-tooltip ease-tooltip-left" data-tooltip="Left!">Hover me</div>
<div class="ease-tooltip ease-tooltip-right" data-tooltip="Right!">Hover me</div>
```
