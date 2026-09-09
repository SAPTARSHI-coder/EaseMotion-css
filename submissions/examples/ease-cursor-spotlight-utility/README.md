# Ease Cursor Spotlight Utility

## Description
A reusable radial glow effect that follows the cursor across any element. Apply as a composable utility class alongside existing markup — hero sections, cards, buttons, panels.

## How it works
CSS can't read mouse position, so `spotlight.js` updates `--spotlight-x`/`--spotlight-y` custom properties on `mousemove`. The glow itself is a `radial-gradient` positioned by those variables, fading via opacity on hover — no layout shifts, no external libraries.

## Usage
```html
<link rel="stylesheet" href="style.css" />

<div class="hero spotlight spotlight-hero">...</div>
<div class="card spotlight spotlight-card">...</div>
<button class="cta-btn spotlight spotlight-button">Get Started</button>

<script src="spotlight.js"></script>
```

## Preset Variants
| Class | Use case | Size | Color |
|---|---|---|---|
| `.spotlight-card` | Cards, panels | `220px` | Violet |
| `.spotlight-hero` | Hero sections | `420px` | Cyan |
| `.spotlight-button` | Buttons, CTAs | `120px` | Amber |

## Customization
| Property | Default |
|---|---|
| `--spotlight-size` | `220px` |
| `--spotlight-color` | `rgba(139, 92, 246, 0.18)` |
| `--spotlight-fade-duration` | `0.3s` |

## Accessibility
Glow also triggers on `:focus-within` for keyboard users. Respects `prefers-reduced-motion`.

## Files
- `demo.html` — live example
- `style.css` — utility styles
- `spotlight.js` — cursor tracking
- `README.md` — this file