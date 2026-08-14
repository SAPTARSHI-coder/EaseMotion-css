# CSS-only Breadcrumb

Documentation showcase for EaseMotion CSS issue #78667.

## Overview

This example demonstrates a reusable breadcrumb navigation pattern built with semantic HTML and CSS only. The component communicates the user's location within a hierarchy while remaining responsive and keyboard accessible.

## Structure

```text
submissions/examples/css-only-breadcrumb-78667/
├── demo.html
├── style.css
└── README.md
```

## Demo

The demo contains a labelled `<nav>` element with an ordered list of breadcrumb items. Links represent navigable parent levels, while the current page is exposed with `aria-current="page"`.

The visual separators are generated with CSS so they do not have to be repeated in the markup.

## Features

- Semantic breadcrumb navigation.
- No JavaScript dependency.
- Responsive wrapping on narrow screens.
- Visible keyboard focus states.
- Reusable custom properties.
- Reduced-motion support.
- Consistent spacing between hierarchy levels.

## Usage

Include `style.css` and copy the breadcrumb navigation structure from `demo.html` into a page.

Replace the example destinations with real URLs and update the current-page label to match the page being displayed.

## Accessibility

The component uses a semantic navigation landmark with an accessible label. The ordered list communicates hierarchy, and the current location is marked with `aria-current="page"`.

Keyboard users receive a visible focus indicator when navigating links. The component does not rely on hover to expose essential information.

## Responsive Behavior

On wide screens, the breadcrumb remains on one line when space allows. At smaller widths, items wrap naturally while preserving the hierarchy and spacing. The surrounding card also reduces its padding at mobile breakpoints.

## Customization

The primary colors and surface values are stored in CSS custom properties. Adjust the variables in `:root` to match an application's design system without changing the component markup.

## Files

- `demo.html` — semantic example markup.
- `style.css` — layout, spacing, responsive behavior, and interaction styling.
- `README.md` — implementation and accessibility documentation.

Open `demo.html` directly in a browser to view the showcase.
