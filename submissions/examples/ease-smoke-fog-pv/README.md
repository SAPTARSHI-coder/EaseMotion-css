# Smoke / Fog Effect

## 1. What does this do?

A pure CSS animated smoke and fog effect using radial gradients, blur filters, and keyframe animations. Smoke particles rise, drift, and fade — simulating realistic smoke. A separate fog layer drifts horizontally across the container. Both effects are fully CSS-only with no JavaScript or SVG required.

## 2. How is it used?

### Smoke effect
```html
<div class="smoke-container">
  <div class="smoke-particle" style="--left:20%; --size:80px; --duration:6s; --delay:0s; --drift:20px;"></div>
  <div class="smoke-particle" style="--left:50%; --size:100px; --duration:7s; --delay:1s; --drift:-15px;"></div>
  <div class="smoke-particle" style="--left:75%; --size:70px; --duration:5s; --delay:2s; --drift:10px;"></div>
</div>
```

### CSS variables per particle
| Variable | Description |
|---|---|
| `--left` | Horizontal start position |
| `--size` | Particle diameter |
| `--duration` | Animation duration |
| `--delay` | Animation delay |
| `--drift` | Horizontal drift direction |

### Color variants
```html
<div class="smoke-container smoke-red"> ... </div>
<div class="smoke-container smoke-blue"> ... </div>
<div class="smoke-container smoke-green"> ... </div>
```

### Fog layer
```html
<div class="fog-container">
  <div class="fog-layer" style="--fog-speed:10s; --fog-delay:0s;"></div>
  <div class="fog-layer" style="--fog-speed:14s; --fog-delay:-4s;"></div>
</div>
```

### Hero section example
```html
<div class="hero-section">
  <div class="smoke-particle" style="--left:20%; --size:100px; --duration:6s; --delay:0s; --drift:20px;"></div>
  <span class="hero-text">YOUR TEXT</span>
</div>
```

## 3. Why is it useful?

- Pure CSS — zero JavaScript, zero dependencies
- Fully customizable per particle via CSS variables
- Great for dark hero sections, 404 pages, game UIs, and cinematic effects
- Color variants and fog layer make it composable for different moods
- Fits EaseMotion's animation-first, human-readable philosophy perfectly
