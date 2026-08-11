# Float-Drift Card Grid

A responsive portfolio project grid built with **pure CSS**. Cards drift gently up and down at rest, each on its own offset timing, then pause and lift further on hover or focus. No JavaScript required.

## Preview

- Responsive grid: 1 column on mobile, 2 on tablet, 4 on desktop
- Each card continuously drifts a few pixels up and down in a slow, staggered loop
- On hover/focus, the drift pauses and the card lifts higher with a soft accent-colored glow
- Gradient thumbnail placeholders, easy to swap for real images
- Full keyboard focus support and `prefers-reduced-motion` support

## Files

| File         | Purpose                                                  |
|--------------|-----------------------------------------------------------|
| `demo.html`  | Markup for the project grid, wired to EaseMotion CDN       |
| `style.css`  | All component styling and animations                      |
| `README.md`  | This file                                                  |

## CSS custom properties

Defined on `:root` in `style.css`:

| Property                      | Purpose                                       |
|--------------------------------|--------------------------------------------------|
| `--ease-fd-bg`                 | Page background color                            |
| `--ease-fd-surface`            | Card background color                            |
| `--ease-fd-border`             | Default card border color                        |
| `--ease-fd-text`               | Primary text color                               |
| `--ease-fd-muted`              | Secondary/muted text color                       |
| `--ease-fd-accent`             | Accent color (links, hover glow, focus outline)  |
| `--ease-fd-radius`             | Card corner radius                               |
| `--ease-fd-drift-distance`     | How far each card drifts vertically at rest      |
| `--ease-fd-drift-duration`     | Duration of one full drift cycle                 |
| `--ease-fd-hover-duration`     | Duration of the hover/focus transition           |

Each card also accepts an inline `--ease-fd-delay` custom property (set via `style="--ease-fd-delay: 0.6s;"` in `demo.html`) so cards drift out of sync with one another rather than moving in lockstep.

## CSS techniques used

### 1. Ambient drift loop
`.ease-fd-card` runs the `ease-fd-drift` keyframes on an infinite loop, moving `transform: translateY()` between `0` and a small negative offset (`--ease-fd-drift-distance`) using `ease-in-out` timing for a smooth, organic float rather than a linear bob.

### 2. Per-card timing offsets
Each card sets its own `--ease-fd-delay` inline, feeding into `animation-delay`. Because all cards share the same `animation-duration`, this staggers them into different phases of the loop without needing separate keyframes per card.

### 3. Pause-and-lift on interaction
`animation-play-state: paused` freezes the ambient drift the moment a card is hovered or focused, while a `transform` transition takes over to lift the card further — avoiding any conflict between the looping keyframe animation and the interactive state.

### 4. Gradient thumbnails
Each thumbnail uses a two-color `linear-gradient` as a stand-in for real project imagery, keeping the demo self-contained with no external image requests.

## Accessibility

- Cards are wrapped in semantic `<article>` elements inside a `<section aria-label="Portfolio projects">`.
- The "View project" link is a real, focusable `<a>`, and hover-only effects (lift, glow, underline) are mirrored on `:focus-within` / the link's own focus state so keyboard users get identical feedback.
- All animation is wrapped in a `@media (prefers-reduced-motion: reduce)` query, which disables the ambient drift and hover lift entirely while keeping the border/glow feedback on interaction.

## Usage

1. Include the EaseMotion CDN stylesheet, then this component's `style.css`.
2. Copy a `.ease-fd-card` block from `demo.html` per project, swapping in a real thumbnail image or background if desired.
3. Stagger the ambient drift by giving each card a different inline `--ease-fd-delay` value.

No build step, no JavaScript, no external dependencies beyond the EaseMotion base stylesheet.

## Naming convention

Follows the project's `ease-*` prefix convention for all classes and keyframes (`ease-fd-*`, `ease-fd-drift`).