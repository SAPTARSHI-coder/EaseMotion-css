# Navigation Breadcrumb

Animated breadcrumb navigation with hover slide underline on each link. Uses `::after` pseudo-element for the underline width animation. Active state is non-linked.

## Features

- Breadcrumb navigation with separator
- Link underline slides in on hover via `::after` width transition
- Bounce cubic-bezier for underline
- Active state styling for current page
- Accessible with aria-label and aria-current

## Usage

Standard `<ol>` breadcrumb pattern with `.nb-link` for links and `.nb-active` for current page. The underline animates from 0 to 100% width on hover.
