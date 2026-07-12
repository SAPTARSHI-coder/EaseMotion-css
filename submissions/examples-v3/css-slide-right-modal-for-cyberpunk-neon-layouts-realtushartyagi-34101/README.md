# CSS Slide-Right Modal for Cyberpunk Neon Layouts

A pure CSS modal component featuring a snappy "slide-right" entrance animation, styled specifically for bold, high-contrast **Cyberpunk Neon** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, and the `transform` logic utilizing a `translateX` transition to create the slide-right effect with a slightly elastic overshoot.
- `demo.html` – A standalone HTML file demonstrating the modal functionality in a typical cyberpunk terminal layout.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal uses the CSS `:target` pseudo-class to open and close. Your trigger button should be an `<a>` tag that links to the modal's `id`.

```html
<!-- Trigger -->
<a href="#sys-modal" class="ease-cyber-trigger-btn">Initialize Connection</a>

<!-- Modal Overlay & Animated Content -->
<div id="sys-modal" class="ease-slide-right-cyber-modal-overlay">
  <div class="ease-slide-right-cyber-modal-content">
    <a href="#" class="ease-slide-right-cyber-modal-close">&times;</a>
    <h2>Connection Established</h2>
    <p>Modal content goes here...</p>
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and neon coloring via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-slide-distance` | `-150px` | The starting X-axis offset from which the modal slides right. |
| `--ease-slide-timing` | `0.4s` | The total duration of the modal's slide entrance animation. |
| `--ease-slide-easing`| `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | A spring-like easing that gives a snappy, mechanical overshoot. |
| `--ease-cyber-neon-cyan` | `#0ff` | Primary glowing cyan accent color. |
| `--ease-cyber-neon-magenta`| `#f0f` | Secondary glowing magenta accent color. |

## Why it fits EaseMotion CSS
This component removes the need for JavaScript state management by utilizing the CSS `:target` pseudo-class for interactivity. The "slide-right" animation leverages standard CSS `transform` properties (`translateX`) coupled with an overshooting `cubic-bezier`. This creates a tactile, 60fps micro-interaction that fits perfectly with mechanical or tech-focused UI aesthetics, executed entirely in CSS.

---

> **Note:** PR modifies only files inside `submissions/examples/css-slide-right-modal-for-cyberpunk-neon-layouts-realtushartyagi-34101/`.
