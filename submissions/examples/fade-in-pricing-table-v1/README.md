# Fade-In Pricing Table

A production-ready, pure CSS pricing table for product catalog and SaaS
layouts. Three plans (Basic, Pro, Enterprise) fade and rise into place on
load, sit on a glassmorphic surface, and lift with a soft glow on hover —
no JavaScript required.

## Project overview

This component is part of the EaseMotion CSS showcase library. It
demonstrates a staggered, GPU-friendly fade-in entrance combined with a
premium glassmorphic card treatment, built entirely with semantic HTML5
and modern CSS (custom properties, Grid, `backdrop-filter`).

## Features

- **Pure CSS / HTML5.** No JavaScript, no frameworks, no build step.
- **Staggered fade-in-up entrance** for all three cards on page load, timed
  with CSS custom properties rather than inline delays.
- **Glassmorphic cards** using `backdrop-filter: blur()` over a soft dual
  radial-gradient background.
- **Featured "Pro" plan** with a gradient badge, a raised position on
  desktop, and a blurred gradient glow ring.
- **Hover elevation** — cards lift and scale slightly, with an elevated
  shadow and brightened border.
- **Gradient call-to-action buttons** with a smooth hover lift and glow.
- **`:focus-visible` support** on every interactive element for clean
  keyboard navigation, with no visible outline on mouse click.
- **Mobile-first responsive layout** using CSS Grid: 1 column → 2 columns
  → 3 columns as viewport width increases.
- **`prefers-reduced-motion` support** — all animation and transitions are
  disabled, and content that relied on animation to reveal itself is
  forced visible.
- **Accessible markup** — semantic headings, list semantics for plans and
  features, `aria-label`s on every CTA, and visually-hidden text that
  spells out the full price for screen readers.

## Folder structure

submissions/
└── examples/
└── fade-in-pricing-table/
├── demo.html
├── style.css
└── README.md

## Usage

1. Copy `style.css` into your project, or link it directly.
2. Copy the `<section class="em-pricing">` markup from `demo.html`,
   including the `<ul class="em-pricing-grid">` and its three
   `<li class="em-pricing-card">` items.
3. Repeat the `.em-pricing-card` structure for each plan you offer. Add
   `em-pricing-card--featured` to whichever `<li>` should be visually
   promoted (only one plan should carry it).
4. Update the plan name, price, description, feature list, and CTA text
   and `href` for each plan.

```html
<li class="em-pricing-card em-pricing-card--featured">
  <article class="em-pricing-card__panel" aria-labelledby="plan-pro-name">
    <p class="em-pricing-card__badge" role="note">Most Popular</p>
    <header class="em-pricing-card__header">
      <h2 id="plan-pro-name" class="em-pricing-card__name">Pro</h2>
      <p class="em-pricing-card__desc">For growing teams shipping real products.</p>
    </header>
    <p class="em-pricing-card__price">
      <span class="em-pricing-card__currency" aria-hidden="true">$</span>
      <span class="em-pricing-card__amount">29</span>
      <span class="em-pricing-card__period">/ month</span>
      <span class="visually-hidden">29 dollars per month</span>
    </p>
    <ul class="em-pricing-card__features">
      <li><span aria-hidden="true">&#10003;</span> Unlimited exports</li>
      <!-- more features -->
    </ul>
    <a class="em-pricing-card__cta em-pricing-card__cta--primary" href="#" aria-label="Start the Pro plan for 29 dollars per month">
      Get Started
    </a>
  </article>
</li>
```

## CSS custom properties

All tunable values live on `:root`, so re-skinning the table never requires
touching a selector.

| Property | Default | Purpose |
|---|---|---|
| `--bg` | `#0B0E1A` | Page background base color |
| `--surface` | `rgba(255,255,255,0.045)` | Glass card surface at rest |
| `--surface-strong` | `rgba(255,255,255,0.08)` | Glass surface on hover / buttons |
| `--primary` | `#7C6FEE` | Primary gradient accent (violet) |
| `--secondary` | `#34D8C0` | Secondary gradient accent (teal) |
| `--text` | `#F5F3FF` | Primary text color |
| `--text-muted` | `rgba(245,243,255,0.64)` | Secondary / muted text |
| `--border` | `rgba(255,255,255,0.12)` | Card and divider borders |
| `--radius` | `20px` | Card corner radius |
| `--radius-sm` | `12px` | Button corner radius |
| `--shadow` | `0 20px 60px rgba(4,6,16,0.55)` | Elevated hover shadow |
| `--shadow-soft` | `0 10px 30px rgba(4,6,16,0.35)` | Resting card shadow |
| `--duration` | `0.5s` | Duration for all transitions |
| `--ease` | `cubic-bezier(0.22,1,0.36,1)` | Easing curve for all motion |

