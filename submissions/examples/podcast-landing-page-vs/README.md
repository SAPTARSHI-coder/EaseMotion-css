# Podcast Landing Page — The Growth Signal

A complete, production-ready podcast/media landing page built entirely with existing EaseMotion CSS classes. Theme: modern premium media brand (Spotify-style dark UI with vibrant accent gradients).

![Sections](https://img.shields.io/badge/sections-7-7c5cff)
![Responsive](https://img.shields.io/badge/breakpoints-1200%2F768%2F480-22d3ee)
![Dependencies](https://img.shields.io/badge/dependencies-zero-success)

---

## 1. What does this do?

It is a **self-contained demo of a full podcast landing page** for a fictional show, _The Growth Signal_ — featuring a hero with a live player mockup, a responsive episode grid, host bio, platform links, sponsor CTA, newsletter signup, and listener testimonials — all styled with EaseMotion CSS animation and layout classes.

## 2. How is it used?

Open `demo.html` directly in any modern browser. No server, no build step, no CDN, no external libraries or fonts.

```bash
# from this folder
open demo.html        # macOS
xdg-open demo.html    # Linux
```

The page links the framework through a local relative path and then layers this folder's `style.css` on top:

```html
<link rel="stylesheet" href="../../../easemotion.css" />
<link rel="stylesheet" href="style.css" />
```

Markup relies on EaseMotion classes directly in the HTML — for example the hero:

```html
<h1 class="hero__title ease-slide-up ease-delay-100">
  Weekly conversations with
  <span class="ease-gradient-text">founders, creators,</span> and builders.
</h1>

<a class="ease-btn ease-btn-primary ease-btn-lg ease-btn-pill ease-btn-hover" href="#player">
  Listen now
</a>
```

## 3. Why is it useful?

It demonstrates EaseMotion CSS's philosophy — _"if you can say it in English, you can write it as a class"_ — applied to a realistic, multi-section product page. It proves the framework's animation utilities (`ease-fade-in`, `ease-slide-up`, `ease-hover-*`), layout primitives (`ease-grid`, `ease-flex`, `ease-container`), and components (`ease-btn`, `ease-card`) compose into a polished, accessible, fully responsive UI **without a single custom keyframe**. All motion is delegated to the framework; `style.css` only handles layout tuning, color, spacing, and branding.

---

## EaseMotion classes used

### Animations (`core/animations.css`)
- **Entrance:** `ease-fade-in`, `ease-slide-up`, `ease-slide-in-left`, `ease-slide-in-right`
- **Looping:** `ease-pulse` (ambient glow blobs, avatar ring, live dots), `ease-float`, `ease-ping` (live indicator)
- **Hover:** `ease-hover-grow`, `ease-hover-lift-shadow`, `ease-hover-shimmer`, `ease-hover-underline`, `ease-squish-button`
- **Text effects:** `ease-gradient-text`, `ease-gradient-text-animated`
- **Timing:** `ease-delay-100/200/300/500` (staggered entrances), `ease-duration-*`

### Layout & utilities (`core/utilities.css`)
- **Structure:** `ease-container`, `ease-grid`, `ease-grid-cols-2`, `ease-grid-auto`, `ease-flex`, `ease-flex-wrap`, `ease-items-center`, `ease-justify-between/center`, `ease-gap-*`
- **Positioning:** `ease-sticky`, `ease-relative`, `ease-overflow-hidden`
- **Spacing:** `ease-padding-*`, `ease-py-*`
- **Typography:** `ease-text-sm`, `ease-list-none`
- **Effects:** `ease-backdrop-blur`, `ease-sr-only` (skip link & form label)

### Components (`components/*.css`)
- **Buttons:** `ease-btn`, `ease-btn-primary`, `ease-btn-outline`, `ease-btn-ghost`, `ease-btn-lg`, `ease-btn-sm`, `ease-btn-pill`, `ease-btn-hover`
- **Cards:** `ease-card`, `ease-card-glass`, `ease-card-shadow`, `ease-card-hover`, `ease-card-stat`, `ease-stat-value`, `ease-stat-label`
- **Forms:** `ease-input`, `ease-field`

---

## Responsive behavior

| Breakpoint | Behavior |
| --- | --- |
| **> 1200px** | Full two-column layouts for hero, host bio, and sponsor CTA. Episode/platform/testimonial grids auto-fit via `ease-grid-auto`. |
| **≤ 1200px** | Two-column layouts retained but spacing tightened; ambient glow blobs shrink. |
| **≤ 768px** | Hero, host, and sponsor collapse to a single stacked column (player below copy, avatar above bio). Newsletter form stacks vertically. Header wraps. |
| **≤ 480px** | Section padding reduced, hero title scales with viewport, header becomes vertical (brand → nav → CTA), sponsor metrics stack, card padding tightened. `ease-grid-auto` already collapses to one column at 480px. |

Layouts collapse gracefully at every step and the framework's own `prefers-reduced-motion` handling disables motion for users who request it.

---

## Animation features

- **Hero load sequence:** staggered `ease-fade-in` → `ease-slide-up` → `ease-slide-in-right` using `ease-delay-*` so the eyebrow, headline, description, CTAs, social proof, and player cascade in.
- **Ambient motion:** two decorative gradient blobs animated with `ease-pulse` and `ease-float`; a `ease-ping` "live" dot in the eyebrow.
- **Card entrances:** each episode and testimonial card uses `ease-slide-up` with incremental `ease-delay-*` for a staggered reveal.
- **Hover interactions:** episode cards combine `ease-card-hover` + `ease-hover-shimmer` (light sweep); platform links use `ease-hover-grow` + `ease-squish-button`; play buttons use `ease-btn-hover` + `ease-squish-button`; nav links use `ease-hover-underline`.
- **Brand text:** headings and avatar marks use `ease-gradient-text-animated` for the animated violet→cyan gradient.

No custom `@keyframes` are defined in `style.css` — every animation above is an existing EaseMotion CSS class.

---

## Files

| File | Purpose |
| --- | --- |
| `demo.html` | Semantic, accessible HTML for all 7 sections with inline SVG icons (no external icon/font dependencies). |
| `style.css` | Layout tuning, dark-theme brand color variables, section styles, and responsive rules. |
| `README.md` | This file. |

Built with EaseMotion CSS · © 2026 The Growth Signal (demo content).
