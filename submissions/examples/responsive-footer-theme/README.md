# Responsive Footer with Dark & Light Theme Support

Resolves: #35098

## Overview

Adds a reusable, fully responsive footer component for EaseMotion CSS that
automatically adapts to Light and Dark themes using CSS custom properties.
The footer is designed to be dropped into any page layout and includes
branding, quick navigation, resource links, a newsletter form, and a bottom
copyright bar.

## Features

- **Theme-aware** — all colors are driven by CSS variables scoped to
  `body[data-theme="dark"]` and `body[data-theme="light"]`. No hardcoded
  colors anywhere in the component.
- **Fully responsive** — 4-column grid on desktop, collapses to 2 columns
  on tablet (≤900px) and a single stacked column on mobile (≤560px).
- **Accessible**
  - Semantic `<footer>` and `<nav aria-label="...">` landmarks.
  - Visible `:focus-visible` outlines on every interactive element
    (links, buttons, inputs).
  - Icon-only social links include `aria-label`s.
  - Newsletter input has an associated (visually hidden) `<label>`.
- **No layout shift** — footer sits at the bottom of a flex column layout
  (`margin-top: auto`) so it never jumps as content loads.
- **Interactive states** — hover and focus states on nav links (color +
  slide-in), social icons (lift + color), and the subscribe button.

## Sections Included

1. Project logo/name + short description + social links
2. Quick Navigation (Buttons, Cards, Animations, Layout, Docs)
3. Resources (GitHub Repository, Documentation, Contributing Guide, Report an Issue)
4. Newsletter subscribe form
5. Bottom bar with dynamic copyright year and credit line

## How to Use

1. Include `style.css` in your page (or merge the `.site-footer` rules into
   your global stylesheet).
2. Copy the `<footer class="site-footer">...</footer>` markup from
   `demo.html` into your global layout/template so it renders on every page.
3. Set `data-theme="dark"` or `data-theme="light"` on `<body>` (or wire it
   up to your existing theme toggle/store) — the footer picks up the correct
   palette automatically.

## Files

- `demo.html` — standalone demo page with a working theme toggle button so
  reviewers can see both themes without editing anything.
- `style.css` — all footer styles, theme variables, and responsive
  breakpoints.
- `README.md` — this file.

## Testing Notes

- Verified at 1440px, 768px, and 375px widths.
- Verified keyboard-only navigation: all links, the theme toggle, and the
  form input/button are reachable via `Tab` and show a visible focus ring.
- Verified in both `data-theme="dark"` and `data-theme="light"` states.