# Interactive Animation Playground — Issue #23659

## What does this do?

This submission adds a self-contained, interactive animation playground (`demo.html`) that allows developers to select any animation class from EaseMotion CSS, customize the timing parameters (duration, delay, and easing function) in real-time, and copy the generated HTML structure.

## How is it used?

Open `submissions/core_changes-issue-23659/demo.html` directly in any web browser. Use the sidebar controls to:

- Select an animation class (e.g. `ease-fade-in`, `ease-slide-up`, `ease-zoom-in`, etc.).
- Set custom duration (100ms - 3000ms) and delay (0ms - 2000ms) values.
- Choose a timing function (e.g. Smooth, Linear, Elastic).
- View the animation live on the preview card, or replay it with the **Replay Animation** button.
- Click **Copy HTML** to get the ready-to-use HTML code:

```html
<div
  class="preview-card ease-fade-in"
  style="animation-duration: 600ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);"
>
  ...
</div>
```

## Why is it useful?

It provides a visual, friction-free playground where developers can quickly experiment with different animation combinations, parameters, and easings in real-time without leaving the browser, which makes the framework more approachable and significantly reduces integration time.

Fixes #23659
