# Glowing Neon Text Effect

A highly customizable glowing neon text effect example tailored for hero sections, creative portfolios, gaming websites, and dark-themed dashboards. It supports easy integration with EaseMotion CSS utilities.

## Features
- Dynamic neon glow using CSS variables for full customizability
- Readily available color variants (Cyan, Magenta, Green, Amber, etc.)
- Adjustable glow intensity, blur base, and animation duration
- Static and pulsing glow effects
- `prefers-reduced-motion` support
- Seamless integration with EaseMotion typography and layout utilities

## Usage

1. Include `style.css` in your project alongside `easemotion.css`.
2. Add the `.neon-text` class to your text element.
3. Apply a preset color variant class like `.neon-cyan`, `.neon-magenta`, or provide inline CSS variables to fine-tune the effect.

### Preset Example
```html
<h1 class="ease-text-6xl ease-font-bold neon-text neon-cyan">
  Neon Hero Title
</h1>
```

### Customized Example
You can customize the base blur, animation duration, intensity, and core color to achieve exactly the aesthetic you want.

```html
<h2 class="ease-text-4xl ease-font-semibold neon-text" 
    style="--neon-color: #ffbf00; --neon-blur-base: 8px; --neon-intensity: 1.5; --neon-duration: 2s;">
  Creative Portfolios
</h2>
```

## Available CSS Variables

You can set these variables globally or directly on `.neon-text` elements:

- `--neon-color`: The primary color of the neon glow (default: `#0ff`).
- `--neon-core-color`: The inner core color of the neon (default: `#ffffff`).
- `--neon-blur-base`: The base spread of the neon blur (default: `5px`).
- `--neon-intensity`: Multiplier to amplify the glow radius (default: `1`).
- `--neon-duration`: Duration of the pulsing animation (default: `1.5s`).

## Neon Buttons
The provided `style.css` also includes `.neon-btn` styling to match the text effect.
```html
<button class="ease-btn neon-btn">Get Started</button>
```
You can control the button's blur effect via `--neon-btn-blur` and `--neon-btn-hover-blur`


## Contributed by
- Man1ac-1773
