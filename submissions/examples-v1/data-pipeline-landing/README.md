# PipelineIQ — Data Pipeline Landing Page

A complete, copy-paste-ready SaaS landing page for a modern Data Pipeline platform, built with semantic HTML5 and EaseMotion CSS utility classes. Styled after leading data integration products like Fivetran, Airbyte, and Stripe.

---

## Screenshot

> _(Open `demo.html` directly in any browser — no build tools or server required.)_

```
┌────────────────────────────────────────────────────┐
│  ⬡ PipelineIQ    Features  Integrations  Pricing   │
├────────────────────────────────────────────────────┤
│                                                    │
│       Move Data.  Build Faster.                    │
│       [Get Started Free]  [Watch Demo →]           │
│                                                    │
│  ┌──────────┐  ══════  ┌─────────┐  ══════  ┌───┐ │
│  │ Sources  │  ──────▶ │Pipeline │ ──────▶  │ D │ │
│  └──────────┘          │   IQ    │          └───┘ │
│                        └─────────┘                │
├────────────────────────────────────────────────────┤
│  Features · Integrations · Pricing · Customers     │
└────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
data-pipeline-landing/
├── demo.html     ← Complete landing page
├── style.css     ← Layout helpers & color tokens
└── README.md     ← This file
```

---

## Sections

| Section          | Description                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------ |
| **Navigation**   | Sticky nav with logo, links, and CTA buttons                                               |
| **Hero**         | Headline, subheading, CTAs, animated pipeline diagram                                      |
| **Social Proof** | Customer logo bar (FinEdge, DataHive, RocketOps…)                                          |
| **Features**     | 6-card grid (300+ Connectors, ETL/ELT, Scheduling, Monitoring, Incremental Sync, Security) |
| **Integrations** | Source → Engine → Destination logo layout                                                  |
| **Pricing**      | Starter ($49), Growth ($199), Enterprise (Custom)                                          |
| **Customers**    | Testimonial cards + stat bar (2B+ rows, 300+ connectors, 99.9% uptime)                     |
| **Docs CTA**     | Full-width developer call-to-action with code snippet                                      |
| **Footer**       | Product · Resources · Company columns + social links                                       |

---

## EaseMotion Classes Demonstrated

### Entrance Animations

- `ease-fade-in` — nav, badge, hero trust line, proof bar
- `ease-slide-up` — hero heading, subtitle, CTAs, feature cards, pricing cards
- `ease-slide-in-left` — integrations source column
- `ease-slide-in-right` — integrations destination column

### Hover Effects

- `ease-hover-lift` — buttons, logo cards, feature cards, pricing cards, customer cards
- `ease-hover-grow` — pipeline source/destination nodes, proof logos
- `ease-hover-glow` — primary CTA button, featured pricing card
- `ease-hover-underline` — nav links, footer links, feature card links
- `ease-hover-pulse-glow` — pipeline engine center node

### Looping / Continuous Animations

- `ease-pulse` — badge dot, decorative orbs
- `ease-rotate` — pipeline engine icon
- `ease-float` — integration arrow, docs CTA icon
- `ease-gradient-text-animated` — hero headline accent, stat numbers

### Glassmorphism

- `ease-glass-card` — pipeline illustration, feature cards, logo cards, pricing cards, docs CTA

### Delay Staggering

- `ease-delay-100` through `ease-delay-600` — entrance stagger on all grid items

### Layout Utilities

- `ease-container` — max-width centered wrapper
- `ease-flex`, `ease-justify-between`, `ease-justify-center`, `ease-items-center`
- `ease-gap-4`, `ease-gap-8`, `ease-flex-wrap`
- `ease-text-center`

---

## Responsive Support

| Breakpoint              | Behaviour                                                             |
| ----------------------- | --------------------------------------------------------------------- |
| **Mobile** (< 640px)    | Single-column layout, hidden nav links, stacked pipeline diagram      |
| **Tablet** (640–1023px) | 2-column feature grid, wrapped integration section                    |
| **Desktop** (≥ 1024px)  | Full 3-column layouts, side-by-side integrations, scaled pricing card |

---

## Usage Instructions

1. Copy the `data-pipeline-landing/` folder anywhere on your machine.
2. Open `demo.html` in any modern browser.
3. The page links to `../../easemotion.css` (relative path within this repo). If you move the folder outside the repo, update the `<link>` tag to point to your EaseMotion CSS build:

```html
<!-- Local repo path (default) -->
<link rel="stylesheet" href="../../easemotion.css" />

<!-- CDN or custom path -->
<link rel="stylesheet" href="/path/to/easemotion.css" />
```

4. All content is placeholder-ready — swap in real copy, real logos, and real links.

---

## Design Tokens

Colors and spacing are driven by CSS custom properties in `style.css`. Override any token in your own stylesheet:

```css
:root {
  --brand-purple: #7c3aed;
  --brand-blue: #3b82f6;
  --bg-base: #080b14;
  --text-primary: #f1f5f9;
}
```

---

## Technical Notes

- **No build tools** — pure HTML + CSS, opens directly in a browser.
- **No JavaScript frameworks** — one small inline `<script>` uses `IntersectionObserver` to trigger scroll-reveal animations by unpausing them when elements enter the viewport.
- **No custom `@keyframes`** — all animation timing is delegated to EaseMotion classes. The only exception is `flowPulse` on the decorative pipeline connector lines inside the hero illustration, which is a layout-level visual effect (not an entrance or hover animation).
- **Semantic HTML5** — uses `<nav>`, `<header>`, `<section>`, `<footer>`, `<blockquote>`, `<code>` appropriately.
- **Accessible** — social icon links have `aria-label` attributes; color contrast meets WCAG AA for body text.
