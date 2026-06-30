# App Landing: Journaling & Mental Wellness (`app-landing-journaling-20997`)

This proposal provides a complete, copy-paste ready B2C landing page designed for a mental wellness/private journaling mobile app, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A private journaling application needs to project safety, calm, and quiet reflection. This template achieves a "twilight/safe-space" aesthetic using a dark Slate Blue background (`#0F172A`), Soft Indigo (`#818CF8`), and Warm Gold (`#FDE68A`). The typography pairs the elegant, reflective serif `Playfair Display` with the highly readable sans-serif `Inter`.

The layout includes:

- A Hero section featuring a CSS mobile app mockup showing a live journaling entry (with a blinking CSS cursor) and floating encryption alerts, set against soft, glowing CSS background orbs.
- A 3-column features grid outlining guided prompts, mood insights, and evening wind-downs.
- A "Privacy & Security" split layout featuring a rotating, particle-emitting CSS shield graphic to visually reinforce end-to-end encryption.
- A flex layout displaying sample journal prompts.
- A clear 2-tier subscription architecture (Free vs Premium).
- "Stories of growth" review grid.
- Bold App Store download Call-To-Action (CTA) sections with frosted glass (`backdrop-filter`) effects.

### Showcased Classes

The template leverages the following EaseMotion animation and interaction utilities, specifically configured with a very slow, calming bezier curve to mimic deep breaths:

- `.ease-fade-up` / `.ease-slide-up` (Configured with an extremely smooth, slow `1.5s cubic-bezier(0.22, 1, 0.36, 1)` to evoke calm)
- `.ease-zoom-in` (Applied to the background glowing orbs and the text-entry area within the phone mockup. Also utilizes a CSS blur filter transition for a "waking up" effect)
- `.ease-slide-left` / `.ease-slide-right` (Used for sequential loading of privacy features)
- `.ease-hover-lift` (Soft, slow interaction for buttons and feature cards)
- `.ease-hover-scale` (Applied to the logo mark)

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser.

The CSS handles the dark mode layout, the phone mockup geometry, the complex frosted glass effects, and the custom typography. The standard `ease-*` interaction classes are attached directly to HTML elements to provide the slow entrance animations. The design is fully responsive and requires zero JavaScript to execute the entrance and hover effects.

_Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/app-landing-journaling-20997/` directory to avoid modifying core files directly and to ensure zero deletions._

## 🔗 Related Issue

Closes Issue #20997
