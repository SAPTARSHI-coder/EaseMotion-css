# Circular Progress Rings with Elastic Swell

A premium set of responsive circular progress indicators styled to look like system dashboard widgets.

## What does this do?
It creates highly visual, responsive dashboard progress rings using vector SVG layouts, native dash-offset animation timing, and smooth spring-physics scale effects on hover or keyboard focus events.

## How is it used?
Configure standard HTML elements with the progress-ring wrapper classes, apply customizable linear parameters via `--percent` variables, and toggle focused container sizing:

```html
<div class="progress-card" tabindex="0">
  <svg class="progress-ring" viewBox="0 0 120 120">
    <circle class="ring-track" cx="60" cy="60" r="50" />
    <circle class="ring-bar" cx="60" cy="60" r="50" style="--percent: 74;" />
  </svg>
</div>
```

## Why is it useful?
It offers lightweight, highly accessible, and modular interface progress tracking without javascript calculation logic, providing dynamic responsive feed widgets that respect native OS preferences for reduced motions.
