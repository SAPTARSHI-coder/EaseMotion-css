# ease-static-noise-isk

## What does this do?
Simulates a classic analog TV static noise screen effect with flickering opacity changes and small jittering scale/translate shifts.

## How is it used?
Add the class to any element representing a monitor, CRT screen, or digital display component:

```html
<div class="monitor-screen ease-static-noise-isk">
  <h3>SYSTEM ERROR</h3>
</div>
```

## Why is it useful?
The static noise effect is extremely popular in cyberpunk, sci-fi, and retro aesthetics. It uses a high-performance CSS pseudo-element combined with an inline SVG fractal noise background, creating a high-fidelity visual texture without requiring heavy video assets or external canvas libraries.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)
