# ease-badge-count-pop

A notification badge component that **pops with a scale animation whenever its count updates**. Includes a secondary hover pulse trigger, full CSS-variable theming, light/dark mode, and responsive sizing.

## Features

- 🎯 Smooth CSS keyframe "pop" animation on count update
- 🖱️ Interactive triggers: click (Add/Reset) and hover pulse
- 🎨 Fully customizable via CSS custom properties
- 🌗 Light/dark mode support via `[data-theme]`
- 📱 Responsive sizing on smaller screens
- ♿ Accessible: `aria-live="polite"` announces count changes, visible focus states on controls
- 🧠 Respects `prefers-reduced-motion`

## Usage

```html
<div class="ease-badge-wrapper">
  <svg class="ease-badge-icon">...</svg>
  <span class="ease-badge-count" id="easeBadgeCount">0</span>
</div>
```

To trigger the pop animation on update (e.g. after changing the count via JS):

```js
countEl.classList.remove('ease-badge-pop');
void countEl.offsetWidth; // force reflow
countEl.classList.add('ease-badge-pop');
```

The animation itself is 100% CSS — the class toggle above simply replays it.

## CSS Variables

| Variable                     | Default   | Description                          |
|-------------------------------|-----------|---------------------------------------|
| `--ease-badge-bg`              | `#ef4444` | Badge background color                |
| `--ease-badge-text`            | `#ffffff` | Badge text color                      |
| `--ease-badge-icon-bg`         | `#f1f5f9` | Icon circle background                |
| `--ease-badge-icon-color`      | `#1e293b` | Icon color                            |
| `--ease-badge-size`            | `1.5rem`  | Badge diameter                        |
| `--ease-badge-font-size`       | `0.75rem` | Badge count font size                 |
| `--ease-badge-pop-scale`       | `1.35`    | Peak scale during the pop animation   |
| `--ease-badge-duration`        | `0.35s`   | Pop animation duration                |
| `--ease-badge-easing`          | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Animation easing |
| `--ease-badge-icon-diameter`   | `3.5rem`  | Icon circle diameter                  |
| `--ease-badge-gap`             | `2rem`    | Gap between icon and controls in demo |

## Accessibility

- The count uses `aria-live="polite"` so screen readers announce updates.
- All interactive buttons have visible `:focus-visible` outlines.
- Animation is disabled entirely under `prefers-reduced-motion: reduce`.

## Browser Support

Works in all modern browsers supporting CSS custom properties and `@keyframes` (Chrome, Firefox, Safari, Edge).