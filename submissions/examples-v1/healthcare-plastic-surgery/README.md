# Plastic Surgery Clinic Website — Lumina Aesthetic Clinic

A production-quality, copy-paste-ready **Luxury Plastic Surgery Clinic** website built for the GSSoC EaseMotion CSS contribution challenge. Built entirely with semantic HTML5 and custom CSS — no JavaScript, no frameworks, no CSS keyframes. All motion comes from **EaseMotion CSS classes**.

---

## Project Overview

**Lumina Aesthetic Clinic** is a premium cosmetic surgery practice website designed to inspire trust, professionalism, and confidence. It uses a light, luxury aesthetic — cream whites, warm beiges, and gold accents — inspired by Beverly Hills clinics, Mayo Clinic's design sensibility, Apple, and Framer.

**Clinic:** Lumina Aesthetic Clinic
**Location:** Beverly Hills, CA 90210
**Persona:** Board-certified plastic and cosmetic surgery practice

---

## Features

### Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen with clinic name, tagline, before/after preview card, floating trust badges (Board Certified, 20+ Years, 5,000+ Procedures, 98% Satisfaction), award badge, and dual CTA |
| **Procedures** | 8 premium procedure cards (Rhinoplasty, Facelift, Blepharoplasty, Liposuction, Breast Augmentation, Chin Contouring, Mommy Makeover, Botox & Fillers) with gold icons and descriptions |
| **Surgeon Credentials** | Lead surgeon profile (Dr. Eleanor Voss, MD, FACS) with avatar, board certifications, education, awards, memberships, and 3 supporting specialist cards |
| **Before & After Gallery** | 6 comparison cards with colour-coded before/after halves, procedure labels, detail text, and surgeon attribution |
| **Testimonials** | 3 gold star-rated testimonial cards with patient avatars, procedure labels, and authentic quotes |
| **Financing Options** | 4 financing cards (Monthly Installments, 0% Interest Plans, Insurance Guidance, Flexible Payments) with feature lists and CTAs. Featured "Most Popular" badge |
| **Consultation Form** | Full booking form (Name, Email, Phone, Procedure dropdown, Preferred Date, Message) with clinic address, phone, email, hours, and 24/7 emergency line |
| **Footer** | Dark luxury CTA band, newsletter form, quick links, procedure list, social icons (Instagram, Facebook, YouTube, RealSelf), legal links, and back-to-top |

### Design Highlights

- **Light luxury aesthetic** — white, soft beige (#f5f0e8), warm gold (#b8986a), subtle gradients
- Completely different from the dark-theme developer portfolios in this repo
- Glassmorphism applied to before/after preview card and hero floating elements
- Gold gradient text for section headings and accent elements
- Serif typography (`Georgia`) for headings and quotes to convey prestige
- Lead surgeon profile with decorative avatar ring and radial glow
- Colour-coded before/after gallery halves using warm gradient tones
- "Most Popular" badge on featured financing card
- HIPAA compliance note and emergency contact line in the consultation section
- Inline SVG icons only — no external icon library dependency
- Gold-accent scrollbar and text selection styling

---

## Folder Structure

```text
submissions/
└── examples/
    └── plastic-surgery-clinic/
        ├── demo.html     — Complete single-page clinic website (all 8 sections)
        ├── style.css     — Full luxury medical stylesheet
        └── README.md     — This file
```

---

## Responsive Design

| Breakpoint | Behaviour |
|---|---|
| **Desktop** (> 1100px) | Two-column hero, four-column procedures grid, four-column financing grid |
| **Laptop** (≤ 1100px) | Two-column procedures and financing grids, adjusted surgeon layout |
| **Tablet** (≤ 900px) | Single-column hero (centred), two-column gallery and specialists, stacked testimonials and form |
| **Mobile** (≤ 600px) | Single-column for all grids, stacked form rows, simplified footer |

Typography uses `clamp()` throughout for fluid scaling.

---

## EaseMotion CSS Classes Showcased

All animations use EaseMotion classes exclusively. No `@keyframes` or CSS `animation` rules exist in `style.css`.

### Navigation — Hover Effects
| Class | Element |
|---|---|
| `ease-hover-grow` | Clinic logo in navbar and footer |
| `ease-hover-underline` | All nav links and footer quick links |
| `ease-hover-lift` | "Book Consultation" CTA button |
| `ease-hover-glow` | Primary gold CTA buttons |

### Entrance Animations
| Class | Usage |
|---|---|
| `ease-fade-right` | Hero text content |
| `ease-fade-left` | Hero visual (image frame + BA preview) |
| `ease-fade-up` | Section headers, procedure cards, gallery cards, testimonials, financing cards |
| `ease-pop` | Hero availability badge, award badge, surgeon board cert badge, clinic promise box |
| `ease-stagger` | Trust badges, procedure cards, financing cards (with `--stagger` CSS custom property) |

### Continuous Animations
| Class | Usage |
|---|---|
| `ease-float` | Hero image frame (gentle floating effect) |
| `ease-bounce` | Hero scroll-cue arrow |

### Card & Interactive Hover Effects
| Class | Usage |
|---|---|
| `ease-hover-lift` | Procedure cards, specialist cards, testimonial cards, financing cards, contact links, all buttons |
| `ease-hover-shadow` | Procedure cards, gallery cards, testimonial cards, financing cards |
| `ease-hover-scale` | "Learn More" buttons on procedure cards |
| `ease-hover-glow` | Primary gold CTA buttons, "Book Consultation" button |
| `ease-hover-rotate` | Footer social media icon buttons |

---

## Browser Compatibility

| Browser | Support |
|---|---|
| Chrome 100+ | ✅ Full |
| Firefox 100+ | ✅ Full |
| Safari 15.4+ | ✅ Full (`backdrop-filter` supported) |
| Edge 100+ | ✅ Full |
| Opera 85+ | ✅ Full |
| Safari < 15.4 | ⚠️ Glassmorphism degrades gracefully (no blur, opaque fallback) |

---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**
