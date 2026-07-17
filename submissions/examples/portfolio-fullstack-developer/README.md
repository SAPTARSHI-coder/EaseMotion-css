# Full Stack Developer Portfolio — Ethan Carter

A production-quality, copy-paste-ready **Full Stack Developer Personal Portfolio** built for the GSSoC EaseMotion CSS contribution challenge. The portfolio is crafted entirely with semantic HTML5, custom CSS, and **EaseMotion CSS animation classes** — no JavaScript, no frameworks, no CSS keyframes.

---

## Project Overview

This portfolio represents the kind of personal website a senior Full Stack Developer would actually deploy. It combines a dark code-editor aesthetic with glassmorphism, neon gradients, and smooth EaseMotion-powered animations to produce a premium, scroll-worthy experience.

**Developer persona:** Ethan Carter
**Role:** Full Stack Developer
**Location:** San Francisco, CA

---

## Features

### Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen with terminal code editor mockup, floating tech badges, animated cursor, and dual CTA buttons |
| **About + Skills** | Profile card, career timeline, experience stats, and animated progress-bar skill grid |
| **Projects** | 6 premium project cards with thumbnail mockups, filter bar, tech tags, and GitHub / Live Demo actions |
| **Open Source** | 4 contribution cards for EaseMotion CSS, Open Source UI Library, Markdown Editor, and API Toolkit |
| **Blog / Writing** | 3 article preview cards with category, date, excerpt, read-time, and view count |
| **GitHub Stats** | 8 key metrics, contribution heatmap mockup, most-used languages chart, and recent activity feed |
| **Contact** | Full contact form (name, email, subject, message) plus social links and availability indicator |
| **Footer** | Large closing CTA, quick-links nav, expertise list, social links, copyright, and back-to-top button |

### Design Highlights

- Dark code-editor aesthetic inspired by GitHub, Linear, Vercel, and Raycast
- Glassmorphism cards with `backdrop-filter: blur` and subtle border glow on hover
- Terminal-inspired hero with syntax-highlighted TypeScript code snippet
- Neon gradient palette: Purple → Cyan → Blue → Emerald
- CSS custom properties (design tokens) for consistent theming throughout
- Monospace font accents for code-oriented elements
- Premium hover effects on every interactive element
- Polished scrollbar and text selection styling

---

## Folder Structure

```text
submissions/
└── examples/
    └── portfolio-fullstack-developer/
        ├── demo.html     — Complete single-page portfolio (all 8 sections)
        ├── style.css     — Full stylesheet with CSS variables, grid, flexbox, glassmorphism
        └── README.md     — This file
```

---

## Responsive Design

The layout is fully responsive across all screen sizes using CSS Grid and Flexbox.

| Breakpoint | Behaviour |
|---|---|
| **Desktop** (> 1100px) | Two-column hero, three-column project grid, four-column stats grid |
| **Laptop** (≤ 1100px) | Two-column project grid, adjusted about layout, collapsed footer |
| **Tablet** (≤ 900px) | Single-column hero, stacked about section, mobile nav toggle shown |
| **Mobile** (≤ 600px) | Single-column for all sections, stacked form rows, compressed typography |

The `clamp()` function is used throughout for fluid typography that scales naturally between breakpoints without fixed media-query overrides.

---

## EaseMotion CSS Classes Showcased

All animations in this portfolio are applied exclusively via EaseMotion CSS classes — no CSS `@keyframes`, `animation`, or `transition` properties are used for motion. The following EaseMotion classes are used:

### Entrance Animations
| Class | Usage |
|---|---|
| `ease-fade-up` | Hero badge, section content, skill bars, project cards, blog cards |
| `ease-fade-left` | Hero terminal mockup, bio section |
| `ease-fade-right` | Hero content, profile sidebar |
| `ease-pop` | Hero badge entrance |
| `ease-scale-in` | Stats cards |
| `ease-slide-up` | Section headers |

### Hover Effects
| Class | Usage |
|---|---|
| `ease-hover-lift` | CTA buttons, project cards, exp-cards, contact links, footer CTAs |
| `ease-hover-grow` | Tech badges |
| `ease-hover-scale` | Project action buttons, filter buttons |
| `ease-hover-shadow` | Project cards, OSS cards |
| `ease-hover-glow` | Primary CTA button |
| `ease-hover-underline` | Blog "Read More" links, footer nav links |
| `ease-hover-rotate` | Social icon buttons |

### Continuous Animations
| Class | Usage |
|---|---|
| `ease-pulse` | Profile availability status dot, contact availability dot |
| `ease-float` | Hero terminal mockup |
| `ease-bounce` | Hero scroll-cue arrow |

### Sequencing
| Class | Usage |
|---|---|
| `ease-stagger` | Tech badges, skill bars, OSS cards, blog cards (combined with `--stagger` CSS custom property) |

---

## Browser Compatibility

| Browser | Support |
|---|---|
| Chrome 100+ | ✅ Full |
| Firefox 100+ | ✅ Full |
| Safari 15.4+ | ✅ Full (`backdrop-filter` supported) |
| Edge 100+ | ✅ Full |
| Opera 85+ | ✅ Full |
| Safari < 15.4 | ⚠️ Glassmorphism degrades gracefully (opaque fallback) |

---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**
