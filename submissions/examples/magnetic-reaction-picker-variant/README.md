# Magnetic Reaction Picker — Startup Variant (#42580)

A high-performance, pure CSS interactive reaction picker featuring a magnetic attraction hover mechanics vector. Designed natively for the EaseMotion CSS ecosystem to suit high-end startup landing matrices with zero client-side script runtimes.

## Visual Mechanics

- **Kinetic Attraction Vectors**: Combines a snappy overshooting easing curve (`cubic-bezier(0.25, 1.35, 0.5, 1)`) with absolute pseudo-elements to produce a magnetic snap illusion when a user hovers over an option.
- **Glassmorphic Compositing**: Employs structural CSS standard backdrop blur mechanics to integrate with modern UI surfaces.
- **Keyboard Navigation Native Hooks**: Accessible via standard tabbing out of the box using focus tracking states (`:focus-within` and `:focus-visible`).

## Custom Adjustments

Modify dimensional constraints, scaling vectors, or tint paths cleanly inside the variable parameters block within `style.css`:

```css
:root {
  --ease-mag-bg: rgba(15, 23, 42, 0.6);      /* Control dock backdrop mask */
  --ease-magnetic-snap: cubic-bezier(0.25, 1.35, 0.5, 1); /* Pull velocity spline values */
}