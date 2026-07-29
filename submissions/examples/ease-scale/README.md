# Scale Transform Utilities

## What does this do?
Adds atomic scaling utility classes to resize elements uniformly, horizontally (X), or vertically (Y).

## How is it used?
Apply the scaling utility classes directly to any HTML element:

```html
<div class="ease-scale-110">Your content here</div>
```

### Supported Scales
- **Uniform Scale (`ease-scale-*`)**: `0`, `50` (0.5x), `75` (0.75x), `90` (0.9x), `95` (0.95x), `100` (1x), `105` (1.05x), `110` (1.1x), `125` (1.25x), `150` (1.5x).
- **Scale X (`ease-scale-x-*`)**: `0`, `50` (0.5x), `75` (0.75x), `90` (0.9x), `95` (0.95x), `100` (1x), `105` (1.05x), `110` (1.1x), `125` (1.25x), `150` (1.5x).
- **Scale Y (`ease-scale-y-*`)**: `0`, `50` (0.5x), `75` (0.75x), `90` (0.9x), `95` (0.95x), `100` (1x), `105` (1.05x), `110` (1.1x), `125` (1.25x), `150` (1.5x).

## Why is it useful?
In interactive user interfaces, scaling is a key mechanism for conveying tactile feedback. It is widely used to create micro-animations such as scaling up buttons on hover, scaling down buttons on active click, pop-over modal entrances, and custom cards expanding to fill views. These utilities provide a standardized, plug-and-play way to implement these interactions.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the interactive hover effects.

## Contribution Notes
- Class naming: `ease-scale-*`, `ease-scale-x-*`, and `ease-scale-y-*`.
