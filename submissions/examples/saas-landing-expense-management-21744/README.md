# SaaS Landing: Expense Management (`saas-landing-expense-management-21744`)

This proposal provides a complete, copy-paste ready B2B landing page template designed for a Finance/Expense Management SaaS product, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A Finance SaaS brand requires a UI that feels clean, snappy, efficient, and trustworthy. This template achieves an Expensify-style aesthetic using a crisp primary palette (trustworthy green, slate grays, minimal white space), highly legible typography (`Plus Jakarta Sans`), and swift, responsive animations.

The layout includes:
- A clean, semi-transparent blurred Navigation.
- A Hero section featuring a CSS-animated expense dashboard mockup simulating rows sliding in, an approval button popping up, and an infinite receipt scanning overlay animation.
- A trusted modern finance team logos banner with staggered fade-ups.
- A Features grid highlighting receipt scanning, approval flows, and reporting with abstract CSS icons.
- A dark-mode Stats section featuring JavaScript-assisted count-up numbers.
- An Integrations section featuring an abstract CSS sync animation with vertical lines drawing downward to connect nodes.
- A Pricing tier grid highlighting per-user plans.
- A high-contrast CTA banner.
- A clean, organized Footer.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, heavily modified locally via CSS to use snappy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` and swift `cubic-bezier(0.2, 1, 0.2, 1)` timings:
- `.ease-slide-up-stagger` (Configured for a snappy, efficient vertical entrance).
- `.ease-slide-in-right` (Used in the dashboard mockup to simulate expense rows loading).
- `.ease-pop-in` (Used in the dashboard mockup to simulate interactive approval buttons appearing).
- `.ease-draw-line` & `.ease-pop-in` (Used sequentially in the Integrations section to build an abstract syncing animation).
- `.ease-hover-lift-card` (A snappy hover elevation for pricing/feature cards).
- `.ease-count-up` (A JS-assisted counting animation for the stats bar).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the crisp layout architecture, the minimal palette, and the complex abstract UI elements (dashboard mockup, sync animation). The standard `ease-*` interaction classes are attached directly to HTML elements to provide the precise entrance animations. A tiny block of inline vanilla JavaScript is included at the bottom of `demo.html` solely to trigger the `.ease-count-up` number effect.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/saas-landing-expense-management-21744/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #21744
