# ease-counter-roll

Animated numeric counter with digit roll-up effect on value change.

## Issue
[#64945](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64945)

## Feature Overview
CSS + JS counter that animates individual digit slots when a number changes. Each digit rolls up or down independently. Supports multiple color themes, sizes, and easing variations.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--counter-font` | `'SF Mono', monospace` | Font family |
| `--counter-color` | `#f8fafc` | Text color |
| `--counter-bg` | `transparent` | Background |
| `--counter-size` | `2rem` | Font size |
| `--counter-weight` | `700` | Font weight |
| `--counter-duration` | `0.6s` | Roll animation duration |

## Variants

| Class | Description |
|---|---|
| `.theme-primary` | Purple color theme |
| `.theme-secondary` | Indigo color theme |
| `.theme-success` | Green color theme |
| `.theme-warning` | Amber color theme |
| `.theme-danger` | Red color theme |
| `.theme-cyan` | Cyan color theme |
| `.size-sm` | Small (1.25rem) |
| `.size-md` | Medium (2rem) |
| `.size-lg` | Large (3rem) |
| `.size-xl` | Extra large (4.5rem) |
| `.pill` | Pill background container |
| `.glow` | Text glow effect |
| `.bounce` | Bounce easing for roll |

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="counter-display theme-primary">1234</div>
<div class="counter-display size-lg theme-success glow pill">9999</div>
```

## Accessibility
- Respects `prefers-reduced-motion` (animation disabled)
- Monospace font ensures digit width consistency
- Sufficient color contrast in all themes
