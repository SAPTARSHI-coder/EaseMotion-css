# Animation Timing Function

Demonstrates the `animation-timing-function` property across nine cubic-bezier curves available in the EaseMotion CSS framework.

## Features

- 10 demo cards with live rolling-ball animations
- Covers all built-in timing functions: `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `bounce`
- Plus 4 custom `cubic-bezier` curves: Back In, Back Out, Circ In, Expo Out
- Dark mode via `prefers-color-scheme`
- Reduced-motion safe via `prefers-reduced-motion`

## Design Tokens Used

- `--ease-speed-medium` (300ms) — base animation duration
- `--ease-color-primary` — ball color with `--ease-glow-primary` shadow
- `--ease-radius-lg` / `--ease-radius-md` / `--ease-radius-sm` — card and element rounding
- `--ease-shadow-sm` / `--ease-shadow-md` — card elevation
- `--ease-font-sans` / `--ease-font-mono` — UI and code label fonts
- `--ease-space-*` — spacing scale from 1 to 10

## Usage

```html
<link rel="stylesheet" href="easemotion.css">
<link rel="stylesheet" href="style.css">
```

```css
.anim-ease {
  animation: slide-right 300ms ease infinite alternate;
}
```

## Animation Reference

| Name         | Value                                | Feel                        |
|-------------|--------------------------------------|-----------------------------|
| linear      | `linear`                             | Constant speed               |
| ease        | `ease`                               | Gentle start and end        |
| ease-in     | `ease-in`                            | Slow start, fast end        |
| ease-out    | `ease-out`                           | Fast start, slow end        |
| ease-in-out | `ease-in-out`                        | Slow start and end          |
| bounce      | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic overshoot           |
| back-in     | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Pre-overshoot            |
| back-out    | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Post-overshoot           |
| circ-in     | `cubic-bezier(0.6, -0.28, 0.735, 0.045)` | Circular start           |
| expo-out    | `cubic-bezier(0.23, 1, 0.32, 1)`    | Rapid deceleration          |
