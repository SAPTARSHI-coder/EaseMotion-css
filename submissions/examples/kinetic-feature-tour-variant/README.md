# Kinetic Feature Tour (#42509)

A lightweight, multi-step interactive feature tour slider written in pure CSS for the EaseMotion CSS library. It enables production setups to cleanly walk customers through feature points using performant keyframe structures with no JavaScript requirements.

## Architecture & Mechanics

- **State Persistence**: Utilizes radio element validation markers (`:checked ~ .viewport .track`) to shift layouts over the x-axis automatically.
- **Dimensional Stability**: Includes a baseline minimum structural height layer constraint on descriptions to avoid container jank when switching slides.
- **Performance Mapping**: Layout offsets avoid trigger modifications to text nodes directly, choosing instead to handle updates strictly via accelerated hardware translation metrics (`transform: translateX()`).

## Custom Modification

Adjust component speeds or theme parameters easily via core properties directly in `style.css`:

```css
:root {
  --ease-tour-bg: #0f172a;           /* Container canvas background */
  --ease-tour-accent: #6366f1;       /* Focus details and borders */
  --ease-tour-bezier: cubic-bezier(0.76, 0, 0.24, 1); /* Slide deceleration physics */
}