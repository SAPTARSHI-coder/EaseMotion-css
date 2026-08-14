# ease-scramble

## What does this do?
Adds a hacker-style text scramble and decode animation effect on hover using pure CSS and data attributes. No JavaScript required.

## How is it used?
Apply `.ease-scramble` or `.ease-scramble-loop` to any text element and provide a `data-scramble` attribute which will be shown at the end of the scramble (or used as a visual placeholder during the animation).

```html
<!-- One-shot Hover -->
<span class="ease-scramble" data-scramble="*&^%$#!">HOVER ME</span>

<!-- Infinite Loop -->
<span class="ease-scramble-loop" data-scramble="ACCESS_DENIED">SECURITY SCAN</span>
```

### Available Classes
| Class | Effect |
|-------|--------|
| `.ease-scramble` | One-shot scramble animation on hover |
| `.ease-scramble-loop` | Continuous scramble-flicker animation loop |
| `.ease-scramble-fast` | Fast animation speed (0.3s) |
| `.ease-scramble-slow` | Slow animation speed (1.2s) |

## Why is it useful?
It provides a high-engagement, "cyberpunk" or "tech" feel to text elements without the overhead of JavaScript libraries. It's lightweight, GPU-accelerated, and follows the framework's philosophy of pure-CSS interactions.
