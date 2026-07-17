# App Landing: Vinyl Records Shop E-commerce (`ecommerce-vinyl-records-20983`)

This proposal provides a complete, copy-paste ready B2C landing page template designed for a retro, culture-focused vinyl record and music shop, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A vinyl record store requires a bold, retro, slightly gritty aesthetic that emphasizes physical media culture. This template achieves a vibrant feel using high-contrast colors (mustard, burnt orange, off-black, cream), harsh borders and shadows (brutalism-lite), and bold, condensed typography (`Bebas Neue` paired with `Chivo Mono`).

The layout includes:
- A bold, high-contrast Announcement Bar.
- A sticky Navigation with blocky hover states.
- A Hero section featuring a CSS-animated spinning vinyl record pulling out of a sleeve.
- A "Browse by Genre" 4-column grid with color-blocked backgrounds.
- A "New Arrivals" section featuring a custom CSS hover effect that simulates pulling a record out of its sleeve.
- A "Record of the Week" split layout.
- A technical "Grading Guide" list.
- A chunky, bordered Reviews section.
- A high-impact Newsletter signup box.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, heavily modified locally via CSS to use bouncy, energetic `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timings (overshoot/bounce) to feel tactile and retro:
- `.ease-fade-up` / `.ease-slide-up` (Configured for bouncy, energetic entrances).
- `.ease-reveal-spin` (A custom entrance animation for the hero vinyl graphic that spins into place while scaling up).
- `.ease-spin` / `.ease-spin-slow` (Continuous animations applied to the CSS records to simulate them playing on a turntable).
- `.ease-hover-pop` (Custom interaction class that applies a quick scale and color change).
- `.ease-hover-peek` (A complex compound interaction class where hovering the product container slides the CSS record partially out of the CSS sleeve).
- `.ease-hover-lift` (Applied to cards and buttons to translate up while dropping a harsh, unblurred box-shadow to simulate physical depth).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the retro blocky layout, the complex CSS record sleeve simulations, and the bold typography styling. The standard `ease-*` interaction classes are attached directly to HTML elements to provide the bouncy entrance animations. The design is fully responsive and requires zero JavaScript to execute the animations or hover states.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ecommerce-vinyl-records-20983/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20983
