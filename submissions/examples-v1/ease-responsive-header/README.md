# ease-responsive-header

A header that stays clean at every screen size: full desktop navigation above the breakpoint, collapsing into an animated hamburger-triggered drawer menu below it — with the logo always staying visible and aligned, and touch targets sized for mobile.

## Features

- 📱 Collapses desktop nav into a slide-in drawer below 768px (configurable)
- 🍔 Animated hamburger ↔ X icon transition
- 🎬 Smooth drawer slide-in/out with backdrop fade
- 👆 44px minimum touch targets on all interactive mobile elements
- 🎨 Fully customizable via CSS custom properties
- 🌗 Light/dark mode support via `[data-theme]`
- ♿ Accessible: `aria-expanded` on the toggle, `aria-controls` linking it to the drawer, `aria-hidden` on the drawer reflecting open state, `Esc` closes the drawer and returns focus to the toggle, backdrop click closes it, drawer auto-closes if the viewport is resized back to desktop
- 🧠 Respects `prefers-reduced-motion`

## Usage

```html
<header class="ease-header">
  <a class="ease-header__logo" href="#">Logo</a>

  <nav class="ease-header__nav" aria-label="Primary">
    <ul class="ease-header__nav-list">
      <li><a class="ease-header__nav-link" href="#">Features</a></li>
    </ul>
    <a class="ease-header__cta" href="#">Get Started</a>
  </nav>

  <button class="ease-header__toggle" aria-expanded="false" aria-controls="myDrawer" aria-label="Toggle navigation menu">
    <span class="ease-header__toggle-bar"></span>
    <span class="ease-header__toggle-bar"></span>
    <span class="ease-header__toggle-bar"></span>
  </button>
</header>

<div class="ease-header__drawer-backdrop"></div>

<nav class="ease-header__drawer" id="myDrawer" aria-label="Mobile" aria-hidden="true">
  <ul class="ease-header__drawer-list">
    <li><a class="ease-header__drawer-link" href="#">Features</a></li>
  </ul>
  <a class="ease-header__drawer-cta" href="#">Get Started</a>
</nav>
```

Toggle `.is-open` on both `.ease-header__drawer` and `.ease-header__drawer-backdrop`, and keep `aria-expanded`/`aria-hidden` in sync — see `demo.html` for the full working script (open/close, Esc to close, backdrop click, auto-close on resize).

## CSS Variables

| Variable                      | Default    | Description                          |
|---------------------------------|------------|-----------------------------------------|
| `--ease-header-bg`               | `#ffffff`  | Header background                      |
| `--ease-header-border`           | `#e2e8f0`  | Header bottom border / hover backgrounds |
| `--ease-header-text`             | `#0f172a`  | Primary text / logo color              |
| `--ease-header-muted`            | `#64748b`  | Desktop nav link color                 |
| `--ease-header-accent`           | `#6366f1`  | CTA button / focus outline color       |
| `--ease-header-height`           | `4.25rem`  | Header height                          |
| `--ease-header-drawer-bg`        | `#ffffff`  | Mobile drawer background               |
| `--ease-header-duration`         | `0.3s`     | Transition duration (drawer, hamburger, hover) |
| `--ease-header-easing`           | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing |
| `--ease-header-breakpoint`       | `768px`    | Reference value; the actual breakpoint is set in the `@media` query |
| `--ease-header-touch-target`     | `44px`     | Minimum touch target size for toggle/links |

> Note: `--ease-header-breakpoint` is provided for reference/documentation; to actually change the collapse breakpoint, update the `@media (max-width: 768px)` value in `style.css`, since CSS custom properties cannot be used inside media query conditions.

## Accessibility

- The hamburger toggle uses `aria-expanded` (reflecting open/closed state) and `aria-controls` pointing to the drawer's `id`.
- The drawer's `aria-hidden` attribute is kept in sync with its visible state.
- Pressing `Esc` closes the drawer and returns focus to the toggle button, preserving keyboard flow.
- Clicking the backdrop also closes the drawer.
- All interactive touch targets meet a 44px minimum height/width.
- All animations are disabled under `prefers-reduced-motion: reduce`.

## Browser Support

Works in all modern browsers supporting CSS custom properties, flexbox, and CSS transitions (Chrome, Firefox, Safari, Edge).