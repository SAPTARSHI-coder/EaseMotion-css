# Blur-Entrance Card Grid

A premium, pure CSS feature card grid for SaaS landing pages. Each card animates into view with a smooth blur-to-clear entrance, staggered so cards appear one after another — built with semantic HTML5 and zero JavaScript.

## Overview

This component renders a responsive 6-card feature grid using native CSS Grid. On load, each card transitions from blurred/translated/transparent to fully sharp, positioned, and opaque, with the effect driven purely by `@keyframes` and a per-card `animation-delay` for the staggered reveal. Hover interactions add lift, shadow depth, and a soft border glow.

## Features

- **Blur-to-clear entrance** — combines `filter: blur()`, `opacity`, and `transform` in a single keyframe animation for a premium "focus pull" effect.
- **Staggered reveal** — each card's `animation-delay` is derived from a `--em-card-index` custom property set inline per card, so cards appear in sequence rather than all at once.
- **Rich hover state** — cards lift on hover/focus, gain a deeper shadow, and pick up a soft brand-colored border glow.
- **Icon + title + description + CTA** — each card follows a consistent, reusable content structure (emoji icon shown here; swap for inline SVG freely).
- **CSS Grid responsive layout** — `repeat(auto-fit, minmax(...))` on desktop, explicit 2-column on tablet, single column on mobile.
- **Accessible** — respects `prefers-reduced-motion`, uses semantic `<article>` cards inside a labelled `<section>`, and keeps focus states visible via `:focus-within`.
- **Fully themeable** — every color, spacing value, radius, shadow, blur amount, and animation timing is a CSS custom property.

## Folder Structure

```
submissions/examples/blur-entrance-card-grid/
├── demo.html   # Semantic HTML5 markup + full demo landing page
├── style.css   # Component styles (card grid) + demo page styles
└── README.md   # This file
```

## Usage

1. Copy `style.css` into your project (or copy just the grid-related rules — sections 1–9 in the file; sections 3, 4, and 10 are demo-only scaffolding for the topbar/hero/footer).
2. Copy the `<section id="features" class="em-features">` block from `demo.html`, including its six `<article class="em-card">` children.
3. Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

4. Set each card's stagger position with an inline custom property:

```html
<article class="em-card" style="--em-card-index: 0;">
  <div class="em-card__icon" aria-hidden="true">⚡</div>
  <h3 class="em-card__title">Instant Automation</h3>
  <p class="em-card__desc">Short feature description goes here.</p>
  <a href="#automation" class="em-card__cta">Learn more →</a>
</article>
```

Increment `--em-card-index` by 1 for each subsequent card (`0, 1, 2, 3, 4, 5`) to keep the stagger sequence intact. To use an inline SVG instead of an emoji, just replace the contents of `.em-card__icon`.

## CSS Custom Properties

All tokens live in `:root` at the top of `style.css`.

| Property | Purpose | Default |
|---|---|---|
| `--em-color-bg` / `--em-color-bg-alt` | Page background layers | `#0d0f14` / `#10131a` |
| `--em-color-surface` / `--em-color-surface-hover` | Card background (rest / hover) | `#171b24` / `#1c202b` |
| `--em-color-border` / `--em-color-border-hover` | Card border (rest / hover glow) | `rgba(255,255,255,0.08)` / `rgba(124,140,255,0.45)` |
| `--em-color-text` / `--em-color-text-muted` | Primary / secondary text | `#eef0f6` / `#9298ab` |
| `--em-color-primary` / `--em-color-primary-light` | Brand accent | `#7c8cff` / `#a5b1ff` |
| `--em-color-accent` | Secondary brand accent (icon gradient, CTA hover) | `#35e0c2` |
| `--em-shadow-card` / `--em-shadow-card-hover` | Card resting / hover shadow | — |
| `--em-glow-border` | Border glow shadow used on hover | — |
| `--em-space-xs` … `--em-space-xl` | Spacing scale | `0.5rem`–`3.5rem` |
| `--em-radius-sm` / `--em-radius-md` / `--em-radius-pill` | Border radii | `8px` / `14px` / `999px` |
| `--em-duration-fast` / `--em-duration-base` | Hover/transition speed | `0.2s` / `0.4s` |
| `--em-duration-entrance` | Length of the blur-in entrance animation | `0.8s` |
| `--em-stagger-step` | Delay increment applied per card index | `0.12s` |
| `--em-blur-amount` | Starting blur radius for the entrance effect | `14px` |
| `--em-max-width` | Content max-width | `1200px` |
| `--em-card-min-width` | Minimum card width before wrapping (desktop grid) | `300px` |

