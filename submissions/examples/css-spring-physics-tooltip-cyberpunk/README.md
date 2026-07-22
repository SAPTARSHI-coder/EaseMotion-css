# CSS Spring Physics Tooltip — Cyberpunk Neon Layouts

A striking, dark-themed responsive tooltip module combining aggressive spring momentum kinetics and vivid neon interface highlights.

## Specifications
- **Mechanical Physics**: Employs an extreme double-overshoot ease transition matrix (`cubic-bezier(0.68, -0.6, 0.34, 1.55)`) to achieve sharp kinetic snap-back and elastic recoil properties.
- **Declarative Operations**: Exposes core tracking parameters (spring timings, vertical separation limits, and target transformations) explicitly inside global custom properties.
- **Hardware Layering**: Confines element recoil transformations entirely to GPU compositor paths (`transform: translateY() scale()`) to bypass heavy layout paint updates.