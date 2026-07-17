# Breadcrumb Separator

A breadcrumb navigation component with four separator styles: chevron, slash, arrow, and dot. Includes active/hover states and responsive wrapping.

## Features

- Four separator variants via `data-separator` attribute
- Active page highlighting and hover states
- Responsive flex layout with wrapping on narrow screens
- Dark theme with subtle link colors
- Accessible focus styles and aria-current for active page

## Usage

Open `demo.html` in any modern browser. The breadcrumb is an `<nav aria-label="Breadcrumb">` wrapping an `<ol>` with `<li>` items. Set `data-separator="chevron|slash|arrow|dot"` on the `<nav>` to switch styles.

## Customization

Replace the Unicode characters in the `li + li::before` `content` property to use custom icons or images. Adjust `margin` between items and `color` of separators via the `--text-muted` variable or by overriding the separator rules directly.
