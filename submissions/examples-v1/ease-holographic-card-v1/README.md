# ease-holographic-card

Submission for Issue #52020

## What this adds

A reusable card component simulating holographic foil using
layered CSS gradients with `mix-blend-mode: screen`. Supports
hover-triggered shimmer sweep, static always-on foil, pointer
tilt with optional JS, and multiple color presets.

## How It Works

Three layers create the holographic illusion:
1. **Base card** — dark background with border
2. **`::before`** — iridescent `linear-gradient` with `background-size: 300%`
   animated via `ease-holo-shimmer`, revealed on hover
3. **`::after`** — white diagonal sweep flash on hover trigger

`mix-blend-mode: screen` blends the gradient naturally over
any card content without covering text.

## HTML Structure

```html
<div class="ease-holographic-card">
  <div class="ease-holographic-card__badge">✦ Limited Edition</div>
  <h3 class="ease-holographic-card__title">Card Title</h3>
  <p class="ease-holographic-card__subtitle">Subtitle</p>
  <p class="ease-holographic-card__body">Card description text.</p>
  <div class="ease-holographic-card__footer">
    <div class="ease-holographic-card__stat">
      <strong>#001</strong>
      Series
    </div>
  </div>
</div>
```

## Classes

### Core
| Class | Description |
|---|---|
| `ease-holographic-card` | Base card, foil on hover |
| `ease-holographic-card--static` | Always-on foil shimmer |
| `ease-holographic-card--tilt` | 3D pointer tilt (needs JS vars) |

### Color Presets
| Class | Colors |
|---|---|
| default | Full rainbow spectrum |
| `--rainbow` | Saturated full-spectrum |
| `--pastel` | Soft dreamy tones |
| `--gold` | Amber → gold shimmer |
| `--silver` | Chrome → white shimmer |

### Intensity
| Class | Opacity |
|---|---|
| `--subtle` | 25% |
| `--medium` | 55% (default) |
| `--vivid` | 85% |

### Speed
| Class | Speed |
|---|---|
| `--fast` | 1.5s |
| default | 4s |
| `--slow` | 8s |

### Size
| Class | Width |
|---|---|
| `--sm` | 180px |
| `--md` | 260px |
| `--lg` | 340px |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--holo-speed` | 4s | Shimmer animation duration |
| `--holo-intensity` | 0.55 | Foil layer opacity on hover |
| `--holo-angle` | 135deg | Gradient angle (JS can update) |
| `--holo-bg` | #1e293b | Card background color |

## Pointer Tilt (JS)

```js
card.addEventListener('pointermove', e => {
  const rect = card.getBoundingClientRect();
  const dx = (e.clientX - rect.left - rect.width/2)  / (rect.width/2);
  const dy = (e.clientY - rect.top  - rect.height/2) / (rect.height/2);
  card.style.setProperty('--rx', (-dy * 12) + 'deg');
  card.style.setProperty('--ry', ( dx * 12) + 'deg');
  card.style.setProperty('--holo-angle',
    (Math.atan2(dy, dx) * 180 / Math.PI + 135) + 'deg');
});
```

## Accessibility

Respects `prefers-reduced-motion` — shimmer animation
paused, static foil opacity reduced to 40%, tilt capped
to simple scale only.

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
