# CSS Burger to Arrow

A pure CSS animated hamburger button that morphs into a back-arrow icon.

## Features

- Pure HTML and CSS
- No JavaScript
- Smooth burger-to-arrow animation
- Responsive
- Light and dark mode support
- CSS custom properties for easy customization
- Reduced-motion support

## How It Works

A hidden checkbox controls the component state.

CSS sibling selectors detect the checked state and transform the three
hamburger lines into an arrow.

## Customization

The main variables are defined in `:root`:

```css
--accent: #2563eb;
--line-width: 32px;
--line-height: 3px;
--animation-speed: 300ms;