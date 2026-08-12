# Technical Writer Portfolio — Emma Brooks

A production-quality, copy-paste-ready **Technical Writer Personal Portfolio** built for the GSSoC EaseMotion CSS contribution challenge. The entire site is authored in semantic HTML5 and custom CSS — no JavaScript, no frameworks, no CSS keyframes. All motion comes from **EaseMotion CSS classes**.

---

## Project Overview

This portfolio is designed to feel like the documentation platforms that Emma Brooks specialises in writing for: clean, editorial, precise. It combines a dark editorial aesthetic with glassmorphism cards, soft gradient accents, and smooth EaseMotion animations.

**Writer persona:** Emma Brooks  
**Role:** Technical Writer  
**Location:** London, UK · Remote Worldwide

---

## Features

### Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen with Markdown editor mockup, tool badges, animated cursor, and triple CTA |
| **Articles / Documentation** | 6 editorial writing cards with category tags, dates, reading times, and filter bar |
| **Publications & Clients** | 6 publication cards (Dev.to, Medium, Hashnode, Smashing Magazine, freeCodeCamp, CSS-Tricks) and 6 client cards (Microsoft, GitHub, Postman, Atlassian, Docker, DigitalOcean) |
| **Skills** | 12 skill cards covering Markdown, API Docs, OpenAPI/Swagger, Tutorials, User Guides, Product Docs, Git, Doc Testing, Docs-as-Code, Docusaurus, MkDocs, and Notion — each with proficiency dots |
| **Testimonials** | 3 premium testimonial cards with star ratings, quotes, avatars, and client/company labels |
| **Writing Samples CTA** | Illustrated document mockup, sample highlights, and download/view CTA buttons |
| **Contact** | Full form (name, email, subject, message) + social links panel with Email, LinkedIn, GitHub, Medium, Dev.to, and Location |
| **Footer** | Large closing CTA, newsletter subscription form, quick links, services, social links, and back-to-top |

### Design Highlights

- Dark editorial aesthetic inspired by Stripe Docs, Linear, Notion, and GitHub Docs
- Three-colour brand palette: Purple + Cyan + Warm Orange
- Glassmorphism cards with `backdrop-filter: blur` and soft border glows
- Live Markdown editor mockup with syntax highlighting (headings, code, bash commands)
- Animated document illustration in the Writing Samples section
- Category colour-coding for article cards (API Docs, Tutorial, Style Guide, Open Source, etc.)
- Publication and client cards with real platform icons (inline SVG, no external library)
- Proficiency dot indicators on every skill card
- Star ratings and italic quote styling on testimonials
- Newsletter form in the footer
- Smooth scrollbar, `::selection`, and focus-visible styling

---

## Folder Structure

```text
submissions/
└── examples/
    └── technical-writer-portfolio/
        ├── demo.html     — Complete single-page portfolio (all 8 sections)
        ├── style.css     — Full stylesheet with CSS variables, grid, flexbox, glassmorphism
        └── README.md     — This file
```

---

## Responsive Design

| Breakpoint | Behaviour |
|---|---|
| **Desktop** (> 1100px) | Two-column hero, three-column article grid, four-column skills grid |
| **Laptop** (≤ 1100px) | Three-column skills, two-column pub/client grids, collapsed footer nav |
| **Tablet** (≤ 900px) | Single-column hero (centred), two-column articles and skills, stacked testimonials and contact |
| **Mobile** (≤ 600px) | Single-column throughout, stacked form rows, compressed footer |

Typography uses `clamp()` throughout for fluid scaling without hard breakpoint overrides.

---

## EaseMotion CSS Classes Showcased

All animations use EaseMotion classes exclusively. No `@keyframes`, `animation`, or CSS transition motion is defined in `style.css`.

### Navigation — Hover Effects
| Class | Element |
|---|---|
| `ease-hover-grow` | Logo in navbar and footer |
| `ease-hover-underline` | Nav links, footer nav links |
| `ease-hover-lift` | Nav CTA, all buttons |

### Entrance Animations
| Class | Usage |
|---|---|
| `ease-fade-right` | Hero content block |
| `ease-fade-left` | Hero editor mockup |
| `ease-fade-up` | Section headers, article cards, skill cards, stat cards |
| `ease-pop` | Hero availability badge |
| `ease-stagger` | Tool badges, article cards, OSS cards (with `--stagger` CSS custom property) |

### Continuous / Ambient Animations
| Class | Usage |
|---|---|
| `ease-float` | Hero editor mockup, document illustration in samples section |
| `ease-pulse` | Hero badge dot, contact availability dot |
| `ease-bounce` | Hero scroll-cue arrow |

### Hover Effects (Interactive Elements)
| Class | Usage |
|---|---|
| `ease-hover-lift` | Article cards, skill cards, publication cards, client cards, testimonial cards, CTA buttons, contact links, back-to-top, footer brand |
| `ease-hover-shadow` | Article cards, skill cards |
| `ease-hover-scale` | Newsletter subscribe button |
| `ease-hover-glow` | Primary CTA buttons |
| `ease-hover-rotate` | Footer social icon buttons |
| `ease-hover-underline` | Blog "Read Article" links, footer quick links |

---

## Browser Compatibility

| Browser | Support |
|---|---|
| Chrome 100+ | ✅ Full |
| Firefox 100+ | ✅ Full |
| Safari 15.4+ | ✅ Full (`backdrop-filter` supported) |
| Edge 100+ | ✅ Full |
| Opera 85+ | ✅ Full |
| Safari < 15.4 | ⚠️ Glassmorphism degrades gracefully (no blur, opaque background) |
| IE 11 | ❌ Not supported (CSS Grid, custom properties, `clamp()`) |

---

## Credits

- **Portfolio design & content:** Emma Brooks persona / GSSoC EaseMotion CSS submission
- **Animation library:** [EaseMotion CSS](https://github.com/GSSoC/easemotion-css)
- **Typography:** Inter (sans-serif) + JetBrains Mono (monospace) via system fonts
- **Icons:** Inline SVG only — no external icon library
- **Design inspiration:** Stripe Docs, Linear, Notion, GitHub Docs, Vercel, Medium, Smashing Magazine

---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**
