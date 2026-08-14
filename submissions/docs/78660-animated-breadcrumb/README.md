# Animated Breadcrumb

Documentation and standalone usage guide for issue #78660.

## Overview

The Animated Breadcrumb adds a restrained reveal and emphasis effect to navigation.
It keeps the breadcrumb hierarchy semantic while providing visual feedback.
The pattern is useful for documentation, ecommerce, dashboards, and content sites.
The current location receives clear emphasis without hiding the navigation structure.
The animation remains optional and does not carry essential information.

## Features

- Semantic breadcrumb navigation.
- Animated current-page emphasis.
- Native ancestor links.
- Clear `aria-current` state.
- Keyboard-friendly navigation.
- Responsive breadcrumb wrapping.
- Reduced-motion support.

## Demo

Open `demo.html` in a modern browser to view the complete breadcrumb.
The example contains several hierarchy levels and an animated current location.
Use Tab to inspect keyboard focus across the ancestor links.
Resize the viewport to observe wrapping behavior on smaller screens.
Enable reduced-motion to verify that the animation is simplified.

## Usage

Wrap the component in `<nav aria-label="Breadcrumb">`.
Use an ordered list to represent the page hierarchy.
Keep ancestor destinations as native links.
Mark the current page with `aria-current="page"`.
Use CSS classes only for presentation and animation.
Link `style.css` through the host project's normal stylesheet pipeline.

## Accessibility

The navigation landmark provides useful context to assistive technology.
Native links support expected keyboard and browser behavior.
The current page is exposed through `aria-current`.
Animation is not required to understand the hierarchy.
Focus styling remains visible for keyboard users.
Motion is reduced when `prefers-reduced-motion` is enabled.

## Responsive Behavior

The breadcrumb uses flexible spacing and wrapping.
Long navigation trails can wrap across multiple lines.
Spacing is reduced when the viewport becomes narrow.
Typography remains readable at smaller viewport widths.
The hierarchy remains understandable even when multiple lines are required.

## Customization

Change animation duration to control the reveal speed.
Modify the current-page emphasis to match the host design.
Adjust separator spacing and typography in `style.css`.
Update border or background treatments for different themes.
Change link transitions without changing the semantic markup.
Keep the current page visually distinct and accessible.

## Implementation Notes

The HTML provides the hierarchy and navigation semantics.
CSS controls the reveal animation and responsive layout.
The demo can be opened directly without a build process.
Decorative animation is separated from meaningful navigation content.
The component can be integrated into larger pages with minimal changes.

## File Structure

- `demo.html` — expanded animated breadcrumb demonstration.
- `style.css` — animation and responsive styling.
- `README.md` — usage and accessibility documentation.

## Browser Support

The component targets current evergreen browsers.
It uses standard HTML, CSS pseudo-elements, transitions, and media queries.
The breadcrumb remains usable if decorative animation is unavailable.

## Testing Checklist

- Verify the breadcrumb has an accessible navigation label.
- Confirm ancestor items remain native links.
- Check `aria-current="page"` on the current location.
- Test keyboard focus across every link.
- Resize the viewport and inspect wrapping behavior.
- Enable reduced-motion and confirm the transition is simplified.

## Reuse

Replace the example hierarchy with the site's actual navigation path.
Keep animation subtle so the breadcrumb remains a supporting navigation element.
Follow repository contribution and licensing conventions when reusing the example.
