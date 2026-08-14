# Neumorphic Pastel Navbar

A fully responsive, accessible navigation bar with a soft neumorphic (soft-UI) 
pastel aesthetic. Built with pure HTML/CSS — no JavaScript required. The mobile 
menu toggle uses the checkbox-hack technique.

## Features

- 🎨 Soft neumorphic shadows on a pastel lavender background
- 📱 Fully responsive with an animated burger-to-X toggle below 768px
- ⌨️ Keyboard accessible (`:focus-visible` states, `tabindex` on the burger label)
- 🎬 Respects `prefers-reduced-motion`
- 🧩 Zero JavaScript — mobile menu driven entirely by a checkbox hack
- 🏷️ Follows `ease-*` BEM-style class naming convention

## Files

- `demo.html` — Markup and usage example
- `style.css` — Component styles

## Usage

1. Copy `style.css` into your project (or import it).
2. Copy the `<nav class="ease-navbar">` markup from `demo.html` into your page.
3. Update the `<a>` links and brand text as needed.

## Class Reference

| Class                          | Purpose                                  |
|--------------------------------|-------------------------------------------|
| `.ease-navbar`                 | Outer wrapper / background section        |
| `.ease-navbar__inner`          | Neumorphic pill container                  |
| `.ease-navbar__brand`          | Logo / site name                           |
| `.ease-navbar__checkbox`       | Hidden checkbox driving the mobile menu    |
| `.ease-navbar__burger`         | Burger toggle button (label)               |
| `.ease-navbar__menu`           | Nav links list                             |
| `.ease-navbar__link`           | Individual nav link                        |
| `.ease-navbar__link--active`   | Active/current page link                   |
| `.ease-navbar__cta`            | Highlighted call-to-action link            |

## Customization

Adjust the CSS custom properties at the top of `style.css`:

```css
:root {
  --ease-navbar-bg: #e6e9f0;
  --ease-navbar-shadow-light: #ffffff;
  --ease-navbar-shadow-dark: #b8bcc7;
  --ease-navbar-text: #4a4a68;
  --ease-navbar-accent: #a78bfa;
  --ease-navbar-accent-soft: #ddd6fe;
  --ease-navbar-radius: 16px;
}
```

## Accessibility Notes

- Burger toggle is a `<label>` with `role="button"`, `tabindex="0"`, and 
  `aria-label`/`aria-controls` for screen reader support.
- All interactive elements have visible `:focus-visible` outlines.
- Menu remains fully navigable via keyboard (Tab/Shift+Tab/Enter/Space).

---

**Contributed by:** CoderMS07  
**Branch:** `feat/neumorphic-navbar-ms07`