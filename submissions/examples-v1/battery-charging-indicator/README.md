# Animated Battery Charging Indicator

## What it does

Three beautifully designed **liquid wave battery indicators** that use an undulating CSS wave animation to simulate fluid filling a battery casing. The level, wave color, and glow all adapt based on charge percentage (green/yellow/red states). An interactive slider lets you drag the charge level and watch the liquid rise or fall in real-time.

## Animations & Techniques

- **Liquid Wave via `::before` / `::after` Pseudo-Elements**: Two absolutely-positioned pill-shaped `div`s positioned at the top of the fill area are animated with `@keyframes wave-scroll` (`translateX(0) → translateX(33%)` on a 300% wide element) — this creates a seamless, infinitely looping horizontal wave.
- **Dual Wave Offset**: The second wave uses `animation-direction: reverse` and a different speed (3s vs 2.2s) so the two waves are out of phase, creating an organic liquid turbulence.
- **Springy Height Transition**: The `.battery-fill` height changes with `cubic-bezier(0.34, 1.56, 0.64, 1)` so the liquid level bounces slightly when adjusted.
- **CSS State Classes**: `.high`, `.mid`, `.low` classes swap the gradient colors for the waves and fill body simultaneously, plus adjust the `box-shadow` glow color.
- **Low Battery Pulse**: When in `.low` state, the fill animates `filter: brightness()` to create a pulsing warning effect.
- **Lightning Bolt**: An `::after` bolt icon pulses with `scale` + `opacity` inside the battery shell.

## Folder structure

```
animations/battery-charging-indicator/
├── demo.html
├── style.css
└── README.md
```

## Why it fits EaseMotion CSS

- A perfect showcase of pseudo-element animation technique — zero SVG, zero canvas, 100% CSS.
- Demonstrates `animation-direction: reverse` and dual-speed waves for naturalistic fluid motion.
- Includes `prefers-reduced-motion` and full ARIA `progressbar` role semantics for accessibility.
