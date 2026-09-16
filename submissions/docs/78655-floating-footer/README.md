# Floating Footer

Documentation and standalone usage guide for issue #78655.

## Overview

The Floating Footer is a compact footer surface separated from page content.
Rounded corners, spacing, and elevation give it a distinct visual boundary.
It can be used as a page footer, utility panel, or compact navigation surface.
The layout is responsive and can be adapted to different page widths.
Semantic navigation keeps the component useful beyond its visual treatment.

## Features

- Floating visual treatment with controlled elevation.
- Responsive width and spacing.
- Semantic footer and navigation structure.
- Native links with keyboard focus support.
- Flexible branding and link groups.
- Reduced-motion support.
- No external dependency.

## Demo

Open `demo.html` in a modern browser to preview the footer.
The example includes branding, navigation links, and a supporting action.
Use the pointer to inspect the visual separation and hover states.
Press Tab to verify visible keyboard focus.
Resize the viewport to inspect the compact mobile arrangement.

## Usage

Place the footer after the main page content.
Use a semantic `<footer>` element as the main container.
Group related links inside a navigation landmark.
Keep branding content separate from navigation destinations.
Use native links for actions that navigate to another page or resource.
Link `style.css` through the host project's normal stylesheet pipeline.

## Accessibility

Native links provide expected keyboard and browser behavior.
Focus indicators remain visible for keyboard users.
The floating effect is decorative and does not carry essential meaning.
Hover styling is paired with keyboard focus styling.
Reduced-motion preferences remove unnecessary movement.
Text and links should maintain sufficient contrast against the surface.

## Responsive Behavior

The footer uses a maximum width while remaining fluid.
Horizontal spacing decreases when the viewport becomes narrow.
Navigation groups can wrap or stack on smaller screens.
The floating surface remains inside the viewport at mobile widths.
Long labels wrap naturally instead of forcing page-level scrolling.

## Customization

Adjust maximum width to align the footer with the page content.
Change padding to control visual density.
Modify border radius for a sharper or softer surface.
Update shadows to control the perceived elevation.
Change link transitions to match the site's interaction language.
Keep focus styling visible when changing hover treatments.

## Implementation Notes

The HTML keeps footer semantics separate from presentation details.
CSS controls the floating surface, spacing, and responsive layout.
The demo is self-contained and can be opened without a build process.
The component can be used as a full-width footer or compact utility surface.
Its structure can be adapted without changing the interaction semantics.

## File Structure

- `demo.html` — expanded floating footer demonstration.
- `style.css` — floating layout and responsive styling.
- `README.md` — usage and accessibility documentation.

## Browser Support

The component targets current evergreen browsers.
It uses standard HTML, CSS layout, shadows, and transitions.
The footer remains navigable when decorative effects are unavailable.

## Testing Checklist

- Verify every footer link works and is keyboard accessible.
- Confirm focus indicators remain visible.
- Resize the viewport and inspect the stacked layout.
- Check text and link contrast on the footer surface.
- Enable reduced-motion and verify movement is simplified.
- Confirm the floating surface does not cause horizontal overflow.

## Reuse

Replace the example links and branding with project-specific content.
Keep semantic footer and navigation structure intact when adapting the design.
Follow repository contribution and licensing conventions when reusing the example.
