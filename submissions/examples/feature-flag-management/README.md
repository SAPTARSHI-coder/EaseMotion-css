# FlagFlow — Feature Flag Management Landing Page

A complete, production-ready SaaS landing page for a feature flag management platform. Inspired by LaunchDarkly, Flagsmith, Split.io, and ConfigCat. Built with semantic HTML5 and EaseMotion CSS animation utility classes only — no JavaScript animations, no @keyframes.

---

## Screenshot Placeholder

> Open `demo.html` directly in any modern browser — no build tools or server required.

```
┌─────────────────────────────────────────────────────────────────┐
│  ⚑ FlagFlow  Features  Integrations  Pricing  Docs  [Start Free]│
├────────────────────────────────┬────────────────────────────────┤
│                                │  ┌─────────────────────────┐  │
│  Ship Faster.                  │  │ ⚑ FlagFlow · Dashboard  │  │
│  Release Safely.               │  ├─────────────────────────┤  │
│                                │  │ new-dashboard  ████░ 75% ● │
│  Control every feature with    │  │ checkout-v2    ████  100% ●│
│  precision. Progressive        │  │ dark-mode      █░░░  12%  ●│
│  rollouts, A/B testing …       │  │ beta-api-v3    ░░░░  OFF  ○│
│                                │  ├─────────────────────────┤  │
│  [Start Free →]  [View Docs]   │  │ 2.4M  │  148   │  24K/s  │  │
│                                │  └─────────────────────────┘  │
├────────────────────────────────┴────────────────────────────────┤
│  NovaTech · CloudCore · ByteWorks · HyperScale · DevSphere      │
├─────────────────────────────────────────────────────────────────┤
│  Features · Code · Pricing · Footer                             │
└─────────────────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
feature-flag-management/
├── demo.html    ← Complete SaaS landing page
├── style.css    ← Layout, dark theme, tokens (no @keyframes)
└── README.md    ← This file
```

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Navigation** | Sticky frosted nav — logo, 5 links, Login, Start Free CTA |
| 2 | **Hero** | Two-column split — headline + CTAs (left), CSS dashboard mockup (right) |
| 3 | **Customer Logos** | 6 engineering team name tiles |
| 4 | **Feature Grid** | 6 glassmorphism cards with icons, descriptions, hover interactions |
| 5 | **Code Integration** | SDK tabs + stats (left), syntax-highlighted JS code block (right) |
| 6 | **Pricing** | 3 plans — Starter ($0), Pro ($49, featured), Enterprise (Custom) |
| 7 | **Footer** | Brand, social links, Product / Resources / Developers / Company columns |

---

## EaseMotion Classes Demonstrated

### Entrance Animations

| Class | Used on |
|---|---|
| `ease-fade-in` | Nav logo, hero chip, hero actions, hero trust badges, section chips, logo tiles, SDK tabs/stats |
| `ease-slide-up` | Hero headline, hero description, section headings, feature cards, pricing cards |
| `ease-slide-in-left` | Hero content column, code integration copy column |
| `ease-slide-in-right` | Hero dashboard mockup, code block |
| `ease-zoom-in` | Feature card icons |

### Hover Effects

| Class | Used on |
|---|---|
| `ease-hover-lift` | Hero CTA buttons, logo tiles, feature cards, pricing cards, plan buttons, social links |
| `ease-hover-glow` | Primary CTA button (nav + hero), Pro plan "Start Pro Trial" button |
| `ease-hover-underline` | Nav links, footer column links, feature card "Learn more" links |

### Continuous Animations

| Class | Used on |
|---|---|
| `ease-pulse` | Status indicator dot inside hero chip |

### Glassmorphism

| Class | Used on |
|---|---|
| `ease-glass-card` | All 6 feature cards (overridden with dark theme via `!important`) |

### Delay Staggering

| Class | Used on |
|---|---|
| `ease-delay-100` — `ease-delay-600` | Logo tile row, feature card grid |
| `ease-delay-100` — `ease-delay-400` | Hero chip → title → desc → actions → trust badges |

---

## Design Tokens

| Token | Value | Purpose |
|---|---|---|
| `--bg` | `#080c14` | Page background (very dark navy) |
| `--bg-surface` | `#0d1424` | Section alternates, nav blur base |
| `--bg-card` | `#111827` | Feature cards, pricing cards |
| `--blue` | `#3b82f6` | Primary brand colour — CTAs, toggles, rollout bars |
| `--cyan` | `#06b6d4` | Secondary accent — gradient pair, low-rollout bars |
| `--blue-light` | `#60a5fa` | Text highlights, feature links, Pro plan amount |
| `--cyan-light` | `#22d3ee` | Gradient text accents |
| **Headings** | System sans-serif | Clean, professional |
| **Code** | JetBrains Mono (stack) | Flag keys, code blocks, stats |

---

## Dashboard Mockup

The hero mockup is built entirely with HTML + CSS — no images. It includes:

- **macOS-style window chrome** (traffic-light dots, title bar, environment pill)
- **Search bar** and **+ New Flag** button
- **4 flag rows**, each with: flag key in monospace, type badge (Feature / Release / Experiment / Kill switch), animated rollout percentage bar, and a CSS toggle switch
- **3 stat tiles** at the bottom: Total Users, Active Flags, Evaluations/sec

Toggle switches use `transition` on `::after` (translate + background colour), with no `@keyframes`.

---

## Responsive Support

| Breakpoint | Behaviour |
|---|---|
| **Mobile** (`< 600px`) | Hero stacked, nav links hidden, single-column all grids |
| **Tablet** (`600–1024px`) | 2-column features, single-column hero, single-column pricing |
| **Desktop** (`≥ 1024px`) | Full two-column hero, 3-column features, 3-column pricing |

---

## Usage Instructions

1. Copy the `feature-flag-management/` folder to any location.
2. Open `demo.html` in any modern browser — it links to EaseMotion CSS via the relative path `../../easemotion.css` (correct from inside this repository).
3. To use outside this repository, update the `<link>` tag:

```html
<!-- Default (inside repo) -->
<link rel="stylesheet" href="../../easemotion.css" />

<!-- Custom path or CDN -->
<link rel="stylesheet" href="/assets/easemotion.css" />
```

4. Swap logo tile text for real `<img>` elements with customer logos.
5. Wire CTA buttons and pricing links to your actual sign-up / checkout flows.
6. Connect the nav `Login` link to your authentication provider.

---

## Technical Notes

- **No `@keyframes`** — zero custom animation definitions. All animation behaviour is provided by EaseMotion classes or CSS `transition` (toggle switch, rollout bar widths, hover states).
- **No JavaScript frameworks** — one 12-line inline `<script>` uses native `IntersectionObserver` to pause entrance animations until elements enter the viewport.
- **No build tools** — open `demo.html` directly; no npm, webpack, or server required.
- **Semantic HTML5** — `<nav>`, `<section>`, `<article>`, `<footer>` used throughout. `role="list"` + `role="listitem"` on logo strips and card grids. `aria-label` on decorative dashboard image.
- **Accessible** — `aria-label` on social icon links, `aria-labelledby` linking sections to headings, `aria-selected` on SDK tab role, `prefers-reduced-motion` media query disables CSS transitions on dashboard toggles.
