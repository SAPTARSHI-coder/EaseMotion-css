# SaaS Landing: AI Customer Support Bot (`saas-landing-ai-support-bot-21741`)

This proposal provides a complete, copy-paste ready B2B landing page template designed for an AI Customer Support SaaS product, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

An AI automation SaaS brand requires a UI that feels highly futuristic, fast, intelligent, and clean. This template achieves a next-gen Intercom/Zendesk AI aesthetic using a dark-mode architecture with glowing neon accents (purple, indigo, pink), modern geometric typography (`Outfit`), and fluid, snappy animations.

The layout includes:
- A clean, glassmorphic Navigation with a CSS "bot eye" glowing logo.
- A Hero section featuring ambient CSS glowing orbs and a CSS-animated chatbot dashboard mockup simulating messages sliding up and a typing indicator.
- A trusted integration logos banner with staggered fade-ups.
- A Features grid highlighting deflection, handoff, and learning with abstract glowing CSS icons inside glass cards.
- A large glassmorphic Stats section featuring JavaScript-assisted count-up numbers.
- A Pricing tier grid highlighting usage-based plans.
- A high-contrast CTA banner.
- A clean, organized Footer.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, heavily modified locally via CSS to use fluid `cubic-bezier(0.16, 1, 0.3, 1)` and snappy `cubic-bezier(0.25, 1.2, 0.25, 1)` timings:
- `.ease-slide-up-stagger` (Configured for a sharp, fluid vertical entrance).
- `.ease-slide-up-msg` (Used in the dashboard mockup to simulate chat bubbles popping up rapidly).
- `.ease-pulse-glow` (Used to animate the ambient background orbs).
- `.ease-hover-lift-card` (A crisp hover elevation for glass pricing/feature cards).
- `.ease-hover-glow` (A neon glowing hover state for buttons).
- `.ease-count-up` (A JS-assisted counting animation for the stats bar).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the dark-mode layout architecture, the glowing palette, and the complex abstract UI elements (chatbot mockup, typing dots, glassmorphic cards). The standard `ease-*` interaction classes are attached directly to HTML elements to provide the precise entrance animations. A tiny block of inline vanilla JavaScript is included at the bottom of `demo.html` solely to trigger the `.ease-count-up` number effect and to hide the typing indicator dynamically in the mockup.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/saas-landing-ai-support-bot-21741/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #21741
