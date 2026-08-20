# Lumen Spa & Wellness — Full Landing Page

A complete, self-contained, ready-to-copy Spa &amp; Wellness business landing
page built with EaseMotion CSS entrance and hover animation classes.
Soft pastel, tranquil aesthetic. Opens directly in a browser — no build
step required.

## Files
- `demo.html` - Full landing page markup
- `style.css` - All styles, including EaseMotion animation classes and page layout
- `README.md` - This file

## Required Sections (per issue checklist)
- ✅ Tranquil hero with gentle entrance animations
- ✅ Treatment menu cards (6 treatments with pricing)
- ✅ Packages/pricing (3 bundled packages, one featured)
- ✅ Facility gallery (6 spaces)
- ✅ Gift card CTA
- ✅ Booking form (name, email, treatment, date)
- ✅ Testimonials (3 guest reviews with star ratings)

## EaseMotion Classes Showcased

| Class | Used For |
|---|---|
| `.ease-fade-in` | Nav, section headers, gift card CTA, booking form, footer |
| `.ease-slide-up` | Hero eyebrow, heading, subtext, CTA buttons (staggered via `animation-delay`) |
| `.ease-hover-lift` | Treatment cards, package cards, review cards |
| `.ease-hover-grow` | Buttons and gallery items on hover |
| `.ease-hover-underline` | Nav links |
| `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline` | All call-to-action buttons |

Entrance animations are staggered using inline `animation-delay` on grid
items (treatment cards, package cards, gallery items, reviews) for a
soft, cascading reveal that matches the calm aesthetic.

## Layout Classes
Page-specific layout/structure classes are namespaced under `spa-*`
(e.g. `.spa-hero`, `.spa-grid`, `.spa-card`) to avoid any collision with
`core/` class names, while every interactive/animated element uses the
shared `ease-*` classes.

## Design Notes
- Soft pastel palette: warm blush (`#f6e9e4`), sage (`#e7ece3`), and a
  muted terracotta accent (`#b08968`) for a luxurious, calming feel.
- Pill-shaped buttons (`border-radius: 999px`) reinforce the soft,
  organic aesthetic throughout.
- The featured package card uses a blush background and a "Most Popular"
  badge to draw attention without breaking the gentle tone.

## Responsive Behavior
- **Desktop**: 3-column grids for treatments, packages, gallery, and reviews
- **Tablet (≤900px)**: grids collapse to 2 columns, booking form fields stack
- **Mobile (≤640px)**: nav links hide, all grids collapse to 1 column, hero
  buttons stack vertically

## Notes for Customization
- Swap `Lumen Spa & Wellness` branding, copy, and contact info for your
  own business.
- Gallery items use gradient placeholder tiles with labels — swap for
  real photography as needed.
- All colors are driven by `--ease-color-*` custom properties at the top
  of `style.css` for easy theme changes.
