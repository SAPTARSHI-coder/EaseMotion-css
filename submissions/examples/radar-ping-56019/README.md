# Pulsing Radar/Sonar Ring Animation

## What does this do?
An animation that emits infinite, expanding rings from a central point, simulating a sonar or radar ping. It is achieved by using multiple elements with staggered, infinite `scale` and `opacity` keyframes.

## How is it used?
```html
<div class="ease-radar-container">
    <div class="ease-radar-dot"></div>
    <div class="ease-radar-ring"></div>
    <div class="ease-radar-ring"></div>
    <div class="ease-radar-ring"></div>
</div>
```

## Why does it fit EaseMotion CSS?
It provides a highly recognizable, smooth micro-animation perfect for live location indicators, "recording" badges, or notification bells. By using CSS `animation-delay` and `cubic-bezier` timing functions, it achieves a complex, continuous particle generation effect without a single line of JavaScript.

## Tech Stack
- HTML
- CSS (No JavaScript)
