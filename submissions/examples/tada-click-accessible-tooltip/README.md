# Tada-Click Modal

Pure CSS modal that opens with a "tada" pop animation. No JavaScript.

## Usage

Copy `style.css` into your project and link it, then drop in the markup from `index.html`.

```html
<link rel="stylesheet" href="style.css">
```

## Customization

Override these custom properties on `.tada-modal` (or a parent) to change behavior:

| Property | Default | Description |
|---|---|---|
| `--tada-duration` | `0.6s` | Animation length |
| `--tada-easing` | `cubic-bezier(.36, .07, .19, 1.07)` | Timing function |
| `--tada-scale-max` | `1.1` | Peak overshoot scale |
| `--tada-scale-min` | `0.9` | Undershoot scale before settling |
| `--tada-overlay-bg` | `rgba(0, 0, 0, 0.55)` | Backdrop color |

## How it works

Checkbox hack. A hidden `<input type="checkbox">` is toggled by clicking the trigger `<label>`. CSS sibling combinators (`~`) show the overlay and run the keyframe animation when the checkbox is `:checked`. Clicking the backdrop or the close `<label>` (also bound to the same checkbox) closes it.

## Accessibility — read this before claiming "fully accessible" in your PR

- Trigger, close button, and backdrop are all keyboard-reachable and toggle via native checkbox behavior (Space/Enter). That part is solid.
- `prefers-reduced-motion` is respected — animation is skipped for users who've asked for it.
- **Escape key does not close the modal.** There is no CSS mechanism to bind a specific key. If you need Escape-to-close or a real focus trap, that requires JavaScript. Don't oversell this in the issue/PR description — say it's keyboard-operable, not that it fully matches WAI-ARIA modal dialog pattern requirements.
- `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` are included, but screen readers may still let users tab/read content behind the modal since there's no real focus containment without JS.

## Browser support

Requires `:has()`-free sibling selectors, CSS custom properties, and `:focus-visible` — works in all current evergreen browsers. No IE11 support, not that anyone should care in 2026.