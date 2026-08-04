# ease-noise — Static Grain/Noise Texture Overlay Utility

## What does this do?

Adds a subtle film-grain / static noise texture overlay using a CSS-only `mask` with a repeating conic-gradient or SVG data-URI. Gives surfaces a tactile, analog feel without JavaScript or external assets.

## How is it used?

```html
<div class="ease-noise">
  <!-- Content with subtle grain texture -->
</div>
```

### Variants

| Class | Opacity | Description |
|---|---|---|
| `.ease-noise` | ~0.5 | Default subtle grain |
| `.ease-noise-light` | ~0.25 | Very subtle grain |
| `.ease-noise-heavy` | ~0.8 | Pronounced grain |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-noise-opacity` | `0.5` | Grain overlay opacity |
| `--ease-noise-size` | `256px` | Pattern tile size |

## Why?

Adds visual texture to hero sections, cards, and backgrounds. No external images or JS required.
