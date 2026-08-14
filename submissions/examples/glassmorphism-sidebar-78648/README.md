# Glassmorphism Sidebar

Documentation showcase for EaseMotion CSS issue #78648. This example presents a translucent sidebar navigation surface with neon accents and layered depth.

## Files

- `demo.html` — semantic workspace layout and navigation.
- `style.css` — glass surface, glow, spacing, focus states, responsive behavior, and motion preferences.

## Structure

The sidebar is represented by an `<aside>` containing a labelled navigation landmark. The main content area remains separate from the decorative surface, making the component easy to integrate into dashboard layouts.

The glass effect uses transparency, borders, shadows, and optional backdrop blur. The navigation does not rely on the effect to communicate destinations.

## Usage

Replace the sample workspace routes and labels with application destinations. Additional navigation groups can be introduced while preserving the semantic landmark structure.

## Accessibility

- Uses semantic aside and navigation landmarks.
- Navigation items are native links.
- Active state is communicated visually while link text remains available.
- Focus-visible styling supports keyboard navigation.
- Reduced-motion preferences limit decorative transitions.

## Responsive Behavior

At smaller widths the sidebar becomes a compact navigation region so the content remains readable. Spacing and panel dimensions adapt without requiring a fixed desktop viewport.

## Customization

Tune panel opacity, blur, border strength, glow, radius, shadow, and accent colors in `style.css`. If blur is unsupported, the translucent background still provides a usable surface.

## Preview

Open `demo.html`, navigate through the sidebar links, and resize the viewport to inspect the responsive state.
