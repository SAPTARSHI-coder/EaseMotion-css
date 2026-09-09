# Pure CSS Tooltip with Animated Directional Arrows

## Description
This submission resolves Issue #68988 by providing a highly robust, pure CSS tooltip system without the need for external libraries like Popper.js. It features directional positioning and animated tooltip arrows.

## Features
- **Zero JavaScript**: Runs entirely on CSS pseudoelements (`::before` for text, `::after` for the arrow).
- **Data Attributes**: The tooltip text is dynamically generated using the `data-tooltip` attribute.
- **Directional Support**: Choose the direction of the tooltip using modifier classes:
  - `.ease-tooltip-top` (or default if omitted)
  - `.ease-tooltip-bottom`
  - `.ease-tooltip-left`
  - `.ease-tooltip-right`
- **Smooth Animations**: Animates opacity, visibility, and transform with a slight offset for a premium feel.

## Usage
Simply add the `.ease-tooltip` class and a `data-tooltip="Your Text"` attribute to any inline or block element. Append the directional modifier class of your choice.

```html
<!-- Top Tooltip (Default) -->
<button class="ease-tooltip ease-tooltip-top" data-tooltip="This is a top tooltip">Hover Me</button>

<!-- Bottom Tooltip -->
<button class="ease-tooltip ease-tooltip-bottom" data-tooltip="This is a bottom tooltip">Hover Me</button>

<!-- Left Tooltip -->
<button class="ease-tooltip ease-tooltip-left" data-tooltip="This is a left tooltip">Hover Me</button>

<!-- Right Tooltip -->
<button class="ease-tooltip ease-tooltip-right" data-tooltip="This is a right tooltip">Hover Me</button>
```
