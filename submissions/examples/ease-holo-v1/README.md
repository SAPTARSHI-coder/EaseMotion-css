# ease-holo - Holographic Foil Hover Effect

Iridescent rainbow shimmer like holographic foil that activates on hover.

## Features

- 🌈 Iridescent conic-gradient rainbow effect
- ✨ Configurable intensity via `--ease-holo-intensity`
- 🎭 Smooth hover movement (scale + translate)
- 💎 Premium holographic foil look
- 🎨 Uses `mix-blend-mode: overlay` for realistic effect

## Classes

| Class | Description |
|-------|-------------|
| `ease-holo` | Holographic foil effect on hover |

## Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-holo-intensity` | 1 | Controls effect intensity (0.5 to 1.5) |

## Usage

```html
<!-- Basic usage -->
<div class="ease-holo">
    Holographic content
</div>

<!-- Custom intensity -->
<div class="ease-holo" style="--ease-holo-intensity: 1.5;">
    High intensity effect
</div>

<!-- On any element -->
<button class="ease-holo">Holo Button</button>
<img class="ease-holo" src="image.jpg" alt="Holo">