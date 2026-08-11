# Fade-In Pricing Table

A responsive, three-tier pricing table built with **pure CSS**, designed for creative portfolio layouts. Cards fade and slide up into view on load with a staggered delay, and lift gently on hover/focus. No JavaScript required.

## Preview

- Three pricing tiers (Free, Creator, Studio) with the middle tier visually featured
- Staggered fade-up entrance animation per card
- Soft hover/focus lift with accent-colored glow
- Fully responsive: 3 columns → 1 column on smaller screens
- Full keyboard focus support and `prefers-reduced-motion` support

## Files

| File         | Purpose                                                  |
|--------------|-----------------------------------------------------------|
| `demo.html`  | Markup for the pricing section, wired to EaseMotion CDN   |
| `style.css`  | All component styling and animations                      |
| `README.md`  | This file                                                  |

## CSS custom properties

Defined on `:root` in `style.css`, so the whole component can be re-themed by overriding these values:

| Property                    | Purpose                                      |
|------------------------------|-----------------------------------------------|
| `--ease-fi-bg`               | Page background color                         |
| `--ease-fi-surface`          | Card background color                         |
| `--ease-fi-border`           | Default card border color                     |
| `--ease-fi-text`             | Primary text color                            |
| `--ease-fi-muted`            | Secondary/muted text color                    |
| `--ease-fi-accent`           | Accent color (bullets, featured card, CTA)    |
| `--ease-fi-radius`           | Card corner radius                            |
| `--ease-fi-duration-in`      | Duration of the entrance fade-up animation    |
| `--ease-fi-duration-hover`   | Duration of hover/focus transitions           |
| `--ease-fi-distance`         | Vertical distance the card travels on entrance |

Each card also accepts an inline `--ease-fi-delay` custom property (set via `style="--ease-fi-delay: 150ms;"` in `demo.html`) to stagger the entrance animation per card without any JavaScript.

## CSS techniques used

### 1. Staggered fade-up entrance
Each `.ease-fi-card` starts at `opacity: 0` and `translateY(var(--ease-fi-distance))`, then animates to its resting state via the `ease-fi-fade-up` keyframes. The stagger is achieved purely with per-card `animation-delay`, driven by the `--ease-fi-delay` custom property set inline on each card.

### 2. Hover/focus lift
On `:hover` and `:focus-within`, cards translate up slightly and gain a colored border and glow shadow, giving tactile feedback without any layout shift.

### 3. Featured card
The middle "Creator" plan is distinguished with a `Recommended` tag, an accent-colored border, and a subtle top-to-bottom gradient background — no extra markup complexity, just modifier classes.

### 4. Bullet list styling
Feature list items use a `::before` pseudo-element as a small circular bullet instead of default list markers, colored with the accent variable.

## Accessibility

- Interactive elements are real, focusable `<a role="button">` elements with visible `:focus-visible` outlines.
- Hover-only effects (lift, glow) are mirrored on `:focus-within` / `:focus-visible` so keyboard users get identical feedback.
- All animations are wrapped in a `@media (prefers-reduced-motion: reduce)` query, which disables the entrance animation and hover transforms and snaps cards straight to their final, visible state.
- Semantic structure: `<main>`, `<header>`, `<section aria-label="Pricing plans">`, and `<article>` per card.

## Usage

1. Include the EaseMotion CDN stylesheet.
2. Include this component's `style.css` after it.
3. Copy the markup structure from `demo.html`, adjusting tier names, prices, and features as needed.
4. To change the stagger timing, adjust the inline `--ease-fi-delay` value on each `.ease-fi-card`.

No build step, no JavaScript, no external dependencies beyond the EaseMotion base stylesheet.

## Naming convention

Follows the project's `ease-*` prefix convention for all classes and keyframes (`ease-fi-*`, `ease-fi-fade-up`).