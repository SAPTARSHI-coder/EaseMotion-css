# App Landing: Language Flashcard App (`app-landing-flashcard-20996`)

This proposal provides a complete, copy-paste ready B2C landing page designed for a gamified language learning/flashcard mobile app, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A gamified educational application needs to project extreme playfulness, energy, and progression. This template achieves a "Duolingo-esque" aesthetic using bright primary colors (vibrant green `#58CC02`, bright blue `#1CB0F6`, and yellow `#FFC800`). The typography uses the highly rounded, friendly `Nunito` font with heavy font weights (`800`/`900`). The UI elements are heavily styled with hard drop-shadows to look like clickable, physical buttons.

The layout includes:
- A Hero section featuring a CSS mobile app mockup demonstrating a live spaced-repetition exercise, complete with a pure CSS 3D-flipping flashcard and a selectable word-bank.
- A 6-column grid showcasing supported languages with hover lift effects.
- A 3-column features grid highlighting the methodology.
- A "Gamification" split layout featuring a CSS-rendered leaderboard UI and streak counters.
- "Join 50 million learners" review grid.
- Bold App Store download Call-To-Action (CTA) sections inside a heavily styled bordered box.

### Showcased Classes
The template leverages the following EaseMotion animation and interaction utilities, specifically configured with an extremely "bouncy" bezier curve to mimic a video game UI:
- `.ease-fade-up` / `.ease-slide-up` (Configured with a hyper-bouncy `cubic-bezier(0.5, 2, 0.5, 0.8)` to make elements pop like game rewards)
- `.ease-zoom-in` (Applied to language flags and UI elements)
- `.ease-hover-lift` (Standard interaction for all buttons and language cards, configured to match the bouncy curve)
- `.ease-hover-scale` (Applied to the mascot logo and active leaderboard items)

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the layout, the phone mockup geometry, the 3D flashcard flip animation (`transform-style: preserve-3d`), the 3D button shadows, and the gamified typography. The standard `ease-*` interaction classes are attached directly to HTML elements to provide the bouncy entrance animations. The design is fully responsive and requires zero JavaScript to execute the entrance and hover effects.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/app-landing-flashcard-20996/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20996
