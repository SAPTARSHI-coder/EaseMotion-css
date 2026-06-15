# Text Shadow Effects

## What does it do?
A pure-CSS demo showing creative typography effects built entirely with `text-shadow` — no JavaScript or images required.

## Features
- **Neon Glow** — layered shadows for vibrant neon text (cyan, pink, green)
- **3D & Embossed** — raised, embossed, and engraved text effects
- **Flame Text** — fire-like glow effects
- **Outline Stroke** — simulated text stroke using four-direction shadows
- **Hover Transitions** — interactive effects that activate on hover
- **Reduced Motion** — respects `prefers-reduced-motion`

## Usage
```css
.neon { text-shadow: 0 0 7px #22d3ee, 0 0 10px #22d3ee, 0 0 21px #22d3ee; }
.threed { text-shadow: 0 1px 0 #ccc, 0 2px 0 #bbb, 0 3px 0 #aaa; }
```

## Classes
- `.shadow-neon-cyan`, `.shadow-neon-pink`, `.shadow-neon-green` — neon glow effects
- `.shadow-3d`, `.shadow-emboss`, `.shadow-engrave` — depth effects
- `.shadow-fire`, `.shadow-fire-alt` — flame effects
- `.shadow-outline`, `.shadow-outline-white` — outline effects
- `.shadow-hover-glow`, `.shadow-hover-3d`, `.shadow-hover-fire` — interactive hover

## Browser Support
- `text-shadow` — Chrome 2+, Firefox 3.5+, Safari 1.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
