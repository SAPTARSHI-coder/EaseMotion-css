# Portfolio: Illustrator (`portfolio-illustrator-20925`)

This proposal provides a complete, copy-paste ready portfolio template designed for an Illustrator, Lettering Artist, or Creative Studio, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

An illustrator portfolio requires an expressive, artistic aesthetic. This template achieves a "Playful & Vibrant" aesthetic using a bold color palette, neo-brutalist solid shadows, organic blob shapes, and friendly, rounded typography (the display font `Fredoka` and the sans-serif `Nunito`).

The layout includes:
- A playful navigation bar with a spinning SVG star and bouncy underline hover effects.
- A dynamic Hero section featuring a completely CSS-built animated character illustration with blinking eyes, a growing smile on hover, and orbiting decorative elements.
- A custom masonry-style "Selected Works" grid with varied card sizes and complex hover reveals that slide content up from the bottom while manipulating internal CSS shapes.
- A "Process" section featuring bouncy step icons.
- An animated, infinite-scrolling CSS marquee for a "Shop Prints" CTA.
- A friendly, stylized commission form with focus-ring interactions.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, modified locally via CSS to use bouncy, organic `cubic-bezier(0.34, 1.56, 0.64, 1)` timings tailored for a playful, artistic brand:
- `.ease-pop-in` (Used on the "Hi!" badge for a bouncing, rotating entrance).
- `.ease-orbit` & `.ease-orbit-reverse` (Used on the hero shapes to create a dynamic, moving illustration).
- `.ease-blink` (Used on the CSS character's eyes).
- `.ease-marquee` (Used for the infinite scrolling shop banner).
- *Custom Interactions*: The masonry portfolio cards use `.group` to trigger `.group-hover-translate-y-0` on hidden caption panels, sliding them up cleanly on hover. Buttons utilize `.ease-hover-lift` coupled with expanding solid shadows to create a tactile, neo-brutalist feel.

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the complete aesthetic overhaul, from the vibrant color palette and solid shadows to the pure CSS abstract character illustration and infinite marquee. The standard `ease-*` interaction classes are attached directly to HTML elements to provide bouncy, expressive animations. No JavaScript is required for this template.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/portfolio-illustrator-20925/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20925
