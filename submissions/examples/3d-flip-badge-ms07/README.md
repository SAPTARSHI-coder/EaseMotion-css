# 3D-Flip Badge

A pure CSS achievement badge grid for a gaming hub, where each badge flips in 3D on hover or focus to reveal stats on the back. No JavaScript required.

## Preview

- Four achievement badges (Champion, Sharpshooter, Duelist, Legend), each with a distinct accent color
- Smooth 3D flip on hover/focus using `perspective`, `transform-style: preserve-3d`, and `backface-visibility: hidden`
- Front face shows an icon and badge name; back face shows a stat and rank
- Fully responsive: 4 columns on desktop, 2 on tablet, 1 on mobile
- Full keyboard focus support and `prefers-reduced-motion` support

## Files

| File         | Purpose                                                  |
|--------------|-----------------------------------------------------------|
| `demo.html`  | Markup for the badge grid, wired to EaseMotion CDN         |
| `style.css`  | All component styling and animations                      |
| `README.md`  | This file                                                  |

## CSS custom properties

Defined on `:root` in `style.css`:

| Property                    | Purpose                                      |
|-------------------------------|------------------------------------------------|
| `--ease-fb-bg`                 | Page background color                           |
| `--ease-fb-surface`            | Badge face background color                     |
| `--ease-fb-border`             | Badge face border color                         |
| `--ease-fb-text`               | Primary text color                              |
| `--ease-fb-muted`              | Secondary/muted text color                      |
| `--ease-fb-gold`               | Accent color for the Champion badge             |
| `--ease-fb-silver`             | Accent color for the Sharpshooter badge         |
| `--ease-fb-bronze`             | Accent color for the Duelist badge              |
| `--ease-fb-platinum`           | Accent color for the Legend badge               |
| `--ease-fb-radius`             | Badge corner radius                             |
| `--ease-fb-flip-duration`      | Duration of the flip animation                  |
| `--ease-fb-easing`             | Easing curve for the flip                       |

## CSS techniques used

### 1. 3D flip with `perspective` and `preserve-3d`
`.ease-fb-badge` establishes a `perspective` context, `.ease-fb-badge__inner` holds both faces with `transform-style: preserve-3d`, and hovering or focusing rotates that inner wrapper `rotateY(180deg)`.

### 2. Hidden back faces
Both `.ease-fb-badge__face` elements are absolutely positioned on top of one another. `backface-visibility: hidden` ensures only the face currently pointed toward the viewer is rendered, and the back face starts pre-rotated `rotateY(180deg)` so it lands right-side up once the flip completes.

### 3. Keyboard-accessible trigger
The flip triggers on `:hover` and `:focus-visible` on the badge container itself (`tabindex="0"`), so keyboard users tabbing through the grid see the same flip as mouse users.

## Accessibility

- Each badge is a focusable element (`tabindex="0"`) with a visible `:focus-visible` outline, so the flip can be triggered without a mouse.
- All flip animation is wrapped in a `@media (prefers-reduced-motion: reduce)` query. In that mode, the 3D rotation is disabled entirely and the back face is instead revealed with a simple opacity crossfade, so the information is still accessible without motion.
- Icons are marked `aria-hidden="true"` since they are decorative; the badge name and back-face stats carry the actual content.

## Usage

1. Include the EaseMotion CDN stylesheet, then this component's `style.css`.
2. Copy an `.ease-fb-badge` block from `demo.html` per achievement, swapping the icon, name, accent modifier class (`--gold`, `--silver`, `--bronze`, `--platinum`, or add your own), and back-face stats.

No build step, no JavaScript, no external dependencies beyond the EaseMotion base stylesheet.

## Naming convention

Follows the project's `ease-*` prefix convention for all classes (`ease-fb-*`).