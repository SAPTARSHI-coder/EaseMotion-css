# ease-neon-glow

Submission for Issue #52817

## What this adds

A reusable neon glow text utility that applies a vibrant glowing
effect to text using CSS text-shadow animation. Single class
application — works on headings, logos, buttons, and any text.
Zero JavaScript required.

## How It Works

```css
.ease-neon-glow {
  --neon-color: #00e5ff;
  color: #ffffff;
  text-shadow:
    0 0 5px  var(--neon-color),
    0 0 10px var(--neon-color),
    0 0 20px var(--neon-color),
    0 0 40px var(--neon-color);
  animation: ease-neon-glow 2s ease-in-out infinite alternate;
}
```

Layered `text-shadow` with increasing spread creates depth.
The `--neon-color` CSS custom property drives all shadow layers,
making color variants trivial with a single override.

## HTML Usage

```html
<!-- Basic neon glow -->
<h1 class="ease-neon-glow">Neon Glow Text</h1>

<!-- Specific color -->
<h1 class="ease-neon-glow ease-neon-glow--pink">Pink Neon</h1>

<!-- Flicker animation -->
<h1 class="ease-neon-glow ease-neon-glow--cyan ease-neon-glow--flicker">FLICKER</h1>

<!-- Hover only -->
<span class="ease-neon-glow ease-neon-glow--green ease-neon-glow--hover">Hover Me</span>

<!-- Box glow (non-text) -->
<div class="ease-neon-glow-box ease-neon-glow-box--pink">Glowing Box</div>
```

## Classes

### Base
| Class | Description |
|---|---|
| `ease-neon-glow` | Default cyan pulsing neon text |

### Color Variants
| Class | Color |
|---|---|
| `--cyan` | #00e5ff (default) |
| `--green` | #4ade80 |
| `--pink` | #f472b6 |
| `--purple` | #a855f7 |
| `--orange` | #fb923c |
| `--red` | #f87171 |
| `--yellow` | #facc15 |
| `--white` | rgba(255,255,255,0.9) |

### Intensity
| Class | Shadow Spread |
|---|---|
| `--subtle` | 2-layer, tight |
| `--medium` | 4-layer (default) |
| `--vivid` | 5-layer, wide |

### Animation
| Class | Effect |
|---|---|
| `--pulse` | Slow breathe in/out (default) |
| `--flicker` | Neon sign flicker |
| `--strobe` | Rapid on/off |
| `--rainbow` | Hue-shifting color loop |
| `--static` | Always on, no animation |
| `--hover` | Activates only on hover |

### Speed
| Class | Duration |
|---|---|
| `--fast` | 0.6s |
| default | 2s |
| `--slow` | 4s |

### Special
| Class | Description |
|---|---|
| `--outline` | Transparent fill, neon stroke only |
| `ease-neon-glow-box` | Box-shadow neon for divs/buttons |

## CSS Custom Property

Override `--neon-color` directly for any custom color:
```html
<h1 class="ease-neon-glow" style="--neon-color: #ff6b35">Custom Color</h1>
```

## Use Cases

- Gaming / cyberpunk hero sections
- Logo / brand text accents
- Neon button labels
- Highlighted keywords in copy
- Sign-in / countdown screens

## Accessibility

Respects `prefers-reduced-motion` — all animations replaced
with a gentle opacity fade. Static text-shadow preserved.
