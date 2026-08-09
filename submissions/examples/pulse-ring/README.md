# Pulse Ring Animation

## Description

A pure CSS-only pulse ring animation utility named `emPulseRing` for the EaseMotion CSS library. It expands a circular ring smoothly outward while fading out. The animation is completely loopable, infinitely repeating, and uses only GPU-accelerated properties (`transform` and `opacity`) to ensure high performance and prevent layout shifts.

## Files

- demo.html
- style.css

## Features

- CSS only
- Infinite animation
- GPU accelerated
- Responsive
- Easy customization

## Usage

Include a simple HTML example:

```html
<!-- Position relative wrapper is required around the pulsed element -->
<div class="em-pulse-ring-wrapper">
  <!-- Target element to pulse -->
  <span
    class="em-pulse-ring"
    style="--em-ring-color: #ef4444; --em-ring-size: 2.2;"
  ></span>
</div>
```
