# CSS Variable Font Weight Animation

## What does it do?
Demonstrates animating CSS `font-variation-settings` to smoothly
transition font weight, width, and slant axes using a variable font.
Includes auto-playing animations, hover variants, and an interactive
slider demo.

## How is it used?
```html
<!-- Auto-animating weight pulse -->
<p class="ease-vf-pulse-weight">Your Text</p>

<!-- Hover to bold -->
<p class="ease-vf-hover-bold">Hover Me</p>

<!-- Manual control via CSS variables -->
<p class="ease-vf" style="
  --ease-vf-weight: 700;
  --ease-vf-width: 110;
  --ease-vf-slant: -5;
">Custom Text</p>
```

## Classes
| Class | Effect |
|---|---|
| `.ease-vf-pulse-weight` | Animates wght 100→900 |
| `.ease-vf-pulse-width` | Animates wdth 75→125 |
| `.ease-vf-pulse-slant` | Animates slnt 0→-10 |
| `.ease-vf-morph` | All axes combined |
| `.ease-vf-hover-bold` | Bold on hover |
| `.ease-vf-hover-wide` | Wide on hover |
| `.ease-vf-hover-slant` | Slant on hover |

## CSS Variables (for .ease-vf)
- `--ease-vf-weight` — font weight (100–900)
- `--ease-vf-width` — font width (75–125)
- `--ease-vf-slant` — font slant (-10–0)

## Font Used
Roboto Flex — loaded from Google Fonts (requires internet)

## Features
- Weight, width, slant axis animations
- Hover interaction variants
- Interactive slider demo
- Respects prefers-reduced-motion
- Pure CSS animations + minimal JS for sliders

## Preview
Open `demo.html` directly in browser (internet required for font).