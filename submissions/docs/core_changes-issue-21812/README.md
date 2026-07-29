# Language Learning Platform Landing Page — Lingva

**Issue:** [#21812 — Language Learning Platform Landing Page](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/21812)

A global-themed landing page for an AI-powered language learning platform called **Lingva**. Features floating flag emojis, course cards with nationality flags, AI speech recognition highlights, spaced repetition methodology, tiered pricing, and an FAQ accordion section.

## Structure

```
submissions/core_changes-issue-21812/
├── demo.html     # Self-contained landing page
├── style.css     # Custom styles and theming
└── README.md     # This file
```

## Sections

- **Navbar** — Glass effect with sticky positioning, course links, and CTA
- **Hero** — Global gradient with animated floating flag emojis, gradient text highlight, AI badge
- **Courses** — 6 language course cards with nationality flag swatches (Spanish, French, German, Japanese, Korean, Italian)
- **Features** — 4 feature cards (AI speech recognition, spaced repetition, cultural immersion, progress tracking) + stats grid
- **Pricing** — 3 tiers (Free $0, Premium $9.99/mo, Family $14.99/mo) with Best Value badge
- **Reviews** — Learner testimonials with language badges
- **FAQ** — CSS-only accordion using `<details>/<summary>` with 5 common questions
- **CTA** — Full-width gradient banner with dual buttons
- **Footer** — 4-column footer with languages, company, support, legal

## Theme

- **Primary gradient:** `#1e1b4b → #312e81 → #4338ca` (deep indigo)
- **Accent gradient:** `#a78bfa → #2dd4bf` (purple-to-teal)
- **Typography:** Inter (Google Fonts)
- **Animations:** `ease-slide-up`, `ease-hover-glow`, `ease-pulse`, `ease-card-lift`, custom `float` on flag emojis
