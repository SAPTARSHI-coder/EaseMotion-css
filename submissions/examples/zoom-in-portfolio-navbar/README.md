# CSS Zoom-In Navbar for Creative Portfolio Layouts

A responsive portfolio navigation pattern with CSS-only zoom-in interactions for links, brand identity, and the primary call to action.

## Features

- Pure HTML/CSS implementation with no JavaScript or external framework dependency.
- Zoom-in hover and focus states for portfolio navigation links.
- Active route indicator using an underline scale animation.
- Responsive layout that shifts from a pill navbar to a stacked mobile menu.
- Keyboard-visible focus states and `prefers-reduced-motion` support.

## Files

- `demo.html`: portfolio shell and navigation markup.
- `style.css`: layout, responsive behavior, and zoom-in animation states.
- `README.md`: usage notes and feature summary.

## Usage

Copy the `.zoom-navbar` block into a creative portfolio page and update the link targets.

```html
<a class="nav-link is-active" href="#home">Home</a>
<a class="nav-link" href="#work">Work</a>
```

Use `is-active` on the current route. The same zoom interaction is available for mouse hover and keyboard focus.
