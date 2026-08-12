# Pricing Cards

A responsive, glassmorphic pricing section for EaseMotion CSS featuring three plans — Basic, Pro (featured), and Premium — built entirely with HTML5 and CSS3. No JavaScript.

## 🧩 Project Overview

Three pricing tiers are presented side by side, with the middle "Pro" plan visually promoted as the recommended choice: it's rendered larger, filled with a solid purple gradient (rather than the glassmorphic surface used by the other two), and carries a "Most Popular" badge. All three cards share the same hover lift-and-glow interaction so the page still feels cohesive.

## ✨ Features

- Three pricing cards: Basic, Pro (featured), and Premium
- Glassmorphism surfaces (`backdrop-filter: blur()`) on the Basic and Premium cards
- Featured Pro card: larger scale, solid gradient background, and a "Most Popular" badge
- Hover lift animation with a matching glow shadow on every card
- CTA buttons with their own hover lift and shadow transition
- Checkmark-prefixed feature lists for quick scanning
- Semantic HTML: `<section>`, `<article>` per card, proper heading hierarchy
- Strong color contrast between text and both the dark glass surface and the gradient surface
- Visible `:focus-visible` outlines on every CTA button
- `prefers-reduced-motion` support disables hover transitions
- Fully responsive: three columns on desktop, two columns (with the featured card spanning full width) on tablet, single column on mobile

## 📁 Folder Structure

submissions/examples/pricing-cards/
├── demo.html   # Three pricing cards with realistic plan content
├── style.css   # Design tokens, glassmorphism, featured card styling, responsive rules
└── README.md   # This file

## 🛠 Technologies Used

- HTML5 (semantic `<section>`/`<article>`, accessible link-as-button CTAs)
- CSS3 (CSS Grid, custom properties, `backdrop-filter`, media queries)
- Google Fonts: Poppins (headings/prices), Inter (body text)
- No JavaScript, no external UI frameworks

## ⚙ Installation

No build tools or dependencies are required — this is a static HTML/CSS component.

```bash
# Clone the repository
git clone https://github.com/your-username/easemotion-css.git

# Navigate to this component's folder
cd easemotion-css/submissions/examples/pricing-cards

# Open the demo directly in your browser
open demo.html   # macOS
# or
start demo.html  # Windows
```

## 🌐 Browser Support

Built with widely supported CSS features:

- `backdrop-filter` — supported in all current major browsers (Chrome, Edge, Firefox, Safari); a `-webkit-` prefix is included for broader coverage
- CSS Grid, custom properties, `:focus-visible` — broadly supported

Browsers without `backdrop-filter` support will show the Basic and Premium cards without the blur effect; the semi-transparent background and all content remain fully visible and usable.

## 🤝 Contributing

This component was built as an example page for the EaseMotion CSS repository, contributed as part of a GSSoC submission. Suggestions and improvements are welcome via Pull Request.