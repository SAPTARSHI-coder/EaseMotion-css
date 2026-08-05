# SaaS Landing: Product Analytics Platform (`saas-landing-product-analytics-21737`)

This proposal provides a complete, copy-paste ready B2B landing page template designed for a Product Analytics SaaS product (like Mixpanel or Amplitude), built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A Product Analytics SaaS brand requires a UI that feels data-driven, structured, clear, and professional. This template achieves this aesthetic using a clean light-mode architecture with a strong royal blue brand color, semantic data visualization colors (green, red, orange, purple), clean sans-serif typography (`Plus Jakarta Sans` and `Inter`), and structured, smooth animations.

The layout includes:
- A clean, glassmorphic Navigation with a CSS chart icon logo.
- A Hero section featuring a CSS-animated dashboard mockup simulating a funnel analysis report with metric bars growing horizontally and an AI insight box popping in.
- A trusted customer logos banner.
- A Features grid highlighting funnel analysis, retention, paths, and A/B testing with CSS-styled cards and data-themed icons.
- A split layout section contrasting code snippet tracking (autocapture) vs manual tracking.
- An integration logos grid.
- A Pricing tier grid highlighting MTU (Monthly Tracked Users) scale plans.
- A dark-mode CTA banner for high contrast.
- A clean, organized Footer.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, modified locally via CSS to use structured `cubic-bezier(0.2, 0.8, 0.2, 1)` and springy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timings tailored for a fast, data-tool feel:
- `.ease-grow-width` (A custom width-based entrance animation used specifically to animate the funnel data bars in the mockup).
- `.ease-slide-up-stagger` (Configured for a structured vertical entrance).
- `.ease-pop-in` (Used in the dashboard mockup to pop up the AI insight box).
- `.ease-fade-in-delayed` (Used to show the funnel drop-off stats sequentially after the bars load).
- `.ease-hover-lift-card` (A crisp hover elevation for clean white feature cards).
- `.ease-zoom-in-up` (Applied to large visual elements like the dashboard mockup and code block).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the clean layout architecture, the data-viz colors, and the complex abstract UI elements (funnel mockup, code snippet block). The standard `ease-*` interaction classes are attached directly to HTML elements to provide the precise entrance animations. No JavaScript is required for this template.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/saas-landing-product-analytics-21737/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #21737
