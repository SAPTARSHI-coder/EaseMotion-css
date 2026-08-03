
# Glitch-Flicker Navbar

A production-ready, pure CSS navigation bar for futuristic SaaS landing pages. Features a subtle cyberpunk-style glitch effect on the logo and a recurring flicker on the active nav link — built with semantic HTML5 and zero JavaScript.

## Feature Overview

- **Glitch logo** — RGB-split glitch animation using `::before`/`::after` pseudo-elements and `clip-path`, no images or JS.
- **Flicker states** — logo and active link flicker on a loop to feel "alive," powered entirely by `@keyframes` opacity changes.
- **Hover animations** — animated underline sweep and CTA lift-on-hover using `transform`/`opacity` only (no layout thrashing).
- **Sticky navbar** — stays pinned to the top with a frosted-glass `backdrop-filter` background.
- **CSS-only hamburger menu** — mobile menu open/close driven entirely by the checkbox hack (`:checked` + sibling selectors), no JavaScript required.
- **Fully responsive** — desktop, tablet, and mobile breakpoints with an off-canvas mobile nav panel.
- **Accessible by default** — respects `prefers-reduced-motion`, keeps the toggle checkbox focusable (never uses `[hidden]`), and uses semantic landmarks (`header`, `nav`, `main`, `footer`).
- **Themeable** — every color, spacing value, radius, glow, and animation duration is a CSS custom property.

## Folder Structure

```
submissions/examples/glitch-flicker-navbar/
├── demo.html   # Semantic HTML5 markup + full demo landing page
├── style.css   # Component styles (navbar) + demo page styles
└── README.md   # This file
```

## Usage

1. Copy `style.css` into your project (or copy just the navbar-related rules — sections 1–8 are marked in the file; section 9 is demo-only scaffolding).
2. Copy the navbar markup from `demo.html` (the `<header class="em-navbar">` block) into your page.
3. Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

4. Update the logo text, `data-text` attribute (must match the visible text — it powers the glitch layers), and nav links to match your product.

```html
<span class="em-navbar__logo-text" data-text="YourBrand">YourBrand</span>
```

5. Mark whichever link represents the current page with `em-navbar__link--active` and `aria-current="page"`.

## CSS Custom Properties

All tokens live in `:root` at the top of `style.css`.

| Property | Purpose | Default |
|---|---|---|
| `--em-color-bg` | Page/navbar background | `#0a0e17` |
| `--em-color-surface` | Subtle panel fill | `rgba(255,255,255,0.03)` |
| `--em-color-border` | Hairline borders | `rgba(255,255,255,0.08)` |
| `--em-color-text` | Primary text | `#e6ecf5` |
| `--em-color-text-muted` | Secondary text / inactive links | `#8892a6` |
| `--em-color-primary` | Cyan accent (logo, active link, glow) | `#00f0ff` |
| `--em-color-secondary` | Magenta accent (glitch layer) | `#ff2ec4` |
| `--em-color-accent` | Purple accent (CTA gradient) | `#7c5cff` |
| `--em-glow-primary` / `--em-glow-secondary` / `--em-glow-soft` | Text/box glow shadows | — |
| `--em-space-xs` … `--em-space-xl` | Spacing scale | `0.5rem`–`3.5rem` |
| `--em-radius-sm` / `--em-radius-md` / `--em-radius-pill` | Border radii | `6px` / `10px` / `999px` |
| `--em-duration-fast` / `--em-duration-base` | Hover/transition speed | `0.2s` / `0.4s` |
| `--em-duration-glitch` / `--em-duration-flicker` | Loop length of glitch/flicker keyframes | `2.8s` / `3.6s` |
| `--em-navbar-height` | Sticky navbar height (also used for mobile panel offset) | `72px` |
| `--em-max-width` | Content max-width | `1200px` |
| `--em-z-navbar` | Navbar stacking context | `100` |

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **Desktop** (`> 992px`) | Full horizontal nav, logo left, links + CTA right. |
| **Tablet** (`≤ 992px`) | Reduced horizontal spacing between links; layout stays horizontal. |
| **Mobile** (`≤ 768px`) | Hamburger icon appears; nav links collapse into a full-height off-canvas panel toggled by the hidden checkbox. Links stack vertically and the CTA becomes full width. |
| **Small mobile** (`≤ 480px`) | Tighter horizontal padding and slightly smaller logo type. |

The mobile menu is implemented with the **checkbox hack**: an `<input type="checkbox">` is visually hidden (via clipping, not `[hidden]`, so it stays keyboard-focusable) and paired with a `<label>` acting as the hamburger button. The nav panel's visibility is controlled purely with the `:checked` sibling selector — no JavaScript involved.

## Accessibility

- **`prefers-reduced-motion: reduce`** — all glitch, flicker, hover-lift, and menu-slide animations/transitions are disabled and glitch pseudo-elements are hidden outright, leaving a clean static navbar.
- The toggle checkbox is hidden using a clip/absolute-position technique (not the `hidden` attribute), so it remains reachable by keyboard and assistive tech.
- `aria-label` is provided on the logo link and the menu toggle; `aria-current="page"` marks the active link.
- Focus states use `:focus-visible` with a visible outline on the toggle and default browser focus styling on links (not suppressed).
- Semantic landmarks: `<header>` for the navbar, `<nav aria-label="Primary">` for navigation, `<main>` and `<footer>` for page structure.

## Browser Compatibility

Tested against current stable releases of:

- Chrome / Edge (Chromium)
- Firefox
- Safari (desktop + iOS)

Relies on widely-supported CSS: `clip-path`, `backdrop-filter` (with `-webkit-` prefix included), CSS custom properties, and the `:checked` sibling combinator. `backdrop-filter` gracefully degrades to a solid `rgba` background in browsers without support, since the fallback color is set on the same rule.

## Customization Guide

- **Change the color theme**: edit `--em-color-primary`, `--em-color-secondary`, and `--em-color-accent`. The glitch layers, glows, and CTA gradient all derive from these three values.
- **Slow down / speed up the glitch**: adjust `--em-duration-glitch` (RGB-split logo glitch) and `--em-duration-flicker` (opacity flicker on logo + active link).
- **Disable the glitch entirely**: remove the `animation` declarations on `.em-navbar__logo-text`, `.em-navbar__logo-text::before/::after`, and `.em-navbar__link--active`, or simply rely on the built-in `prefers-reduced-motion` block as a template.
- **Adjust navbar height**: change `--em-navbar-height` — the mobile off-canvas panel automatically offsets from this value.
- **Change the mobile breakpoint**: update the `max-width: 768px` media query condition to match your grid system.
- **Swap the hamburger style**: the icon is three `<span>`-generated bars (`.em-navbar__toggle-icon` + pseudo-elements); restyle widths/spacing there, or replace with an inline SVG inside the `<label>`.