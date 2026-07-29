# ease-text-fill — -webkit-text-fill-color Utility Classes

Utility classes for `-webkit-text-fill-color` — overrides the text paint colour independently of `color`, enabling gradient text, semantic colour fills, and transparent fills for `background-clip` effects.

## Semantic Colour Fill Classes

| Class | Colour |
|-------|--------|
| `.ease-text-fill-primary` | `--ease-color-primary` |
| `.ease-text-fill-secondary` | `--ease-color-secondary` |
| `.ease-text-fill-success` | `--ease-color-success` |
| `.ease-text-fill-danger` | `--ease-color-danger` |
| `.ease-text-fill-warning` | `--ease-color-warning` |
| `.ease-text-fill-muted` | `--ease-color-muted` |
| `.ease-text-fill-white` | `#ffffff` |
| `.ease-text-fill-transparent` | `transparent` (for gradient text) |
| `.ease-text-fill-current` | `currentColor` (reset) |
| `.ease-text-fill-custom` | `var(--ease-text-fill)` |

## Gradient Text Classes

| Class | Gradient |
|-------|----------|
| `.ease-text-gradient-primary` | Primary → Primary-light |
| `.ease-text-gradient-secondary` | Primary → Secondary |
| `.ease-text-gradient-sunset` | Amber → Red → Pink |
| `.ease-text-gradient-ocean` | Cyan → Purple → Green |
| `.ease-text-gradient-rainbow` | Full spectrum |

## Usage

```html
<!-- Semantic fill -->
<h1 class="ease-text-fill-primary">Hello World</h1>

<!-- Gradient heading -->
<h1 class="ease-text-gradient-secondary">Gradient Heading</h1>

<!-- Custom fill via token -->
<span class="ease-text-fill-custom" style="--ease-text-fill: #06b6d4;">
  Custom colour
</span>

<!-- Transparent fill for custom gradient -->
<h1 style="background: linear-gradient(90deg, red, blue);
           -webkit-background-clip: text;
           background-clip: text;"
    class="ease-text-fill-transparent">
  Custom gradient
</h1>
```

## Why it fits EaseMotion CSS

EaseMotion CSS already provides `.ease-gradient-text` and `.ease-text-fill-none` in `core/utilities.css`. This submission expands the text fill system with semantic colour variants, a custom token class, and five ready-to-use gradient presets — covering the full range of text fill use cases.

Closes #11613
