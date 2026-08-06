# Fade-In Navbar

A clean, professional, pure CSS navigation bar for SaaS landing pages. The navbar and its contents softly fade and slide into view on page load, with elegant underline hover effects on the links — all built with semantic HTML5 and zero JavaScript.

## Overview

This component provides a minimal, production-ready sticky navbar suited to modern SaaS marketing sites. On load, the navbar shell, logo, and nav/CTA group fade in with a subtle staggered timing using CSS `@keyframes`. All interactive states (hover, focus, active) rely on `transform` and `opacity` for smooth, GPU-friendly performance.

## Features

- **Smooth fade-in on load** — the navbar shell, logo, and nav group each fade + slide in with a light stagger, using pure CSS keyframes (no JS load listeners needed).
- **Elegant hover transitions** — nav links get an animated underline sweep; the CTA lifts and deepens its shadow on hover/focus.
- **Sticky navbar** — pinned to the top of the viewport with a frosted-glass background and soft shadow.
- **CSS-only mobile menu** — hamburger toggle implemented with the checkbox hack; no JavaScript required.
- **Fully responsive** — desktop, tablet, and mobile breakpoints, including a collapsible off-canvas mobile panel.
- **Accessible** — respects `prefers-reduced-motion`, keeps the toggle checkbox keyboard-focusable, and uses semantic landmarks.
- **Themeable** — every color, spacing value, radius, shadow, and animation duration is a CSS custom property.

## Folder Structure

```
submissions/examples/fade-in-navbar/
├── demo.html   # Semantic HTML5 markup + full demo landing page
├── style.css   # Component styles (navbar) + demo page styles
└── README.md   # This file
```

## Usage

1. Copy `style.css` into your project (or copy just the navbar-related rules — sections 1–8 in the file; section 9 is demo-only scaffolding for the hero/section/footer).
2. Copy the navbar markup from `demo.html` (the `<header class="em-navbar">` block) into your page.
3. Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

4. Update the logo text and nav links to match your product. Mark the current page's link with `em-navbar__link--active` and `aria-current="page"`.

```html
<a href="#top" class="em-navbar__link em-navbar__link--active" aria-current="page">Home</a>
```

## CSS Custom Properties

All tokens live in `:root` at the top of `style.css`.

| Property | Purpose | Default |
|---|---|---|
| `--em-color-bg` | Page background | `#ffffff` |
| `--em-color-bg-alt` | Alternate section background | `#f7f8fa` |
| `--em-color-surface` | Navbar / panel surface color | `#ffffff` |
| `--em-color-border` | Hairline borders | `#e7e9ee` |
| `--em-color-text` | Primary text | `#14161c` |
| `--em-color-text-muted` | Secondary text / inactive links | `#63687a` |
| `--em-color-primary` | Brand accent (links, CTA, logo mark) | `#4c5bf5` |
| `--em-color-primary-dark` | CTA hover color | `#3a45d1` |
| `--em-color-accent` | Secondary brand accent (logo mark gradient) | `#16c79a` |
| `--em-shadow-sm` / `--em-shadow-md` | Ambient shadows | — |
| `--em-shadow-cta` / `--em-shadow-cta-hover` | CTA button shadow / hover shadow | — |
| `--em-space-xs` … `--em-space-xl` | Spacing scale | `0.5rem`–`3.5rem` |
| `--em-radius-sm` / `--em-radius-md` / `--em-radius-pill` | Border radii | `6px` / `10px` / `999px` |
| `--em-duration-fast` / `--em-duration-base` | Hover/transition speed | `0.2s` / `0.35s` |
| `--em-duration-fadein` | Length of the load-in fade/slide animation | `0.7s` |
| `--em-navbar-height` | Sticky navbar height (also used for mobile panel offset) | `72px` |
| `--em-max-width` | Content max-width | `1200px` |
| `--em-z-navbar` | Navbar stacking context | `100` |

## Responsive Design

| Breakpoint | Behavior |
|---|---|
| **Desktop** (`> 992px`) | Full horizontal nav, logo left, links + CTA right. |
| **Tablet** (`≤ 992px`) | Reduced horizontal spacing between links; layout stays horizontal. |
| **Mobile** (`≤ 768px`) | Hamburger icon appears; nav links collapse into a full-height off-canvas panel toggled by the hidden checkbox. Links stack vertically and the CTA becomes full width. |
| **Small mobile** (`≤ 480px`) | Tighter horizontal padding and slightly smaller logo type. |

The mobile menu uses the **checkbox hack**: a visually hidden (but still focusable) `<input type="checkbox">` is paired with a `<label>` styled as the hamburger button. The off-canvas nav panel's visibility is controlled entirely by the `:checked` sibling selector — no JavaScript involved.

## Accessibility (prefers-reduced-motion)

- Under `prefers-reduced-motion: reduce`, the load-in fade/slide animations on the navbar, logo, and nav group are disabled and their final state (`opacity: 1`, no transform) is applied immediately, so content is never hidden from a user who needs reduced motion.
- All hover/focus transitions (underline sweep, CTA lift, hamburger morph) are also shortened to near-zero under this media query.
- The mobile toggle checkbox is hidden using a clip/absolute-position technique (not the `hidden` attribute), so it remains reachable by keyboard and assistive technology.
- `aria-label` is provided on the logo link and the menu toggle; `aria-current="page"` marks the active nav link.
- Semantic landmarks are used throughout: `<header>` for the navbar, `<nav aria-label="Primary">` for navigation, `<main>` and `<footer>` for page structure.

## Browser Compatibility

Tested against current stable releases of:

- Chrome / Edge (Chromium)
- Firefox
- Safari (desktop + iOS)

Relies on widely-supported CSS: custom properties, `backdrop-filter` (with `-webkit-` prefix included, and a solid `rgba` fallback background on the same rule), CSS `@keyframes`, and the `:checked` sibling combinator.

## Customization Guide

- **Change the color theme**: edit `--em-color-primary`, `--em-color-primary-dark`, and `--em-color-accent`. Links, the CTA, and the logo mark gradient all derive from these values.
- **Adjust the fade-in timing**: change `--em-duration-fadein`, or edit the `0.1s` / `0.2s` animation-delay values on `.em-navbar__logo` and `.em-navbar__nav` to change the stagger between elements.
- **Disable the fade-in entirely**: remove the `animation` declaration from `.em-navbar`, `.em-navbar__logo`, and `.em-navbar__nav`, and set their `opacity`/`transform` to the final resting state — or use the `prefers-reduced-motion` block as a template.
- **Adjust navbar height**: change `--em-navbar-height` — the mobile off-canvas panel automatically offsets from this value.
- **Change the mobile breakpoint**: update the `max-width: 768px` media query condition to match your grid system.
- **Swap the hamburger style**: the icon is built from `.em-navbar__toggle-icon` and its pseudo-elements; restyle bar widths/spacing there, or replace with an inline SVG inside the `<label>`.