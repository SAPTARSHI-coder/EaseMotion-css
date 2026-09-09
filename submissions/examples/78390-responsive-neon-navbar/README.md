# Responsive Navbar with Neon Styling

A responsive CSS-only navigation bar featuring luminous neon accents,
glassmorphism-inspired surfaces, smooth hover states, and a native
mobile disclosure menu.

## Features

- Responsive navigation bar
- Neon cyan, purple, and pink accents
- Glass-like translucent surface
- Sticky header
- Active navigation state
- Animated underline
- Glowing hover interactions
- Responsive mobile menu
- Native `<details>` / `<summary>` mobile behavior
- Keyboard-accessible links
- Visible `:focus-visible` states
- Hero section and supporting feature cards
- `prefers-reduced-motion` support
- Pure HTML and Vanilla CSS
- No JavaScript or external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

The primary navigation uses semantic links:

```html
<nav class="navbar" aria-label="Primary navigation">
  <a class="navbar__brand" href="#">
    <span class="navbar__brand-mark">N</span>
    <span class="navbar__brand-text">
      Neon<span>Flow</span>
    </span>
  </a>

  <a class="navbar__link navbar__link--active" href="#">
    Home
  </a>
</nav>