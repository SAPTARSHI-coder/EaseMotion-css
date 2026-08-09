# Timeline Checkpoint Tracker

## What does this do?

Timeline Checkpoint Tracker is a self-contained HTML and CSS project timeline that shows milestone progress with animated checkpoints, a filling progress rail, status badges, and hoverable milestone cards.

## How is it used?

Create a `timeline-card` wrapper, add the decorative `timeline-rail`, and place `checkpoint` items with status modifier classes such as `checkpoint-done`, `checkpoint-active`, or `checkpoint-review`.

```html
<article class="checkpoint checkpoint-active">
  <div class="checkpoint-marker" aria-hidden="true">
    <span>3</span>
  </div>
  <div class="checkpoint-content">
    <p class="checkpoint-phase">Build</p>
    <h2>Core screens in implementation</h2>
    <p>The team is wiring responsive behavior and motion details.</p>
  </div>
</article>
```

Available checkpoint classes:

- `checkpoint-done`
- `checkpoint-active`
- `checkpoint-review`

## Why is it useful?

It fits EaseMotion's philosophy by using animation to explain sequence and progress: checkpoints enter gently, the rail fills to show completion, active markers pulse without JavaScript, and reduced-motion support keeps the demo accessible. It works directly by opening `demo.html` in a browser.
