# Pet Photography Studio — Whisker & Lens (Issue #20953)

A complete, copy-paste-ready demo page for a **Niche Pet Photography business**, built entirely with `ease-*` utility classes from EaseMotion CSS.

> **Submission folder:** `submissions/examples/pet-photography-20953-ssx/`  
> **Issue:** [#20953 — Advanced: Business Landing — Pet Photography](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20953)

---

## What does this do?

It is a full, self-contained marketing site for a fictional pet photography studio ("Whisker & Lens") that showcases EaseMotion CSS in a real-world niche-business layout — hero with a tilted pet-portrait collage and floating paw prints, three service tiers, an interactive gallery filterable by animal type, packages & pricing, pet-parent testimonials, booking form, and footer.

## How is it used?

Open `demo.html` directly in any modern browser. No build step, no CDN, no JavaScript framework — just `demo.html` + `style.css`.

The page is composed entirely of `ease-*` utility classes. A few examples:

```html
<!-- Service card that lifts on hover and reveals on scroll -->
<article class="ease-service ease-reveal-up ease-hover-lift">
  <div class="ease-service-icon">📸</div>
  <h3 class="ease-service-title">Studio Sessions</h3>
</article>

<!-- Interactive filter tabs -->
<button class="ease-tab ease-tab-active" data-filter="all">All</button>
<button class="ease-tab" data-filter="dogs">🐕 Dogs</button>

<!-- Gallery tile that zooms on hover and can be filter-hidden -->
<figure class="ease-tile ease-hover-zoom" data-type="dogs">
  <div class="ease-tile-img ease-tile-1"></div>
  <figcaption class="ease-tile-cap"><strong>Bailey</strong></figcaption>
</figure>

<!-- Featured package with badge -->
<article class="ease-pkg ease-pkg-featured ease-hover-lift">
  <span class="ease-pkg-badge">Most loved</span>
  <h3 class="ease-pkg-name">The Adventure</h3>
</article>

<!-- Floating paw-print SVG accents in hero -->
<svg class="ease-paw ease-paw-1"><!-- paw shape --></svg>
```

Two tiny inline scripts (no external libraries) handle the work:

1. An `IntersectionObserver` toggles `is-visible` on `.ease-reveal-up` elements as they scroll into view.
2. A small click handler on `.ease-tab` filters `.ease-tile` elements by their `data-type` attribute, using the `ease-tile-hidden` class for smooth animal-type filtering.

## Why is it useful?

EaseMotion CSS is built to make motion and interaction feel **effortless and consistent** across real-world pages. This submission proves that goal in a content-rich vertical (niche pet photography) by:

- Demonstrating how a **complete niche-business landing page** can be assembled using only `ease-*` classes — no custom keyframes invented at the HTML level, no JS framework, no CDN, no external image files.
- Showing **composable patterns** (`ease-reveal-up` + `ease-reveal-d1/d2/d3` for staggered entrance, `ease-hover-lift` for cards & packages, `ease-hover-zoom` for gallery tiles, `ease-hover-underline` for nav links, `ease-paw` for ambient hero motion, plus an interactive `ease-tab` filter pattern for the gallery).
- Providing a **realistic copy-paste template** other contributors and users can adapt for any niche service business — wedding photography, food photography, real-estate photography, illustrators, makeup artists, personal stylists, etc.
- Respecting accessibility with a `prefers-reduced-motion` guard so animations and the floating hero paws gracefully disable for users who request it.

---

## Sections included

| # | Section | EaseMotion classes used |
|---|---|---|
| 1 | Sticky navbar | `ease-nav`, `ease-nav-link`, `ease-hover-underline` |
| 2 | Hero with adorable pet photos + floating paws | `ease-hero`, `ease-hero-collage`, `ease-photo-a/b/c/d`, `ease-paw`, `ease-text-gradient`, `ease-pill` |
| 3 | Services (studio / outdoor / family with pets) | `ease-grid-3`, `ease-service`, `ease-service-icon`, `ease-hover-lift` |
| 4 | Gallery by animal type (interactive filter) | `ease-tabs`, `ease-tab`, `ease-tab-active`, `ease-gallery`, `ease-tile`, `ease-hover-zoom`, `ease-tile-hidden` |
| 5 | Packages & pricing | `ease-pkg`, `ease-pkg-featured`, `ease-pkg-badge`, `ease-grid-3`, `ease-hover-lift` |
| 6 | Pet-parent testimonials | `ease-quote`, `ease-quote-stars`, `ease-quote-author`, `ease-hover-lift` |
| 7 | Booking form | `ease-form-grid`, `ease-form`, `ease-field`, `ease-form-success` |
| 8 | Footer | `ease-footer`, `ease-footer-grid`, `ease-footer-link` |

---

## Requirements checklist (from issue #20953)

- [x] Single `demo.html` — opens directly in browser, no build step
- [x] Uses only existing `ease-*` classes — no custom keyframes invented in the demo
- [x] Fully responsive (mobile, tablet, desktop — 3 breakpoints)
- [x] Entrance animations on scroll/load (`ease-reveal-up` + `IntersectionObserver`)
- [x] Hover interactions throughout (`ease-hover-lift`, `ease-hover-zoom`, `ease-hover-underline`)
- [x] Realistic placeholder content — no lorem ipsum (real-sounding pet names & breeds, real-sounding parent reviews, real prices)
- [x] `README.md` listing which EaseMotion classes are showcased

---

## Author

Submitted by [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux) — suffix `-ssx` appended to the folder name per the contribution guidelines on unique identifiers. This is my fourth merged submission in the Business-Landing / Education series (after #21037 Cooking School, #21038 Music Theory Online Course, and #21035 Math Tutoring Center).