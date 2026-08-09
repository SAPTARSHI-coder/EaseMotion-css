# ease-3d-tilt

Interactive 3D tilt effect on cards that responds to cursor position.

## Issue
[#64944](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64944)

## Feature Overview
Mouse-tracking 3D tilt effect using CSS transforms and perspective. Cards rotate on both X and Y axes based on cursor position, with a dynamic glare overlay that follows the mouse.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--tilt-perspective` | `1000px` | 3D perspective depth |
| `--tilt-glare` | `rgba(255,255,255,0.12)` | Glare overlay color |
| `--tilt-shadow` | `rgba(0,0,0,0.4)` | Box shadow color |
| `--tilt-transition` | `0.15s ease-out` | Transition timing |
| `--tilt-intensity` | `20` | Rotation degree multiplier |

## Variants

| Class | Description |
|---|---|
| `.intensity-low` | Subtle tilt (8 degree max) |
| `.intensity-high` | Strong tilt (35 degree max) |
| `.intensity-max` | Maximum tilt (50 degree max) |
| `.theme-purple` | Purple gradient background |
| `.theme-blue` | Blue gradient background |
| `.theme-emerald` | Emerald gradient background |
| `.theme-rose` | Rose gradient background |
| `.glow-border` | Glowing border on hover |
| `.size-sm` | Small card (180x130px) |
| `.size-md` | Medium card (280x200px) |
| `.size-lg` | Large card (380x260px) |
| `.no-tilt` | Disable tilt effect |

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="tilt-card" id="myCard">
  <div class="tilt-content">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</div>
<script>
  // JS required for mouse tracking
  card.addEventListener('mousemove', function(e) {
    var rect = card.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width * 100;
    var y = (e.clientY - rect.top) / rect.height * 100;
    card.style.transform = 'perspective(1000px) rotateX(' + (50-y)/50*20 + 'deg) rotateY(' + (x-50)/50*20 + 'deg)';
  });
</script>
```

## Accessibility
- Respects `prefers-reduced-motion` (tilt disabled)
- Disabled on touch devices (hover:none media query)
- Graceful degradation with no-tilt class
