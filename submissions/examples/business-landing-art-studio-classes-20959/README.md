# Business Landing: Art Studio / Classes (`business-landing-art-studio-classes-20959`)

This proposal provides a complete, copy-paste ready B2C landing page template designed for a creative art education studio or workshop space, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

An art studio brand requires a UI that feels creative, expressive, and welcoming. This template achieves an artistic aesthetic using a vibrant, earthy palette (terracotta, mustard, teal), an expressive serif/sans-serif typography pairing (`DM Serif Display` & `Outfit`), and fluid, morphing animations that simulate paint strokes and organic shapes.

The layout includes:
- A minimalist Navigation with paint-stroke hover underlines.
- A Hero section featuring abstract CSS blobs morphing in the background, a CSS-rendered artist's easel, and a decorative CSS paint-stroke divider.
- A Class Types grid showcasing CSS-rendered art supplies (a palette, a pottery wheel, a paintbrush) with custom interactive hover states.
- A Schedule and Pricing section with an abstract CSS calendar graphic featuring pulsating active days.
- An Instructor Profile grid with abstract CSS avatars.
- A Student Gallery section utilizing CSS transforms to create a tilted, dimensional gallery wall layout.
- A high-contrast Enroll CTA.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, heavily modified locally via CSS to use expressive, fluid `cubic-bezier(0.25, 1, 0.5, 1)` and bouncy `cubic-bezier(0.34, 1.56, 0.64, 1)` timings that convey creativity:
- `.ease-reveal-text` (Configured with a custom clip-path and translation to simulate a brush-stroke reveal).
- `.ease-stroke-in` (A custom animation using complex polygon clip-paths to simulate a jagged paint stroke appearing).
- `.ease-morph` (A continuous animation using border-radius manipulation to create organic, shifting blob shapes).
- `.ease-hover-paint` (A hover effect that expands a colorful pseudo-element beneath the text like a highlighter or paint stroke).
- `.ease-hover-blob` (A hover effect that smoothly transitions a standard button into an irregular, organic blob shape).
- `.ease-hover-wiggle`, `.ease-hover-spin`, `.ease-hover-brush` (Custom interactive hover states for the abstract CSS icons).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the creative layout architecture, the colorful palette, and the complex abstract CSS illustrations (easel, paint blobs, palette, pottery wheel). The standard `ease-*` interaction classes are attached directly to HTML elements to provide the fluid entrance animations. The design is fully responsive and requires zero JavaScript to execute the animations or hover states.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/business-landing-art-studio-classes-20959/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20959
