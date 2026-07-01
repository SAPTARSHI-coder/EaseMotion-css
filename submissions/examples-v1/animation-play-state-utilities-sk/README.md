# Animation Play State Utilities

A set of utility classes to control the `animation-play-state` of elements in **EaseMotion CSS**. These utilities allow for interactive animation control, such as pausing animations on hover or toggling them via JavaScript.

## Utility Classes

| Class | CSS Value | Description |
| :--- | :--- | :--- |
| `.ease-paused` | `animation-play-state: paused` | Pauses the animation immediately. |
| `.ease-running` | `animation-play-state: running` | Ensures the animation is playing (default). |
| `.ease-hover-paused` | `animation-play-state: paused` (on hover) | Pauses the animation when the user hovers over the element. |

## How to Use
1. Include `easemotion.css` in your project.
2. Apply a looping animation class (e.g., `.ease-bounce`).
3. Add a play-state utility class to control behavior.

```html
<!-- Pause on hover -->
<div class="ease-bounce ease-hover-paused">
  Hover to Pause
</div>

<!-- Paused by default, play on action -->
<div id="status" class="ease-spin ease-paused">
  Processing...
</div>
```

## Directory Structure
- `demo.html`: Visual demonstration of pausing and resuming animations.
- `style.css`: The play-state utility definitions.
