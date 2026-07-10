# Tada-Click Modal

Pure CSS modal that opens with a "tada" pop animation. No JavaScript.

## What does this do?

Opens a modal dialog with a playful tada-style scale bounce when the user clicks the trigger — entirely via CSS checkbox hack, no JS.

## How is it used?

Copy `style.css` into your project and link it, then drop in the markup from `index.html`.

```html
<link rel="stylesheet" href="style.css">
```

## Why is it useful?

Modal entrances are a common UI pattern in EaseMotion CSS. This submission shows how a tada pop can be achieved with pure CSS custom properties, making duration and overshoot tunable without touching keyframes.

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

## Accessibility

- Trigger, close button, and backdrop are keyboard-reachable and toggle via native checkbox behavior (Space/Enter).
- `prefers-reduced-motion` is respected — animation is skipped for users who've asked for it.
- Escape key does not close the modal (requires JavaScript for that).
- `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` are included, but there is no real focus trap without JS.

## Browser support

Requires CSS custom properties and `:focus-visible` — works in all current evergreen browsers.
