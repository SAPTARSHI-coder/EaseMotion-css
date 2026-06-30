# ease-particles

Animated floating particle backgrounds for EaseMotion CSS.
Pure CSS · No canvas · No JavaScript · Zero dependencies

## Quick Start

```html
<section class="ease-particles" style="min-height: 400px;">
  <div>
    <h1>Hero with Particles</h1>
  </div>
</section>
```

## Classes

| Class | Effect |
|---|---|
| `.ease-particles` | Default floating blue dots |
| `.ease-particles-dense` | More particles, smaller size |
| `.ease-particles-sparse` | Fewer, larger particles |
| `.ease-particles-slow` | Slow float (16–20s) |
| `.ease-particles-fast` | Fast float (4–5s) |
| `.ease-particles-purple` | Violet/indigo particles |
| `.ease-particles-white` | White dots for dark backgrounds |

## Combining Modifiers

```html
<section class="ease-particles ease-particles-purple ease-particles-slow">
  ...
</section>
```

## How It Works

Uses `::before`/`::after` + `box-shadow` cloning to render ~40 particles
from a single 4×4px dot — zero extra DOM nodes.
Respects `prefers-reduced-motion` for accessibility.

Closes #2730
