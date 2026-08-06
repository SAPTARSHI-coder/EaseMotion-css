# Bounce-Pulse Feature Grid

A responsive feature highlight grid for fintech dashboard landing pages, built with **pure CSS**. Each card's icon bounces and its surrounding ring pulses outward on hover or focus. No JavaScript required.

## Preview

- Four feature cards (Instant Payments, Real-Time Insights, Bank-Grade Security, Multi-Currency Wallets)
- On hover/focus, the icon plays a springy bounce, and the ring around it emits a fading pulse
- Card lifts slightly with an accent-colored glow shadow on hover/focus
- Fully responsive: 1 column on mobile, 2 on tablet, 4 on desktop
- Full keyboard focus support and `prefers-reduced-motion` support

## Files

| File         | Purpose                                                  |
|--------------|-----------------------------------------------------------|
| `demo.html`  | Markup for the feature grid, wired to EaseMotion CDN        |
| `style.css`  | All component styling and animations                      |
| `README.md`  | This file                                                  |

## CSS custom properties

Defined on `:root` in `style.css`:

| Property                      | Purpose                                       |
|--------------------------------|--------------------------------------------------|
| `--ease-bg-bg`                  | Page background color                            |
| `--ease-bg-surface`             | Card background color                            |
| `--ease-bg-border`              | Default card border color                        |
| `--ease-bg-text`                | Primary text color                               |
| `--ease-bg-muted`               | Secondary/muted text color                       |
| `--ease-bg-accent`              | Accent color (icon ring, pulse, hover glow)      |
| `--ease-bg-radius`              | Card corner radius                               |
| `--ease-bg-bounce-duration`     | Duration of the icon bounce animation            |
| `--ease-bg-hover-duration`      | Duration of the card lift/shadow transition      |
| `--ease-bg-easing`              | Bouncy overshoot easing curve for the icon       |

## CSS techniques used

### 1. Springy icon bounce
The icon plays the `ease-bg-bounce` keyframes on hover/focus, moving through several `translateY`/`scale` states rather than a single up-down motion, combined with a `cubic-bezier(0.34, 1.56, 0.64, 1)` overshoot easing so the motion feels elastic rather than mechanical.

### 2. Expanding pulse ring
`.ease-bg-card__icon-ring::before` is an absolutely positioned circular border that, on hover/focus, loops the `ease-bg-pulse-ring` keyframes: scaling up from `1` to `1.5` while fading `opacity` to `0`, on an infinite `ease-out` loop — a classic "sonar ping" effect built with a single pseudo-element.

### 3. Hover lift
Cards translate up slightly and gain a colored `box-shadow` on `:hover` and `:focus-within`, giving consistent feedback to both mouse and keyboard users.

## Accessibility

- Icons are marked `aria-hidden="true"` since they're decorative; the feature title and description carry the actual content.
- Hover-only effects (bounce, pulse, lift) are mirrored on `:focus-within` so keyboard users tabbing through the grid get the same feedback as mouse users.
- All animations are wrapped in a `@media (prefers-reduced-motion: reduce)` query, which disables the bounce and pulse-ring animations and the card lift transform, while keeping the border/shadow feedback on interaction.

## Usage

1. Include the EaseMotion CDN stylesheet, then this component's `style.css`.
2. Copy an `.ease-bg-card` block from `demo.html` per feature, swapping the icon, title, and description.

No build step, no JavaScript, no external dependencies beyond the EaseMotion base stylesheet.

## Naming convention

Follows the project's `ease-*` prefix convention for all classes and keyframes (`ease-bg-*`, `ease-bg-bounce`, `ease-bg-pulse-ring`).