## Animation Details

The entrance effect is defined in a single keyframe, `em-card-blur-in`:

```css
@keyframes em-card-blur-in {
  0%   { opacity: 0; transform: translateY(24px) scale(0.97); filter: blur(var(--em-blur-amount)); }
  60%  { opacity: 1; filter: blur(calc(var(--em-blur-amount) * 0.15)); }
  100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
}
```

- **Opacity** fades the card in early (by the 60% mark) so it never feels like it "pops" in late.
- **Transform** (`translateY` + `scale`) gives the card a gentle rise-and-settle motion — both are compositor-friendly properties that avoid layout recalculation.
- **Filter: blur()** is what creates the "focus pull" look — starting heavily blurred and resolving to fully sharp by the end of the animation.
- **Stagger** is achieved with `animation-delay: calc(var(--em-card-index, 0) * var(--em-stagger-step))`. Each card sets its own `--em-card-index` inline (`0` through `5`), so no per-card CSS rules or `:nth-child` overrides are needed — just increment the index when adding more cards.

`filter: blur()` is a GPU-accelerated property in all evergreen browsers, so combined with `opacity`/`transform` the whole animation avoids triggering layout or paint on every frame.

## Responsive Design

| Breakpoint | Behavior |
|---|---|
| **Desktop** (`> 992px`) | `repeat(auto-fit, minmax(300px, 1fr))` — grid auto-fills 3 (or more) columns depending on viewport width. |
| **Tablet** (`≤ 992px`) | Fixed 2-column grid (`repeat(2, 1fr)`) for a predictable, balanced layout. |
| **Mobile** (`≤ 640px`) | Single column, reduced gap and card padding for compact vertical stacking. |

The grid uses native **CSS Grid** (`display: grid`) throughout; no flexbox fallback or JavaScript resize logic is needed.

## Accessibility (prefers-reduced-motion)

- Under `prefers-reduced-motion: reduce`, the blur-entrance animation is disabled entirely and every card is set to its final resting state (`opacity: 1`, no transform, no blur) immediately — content is never left hidden or blurred for users who need reduced motion.
- Hover/focus transitions on the CTA button and card links are also shortened to near-zero under this media query.
- Cards use `:focus-within` alongside `:hover` so the lift/glow state is visible to keyboard users tabbing to the CTA link inside a card, not just mouse users.
- Semantic markup: the grid lives inside a `<section aria-labelledby="em-features-heading">`, each card is an `<article>`, and icons use `aria-hidden="true"` since they are decorative and the title already conveys the feature name.

## Browser Compatibility

Tested against current stable releases of:

- Chrome / Edge (Chromium)
- Firefox
- Safari (desktop + iOS)

Relies on widely-supported CSS: CSS Grid (`repeat(auto-fit, minmax())`), custom properties, `filter: blur()`, `backdrop-filter` (with `-webkit-` prefix included on the topbar), and `calc()` inside `animation-delay`. All are supported in every evergreen browser released in the last several years.

## Customization Guide

- **Change the color theme**: edit `--em-color-primary`, `--em-color-primary-light`, and `--em-color-accent`. The icon gradient, CTA link hover, and border glow all derive from these values.
- **Adjust the blur intensity**: change `--em-blur-amount` — higher values create a more dramatic "coming into focus" effect; lower values (e.g. `6px`) feel more subtle.
- **Change the stagger speed**: edit `--em-stagger-step` to speed up or slow down how quickly cards appear after one another. Set it to `0s` to make all cards animate simultaneously.
- **Add more cards**: copy an `<article class="em-card">` block, increment its `--em-card-index` inline style by 1, and update the icon/title/description/CTA. The grid and stagger logic scale automatically.
- **Change the grid density**: adjust `--em-card-min-width` to control how many columns fit before wrapping on desktop, or edit the `repeat(2, 1fr)` rule in the tablet media query for a different tablet column count.
- **Disable the entrance animation**: remove the `animation` declaration from `.em-card` and set its `opacity`/`transform`/`filter` to the final resting values, or use the `prefers-reduced-motion` block as a template.