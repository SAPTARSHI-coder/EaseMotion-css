# CSS Animation Play-State Utilities (Issue #16682)

This submission introduces **animation-play-state** utility classes for the **EaseMotion CSS** framework. These utilities enable declarative playback control (play, pause, hover-toggles) of CSS animations.

## 📋 Features & Classes

| Utility Class              | CSS Rule                                              | Description                                                 |
| :------------------------- | :---------------------------------------------------- | :---------------------------------------------------------- |
| `.ease-paused`             | `animation-play-state: paused !important;`            | Pauses any running keyframe animations on the element.      |
| `.ease-running`            | `animation-play-state: running !important;`           | Resumes/runs keyframe animations on the element.            |
| `.ease-hover-paused`       | `animation-play-state: paused !important` (on hover)  | Automatically pauses the animation on mouse/pointer hover.  |
| `.ease-hover-running`      | `animation-play-state: running !important` (on hover) | Automatically resumes the animation on mouse/pointer hover. |
| `.ease-play-state-paused`  | `animation-play-state: paused !important;`            | Explicit fallback alias for pausing.                        |
| `.ease-play-state-running` | `animation-play-state: running !important;`           | Explicit fallback alias for running.                        |

## 🛠️ Usage Example

To pause an infinite marquee or custom rotation on hover, add the `.ease-hover-paused` utility class:

```html
<div class="marquee-track ease-hover-paused">
  <!-- Interactive scrolling items -->
</div>
```

## 🎨 Interactive Demo

The included [demo.html](demo.html) showcases:

1. **Interactive Loader Spinners:** A collection of spinners (spin, scale ripple, bar equalizers) where playback state is toggled dynamically.
2. **Infinite Scrolling Stream:** A horizontal scrolling track that uses `.ease-hover-paused` to pause whenever a pointer hovers over the content.
