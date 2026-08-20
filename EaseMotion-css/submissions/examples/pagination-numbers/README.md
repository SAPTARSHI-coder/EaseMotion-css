# Pagination Numbers

A numbered pagination component with active page highlight, prev/next buttons, disabled states, hover effects, and ellipsis for large page counts.

## Features

- Numbered page buttons with active state styling
- Previous / Next navigation with disabled state
- Ellipsis placeholder for many-page scenarios
- Hover and focus-visible effects
- Dark theme with accent color for active page
- Responsive layout that wraps gracefully

## Usage

Open `demo.html` in any modern browser. The pagination is a `<nav aria-label="Pagination">` wrapping an `<ol>` with `<li>` items. Active page uses `aria-current="page"`, disabled buttons use `aria-disabled="true"`.

## Customization

Adjust the `--accent` variable to change the active page color. Sizes can be toggled by adding `.sm` or `.lg` classes to the `<nav>`. The ellipsis uses `aria-hidden="true"` for screen reader support; add a visually hidden page count if needed for accessibility.
