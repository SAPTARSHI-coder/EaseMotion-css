# Mirror Reflection Card (#36819)

A card component that reveals a shimmering reflection overlay on hover, simulating a mirror-like surface.

## CSS Custom Properties

| Prop | Default | Description |
|------|---------|-------------|
| `--card-bg` | `#2a2a3e` | Card background color |
| `--reflection-opacity` | `0.3` | Max opacity of the reflection overlay |
| `--reflection-gradient` | *(linear-gradient)* | Gradient used for the reflection effect |
| `--hover-duration` | `0.5s` | Duration of the reflection transition |

## Usage

```html
<div class="mirror-card" style="--card-bg: #2a2a3e; --reflection-opacity: 0.35;">
  <div class="card-content">…</div>
  <div class="card-reflection"></div>
</div>
```

## Features

- Smooth reflection fade-in on hover
- Card lift effect with translateY
- Fully customizable via CSS variables
- Dark-theme ready