Change `--primary` and `--secondary` to re-theme every gradient, badge, and
glow in the component from one place.

## Responsive behavior

Layout is mobile-first using CSS Grid:

| Breakpoint | Columns | Notes |
|---|---|---|
| `< 640px` | 1 | Cards stack full-width, Enterprise below Pro |
| `≥ 640px` | 2 | Basic and Pro side by side; Enterprise wraps and centers below |
| `≥ 960px` | 3 | All three plans side by side; Pro is raised above the others |

Font sizes for the title and subtitle scale with `clamp()`, and card
padding/spacing is tuned to stay comfortable at every width.

## Accessibility

- Plans are marked up as a `<ul role="list">` of `<li>` items, each
  containing an `<article>` — screen readers can navigate the plan list
  like any other list.
- Each plan name is an `<h2>`, referenced by the card's `aria-labelledby`
  so the whole card announces as a labeled region.
- A visually-hidden `<h3>` ("What's included in …") introduces each
  feature list for screen reader users, even though it's not shown
  visually.
- Prices are shown visually as split currency / amount / period elements,
  but a `.visually-hidden` span spells out the full price ("29 dollars per
  month") as a single readable string.
- Every CTA has an explicit `aria-label` naming the plan and price, so
  "Get Started" is never ambiguous out of context.
- The "Most Popular" badge is real text content (not a background image),
  and carries `role="note"` so it's announced as supplementary information.
- All interactive elements use `:focus-visible` for a clear, keyboard-only
  focus ring — mouse users don't see a focus outline on click.
- A skip link at the top of the page lets keyboard users jump straight to
  `#main`.

## Browser compatibility

Built with CSS custom properties, CSS Grid, `backdrop-filter`, `clamp()`,
and `:focus-visible`. Fully supported in current versions of Chrome,
Edge, Firefox, and Safari. In browsers without `backdrop-filter` support,
cards render as flat, semi-transparent panels — the layout and content
remain fully usable.

## Animation overview

| Effect | Implementation |
|---|---|
| Fade-in-up entrance | `@keyframes em-fade-in-up` animating `opacity` and `transform: translateY()` only, staggered per card via a `--em-card-index` custom property multiplied inside `animation-delay` |
| Hover elevation | `transform: translateY(-10px) scale(1.015)` on `:hover` / `:focus-within`, transitioned with `var(--duration)` and `var(--ease)` |
| Featured glow | A blurred `::before` pseudo-element with a gradient background, whose `opacity` transitions on hover |
| Button hover | `transform: translateY(-3px)` plus a growing `box-shadow`, transitioned independently of the card |

All animated properties are limited to `transform`, `opacity`, and
`box-shadow`/`background` (composited or paint-only properties), keeping
the interaction GPU-friendly and avoiding layout thrashing.

## Customization guide

- **Re-theme the palette:** override `--primary`, `--secondary`, `--bg`,
  and `--surface` on `:root` (or scope them to `.em-pricing` to theme just
  this section).
- **Change the featured plan:** move the `em-pricing-card--featured` class
  to a different `<li>`; the glow, badge position, and raised layout follow
  automatically.
- **Adjust entrance timing:** change the `0.12s` multiplier on
  `animation-delay: calc(var(--em-card-index, 0) * 0.12s)` in
  `.em-pricing-card` to speed up or slow down the stagger.
- **Add a fourth plan:** add another `<li class="em-pricing-card">`, set
  `--em-card-index: 3` on it via a new `nth-child(4)` rule, and extend the
  breakpoint grid (e.g. `repeat(4, minmax(0,1fr))` at a wider breakpoint)
  if you want four columns instead of three.
- **Swap the fade direction:** change `translateY(28px)` to
  `translateY(-28px)` (fade down) or `translateX()` (fade sideways) in both
  `.em-pricing-card` and `@keyframes em-fade-in-up`.