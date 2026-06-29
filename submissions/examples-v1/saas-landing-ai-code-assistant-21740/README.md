# SaaS Landing: AI Code Assistant (`saas-landing-ai-code-assistant-21740`)

This proposal provides a complete, copy-paste ready B2B landing page template designed for a Developer AI SaaS product (like a code completion assistant), built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A Developer Tools SaaS brand requires a UI that feels highly technical, clean, fast, and engineered. This template achieves a Cursor/Copilot-style aesthetic using a stark dark-mode architecture with subtle glowing syntax-highlight accents, a mix of clean UI typography (`Inter`) and monospaced code typography (`JetBrains Mono`), and sharp, snappy animations.

The layout includes:
- A clean Navigation with a CSS code logo `</>`.
- A Hero section featuring ambient glowing grid and a CSS-animated IDE mockup simulating typing and ghost-text auto-completion appearing.
- A technical editor logos banner with staggered fade-ups.
- A Features grid highlighting autocomplete, chat, refactor, and tests with CSS-styled cards.
- A glowing Testimonials section for developer quotes.
- A Pricing tier grid highlighting per-seat plans.
- A high-contrast CTA banner.
- A clean, organized Footer.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, heavily modified locally via CSS to use sharp `cubic-bezier(0.16, 1, 0.3, 1)` and snappy `cubic-bezier(0.2, 1, 0.2, 1)` timings tailored for a fast dev-tool feel:
- `.ease-slide-up-stagger` (Configured for a sharp vertical entrance).
- `.ease-fade-in-delayed` (Used in the IDE mockup to simulate ghost text appearing after a delay).
- `.ease-pop-in` (Used in the IDE mockup to pop up the AI suggestion helper box).
- `.ease-pulse-glow` (Used to animate the ambient background orbs).
- `.ease-hover-lift-card` (A sharp hover elevation for pricing/feature cards).
- `.ease-hover-glow-box` (A neon glowing hover state for IDE mockups and testimonials).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the dark-mode layout architecture, the syntax highlighting colors, and the complex abstract UI elements (IDE mockup, typing cursor). The standard `ease-*` interaction classes are attached directly to HTML elements to provide the precise entrance animations. A tiny block of inline vanilla JavaScript is included at the bottom of `demo.html` solely to loop the typing and ghost-text CSS animations for demonstration purposes.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/saas-landing-ai-code-assistant-21740/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #21740
