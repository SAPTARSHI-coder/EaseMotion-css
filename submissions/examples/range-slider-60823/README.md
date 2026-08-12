# Custom Animated Range Slider Input

A modern, highly customizable, and interactive range slider component built using pure HTML5 and vanilla CSS. This component introduces smooth spring-like micro-animations and glowing states on interaction while maintaining accessibility and responsiveness.

## Features

- **Pure HTML & CSS**: Zero JavaScript dependencies, lightweight, and fast.
- **Cross-Browser Consistency**: Tailored styling resets for Chromium/WebKit and Firefox layout engines.
- **Micro-Animations**: Elastic thumb scaling and expanding glow effects on hover and active states.
- **Design Tokens**: Configurable colors, sizing, and shadows using semantic CSS variables.
- **Gradient Variants**: Support for both solid-colored and multi-color gradient-filled tracks.
- **Accessibility (A11y)**: Built-in focus outline rings for keyboard navigation, high-contrast ratios, and screen-reader friendliness.
- **Performance Friendly**: Fully optimized for `prefers-reduced-motion` systems.

## Folder Structure

```text
submissions/examples/range-slider-60823/
├── README.md
├── demo.html
└── style.css
```

## Usage

Include the stylesheet `style.css` in your HTML, then add a range input with the appropriate modifier class to change its theme.

### HTML Example

```html
<div class="slider-group">
  <div class="slider-header">
    <label for="slider-primary" class="slider-label">Volume Level</label>
    <span class="slider-value-badge">70%</span>
  </div>
  <input 
    type="range" 
    id="slider-primary" 
    class="custom-range range-default" 
    min="0" 
    max="100" 
    value="70"
  >
</div>
```

## CSS Variables

The slider can be customized globally or on an individual basis by updating the following CSS variables inside `:root` or a parent class selector:

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--slider-track-height` | Height thickness of the slider track | `6px` |
| `--slider-track-bg` | Background color of the inactive track | `#1f2937` |
| `--slider-thumb-size` | Diameter size of the range slider thumb | `20px` |
| `--slider-thumb-bg` | Background color of the slider thumb | `#ffffff` |
| `--slider-theme-color` | Active color of the thumb and border | `--color-primary` |
| `--slider-glow` | Drop shadow glow color when interacted | `rgba(59, 130, 246, 0.35)` |

## Browser Support

- **Google Chrome / Chromium Browsers**: Full support for custom pseudo-element classes (`::-webkit-slider-runnable-track`, `::-webkit-slider-thumb`).
- **Mozilla Firefox**: Full support for native track-filling (`::-moz-range-progress`), tracking and active states.
- **Safari / WebKit**: Full rendering of thumb, track, hover/active, and focus states.

## Accessibility Notes

- **Keyboard Control**: When focused using the `Tab` key, the input gets a high-contrast white ring outline with a themed background shadow to highlight keyboard focus.
- **Valuing**: Standard attributes (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`) are specified.
- **Motion Options**: Respects user OS accessibility options by instantly disabling scale and shadow transitions when `prefers-reduced-motion` is active.

## Responsive Behavior

The custom range slider showcase automatically scales down for smaller screen resolutions, reducing horizontal margins and padding, ensuring touch targets remain accessible on mobile viewports.
