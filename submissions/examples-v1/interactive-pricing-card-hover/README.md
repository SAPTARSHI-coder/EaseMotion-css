# Pricing Cards — Signal

A reusable, pure-CSS pricing card component with smooth hover animations,
a gradient-badged "Most Popular" card, feature checklists, and animated
call-to-action buttons. Zero JavaScript, zero build step, zero dependencies
beyond an optional Google Fonts import.

## Files

| File         | Purpose                                   |
|--------------|--------------------------------------------|
| `demo.html`  | Markup for a 3-tier pricing section (Starter / Pro / Enterprise) |
| `style.css`  | All styling, tokens, and animation         |
| `README.md`  | This file                                  |

## Features

- **Hover lift** — cards rise on hover with a soft shadow and a subtle
  border-color shift (`translateY` + `box-shadow`, eased with
  `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Featured card treatment** — the "Pro" card is scaled up slightly and,
  on hover, grows an animated conic-gradient trace around its border.
- **Signal-pulse badge** — the "Most popular" badge has an expanding ring
  animation behind it (the component's signature detail), built with a
  single `@keyframes` block and no extra markup logic.
- **Feature checklist** — inline SVG checkmarks in a soft teal circle,
  no icon font or library required.
- **Animated CTA buttons** — a light diagonal "shine" sweeps across each
  button on hover; the primary button additionally lifts and glows.
- **Fully responsive** — collapses to a single column under 900px, with
  the featured card reordered to the top.
- **Accessible motion** — every animation and transition is disabled
  under `prefers-reduced-motion: reduce`.

## Usage

Copy `demo.html` and `style.css` into your project (or copy just the
`.card` markup block into an existing page) and link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Each pricing tier is a self-contained `<article class="card">`. To add
or remove a plan, duplicate/delete one `<article>` block — no JS or
build tooling required. Mark a plan as featured by adding the
`card-featured` class and including the `<span class="badge">` block.

### Basic card

```html
<article class="card">
  <div class="card-head">
    <h2 class="plan-name">Starter</h2>
    <p class="plan-tagline">For solo builders testing the waters</p>
  </div>
  <p class="price">
    <span class="price-currency">$</span><span class="price-amount">9</span><span class="price-period">/mo</span>
  </p>
  <ul class="feature-list">
    <li><svg class="check" viewBox="0 0 20 20"><path d="M4 10.5l4 4 8-9"/></svg> 3 active projects</li>
  </ul>
  <button class="cta cta-ghost" type="button">Start free trial</button>
</article>
```

### Featured card

Add `card-featured` to the `<article>` and drop in the badge markup as
the first child:

```html
<article class="card card-featured">
  <span class="badge">
    <span class="badge-ring" aria-hidden="true"></span>
    Most popular
  </span>
  ...
  <button class="cta cta-solid" type="button">Get started</button>
</article>
```

## Customization

All colors, fonts, and easing live in CSS custom properties at the top
of `style.css` under `:root`:

```css
--bg-base, --card-bg, --card-bg-featured, --card-border,
--accent, --accent-soft, --check,
--text-primary, --text-muted, --text-faint,
--font-display, --font-body, --font-mono,
--ease-lift
```

Change `--accent` to re-theme the badge, featured border glow, and
primary button in one place. Swap the `@import` at the top of the CSS
(or remove it and adjust the `--font-*` fallback stacks) to use your
own typography instead of the bundled Fraunces / Inter / JetBrains Mono
pairing.

## Browser support

Uses standard CSS Grid, custom properties, and `conic-gradient` (widely
supported in current Chrome, Firefox, Safari, and Edge). In browsers
without `conic-gradient` support the featured card simply loses its
animated border trace and falls back to a static border — no layout
breakage.