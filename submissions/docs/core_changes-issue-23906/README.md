# ease-rating

A CSS-only star rating component with interactive hover, keyboard accessibility, color variants, sizes, symbol styles, animations, and read-only/disabled modes.

## What

CSS-only interactive star rating using hidden radio inputs with `<label>` elements styled as star characters. Supports 8 color themes, 4 sizes, outline/heart/star symbols, pop-in/bounce/scale/rotate/glow animations, RTL, dark mode, tooltips, and inline value display.

## How

1. Include `style.css`.
2. Create a `.ease-rating` container with `<input type="radio">` and `<label>` pairs in descending order (highest value first).
3. Apply modifier classes for customisation (`--red`, `--lg`, `--outline`, `--animated`, etc.).

## Why

Provides a lightweight, dependency-free, accessible rating input that works with any form and can be styled purely with CSS. No JavaScript required for core interactivity.

## Modifiers

| Class | Effect |
|---|---|
| `ease-rating--sm` | Small size |
| `ease-rating--lg` | Large size |
| `ease-rating--xl` | Extra large size |
| `ease-rating--red/blue/green/purple/pink/orange/teal` | Color variants |
| `ease-rating--disabled` | Grayed out, no interaction |
| `ease-rating--readonly` | No interaction, full color |
| `ease-rating--animated` | Pop-in stagger animation on mount |
| `ease-rating--bounce` | Bounce easing on hover |
| `ease-rating--scale` | Scale up on hover |
| `ease-rating--rotate` | Rotate + scale on hover |
| `ease-rating--glow` | Drop-shadow glow on checked/hover |
| `ease-rating--outline` | Empty stars, fill on check |
| `ease-rating--heart` | Heart symbols |
| `ease-rating--dark` | Dark background color scheme |
| `ease-rating--no-animation` | Disable transitions |
| `ease-rating--responsive` | Fluid size via `clamp()` |
| `ease-rating--with-text` | Show numeric labels below stars |
| `ease-rating--tooltip` | Show tooltip on hover |
| `ease-rating--shadow` | Drop shadow filter |
| `ease-rating--stagger` | Staggered animation delay per star |

## Accessibility

- Uses native `<input type="radio">` for keyboard navigation and screen reader support.
- Focus visible ring via `:focus-within`.
- `title` attribute on labels for descriptive text.
- Supports `aria-label` and `fieldset/legend` patterns.
