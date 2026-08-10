# SaaS Landing: Survey & Research Platform (`saas-landing-survey-research-21749`)

This proposal provides a complete, copy-paste ready B2B landing page template designed for a Survey/Market Research SaaS product, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A Research/Survey SaaS brand requires a UI that feels highly legible, trustworthy, and accessible. This template achieves a SurveyMonkey/Qualtrics-style aesthetic using a clean, spacious layout, a crisp primary palette (deep navy, bright blue, accessible green), highly legible typography (`Mulish`), and crisp, responsive animations.

The layout includes:
- A clean, semi-transparent blurred Navigation.
- A Hero section featuring a CSS-animated survey builder mockup simulating questions sliding in and a star rating interaction popping into place.
- A trusted enterprise customer logos banner with staggered fade-ups.
- A Features grid highlighting logic branching, panels, and AI analysis with abstract CSS icons.
- A Use Cases section featuring an abstract CSS analytics chart with growing bars and a drawing SVG trend line.
- A dark-mode Stats section featuring JavaScript-assisted count-up numbers.
- A Pricing tier grid highlighting free and team plans.
- A high-contrast CTA banner.
- A clean, organized Footer.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, heavily modified locally via CSS to use crisp `cubic-bezier(0.16, 1, 0.3, 1)` and smooth `cubic-bezier(0.25, 0.1, 0.25, 1)` timings:
- `.ease-slide-up-stagger` (Configured for a crisp, legible vertical entrance).
- `.ease-slide-in-right` (Used in the dashboard mockup to simulate survey questions loading).
- `.ease-pop-in` (Used in the dashboard mockup to simulate interactive star ratings being selected).
- `.ease-grow-up` & `.ease-draw-path` (Used sequentially in the Use Cases section to build an abstract analytics chart).
- `.ease-hover-lift-card` (A smooth hover elevation for pricing/feature cards).
- `.ease-count-up` (A JS-assisted counting animation for the stats bar).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the crisp layout architecture, the accessible palette, and the complex abstract UI elements (survey builder mockup, analytics chart). The standard `ease-*` interaction classes are attached directly to HTML elements to provide the precise entrance animations. A tiny block of inline vanilla JavaScript is included at the bottom of `demo.html` solely to trigger the `.ease-count-up` number effect.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/saas-landing-survey-research-21749/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #21749
