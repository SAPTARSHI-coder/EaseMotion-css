# SaaS Landing: Virtual Event Platform (`saas-landing-virtual-event-21750`)

This proposal provides a complete, copy-paste ready B2B landing page template designed for a modern Event Tech/Virtual Event SaaS product, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

An Event Tech SaaS brand requires a UI that feels energetic, lively, community-focused, and modern. This template achieves a Hopin-style aesthetic using a bold, vibrant palette (deep darks, bright blues, purples, corals), punchy sans-serif typography (`Inter`), and bouncy, engaging animations.

The layout includes:
- A clean, semi-transparent blurred Navigation.
- A Hero section featuring ambient blurred CSS particles and a CSS-animated event stage mockup with simulating live chat rows sliding in and emojis floating up.
- A trusted customer logos banner with staggered fade-ups.
- A Stats row featuring JavaScript-assisted count-up numbers.
- A Features grid highlighting stages, networking, booths, and analytics with abstract CSS icons.
- An Integrations section showcasing an abstract CSS networking graph with lines drawing in and nodes popping into place.
- A Pricing tier grid highlighting per-attendee plans.
- A high-contrast CTA banner.
- A clean, structured Footer.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, heavily modified locally via CSS to use energetic `cubic-bezier(0.34, 1.56, 0.64, 1)` and snappy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timings:
- `.ease-slide-up-stagger` (Configured for a bouncy, energetic vertical entrance).
- `.ease-float` (Ambient background particles slowly floating behind the hero).
- `.ease-float-up-fade` (Used in the dashboard mockup to simulate emoji reactions floating up from the stage).
- `.ease-slide-in-right` (Used in the dashboard mockup to simulate live chat messages arriving).
- `.ease-draw-line` & `.ease-pop-in` (Used sequentially in the integrations section to build an abstract connection graph).
- `.ease-hover-lift-card` (A bouncy hover elevation for pricing/feature cards).
- `.ease-count-up` (A JS-assisted counting animation for the stats bar).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the vibrant layout architecture, the energetic palette, and the complex abstract UI elements (event stage mockup, integrations graph). The standard `ease-*` interaction classes are attached directly to HTML elements to provide the bouncy entrance animations. A tiny block of inline vanilla JavaScript is included at the bottom of `demo.html` solely to trigger the `.ease-count-up` number effect.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/saas-landing-virtual-event-21750/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #21750
