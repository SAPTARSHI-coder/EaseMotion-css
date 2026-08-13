# Professional Stopwatch Widget with Lap Recording

A high-performance, precision stopwatch and lap-tracking dashboard component optimized for open-source project integrations. Built using vanilla JavaScript and styled with **EaseMotion CSS** utilities alongside custom dark-theme glassmorphism layers.

---

## Features

* **Drift-Free Precision:** Used hardware-accelerated `requestAnimationFrame` render loop to prevent UI lagging and timing drift.
* **High Contrast Dark Theme:** Used high-visibility color (`#ffffff` and `#f8fafc`) ensuring complete legibility against deep gradient backgrounds.
* **Smart Component States:** UI buttons dynamically enable and disable based on the active workflow context (e.g., preventing lap recording when the timer is paused).
* **Data Grid Laps:** Displays lap split records in a responsive, clean tabular layout with individual CSS animation fade-ins.
* **Micro-Interactions:** Smooth hover transitions and active press states for all primary controls.
* **Zero Dependencies:** Fully functional in standard browser environments without package managers, preprocessors, or bundlers.

---

## EaseMotion & Custom CSS Infrastructure

### Layout Utilities
* `.ease-flex`: Manages the overall component stacking and button alignment layouts.
* `.ease-gap`: Standardizes clean, responsive spacing between the core interactive elements.
* `.ease-card`: Applied to both the primary timer and the lap results container to generate unified component cards.

### High-Visibility Dark Theme Overrides
To combat aggressive framework defaults that can mask elements in dark environments, custom structural components utilize high-contrast variable tokens:

```css
.display {
  color: #ffffff !important;
  font-size: 4rem !important;
  font-variant-numeric: tabular-nums; /* Prevents text shifting during millisecond updates */
}