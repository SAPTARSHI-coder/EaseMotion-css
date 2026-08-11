# Animated Range Slider (`ease-range-slider`)

A highly-customizable, animated HTML5 `<input type="range">` control wrapper that features smooth thumb transitions and visual feedback during interaction.

---

## Features

*   **Elastic Thumb Transitions:** Hovering and activating the slider thumb triggers smooth spring transitions (`cubic-bezier`).
*   **Dynamic Visual Emphasis:** The thumb size scales up and shows glowing indicator rings to make interaction feedback clear.
*   **Progressive Track Coloring:** Track fill is updated progressively in real-time, providing immediate visual feedback for the setting.

---

## Integration

Include the stylesheet and structure below to integrate the component:

```html
<label class="range">
  <span>Volume</span>
  <input type="range" min="0" max="100" value="60">
</label>
```

---

## CSS Customization

Adjust properties dynamically via custom properties:

```css
:root {
  --slider-primary: #6366f1;          /* Core theme color */
  --slider-primary-glow: rgba(99, 102, 241, 0.45); /* Hover glow ring */
  --slider-track-bg: #334155;        /* Background of the track */
}
```
