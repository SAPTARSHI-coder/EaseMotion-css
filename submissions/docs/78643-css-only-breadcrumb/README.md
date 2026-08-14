# CSS-only Breadcrumb

Documentation and a standalone demonstration for issue #78643.

## Overview

This breadcrumb presents the current location within a site hierarchy using semantic navigation and CSS-generated separators. It requires no JavaScript for its visual presentation.

## Demo

Open `demo.html` to view a complete breadcrumb trail with linked ancestor pages and a clearly identified current page.

## Usage

Wrap the breadcrumb in `<nav aria-label="Breadcrumb">` and use an ordered list for the hierarchy. Keep the current page as plain text and mark it with `aria-current="page"`.

## Accessibility

The navigation landmark provides context for assistive technology. Native links are keyboard accessible, and separators are generated with CSS so they are not announced as additional navigation content.

## Customization

Modify the separator, spacing, border, and typography in `style.css`. The layout wraps naturally on narrow screens.

## Files

- `demo.html` — semantic breadcrumb example.
- `style.css` — component presentation.
- `README.md` — usage and accessibility notes.