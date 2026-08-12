# Glitch Poll Widget

An admin panel-style poll widget with a **glitch aesthetic** — RGB channel separation, clip-path slice distortions, and chromatic aberration on both text and progress bars. Dark theme with neon cyan, magenta, and yellow accents.

## Features

- **RGB channel glitch** — separate red/green/blue layers on bars with offset transforms
- **Text glitch effect** — `::before`/`::after` pseudo-elements with `clip-path` slices on question and option labels
- **Animated gradient bars** — bars fill on load with `hue-rotate` cycling
- **Scanline border** — top border animates a gradient sweep
- **Live pulse indicator** — pulsing dot in the footer
- **Two widget variants** — full bar chart and compact row layout
- **Hover intensify** — glitch frequency increases on bar hover
- **Pure CSS** — zero JavaScript

## File Structure

```
glitch-poll-widget/
├── demo.html
├── style.css
└── README.md
```

## How It Works

### Bar Glitch Layers

Each progress bar has four stacked layers:
1. `.bar-core` — the main gradient fill with `hue-rotate` cycling
2. `.layer-r` — red channel, animates translateX + clip-path slices
3. `.layer-g` — green channel, offset animation timing
4. `.layer-b` — yellow accent, slight skew transform

All layers are `position: absolute` with `inset: 0`, so they perfectly overlap. The RGB separation creates the chromatic aberration glitch effect.

### Text Glitch

Poll questions and option labels use `data-text` attributes. The `::before` (magenta) and `::after` (cyan) pseudo-elements display the same text at `opacity: 0` by default, animating to brief visibility with offset `translateX` and `clip-path` polygon cuts.

### Bar Fill Animation

Bars grow from `0%` to `var(--target-width)` using a custom cubic-bezier curve, triggered on page load via the `bar-grow` animation.

## Usage

Open `demo.html` in any modern browser. The bars animate in on load; hover over any bar to intensify the glitch effect.

## Customization

```css
:root {
  --accent-cyan: #00f5d4;     /* Primary accent */
  --accent-magenta: #f72585;  /* Glitch red channel */
  --accent-yellow: #fee440;   /* Glitch yellow channel */
  --widget-bg: #111120;       /* Widget background */
}
```

Increase/decrease `animation-duration` on `.layer-r/g/b` to change glitch frequency.
