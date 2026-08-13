# Responsive Carousel with Material Design styling (#78840)

A responsive carousel component built using Material Design 3 (M3) design tokens, surface container elevations, morphing pill pagination indicators, and zero JavaScript dependencies.

## Features
- **Material 3 Tokens:** Uses standard M3 color palettes, elevation shadows, and standard motion easing functions (`cubic-bezier(0.2, 0.0, 0.0, 1.0)`).
- **Pure CSS Navigation:** Driven entirely by CSS radio input state selectors (`:checked ~ .carousel-viewport`) and `transform` translateX properties.
- **Morphing Indicators:** Active pagination dots seamlessly expand into Material pill indicators.
- **Responsive & Accessible:** Fully adaptive viewport structure with semantic markup and explicit `aria` attributes.

## File Hierarchy
- `submissions/examples/css-responsive-carousel-material/style.css` - Material design tokens, animations, layout structure, and media query breakpoints.
- `submissions/examples/css-responsive-carousel-material/demo.html` - HTML5 semantic markup showcasing the carousel component.
- `submissions/examples/css-responsive-carousel-material/README.md` - Technical specification and usage overview.
