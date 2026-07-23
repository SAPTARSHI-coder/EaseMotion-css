# App Landing: Vintage Clothing E-commerce (`ecommerce-vintage-clothing-20975`)

This proposal provides a complete, copy-paste ready B2C landing page template designed for a curated vintage and thrift clothing store, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A vintage clothing brand requires a UI that feels nostalgic, curated, and slightly tactile. This template achieves a retro aesthetic using warm sepia/cream tones, offset box shadows (simulating print misalignment), retro typography (`Shrikhand` paired with `DM Serif Display` and `Karla`), and a subtle CSS grain overlay.

The layout includes:
- A CSS grain overlay applying a subtle noise texture to the entire viewport.
- A minimalist, bordered Navigation.
- A Hero section featuring abstract CSS polaroid mockups containing retro graphics (a flower and a cassette tape).
- An animated CSS marquee dividing the hero and content.
- A "Vault" product grid featuring offset shadow borders and abstract CSS clothing shapes (jacket, jeans, shirt, dress).
- A Condition & Sizing guide featuring a swinging CSS vintage price tag.
- A Journal layout highlighting sourcing stories and style tips.
- A high-contrast Newsletter signup box.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, heavily modified locally via CSS to use slightly stiff or retro-bouncy `cubic-bezier(0.34, 1.56, 0.64, 1)` and `cubic-bezier(0.8, 0, 0.2, 1)` timings that convey an analog, tactile feel:
- `.ease-slide-up-retro` (Configured for a slightly mechanical, bouncy entrance).
- `.ease-reveal-polaroid` (A custom entrance animation for the hero polaroids, combining rotation and translation).
- `.ease-swing` (A continuous ambient animation simulating a physical tag swinging on a string).
- `.ease-float-slow` / `.ease-float-fast` (Continuous ambient animations for the polaroids).
- `.ease-hover-offset` (A custom interaction that translates elements diagonally while expanding a hard box shadow, simulating a physical button press or print offset).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the retro layout architecture, the offset shadows, the CSS grain overlay, and the complex CSS illustrations (polaroids, cassette, tag). The standard `ease-*` interaction classes are attached directly to HTML elements to provide the nostalgic entrance animations. The design is fully responsive and requires zero JavaScript to execute the animations or hover states.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ecommerce-vintage-clothing-20975/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20975
