# Component: ease-circle-progress-ring

**Category:** Component — Charts & Telemetry  
**Type:** Pure CSS (No JS)  
**Folder:** `submissions/examples/ease-circle-progress-ring/`

---

## What does this do?
Implements a responsive, vector-based circular progress ring. Updates filled dash offsets and increments inner percentage counters using 100% pure CSS custom variables and counters.

---

## How is it used?

Place the markup containing standard SVG circle tracks inside your page layout. Control the progress value dynamically via the inline style variable `--ease-progress`:

```html
<!-- Circular Progress Ring (e.g. 75% complete) -->
<div class="ease-circle-progress-ring" style="--ease-progress: 75;">
  <svg class="ease-circle-progress-ring-svg" viewBox="0 0 36 36">
    <circle class="ease-circle-progress-ring-bg"></circle>
    <circle class="ease-circle-progress-ring-bar"></circle>
  </svg>
  <div class="ease-circle-progress-ring-text">
    <!-- Leave percent container empty to automatically display CSS counter percent -->
    <span class="ease-circle-progress-ring-percent"></span>
    
    <!-- Optional label -->
    <span class="ease-circle-progress-ring-label">Completed</span>
  </div>
</div>
```

If you wish to display custom text instead of the counter value inside the ring, write it directly inside the percent span (e.g., `<span class="ease-circle-progress-ring-percent">Done</span>`). The `:empty` pseudo-selector will automatically disable the counter and display your text.

---

## Why is it useful?

1. **Circumference Math (r=15.9155):** The circle uses a radius of `15.9155`. This makes its circumference exactly `2 * pi * r = 100` units. Consequently, the progress percentage (0-100) maps 1-to-1 to the SVG's `stroke-dashoffset` in CSS.
2. **Pure CSS Counter Display:** Uses the CSS counter reset trick (`counter-reset: progress var(--ease-progress)`) to display the value of the custom variable in the pseudo-element `::after` content, requiring zero JavaScript logic.
3. **Smooth Transitions (@property):** Employs `@property --ease-progress` to register the variable as an integer. This allows the browser to smoothly transition the variable's value and the counter number on hover or status changes.
4. **Loop Animation Support:** Includes built-in keyframes to oscillate loader rings continuously back and forth.
5. **Accessibility Integration:** Animations are disabled, and transitions freeze when `prefers-reduced-motion: reduce` is active.

---

## Modifier Classes

| Class Suffix | Target Element | Description |
|---|---|---|
| `.ease-circle-progress-ring` | Container block | Base container wrapper. Instantiates counters and transitions. |
| `.ease-circle-progress-ring--sm` | Container block | Shrinks ring size to 72px and lowers font sizes. |
| `.ease-circle-progress-ring--lg` | Container block | Enlarges ring size to 180px and scales border widths. |
| `.ease-circle-progress-ring--success` | Container block | Sets progress filling stroke accent color to green. |
| `.ease-circle-progress-ring--danger` | Container block | Sets progress filling stroke accent color to red. |
| `.ease-circle-progress-ring--warning` | Container block | Sets progress filling stroke accent color to amber. |
| `.ease-circle-progress-ring--info` | Container block | Sets progress filling stroke accent color to blue. |
| `.ease-circle-progress-ring--oscillate` | Container block | Runs infinite 4s back-and-forth progress fill animation loop. |

---

## Customization (CSS Variables)

Exposed style variables inside `:root` allow custom overrides:

```css
:root {
  --ease-progress: 0;                            /* Variable driving progress percentage (0-100) */
  --ease-progress-accent: #6366f1;               /* Main indicator filling stroke color */
  --ease-progress-bg: rgba(255, 255, 255, 0.05); /* Outer track path color */
  --ease-progress-size: 120px;                   /* Ring width/height bounds size */
  --ease-progress-width: 3.5px;                  /* Border thickness of progress stroke */
}
```
