# Animation Fill Mode Utilities

A set of utility classes to control the `animation-fill-mode` of elements in **EaseMotion CSS**. These utilities are essential for ensuring that elements retain their final animation state or properly apply initial styles before an animation starts.

## Utility Classes

| Class                  | CSS Value                        | Description                                                         |
| :--------------------- | :------------------------------- | :------------------------------------------------------------------ |
| `.ease-fill-none`      | `animation-fill-mode: none`      | Default behavior. No styles applied before or after animation.      |
| `.ease-fill-forwards`  | `animation-fill-mode: forwards`  | Element retains styles from the last keyframe after animation ends. |
| `.ease-fill-backwards` | `animation-fill-mode: backwards` | Element applies styles from the first keyframe during delay.        |
| `.ease-fill-both`      | `animation-fill-mode: both`      | Combines both `forwards` and `backwards` behaviors.                 |

## How to Use

1. Include `easemotion.css` in your project.
2. Apply an animation class (e.g., `.ease-fade-in`).
3. Add the desired fill-mode utility class.

```html
<!-- Retain visibility after fading in -->
<div class="ease-fade-in ease-fill-forwards">Success Message</div>
```

## Directory Structure

- `demo.html`: Visual demonstration of different fill modes.
- `style.css`: The utility class definitions.
