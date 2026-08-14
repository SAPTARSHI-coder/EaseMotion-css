# Morphing Navbar

Documentation showcase for EaseMotion CSS issue #78646. The component demonstrates a responsive navigation bar whose surface shape and elevation change smoothly during interaction.

## Files

- `demo.html` — semantic header, navigation links, brand link, and call-to-action.
- `style.css` — layout, morphing transitions, spacing, responsive wrapping, and reduced-motion behavior.

## Structure

The header contains a home link, a labelled navigation landmark, and a separate call-to-action. All navigation remains ordinary HTML links so the component has useful behavior without JavaScript.

The morphing effect is visual. Hovering the navigation surface can change its radius, elevation, and internal spacing while preserving the same document structure.

## Usage

Replace the sample destinations and labels with real routes. Keep the navigation landmark label descriptive when more than one navigation region exists on a page.

## Accessibility

- Uses semantic header and navigation elements.
- Navigation items are native links.
- The brand link has an accessible name.
- Focus-visible states are retained for keyboard users.
- Reduced-motion preferences suppress non-essential transitions.

## Responsive Behavior

Navigation items wrap or compact at smaller widths. The header avoids fixed horizontal dimensions so long labels and localized text have room to fit.

## Customization

Adjust radius, elevation, spacing, surface color, transition timing, and accent values in `style.css`. The morphing behavior can be made more subtle or pronounced without changing the HTML.

## Preview

Open `demo.html`, hover the navigation surface, then tab through each link. Resize the viewport to inspect the responsive arrangement.
