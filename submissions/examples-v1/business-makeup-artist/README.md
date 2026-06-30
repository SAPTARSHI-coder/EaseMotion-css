# Makeup Artist Landing — Sophia Rose Makeup Studio

A production-quality, copy-paste-ready **Luxury Makeup Artist Business Website** built for the GSSoC EaseMotion CSS contribution challenge. Built entirely with semantic HTML5 and custom CSS — no JavaScript, no frameworks, no CSS keyframes. All motion comes from **EaseMotion CSS classes**.

---

## Project Overview

**Sophia Rose Makeup Studio** is a premium makeup artist portfolio and booking website designed to convert visitors into bookings. It uses a warm, feminine luxury aesthetic — blush pinks, rose gold, cream whites, and gold accents — inspired by Dior Beauty, Charlotte Tilbury, Huda Beauty, and high-end bridal portfolio websites.

**Studio:** Sophia Rose Makeup Studio
**Location:** New York City, NY 10019
**Persona:** Luxury makeup artist specialising in bridal, editorial, and fashion

---

## Features

### Sections

| Section                    | Description                                                                                                                                                                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Hero**                   | Full-screen with serif heading, studio tagline, three-card portfolio mosaic (Bridal/Editorial/Glam), specialty badge cloud (Bridal, Editorial, Fashion, HD Makeup, Airbrush, Luxury Beauty), stats strip (500+ clients, 4.9★, 8+ years, 120+ bridal looks), and dual CTA |
| **Services by Occasion**   | 8 premium service cards: Bridal, Engagement, Reception Glam, Editorial, Fashion Shoots, Party & Event, Celebrity, and Photoshoot Makeup — each with rose icon, description, and Learn More button                                                                        |
| **Portfolio Gallery**      | 8-card masonry grid (4×2 with 2 tall cards): Royal Bridal Look, Soft Glam, Editorial Beauty, Celebrity Shoot, Fashion Week, Luxury Reception, Engagement Bloom, Airbrush Perfection — gradient colour-coded per look                                                     |
| **Testimonials & Reviews** | Review stats bar (500+ clients, 4.9★, 8+ years, 120+ bridal looks) + 3 star-rated testimonial cards with authentic beauty industry quotes                                                                                                                                |
| **Pricing Guide**          | 4 pricing cards (Party $195, Bridal $680 — featured, Editorial $350, Luxury Premium $1,200) with feature lists using ✿ markers and "Most Popular" badge                                                                                                                  |
| **Booking Form**           | Full 7-field booking form (Name, Email, Phone, Event Type, Event Date, Preferred Time, Message) + studio info panel (address, phone, email, hours, Instagram) and the Sophia Rose Promise                                                                                |
| **Footer**                 | Deep rose dark CTA band with ✿ motif, newsletter form, quick links, specialities list, 4 social icons (Instagram, Facebook, Pinterest, TikTok), and back-to-top                                                                                                          |

### Design Highlights

- **Warm feminine luxury aesthetic** — completely distinct from the developer and medical portfolios in this repo
- Soft pink `#fce8ed` blush surfaces, rose gold `#c97d8e`, cream `#f8f2ea`, gold `#c4a55a`
- Serif typography (`Georgia`) throughout headings, quotes, and eyebrow labels for elegance
- Italic serif used for eyebrows, taglines, quotes, and footer text for editorial flair
- Portfolio masonry grid with `grid-row: span 2` tall cards
- Hover-reveal overlay on portfolio cards (description appears on `:hover`)
- Rose gradient dark footer CTA band (deep rose `#2a1018 → #3d1828`) for dramatic contrast
- ✿ flower motif used as logo mark, list bullets, badge decorators, and CTA accent
- Price feature lists using `✿` content pseudo-element instead of standard checkmarks
- Consistent rose/blush glassmorphism throughout form focus states and stat cards
- Rose gold gradient scrollbar and text selection

---

## Folder Structure

```text
submissions/
└── examples/
    └── business-makeup-artist/
        ├── demo.html     — Complete single-page makeup artist website (all 7 sections)
        ├── style.css     — Full luxury beauty stylesheet
        └── README.md     — This file
```

---

## Responsive Design

| Breakpoint             | Behaviour                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| **Desktop** (> 1100px) | Two-column hero, four-column services and pricing grids, four-column portfolio grid            |
| **Laptop** (≤ 1100px)  | Two-column services and pricing, three-column portfolio, collapsed footer nav                  |
| **Tablet** (≤ 900px)   | Single-column hero (centred), two-column portfolio, stacked testimonials and booking form      |
| **Mobile** (≤ 600px)   | Single-column services and pricing, two-column portfolio, stacked form rows, simplified mosaic |

All typography uses `clamp()` for smooth fluid scaling.

---

## EaseMotion CSS Classes Showcased

No `@keyframes`, `animation`, or CSS `transition` motion is defined in `style.css`. All animation relies on EaseMotion classes.

### Navigation — Hover Effects

| Class                  | Element                                          |
| ---------------------- | ------------------------------------------------ |
| `ease-hover-grow`      | Studio logo in navbar and footer                 |
| `ease-hover-underline` | All nav links and footer quick links             |
| `ease-hover-lift`      | "Book Now" CTA in navbar, all buttons            |
| `ease-hover-glow`      | "Book Now" CTA, "Book Appointment" submit button |

### Entrance Animations

| Class             | Usage                                                                             |
| ----------------- | --------------------------------------------------------------------------------- |
| `ease-fade-right` | Hero text content                                                                 |
| `ease-fade-left`  | Hero visual (gallery mosaic)                                                      |
| `ease-fade-up`    | Section headers, service cards, portfolio cards, testimonial cards, pricing cards |
| `ease-pop`        | Hero badge, hero stats strip, studio promise, pricing "Most Popular" badge        |
| `ease-stagger`    | Beauty specialty badges, mosaic side cards, service cards (with `--stagger`)      |

### Continuous Animations

| Class         | Usage                                 |
| ------------- | ------------------------------------- |
| `ease-float`  | Hero main mosaic image (gentle float) |
| `ease-bounce` | Hero scroll-cue arrow                 |

### Interactive Hover Effects

| Class               | Usage                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------- |
| `ease-hover-lift`   | Service cards, portfolio cards, testimonial cards, pricing cards, booking form buttons |
| `ease-hover-shadow` | Service cards, testimonial cards, pricing cards                                        |
| `ease-hover-scale`  | "Learn More" buttons on service cards                                                  |
| `ease-hover-glow`   | Primary rose CTA buttons                                                               |
| `ease-hover-rotate` | Footer social icon buttons (Instagram, Facebook, Pinterest, TikTok)                    |

---

## Browser Compatibility

| Browser       | Support                               |
| ------------- | ------------------------------------- |
| Chrome 100+   | ✅ Full                               |
| Firefox 100+  | ✅ Full                               |
| Safari 15.4+  | ✅ Full (`backdrop-filter` supported) |
| Edge 100+     | ✅ Full                               |
| Opera 85+     | ✅ Full                               |
| Safari < 15.4 | ⚠️ Glassmorphism degrades gracefully  |

---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**
