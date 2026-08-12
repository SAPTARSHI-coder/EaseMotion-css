# Scale Progress Bar Component

A polished, performance-optimized, corporate-inspired progress indicator designed exclusively for the **EaseMotion CSS** library. 

## Features
- **Pure CSS Execution:** Runs entirely without JavaScript dependencies.
- **Hardware Accelerated:** Uses `transform: scaleX()` rather than modifying layout constraints like `width` to maintain a consistent 60 FPS transition profile.
- **Fully Responsive & Accessible:** Fluidly inherits track sizing parameters from parent containers.

## File Map
- `demo.html` — Includes a structured, live implementation environment showcasing component states.
- `style.css` — Holds design tokens, track wrappers, and structural keyframe utilities.

## How to Use

1. **Structure the Element:** Wrap the bar within a track layout (`.ease-progress-wrapper`).
2. **Apply the Variable Value:** Provide the objective progress value using the inline dynamic CSS variable `--progress`.

```html
<div class="ease-progress-wrapper">
    <div class="ease-progress-bar scale-animation" style="--progress: 75%;"></div>
</div>