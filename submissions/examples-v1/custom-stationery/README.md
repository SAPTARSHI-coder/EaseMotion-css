# EverInk Studio — Custom Stationery Landing Page

A complete, copy-paste-ready e-commerce landing page for a premium personalised stationery brand. Designed with a luxury editorial aesthetic inspired by Papier, Minted, Rifle Paper Co., and elegant wedding invitation boutiques. Built with semantic HTML5 and EaseMotion CSS animation classes exclusively.

---

## Screenshot Placeholder

> Open `demo.html` directly in any modern browser — no build tools, server, or dependencies required.

```
┌───────────────────────────────────────────────────────────┐
│  ✦ EverInk Studio  Invitations  Stationery  Wedding       │
├───────────────────────────────────────────────────────────┤
│                       │    ┌──────────────┐               │
│  Words Worth          │    │  Eleanor &   │  ┌──────┐     │
│  Keeping Forever      │    │    James     │  │  EJ  │     │
│                       │    │   June 14    │  └──────┘     │
│  [Start Designing]    │    └──────────────┘               │
│  [View Collection]    │  ┌──────────┐  [12 paper stocks]  │
│                       │  │ ✉️ Seal  │                     │
├───────────────────────────────────────────────────────────┤
│  Occasions · Personalization · Process · Reviews · Form   │
└───────────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
custom-stationery/
├── demo.html    ← Complete stationery landing page
├── style.css    ← Layout, colour, typography, spacing (no @keyframes)
└── README.md    ← This file
```

---

## Sections

| #   | Section                     | Description                                                                             |
| --- | --------------------------- | --------------------------------------------------------------------------------------- |
| 1   | **Navigation**              | Sticky frosted nav — serif logo, 5 links, Design Yours CTA                              |
| 2   | **Hero**                    | Split layout — invitation suite mockup (card + envelope + notebook), editorial headline |
| 3   | **Products by Occasion**    | 6 product cards (Wedding, Baby, Birthday, Business, Journals, Thank You)                |
| 4   | **Personalization Options** | 6 glassmorphism cards (Monograms, Foil, Wax Seals, Handmade Paper, Liners, Typography)  |
| 5   | **Design Process Timeline** | 4-step horizontal timeline (Template → Personalise → Approve → Deliver)                 |
| 6   | **Customer Reviews**        | 3 testimonial cards with star ratings + aggregate score bar                             |
| 7   | **Wedding Inquiry Form**    | Styled form — name, email, event date, guest count, message, submit                     |
| 8   | **Footer**                  | Shop · Wedding · Customer Care · About columns + social + legal                         |

---

## EaseMotion Classes Demonstrated

### Entrance Animations

| Class                             | Used on                                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `ease-fade-in`                    | Nav, hero kicker, hero badges, floating tag, reviews meta, footer                                     |
| `ease-slide-up`                   | Hero headline, subtitle, CTAs, section headers, occasion cards, personalisation cards, timeline steps |
| `ease-slide-in-left`              | Wedding inquiry copy column                                                                           |
| `ease-slide-in-right`             | Hero invitation suite, wedding inquiry form column                                                    |
| `ease-slide-in-from-bottom-right` | Hero envelope accent card                                                                             |
| `ease-slide-in-from-top-left`     | Hero notebook accent card                                                                             |

### Hover Effects

| Class                  | Used on                                                                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `ease-hover-lift`      | Nav Design Yours button, hero CTAs, occasion cards, personalisation cards, review cards, inquiry perks, social links, form submit button |
| `ease-hover-grow`      | Design process step icons                                                                                                                |
| `ease-hover-glow`      | Primary CTA buttons (hero, form submit)                                                                                                  |
| `ease-hover-underline` | Nav links, occasion card links, footer links                                                                                             |

### Glassmorphism

| Class             | Used on                                             |
| ----------------- | --------------------------------------------------- |
| `ease-glass-card` | Personalisation option cards, customer review cards |

### Delay Staggering

| Class                                     | Used on                                                                          |
| ----------------------------------------- | -------------------------------------------------------------------------------- |
| `ease-delay-100` through `ease-delay-700` | Hero elements, occasion grid, personalization grid, timeline steps, review cards |

---

## Responsive Support

| Breakpoint               | Behaviour                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------ |
| **Mobile** (`< 480px`)   | Single column, vertical hero, stacked CTAs, hidden notebook accent, condensed footer |
| **Tablet** (`480–860px`) | 2-column grids, mobile nav toggle, inquiry grid stacked                              |
| **Desktop** (`≥ 860px`)  | Full side-by-side hero, 3-column grids, 4-step horizontal timeline                   |

---

## Design Language

| Token         | Value             | Purpose                                 |
| ------------- | ----------------- | --------------------------------------- |
| `--ivory`     | `#fdfaf6`         | Base page background                    |
| `--parchment` | `#f8f3eb`         | Alternate section backgrounds           |
| `--gold`      | `#c9a96e`         | Primary accent — CTAs, ornaments, stars |
| `--blush`     | `#e8c4bc`         | Wedding / baby product imagery          |
| `--sage`      | `#9aab8e`         | Eco / botanical imagery                 |
| `--charcoal`  | `#2e2b28`         | Text headings, dark surfaces            |
| **Headings**  | Georgia serif     | Elegant editorial feel                  |
| **Body**      | System sans-serif | Clean, readable UI text                 |

---

## Usage Instructions

1. Copy the `custom-stationery/` folder anywhere.
2. Open `demo.html` in any modern browser.
3. The page links to EaseMotion CSS via `../../easemotion.css` (relative path inside this repository). To use outside the repo, update:

```html
<!-- Inside this repo (default) -->
<link rel="stylesheet" href="../../easemotion.css" />

<!-- External path or CDN -->
<link rel="stylesheet" href="/assets/easemotion.css" />
```

4. Replace invitation suite mockup markup with real product photography.
5. Wire `<form action="#">` to your backend or form service (Formspree, Netlify Forms, etc.).
6. Update product names, prices, and copy to match your product catalogue.

---

## Technical Notes

- **No `@keyframes`** — all animation behaviour is provided entirely by EaseMotion classes. Zero custom animation definitions in `style.css`.
- **No JavaScript frameworks** — a single 20-line inline `<script>` uses native `IntersectionObserver` to pause entrance animations off-screen and resume them when elements scroll into view.
- **No build tools** — opens directly in any browser as a static file.
- **Semantic HTML5** — `<nav>`, `<header>`, `<section>`, `<article>`, `<footer>`, `<form>`, `<blockquote>`, `<cite>`, `<time>` used throughout.
- **Accessible** — ARIA labels on icon-only links and image placeholders, `role="list"` on navigation and product lists, all form fields have associated `<label>` elements via `for`/`id`, aggregate review rating conveyed via `aria-label`.
