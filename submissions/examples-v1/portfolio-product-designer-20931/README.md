# Portfolio: Product Designer (Industrial) (`portfolio-product-designer-20931`)

This proposal provides a complete, copy-paste ready portfolio landing page designed for an Industrial Product Designer or Hardware Engineer, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

An industrial design portfolio requires a UI that feels precise, engineered, and clean. This template achieves a "Technical Precision" aesthetic using a monochromatic grayscale palette (`#111827` to `#F3F4F6`) with a single high-visibility accent color (`#FF3366` - Laser Pink/Red). It uses a sharp geometric sans-serif (`Inter`) for primary text, paired with a monospaced font (`Space Mono`) for technical annotations, mimicking blueprint or CAD software aesthetics.

The layout includes:
- A technical, sticky navigation bar.
- A Hero section featuring a blueprint grid background, technical annotations, and a complex custom CSS-constructed 3D product render (simulating a machined camera/drone hub) that rotates subtly in 3D space.
- A "Selected Work" grid with abstract CSS representations of physical products (Headphones, Thermostat, Mouse, Lamp) that scale gracefully on hover.
- A "Design Process" timeline utilizing a staggered, alternating layout connected by a dashed centerline.
- A "Partners" grid and a clean testimonial card.
- A bold, typography-driven Contact CTA.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, modified locally via CSS to use snappy, mechanical `cubic-bezier(0.19, 1, 0.22, 1)` and precise `cubic-bezier(0.77, 0, 0.175, 1)` timings tailored for an engineering brand:
- `.ease-slide-up-stagger` (Configured for a sharp, precise vertical entrance without bounce).
- `.ease-hover-lift-shadow` (Provides a clean, sharp elevation effect on project cards).
- `.ease-float-slow` (Applied to the 3D render to give it a weightless presentation feel).
- *Custom 3D Animations*: The template includes unique keyframes (`ease-3d-rotate-subtle`) applied to a CSS-constructed object with `preserve-3d`, simulating a 3D CAD turntable render.
- `.ease-pulse-fast` (Used to simulate an active LED indicator on the product mockup).
- `.ease-zoom-in-hover` (Combined with group hovers to gently scale product visuals when their parent card is hovered).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the complete aesthetic overhaul, from the technical typography and grid backgrounds to the pure CSS illustrations (the animated 3D render and project icons). The standard `ease-*` interaction classes are attached directly to HTML elements to provide sharp, precise animations. No JavaScript is required for this template.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/portfolio-product-designer-20931/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20931
