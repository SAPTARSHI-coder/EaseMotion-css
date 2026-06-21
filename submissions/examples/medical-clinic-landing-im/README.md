# Riverside Health Clinic — Full Landing Page

A complete, self-contained, ready-to-copy Healthcare business landing page
built with EaseMotion CSS entrance and hover animation classes. Opens
directly in a browser — no build step required.

## Files
- `demo.html` - Full landing page markup
- `style.css` - All styles, including EaseMotion animation classes and page layout
- `README.md` - This file

## Required Sections (per issue checklist)
- ✅ Hero with appointment CTA
- ✅ Departments/specialties grid (8 specialties)
- ✅ Doctor profiles with credentials (3 doctors)
- ✅ Patient portal CTA
- ✅ Insurance accepted logos (6 providers)
- ✅ Patient reviews (3 testimonials with star ratings)
- ✅ Emergency contact banner

## EaseMotion Classes Showcased

| Class | Used For |
|---|---|
| `.ease-fade-in` | Section headers, banner, footer, insurance row entrance |
| `.ease-slide-up` | Hero heading, subtext, and CTA buttons (staggered via `animation-delay`) |
| `.ease-hover-lift` | Department cards, doctor cards, review cards |
| `.ease-hover-grow` | Buttons and insurance logos on hover |
| `.ease-hover-underline` | Nav links |
| `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline` | All call-to-action buttons |

Entrance animations are staggered using inline `animation-delay` on grid
items (e.g. department cards, doctor cards, review cards) to create a
cascading reveal effect without extra JS.

## Layout Classes
Page-specific layout/structure classes are namespaced under `clinic-*`
(e.g. `.clinic-hero`, `.clinic-grid`, `.clinic-card`) to avoid any
collision with `core/` class names, while every interactive/animated
element uses the shared `ease-*` classes.

## Responsive Behavior
- **Desktop**: 4-column department grid, 3-column doctor/review grids
- **Tablet (≤900px)**: grids collapse to 2 columns
- **Mobile (≤640px)**: nav links hide, grids collapse to 1 column, hero
  buttons stack vertically

## Notes for Customization
- Swap `Riverside Health Clinic` branding, copy, and contact info for your
  own business.
- Doctor avatars use initials in colored circles as lightweight
  placeholders — swap for real photos as needed.
- All colors are driven by `--ease-color-primary` and related custom
  properties at the top of `style.css` for easy theme changes.
