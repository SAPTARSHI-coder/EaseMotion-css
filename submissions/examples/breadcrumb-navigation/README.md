# Breadcrumb Navigation with Chevrons

A breadcrumb navigation component with chevron separators between items. The current active page is marked with `aria-current="page"` for accessibility. Each breadcrumb item links backward in the navigation hierarchy.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser. The breadcrumb trail shows a sample path from Home to a product page.

## Accessibility notes

The `aria-label="Breadcrumb"` and `aria-current="page"` attributes provide screen reader context. Links have hover underline for clear affordance.
