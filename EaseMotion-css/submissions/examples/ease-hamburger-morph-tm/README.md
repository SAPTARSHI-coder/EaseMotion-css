# ease-hamburger-morph

Animated hamburger menu icon that morphs between open and closed states.

## Issue
[#64943](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64943)

## Feature Overview
CSS-only animated hamburger menu button that morphs into a close (X) icon on click. Uses transform and opacity transitions on individual bars. Supports multiple morph patterns (arrow, minus, collapse).

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--ham-color` | `#f8fafc` | Bar color |
| `--ham-bg` | `transparent` | Button background |
| `--ham-size` | `28px` | Bar width |
| `--ham-thickness` | `2px` | Bar height |
| `--ham-gap` | `6px` | Gap between bars |
| `--ham-radius` | `3px` | Bar border radius |
| `--ham-duration` | `0.35s` | Transition duration |

## Variants

| Class | Description |
|---|---|
| `.arrow` | Morphs to arrow instead of X |
| `.minus` | Morphs to minus (three horizontal lines) |
| `.collapse` | Bars slide to center |
| `.size-sm` | Small size (20px bars) |
| `.size-lg` | Large size (36px bars) |
| `.size-xl` | Extra large (48px bars) |
| `.color-primary` | Purple bars |
| `.color-success` | Green bars |
| `.color-danger` | Red bars |
| `.color-dark` | Dark bars |
| `.pill` | Pill-shaped background |
| `.bordered` | Subtle border outline |
| `.vertical` | Vertical layout variant |

## Usage

```html
<link rel="stylesheet" href="style.css" />
<button class="hamburger" onclick="this.classList.toggle('active')" aria-label="Toggle menu">
  <span class="hamburger-bar"></span>
  <span class="hamburger-bar"></span>
  <span class="hamburger-bar"></span>
</button>
```

## Accessibility
- Uses semantic `<button>` element
- `aria-label` attribute for screen readers
- `focus-visible` outline for keyboard navigation
- Respects `prefers-reduced-motion`
