# Component: ease-checkbox-animated

**Category:** Component — Form Controls  
**Type:** Pure CSS (No JS)  
**Folder:** `submissions/examples/ease-checkbox-animated/`

---

## What does this do?
Implements a custom animated checkbox with a spring scale bounce on click and a path-drawing checkmark SVG outline driven entirely in CSS.

---

## How is it used?

Include the hidden checkbox input, custom checkbox box element, and text label inside a parent HTML `<label>` wrapper:

```html
<!-- Custom Animated Checkbox -->
<label class="ease-checkbox">
  <!-- Hidden input controller -->
  <input type="checkbox" class="ease-checkbox-input">
  
  <!-- Custom check box container -->
  <div class="ease-checkbox-box">
    <!-- SVG Checkmark shape -->
    <svg class="ease-checkbox-checkmark" viewBox="0 0 24 24">
      <!-- SVG path with drawing line dimensions -->
      <path class="ease-checkbox-path" d="M20 6L9 17L4 12" />
    </svg>
  </div>
  
  <!-- Text Label -->
  <span class="ease-checkbox-label">Send Notifications</span>
</label>
```

---

## Why is it useful?

1. **100% Pure CSS:** Zero JavaScript footprint. Leverages parent label selections, native checkbox event handling, and CSS selector combinators (`:checked ~`) to trigger animations.
2. **Spring-Scale Bounces:** Toggling triggers a hardware-accelerated spring scale bounce (`ease-check-bounce` keyframe) which shrinks the box to `0.84` scale and snaps back to size with overshoot.
3. **SVG Path Drawing:** Animates the checkmark outline by transitioning the `stroke-dashoffset` from `30` (completely hidden) to `0` (fully drawn).
4. **Supports Multiple Shapes:** The default stroke dash array is sized at `30` to accommodate alternative inline SVG designs, including delete crosses (`M18 6L6 18M6 6l12 12`) and indeterminate dashes (`M5 12h14`).
5. **Keyboard Accessible:** Includes customizable focus rings (`:focus-visible`) and spacing layouts, maintaining full compatibility with `Tab` navigating and `Space` toggling.
6. **Disabled State Styles:** Supports the standard `:disabled` HTML attribute, rendering checked and unchecked boxes at 45% opacity with appropriate crosshair cursors.
7. **A11y/Reduced Motion Compliant:** Keyframe animations are bypassed, and strokes draw instantly under `prefers-reduced-motion: reduce` settings.

---

## Modifier Classes

| Class Suffix | Target Element | Description |
|---|---|---|
| `.ease-checkbox` | Parent Label | Base wrapper layout. Coordinates flex configurations and label font offsets. |
| `.ease-checkbox-input` | Checkbox Input | Accessible hidden toggle layer. Handles checked/focused/disabled states. |
| `.ease-checkbox-box` | Box Core | The custom square box. Animates background fills, borders, and scale bounces. |
| `.ease-checkbox-path` | Check SVG Path | The vector stroke path. Animates drawing offsets on checked. |
| `.ease-checkbox--sm` | Parent Label | Modifies dimensions to small 18px size. |
| `.ease-checkbox--lg` | Parent Label | Modifies dimensions to large 30px size. |
| `.ease-checkbox--success` | Parent Label | Overrides toggled active border and background fills to green. |
| `.ease-checkbox--danger` | Parent Label | Overrides toggled active border and background fills to red. |
| `.ease-checkbox--warning` | Parent Label | Overrides toggled active border and background fills to amber. |

---

## Customization (CSS Variables)

Declared variables inside `:root` support quick custom overrides:

```css
:root {
  --ease-checkbox-accent: #6366f1;               /* Checked box active background fill */
  --ease-checkbox-accent-hover: #4f46e5;         /* Hover state checked background fill */
  --ease-checkbox-border: #374151;               /* Unchecked border outlines color */
  --ease-checkbox-bg: rgba(255, 255, 255, 0.02);  /* Unchecked box core background fill */
  --ease-checkbox-checkmark-color: #ffffff;      /* SVG line stroke fill color */
  --ease-checkbox-size: 22px;                    /* Custom box height/width bounds */
  --ease-checkbox-radius: 6px;                   /* Custom box corner border-radius */
}
```
