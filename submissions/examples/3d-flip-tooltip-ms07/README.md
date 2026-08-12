# 3D-Flip Tooltip

A pure CSS tooltip for fintech dashboard stat labels, where the tooltip bubble flips open like a hinged flap using a 3D `rotateX` transform, anchored above a small "i" info icon. No JavaScript required.

## Preview

- Three dashboard stat cards (Available Balance, Pending Transfers, Credit Score Impact), each with an info icon
- Hovering or focusing the icon flips its tooltip bubble open from `rotateX(-90deg)` to `rotateX(0deg)`, hinged at the bottom edge
- A small triangular pointer connects the bubble to its icon
- Fully responsive: bubble width narrows slightly on very small screens, and the stat grid collapses to a single column on mobile
- Full keyboard focus support and `prefers-reduced-motion` support

## Files

| File         | Purpose                                                  |
|--------------|-----------------------------------------------------------|
| `demo.html`  | Markup for the stat cards and tooltips, wired to EaseMotion CDN |
| `style.css`  | All component styling and animations                      |
| `README.md`  | This file                                                  |

## CSS custom properties

Defined on `:root` in `style.css`:

| Property                     | Purpose                                       |
|--------------------------------|--------------------------------------------------|
| `--ease-ft-bg`                  | Page and bubble background color                  |
| `--ease-ft-surface`             | Stat card background color                        |
| `--ease-ft-border`              | Border color for cards and the tooltip bubble      |
| `--ease-ft-text`                | Primary text color                                 |
| `--ease-ft-muted`               | Secondary/muted text color, default icon fill      |
| `--ease-ft-accent`              | Icon fill color on hover/focus                     |
| `--ease-ft-radius`              | Stat card corner radius                            |
| `--ease-ft-flip-duration`       | Duration of the flip-open/close transition         |
| `--ease-ft-easing`              | Easing curve for the flip                          |

## CSS techniques used

### 1. 3D hinge flip with `rotateX`
`.ease-ft-tip__bubble` starts at `rotateX(-90deg)` with `transform-origin: bottom center`, so it's rotated flat and invisible-edge-on relative to the viewer, hinged at its bottom edge (right where it meets the icon). On hover/focus it animates to `rotateX(0deg)`, swinging open like a flap. `perspective: 600px` on the parent `.ease-ft-tip` gives the rotation real depth instead of looking like a flat scale.

### 2. Visibility handled alongside the flip
The bubble also transitions `opacity` and `visibility` in tandem with the transform, with `visibility` delayed by `var(--ease-ft-flip-duration)` on close so it's removed from hit-testing and the accessibility tree only once fully hidden, and made visible immediately on open.

### 3. Keyboard accessibility via `:focus-within`
Because the info icon is a plain `<span>` inside a focusable `.ease-ft-tip` (`tabindex="0"`), the bubble reveal is triggered by `:hover`, `:focus-visible`, and `:focus-within` together, so tabbing to the tooltip trigger reveals it exactly like hovering does.

### 4. CSS-only pointer triangle
`.ease-ft-tip__bubble::after` uses `clip-path: polygon()` on a small square to form a triangular pointer, styled with matching border colors so it visually connects the bubble to its icon without an image or extra markup.

## Accessibility

- Each tooltip bubble uses `role="tooltip"`, and its trigger container is a focusable element, so keyboard users can reach and reveal every tooltip via Tab.
- The reveal is available on `:hover`, `:focus-visible`, and `:focus-within`, covering both mouse and keyboard interaction paths.
- All animation is wrapped in a `@media (prefers-reduced-motion: reduce)` query, which removes the 3D flip and simply crossfades the bubble's opacity instead.

## Usage

1. Include the EaseMotion CDN stylesheet, then this component's `style.css`.
2. Copy an `.ease-ft-tip` block from `demo.html` next to any label that needs a tooltip, replacing the bubble's text content.
3. Adjust the bubble's `width` in `style.css` if your tooltip copy is longer or shorter than the default.

No build step, no JavaScript, no external dependencies beyond the EaseMotion base stylesheet.

## Naming convention

Follows the project's `ease-*` prefix convention for all classes (`ease-ft-*`).