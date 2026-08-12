# Animated Color Picker (`ease-color-picker`)

An interactive color selection control with a smooth preview transition that highlights the currently selected color changes.

---

## Features

*   **Subtle Animation Preview:** When a color changes, the preview container transition displays the new color value smoothly.
*   **Scale/Rotate Transitions:** Hovering over the color preview ring triggers elastic scale-rotate micro-animations.
*   **Dynamic Colored Shadows:** The preview container shadows are updated in real-time to match the selected color.

---

## Integration

Include the stylesheet and structure below to integrate the component:

```html
<label class="color-picker">
  <span>Choose color</span>
  <input type="color" value="#6366f1">
</label>
```

---

## CSS Customization

Adjust properties dynamically via custom properties:

```css
:root {
  --picker-container-bg: #0f172a;  /* Container background */
  --text-slate: #94a3b8;           /* Text color */
}
```
