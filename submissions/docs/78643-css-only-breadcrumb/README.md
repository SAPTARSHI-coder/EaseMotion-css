# CSS-only Breadcrumb

Documentation and standalone usage guide for issue #78643.

## Overview

The CSS-only Breadcrumb presents a site's current location in a hierarchy.
It uses semantic navigation and CSS-generated separators without JavaScript.
The pattern works well for documentation, ecommerce, dashboards, and content sites.
Ancestor pages remain normal links while the current page is clearly identified.
The structure stays simple enough to reuse across different layouts.

## Features

- Semantic breadcrumb navigation.
- Ordered hierarchy using an accessible list.
- CSS-generated visual separators.
- Native links for ancestor pages.
- Clear current-page treatment.
- Responsive wrapping on narrow screens.
- No JavaScript dependency for presentation.

## Demo

Open `demo.html` in a modern browser to view the complete breadcrumb.
The example contains several hierarchy levels and a current page.
Select an ancestor link to verify that it behaves like a normal link.
Use Tab to inspect keyboard focus as you move through the trail.
Resize the viewport to observe how long trails wrap on smaller screens.

## Usage

Wrap the breadcrumb inside `<nav aria-label="Breadcrumb">`.
Use an ordered list to represent the page hierarchy.
Keep ancestor destinations as normal anchor elements.
Represent the current page as text rather than a redundant link.
Add `aria-current="page"` to the current location.
Link `style.css` through the host project's normal stylesheet pipeline.

## Accessibility

The navigation landmark gives assistive technology useful context.
Native links provide expected keyboard and browser behavior.
The current page is exposed through `aria-current`.
CSS separators are decorative and do not add extra navigation elements.
The breadcrumb remains understandable without visual separators.
Focus styling should remain visible when the component is customized.

## Responsive Behavior

The breadcrumb uses flexible spacing and wrapping rules.
Long trails can wrap rather than forcing horizontal scrolling.
Typography remains readable at smaller viewport sizes.
Spacing is reduced when the available width becomes limited.
The hierarchy remains understandable even when multiple lines are used.

## Customization

Change the separator character or visual treatment in `style.css`.
Adjust gap values to control the density of the trail.
Modify typography to match the surrounding navigation system.
Change borders or backgrounds for different page themes.
Update current-page emphasis without changing the semantic markup.
Keep separators decorative so accessibility remains consistent.

## Implementation Notes

The component does not require JavaScript for its visual behavior.
The HTML structure provides the hierarchy and navigation semantics.
CSS handles separators, spacing, typography, and responsive layout.
The demo is self-contained and can be opened without a build process.
The pattern can be copied into larger layouts with minimal adaptation.

## File Structure

- `demo.html` — expanded semantic breadcrumb demonstration.
- `style.css` — breadcrumb presentation and responsive styling.
- `README.md` — usage and accessibility documentation.

## Browser Support

The component targets current evergreen browsers.
It uses standard HTML lists, links, pseudo-elements, and media queries.
The navigation remains functional when decorative CSS is unavailable.

## Testing Checklist

- Verify the breadcrumb has an accessible navigation label.
- Confirm every ancestor is a working native link.
- Check that the current page has `aria-current="page"`.
- Test keyboard focus across the complete trail.
- Resize the viewport and inspect wrapping behavior.
- Confirm separators are decorative rather than essential content.

## Reuse

Replace the example hierarchy with the actual site's page structure.
Keep the current location clear and avoid adding unnecessary levels.
Follow repository contribution and licensing conventions when reusing the example.
