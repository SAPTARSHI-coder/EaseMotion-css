# App Landing: Candle Shop (`ecommerce-candle-shop-20964`)

This proposal provides a complete, copy-paste ready B2C landing page template designed for a handcrafted candle or home fragrance brand, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A home fragrance brand requires a UI that feels warm, cozy, calming, and highly sensory. This template achieves a relaxing aesthetic using a soft, muted palette (creams, blushes, warm grays, sand), an elegant serif/sans-serif typography pairing (`Cormorant Garamond` & `Montserrat`), and gentle, slow animations that simulate flickering flames and slow melting wax.

The layout includes:
- A soft fading Promo Banner.
- A minimalist, translucent sticky Navigation.
- A Hero section featuring a CSS-rendered candle jar with a flickering flame and ambient glowing light.
- A Collections grid showcasing color-coordinated candle jars with slow hover scaling and soft glow reveals.
- A Story/Process section with a continuous CSS animation simulating hot wax being poured into a mold, complete with rising scent molecules.
- A Gift Bundles section utilizing CSS transforms to create a gift box lid lifting to reveal mini candles.
- A refined, elegant Reviews grid.
- A Subscribe & Save CTA with rounded, pill-shaped inputs.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, heavily modified locally via CSS to use slow, gentle `cubic-bezier(0.33, 1, 0.68, 1)` and `cubic-bezier(0.25, 0.46, 0.45, 0.94)` timings that convey relaxation and warmth:
- `.ease-slide-up-soft` (Configured for a very slow, drifting vertical entrance).
- `.ease-reveal-soft` (A slow blur-to-focus reveal entrance).
- `.ease-flicker` (A complex custom animation mimicking the random motion and scaling of a candle flame).
- `.ease-pulse-glow` (An ambient opacity/scale animation for background light/warmth).
- `.ease-tilt-pour` & `.ease-pour-slow` (Custom continuous animations mimicking a pitcher pouring liquid wax).
- `.ease-float-up` (Used to animate rising scent particles).
- `.ease-hover-glow` (A soft hover effect that adds a warm box-shadow).
- `.ease-hover-fade` (A slow opacity and color transition for links).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the soft layout architecture, the warm palette, and the complex abstract CSS illustrations (candle jars, flames, pouring pitcher, gift boxes). The standard `ease-*` interaction classes are attached directly to HTML elements to provide the slow entrance animations. The design is fully responsive and requires zero JavaScript to execute the animations or hover states.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ecommerce-candle-shop-20964/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20964
