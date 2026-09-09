# CSS Widget: Diamond Facet Edge Variation

A polished, reusable dashboard widget featuring a distinctive "Diamond Facet Edge" visual treatment. This component uses pure CSS geometry and layered gradients to create a reflective, cut-gemstone border effect around realistic dashboard metrics.

## Features

- **Diamond Facet Geometry**: Utilizes `clip-path: polygon()` to cut the corners of the widget, generating a striking octagonal shape that breaks out of the standard rounded-rectangle dashboard mold.
- **Pure CSS Reflective Facets**: Uses a stack of precise `linear-gradient` backgrounds to catch light on different clipped edges, creating the 3D illusion of faceted cuts without any actual 3D transforms.
- **Hardware-Accelerated Interaction**: Hovering or focusing the widget triggers a subtle, hardware-accelerated lift (`transform: translateY`) and fades in an extra layer of corner highlights via an `opacity` transition on a pseudo-element.
- **Dark Mode Native**: Perfectly integrated with `@media (prefers-color-scheme: dark)`. In dark mode, the facet gradients shift to deep slate and obsidian tones with sharp, icy highlights.
- **Semantic Structure**: Built with meaningful HTML5 tags (`<article>`, `<header>`, `<footer>`) inside an interactive anchor (`<a>`) simulating a clickable dashboard card.
- **Accessibility & Focus states**: Explicitly defines `:focus-visible` outlines using a drop-shadow glow to ensure high visibility for keyboard navigators, without overriding the geometric shape.
- **Reduced Motion**: Respects `@media (prefers-reduced-motion: reduce)` by disabling the lift transform and fading transitions while preserving the faceted aesthetic.
- **Fully Responsive**: Adapts seamlessly from multi-column wide dashboard grids down to single-column mobile views using CSS Grid and Flexbox.

## Implementation Details

### Faceted Edge Architecture
The geometric shape is built using a two-layer `clip-path` technique:
1. **Outer Wrapper (`.diamond-facet-wrapper`)**: Receives a `clip-path: polygon(...)` cutting 24px off each corner. It acts as the "border". Its background is a complex composition of four angular `linear-gradient`s pointing to the corners, simulating directional light striking the facets.
2. **Inner Content (`.widget-content`)**: Receives an almost identical `clip-path`, but calculated mathematically to leave exactly 4px of the outer wrapper exposed as the faceted edge.

### Highlight Animation
Instead of awkwardly animating multiple complex gradients (which can cause performance drops or layout thrashing), the hover effect simply fades in an `::after` pseudo-element with `opacity: 1`. This pseudo-element holds a brighter gradient map, making the facets appear to "catch the light" when interacted with.

### Performance Profile
- Zero layout properties (`margin`, `padding`, `width`, `height`) are animated.
- Hover animations use only `transform` and `opacity`.
- Entirely CSS-driven; zero JavaScript required.

## Usage

1. Open `demo.html` in your browser.
2. Observe the faceted border and hover over the cards to see the reflective edge highlight.
3. Switch your OS to Dark Mode to see the palette adapt to deep slate tones.
4. Try keyboard navigation (using the `Tab` key) to verify focus bounds.
