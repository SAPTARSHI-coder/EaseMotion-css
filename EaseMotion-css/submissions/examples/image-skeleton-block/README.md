# Aspect-Ratio Image Skeleton Block

## What does this do?

The `.ease-img-skeleton` component provides an animated skeleton placeholder designed specifically for image boxes.

It handles multiple responsive aspect ratios, runs a sliding shimmer gradient sweep, and features an integrated SVG image icon overlay indicator centered perfectly.

---

## How is it used?

Apply the `.ease-img-skeleton` utility to layout placeholders:

```html
<!-- Square aspect ratio image loading placeholder -->
<div class="ease-img-skeleton aspect-square"></div>

<!-- Video aspect ratio image loading placeholder -->
<div class="ease-img-skeleton aspect-video"></div>
```

---

## Configurable Variables

Customize themes and speeds using inline CSS Custom Properties:

```html
<div
  class="ease-img-skeleton aspect-video"
  style="--ease-sk-bg: #1e293b; --ease-sk-shimmer: #334155; --ease-sk-speed: 2s;"
></div>
```

| Property            | Default Value            | Description                                    |
| :------------------ | :----------------------- | :--------------------------------------------- |
| `--ease-sk-bg`      | `#2d3748` (Slate Dark)   | Base color of the skeleton placeholder.        |
| `--ease-sk-shimmer` | `#3f4e66` (Slate Middle) | Color sweep band indicating fetching action.   |
| `--ease-sk-icon`    | `#4a5568`                | Tint applied to the centered placeholder icon. |
| `--ease-sk-speed`   | `1.6s`                   | Full animation duration of the shimmer cycle.  |

---

## Modifiers

### Aspect Ratio Modifiers

- `.aspect-square`: `1 / 1` (Profile photos, thumbnail grids).
- `.aspect-video`: `16 / 9` (Video previews, hero backdrops).
- `.aspect-card`: `4 / 3` (Standard photography previews).
- `.aspect-portrait`: `3 / 4` (E-commerce lists, book/poster covers).

---

## Accessibility

Includes full compatibility for users with motion sensitivity. When `prefers-reduced-motion` is active:

- The sliding gradient sweep is turned off.
- The background falls back to a solid, static neutral color to prevent disorientation or nausea.
