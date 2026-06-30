# App Landing: Luxury Fragrance E-commerce (`ecommerce-perfume-fragrance-20971`)

This proposal provides a complete, copy-paste ready B2C landing page template designed for a high-end haute parfumerie, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A luxury fragrance brand requires a UI that feels sensory, ethereal, and mysterious. This template achieves a premium aesthetic using a dark mode foundation, glassmorphism (`backdrop-filter: blur`), gold accents, elegant `Playfair Display` typography, and slow, lingering animations that simulate the dispersion of scent.

The layout includes:
- A continuous ambient CSS background featuring slowly drifting blurred orbs.
- A minimalist, mixed-blend-mode Navigation.
- A Hero section featuring an intricate CSS-rendered perfume bottle with 3D layers and liquid gradients.
- A Collections grid featuring glass panels and pulsing abstract scent notes (floral, woody, citrus).
- A Storytelling section showcasing an animated CSS fragrance pyramid (top, heart, base notes).
- A Creator/Nose section with floating CSS lab vials.
- A central Gift Packaging feature with an animated ribbon.
- A Reviews block highlighting editorial quotes.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, heavily modified locally via CSS to use ultra-slow, liquid `cubic-bezier(0.4, 0, 0.1, 1)` and lingering `cubic-bezier(0.2, 0.8, 0.2, 1)` timings that convey a sensory experience:
- `.ease-fade-up` (Configured to blur and unblur during translation, mimicking mist or scent).
- `.ease-reveal-text` (A smooth clip-path text reveal).
- `.ease-fade-up-stagger` (Staggered glass panel entrances using `animation-delay`).
- `.ease-drift` / `.ease-drift-alt` (Continuous, slow ambient movement for the background orbs).
- `.ease-pulse-slow` (A slow opacity/scale pulse applied to abstract scent notes).
- `.ease-hover-glow` (A text-shadow hover interaction that creates a subtle gold glow).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the dark editorial layout architecture, the glassmorphism effects, and the complex abstract CSS illustrations (perfume bottle, fragrance pyramid, lab vials). The standard `ease-*` interaction classes are attached directly to HTML elements to provide the slow, lingering entrance animations. The design is fully responsive and requires zero JavaScript to execute the animations or hover states.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ecommerce-perfume-fragrance-20971/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20971
