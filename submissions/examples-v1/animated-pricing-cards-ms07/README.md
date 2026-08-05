# Animated Pricing Cards

A fully responsive, three-tier pricing section built with **pure CSS** — animated gradient borders, hover-lift cards, staggered checkmark-draw animations, and a pulsing "most popular" badge. No JavaScript required.

## Preview

- Three pricing tiers (Starter, Pro, Enterprise) with the middle tier visually featured
- Animated conic/linear gradient border that reveals on hover and stays active on the featured card
- Hover lift with soft glow shadow
- Checkmarks that "draw" in with a staggered delay per list item
- Pulsing badge animation on the featured plan
- Full keyboard focus states and `prefers-reduced-motion` support

## Files

| File         | Purpose                                          |
|--------------|---------------------------------------------------|
| `demo.html`  | Markup for the pricing section, wired to EaseMotion CDN |
| `style.css`  | All component styling and animations               |
| `README.md`  | This file                                          |

## CSS techniques used

### 1. Masked gradient border
The animated border uses a pseudo-element (`::before`) with `padding` equal to the border thickness, a large animated gradient background, and a `mask-composite: exclude` (with the `-webkit-mask-composite: xor` fallback) to punch out the center. This paints only the ring, not the whole card, without needing an extra wrapper element.

### 2. Gradient flow animation
`background-size: 300% 300%` combined with an `animation` that shifts `background-position` creates a smooth, looping color flow around the border.

### 3. Checkmark draw-in
Each checkmark is a small rotated border (`::after` pseudo-element) that animates from `scale(0)` to `scale(1)` with `opacity`, staggered per list item using a `--ease-check-delay` custom property multiplied inside the `animation-delay`.

### 4. Hover lift + glow
Cards use `transform: translateY(-8px)` plus a soft `box-shadow` on `:hover` and `:focus-within`, so the effect works for both mouse and keyboard users.

### 5. Featured card treatment
The Pro tier is visually emphasized with a persistent gradient border, a `scale(1.03)` transform, and a pulsing badge (`ease-badge-pulse` keyframes animating `box-shadow`).

## Accessibility

- All interactive elements are real, focusable `<a role="button">` elements with visible `:focus-visible` outlines.
- Hover-only effects are mirrored on `:focus-within` / `:focus-visible` so keyboard users get the same feedback.
- Every animation is wrapped in a `@media (prefers-reduced-motion: reduce)` query that disables transforms/animations and snaps checkmarks straight to their end state.
- Semantic structure: `<main>`, `<header>`, `<section aria-label="Pricing plans">`, and `<article>` per card.

## Usage

Include the EaseMotion CDN stylesheet, then this component's `style.css`, then drop in the markup from `demo.html`. No build step, no JS.

## Naming convention

Follows the project's `ease-*` prefix convention for all classes and keyframes (`ease-pricing-*`, `ease-check-*`, `ease-gradient-flow`, `ease-badge-pulse`, `ease-check-draw`).