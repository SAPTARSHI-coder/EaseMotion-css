# Morphing Footer

Documentation showcase for issue #78792.

## What it demonstrates

- A responsive footer that morphs its shape and elevation on interaction.
- Semantic footer and navigation markup.
- CSS transitions for the shell, brand mark, and navigation links.
- A compact mobile layout without JavaScript.
- Reduced-motion support for accessibility.

## Files

- `demo.html` — complete live documentation example.
- `style.css` — responsive layout and motion styles.

## Usage

Place the footer after the page content and keep the navigation links meaningful. The morphing effect is driven by `:hover`, `:focus-visible`, responsive media queries, and CSS transitions.

## Accessibility

Navigation is exposed through a labelled `<nav>`, links remain keyboard focusable, and the demo honors `prefers-reduced-motion: reduce`.
