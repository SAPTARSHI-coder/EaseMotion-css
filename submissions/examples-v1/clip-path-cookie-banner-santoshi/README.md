# Clip Path Cookie Banner

An original cookie consent banner for EaseMotion CSS, designed to sit over an analytics dashboard. Its signature feature is a scalloped, zigzagging `clip-path` cut across the top-right corner that reads as a literal "bite taken out of a cookie" - a shape pun that ties the visual identity to the word "cookie" without leaning on an emoji or stock icon.

## 🧩 Component Overview

Most cookie banners are plain rounded rectangles with a cookie emoji glued on. This one instead:

- Builds the cookie icon itself from layered CSS gradients (no image asset, no emoji)
- Cuts the banner's silhouette with a scalloped `clip-path` notch, so the "bite" is structural, not decorative
- Sits in the lower-left corner of a mock analytics dashboard (stat cards + a CSS-only bar chart) to prove it reads clearly over busy real product UI

## ✨ Features

- Unique scalloped "cookie bite" `clip-path` silhouette on the banner's top-right corner
- Gradient-built cookie icon with chocolate-chip dots, no external image
- Three clearly differentiated actions: **Accept All** (primary gradient fill), **Reject** (outlined ghost button), **Customize** (underlined link-style button)
- Semantic, accessible markup: `role="dialog"` with `aria-labelledby` / `aria-describedby` pointing at the real heading and description
- Visible `:focus-visible` outlines on every button
- Smooth hover lift and shadow transitions on the banner and buttons
- Fully responsive: banner width, padding, and even the clip-path notch itself adapt at the mobile breakpoint
- CSS custom properties throughout for colours, radii, spacing, and motion

## 📁 Folder Structure

submissions/examples/clip-path-cookie-banner-santoshikumbhar3-art/
├── demo.html   # Dashboard backdrop markup + the cookie banner
├── style.css   # Dashboard styling, clip-path banner, icon, and responsive rules
└── README.md   # This file

## ⚙ Installation

No build tools or dependencies are required — this is a static HTML/CSS example.

```bash
# Clone the repository
git clone https://github.com/your-username/easemotion-css.git

# Navigate to this component's folder
cd easemotion-css/submissions/examples/clip-path-cookie-banner-santoshikumbhar3-art

# Open the demo directly in your browser
open demo.html   # macOS
# or
start demo.html  # Windows
```

## 🚀 Usage

1. Copy `demo.html` and `style.css` into your project.
2. Keep the cookie banner's markup structure (icon, heading, description, action buttons) intact so the `aria-labelledby` / `aria-describedby` relationships remain valid.
3. Wire up the three buttons (`.cookie-btn--primary`, `.cookie-btn--ghost`, `.cookie-btn--link`) to your consent-management logic of choice — this component intentionally ships with no JavaScript.
4. Adjust the copy inside `.cookie-heading` and `.cookie-description` to match your product's actual privacy policy.

## 🎨 Customization

All key visual properties live in `:root` as CSS custom properties:

| Variable | Controls |
|---|---|
| `--cookie-bg-start`, `--cookie-bg-end` | Banner background gradient |
| `--cookie-dough`, `--cookie-chip`, `--cookie-accent`, `--cookie-accent-dark` | Cookie icon and primary-button colour palette |
| `--cookie-text-primary`, `--cookie-text-secondary` | Heading and description text colour |
| `--banner-width` | Default banner width on desktop |
| `--radius-card`, `--radius-control` | Corner rounding for dashboard cards and buttons |

To change the notch shape itself, edit the `clip-path: polygon(...)` values on `.cookie-banner` (and its mobile override) — each pair of coordinates is one point along the zigzag, so adding or removing points makes the bite shallower or deeper.

## 🌐 Browser Compatibility

Built with widely supported CSS features:

- `clip-path: polygon()` — supported in all current major browsers (Chrome, Edge, Firefox, Safari)
- CSS Grid and Flexbox — broadly supported
- CSS custom properties (`var()`) — broadly supported
- `:focus-visible` — supported in all current major browsers

Browsers without `clip-path` support will render the banner as a plain rectangle with square corners; all content remains fully visible and usable.

## ♿ Accessibility Notes

- The banner uses `role="dialog"` with `aria-labelledby="cookie-heading"` and `aria-describedby="cookie-description"`, so assistive technology announces it as a self-contained panel with its real heading and description — not fragmented dashboard content.
- The decorative cookie icon and chip dots are marked `aria-hidden="true"` since they carry no information beyond what the heading already states.
- All three action buttons are real `<button>` elements (not styled `<div>`s), so they are reachable and operable via keyboard by default.
- Every button has a visible `:focus-visible` outline distinct from its hover state, since keyboard users tabbing through the banner won't trigger `:hover`.
- Text and background colour pairs were chosen for strong contrast against the warm dark banner background.

## 👤 Author

**Santoshi Kumbhar**
GitHub: [github.com/santoshikumbhar3-art](https://github.com/santoshikumbhar3-art)
LinkedIn: [linkedin.com/in/santoshi-kumbhar-356117286](https://linkedin.com/in/santoshi-kumbhar-356117286)