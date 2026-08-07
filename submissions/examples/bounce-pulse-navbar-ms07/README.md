# Bounce-Pulse Navbar

A responsive, sticky navigation bar built with **pure CSS**. Nav links bounce up with a springy underline on hover/focus, the active link's underline pulses continuously, and the logo carries a small pulsing indicator dot. The mobile menu (burger → X, sliding panel, staggered link entrance) is powered entirely by the checkbox hack — no JavaScript anywhere.

## Preview

- Sticky, blurred-background navbar
- Bounce-easing hover state: links lift up and their underline springs in with an overshoot
- Persistently pulsing underline + logo dot to mark the active link and brand
- Mobile burger icon that morphs into an X and reveals a dropdown panel with staggered, bounced-in links
- Fully responsive: horizontal link row on desktop → collapsible panel below 720px
- Full keyboard focus support and `prefers-reduced-motion` support

## Files

| File         | Purpose                                                   |
|--------------|--------------------------------------------------------------|
| `demo.html`  | Markup for the navbar and a short filler page, wired to EaseMotion CDN |
| `style.css`  | All component styling and animations                          |
| `README.md`  | This file                                                      |

## How the mobile menu works (no JS)

A visually-hidden `<input type="checkbox" id="ease-bp-menu-toggle">` sits next to a `<label for="ease-bp-menu-toggle" class="ease-bp-nav__burger">` burger icon. Checking it (via click or keyboard) triggers two CSS-only effects through sibling combinators:

1. `.ease-bp-nav__toggle:checked ~ .ease-bp-nav__burger span` — rotates the three bars into an X.
2. `.ease-bp-nav__toggle:checked ~ .ease-bp-nav__links` — expands the link panel from `max-height: 0` to a fixed max height while fading and sliding it into place, and triggers a staggered per-link bounce-in animation.

## CSS custom properties

Defined on `:root` in `style.css`:

| Property                  | Purpose                                       |
|----------------------------|------------------------------------------------|
| `--ease-bp-bg`             | Page background color                           |
| `--ease-bp-surface`        | Mobile menu panel background color              |
| `--ease-bp-border`         | Border/divider color                            |
| `--ease-bp-text`           | Primary text color                              |
| `--ease-bp-muted`          | Secondary/muted text color                      |
| `--ease-bp-accent`         | Accent color (dot, underline, focus outline)    |
| `--ease-bp-nav-height`     | Fixed height of the navbar                      |
| `--ease-bp-duration`       | Base duration for hover/menu transitions        |
| `--ease-bp-easing`         | Shared spring/overshoot easing curve            |

## CSS techniques used

### 1. Bounce easing via cubic-bezier overshoot
`--ease-bp-easing: cubic-bezier(0.34, 1.56, 0.64, 1)` overshoots past `1` before settling, which is what gives the hover lift, underline reveal, and mobile link entrance their "bounce" feel — all without a single `@keyframes` bounce loop for the interactive states.

### 2. Animated underline reveal
Each link has a `::after` pseudo-element used as an underline bar, resting at `scaleX(0)`. On hover/focus it animates to `scaleX(1)` using the bounce easing, giving a springy "pop in" underline.

### 3. Pulsing active indicator
The active link's underline and the logo dot both use `@keyframes` that animate `opacity` / `box-shadow` in a slow, looping in-out cycle, drawing continuous but subtle attention without being distracting.

### 4. Checkbox-driven mobile panel
The mobile menu's open/close state, the burger-to-X icon morph, and the staggered link entrance are all driven by `:checked ~` sibling selectors on the hidden checkbox — see "How the mobile menu works" above.

### 5. Staggered list entrance
Each `<li>` link's `animation-delay` increases in 60ms steps (`nth-child(1)` through `nth-child(5)`), so links cascade into view one after another instead of all at once.

## Accessibility

- The burger toggle is a real, focusable `<input type="checkbox">` paired with a `<label>`, so it works with keyboard (Space/Enter) and receives a visible `:focus-visible` outline.
- All links are real `<a>` elements; hover-only effects are mirrored on `:focus-visible` so keyboard users get identical feedback.
- All animations and transitions are wrapped in `@media (prefers-reduced-motion: reduce)` queries, which disable the pulse/bounce animations and snap the mobile menu straight to its open/closed state without sliding or staggering.
- Semantic structure: `<nav>`, `<ul>`/`<li>` for the link list, and a labelled burger toggle.

## Usage

1. Include the EaseMotion CDN stylesheet, then this component's `style.css`.
2. Copy the `<nav class="ease-bp-nav">` block from `demo.html`, adjusting logo text and links.
3. Add or remove `<li>` items in `.ease-bp-nav__links` as needed — the mobile stagger delays are keyed to `nth-child`, so add more delay rules if you have more than 5 links.

No build step, no JavaScript, no external dependencies beyond the EaseMotion base stylesheet.

## Naming convention

Follows the project's `ease-*` prefix convention for all classes and keyframes (`ease-bp-*`, `ease-bp-pulse-dot`, `ease-bp-underline-pulse`, `ease-bp-item-bounce-in`).