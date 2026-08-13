# 3D Breadcrumb

Documentation showcase for EaseMotion CSS issue #78674. The component combines semantic breadcrumb navigation with a layered 3D visual treatment.

## Files

- `demo.html` — semantic breadcrumb navigation and current-page state.
- `style.css` — depth, separators, spacing, focus treatment, and responsive wrapping.

## Structure

The breadcrumb uses a `<nav>` landmark containing an ordered list. Each previous location is a normal link and the final location uses `aria-current="page"` to communicate the current position programmatically.

The visual depth is decorative. Navigation remains fully functional through ordinary links even if CSS transforms or shadows are unavailable.

## Usage

Replace the sample Home, Library, and Components labels with the hierarchy for the current page. Keep the final item as the current page rather than making it a redundant link.

## Accessibility

- Uses a labelled navigation landmark.
- Uses an ordered list to represent page hierarchy.
- Previous locations are keyboard-accessible links.
- Current location is identified with `aria-current="page"`.
- Focus-visible styling keeps keyboard navigation clear.

## Responsive Behavior

The breadcrumb can wrap naturally when space is limited. Spacing and typography are reduced at smaller widths without removing hierarchy information.

## Customization

Adjust the depth, separator treatment, radius, spacing, and accent values in `style.css`. The same markup can be used for documentation, commerce, account, or application navigation.

## Preview

Open `demo.html`, activate the breadcrumb links with a pointer or keyboard, and resize the viewport to inspect wrapping behavior.
