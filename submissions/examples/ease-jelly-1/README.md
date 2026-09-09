# ease-jelly-1 🍮

A playful elastic squish animation for EaseMotion CSS. Hover or click any element
and it squishes and stretches like a rubber object — settling back to rest naturally.

## Usage

​```html
<link rel="stylesheet" href="style.css" />

<button class="jelly">Click Me</button>
<div class="jelly">🐸</div>
<img class="jelly" src="avatar.png" />
​```

## Variants

| Class | Effect |
|---|---|
| `jelly-slow` | 1s duration |
| `jelly-fast` | 0.35s duration |
| `jelly-subtle` | Low intensity wobble |
| `jelly-strong` | Exaggerated bounce |

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--jelly-duration` | `0.6s` | How long the wobble lasts |
| `--jelly-intensity` | `1` | How dramatic the squish is |

​```html
<button class="jelly" style="--jelly-duration: 0.8s; --jelly-intensity: 1.4;">
  Custom
</button>
​```

## Accessibility

Animations are automatically disabled when `prefers-reduced-motion` is enabled.

## Files

​```
submissions/examples/ease-jelly/
├── style.css
├── demo.html
└── README.md
​```
