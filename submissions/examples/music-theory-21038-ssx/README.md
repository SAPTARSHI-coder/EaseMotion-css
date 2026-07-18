# Music Theory Online Course — Coda Academy (Issue #21038)

A complete, copy-paste-ready demo page for an **Online Music Education business**, built entirely with `ease-*` utility classes from EaseMotion CSS.

> **Submission folder:** `submissions/examples/music-theory-21038-ssx/`  
> **Issue:** [#21038 — Advanced: Education — Music Theory Online Course](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/21038)

---

## What does this do?

It is a full, self-contained marketing site for a fictional online music theory academy ("Coda Academy") that showcases EaseMotion CSS in a real-world online-education layout — hero with floating instrument illustrations, 8-module curriculum, instructor bio, sample lesson preview, three pricing tiers, student testimonials, enrollment form, and footer.

## How is it used?

Open `demo.html` directly in any modern browser. No build step, no CDN, no JavaScript framework — just `demo.html` + `style.css`.

The page is composed entirely of `ease-*` utility classes. A few examples:

```html
<!-- Numbered curriculum module that lifts on hover and reveals on scroll -->
<article class="ease-module ease-reveal-up ease-hover-lift">
  <span class="ease-module-num">03</span>
  <h3 class="ease-module-title">Intervals &amp; Ear Training</h3>
  <p class="ease-module-text">Hear the difference between a major 3rd and a perfect 5th — and prove it.</p>
</article>

<!-- Staggered scroll reveals using delay classes -->
<div class="ease-reveal-up">First in</div>
<div class="ease-reveal-up ease-reveal-d1">Second in</div>
<div class="ease-reveal-up ease-reveal-d2">Third in</div>

<!-- Featured pricing tier with badge -->
<article class="ease-tier ease-tier-featured ease-hover-lift">
  <span class="ease-tier-badge">Most popular</span>
  <h3 class="ease-tier-name">Mentored</h3>
</article>

<!-- Lesson player with hover-lift -->
<div class="ease-lesson-player ease-hover-lift">
  <div class="ease-lesson-thumb"></div>
  <button class="ease-lesson-play">▶</button>
</div>
```

A tiny inline `IntersectionObserver` (browser-native, no library) toggles the `is-visible` class on `ease-reveal-up` elements as they scroll into view. Floating instrument SVGs in the hero use a single `ease-float` class for a gentle bobbing animation.

## Why is it useful?

EaseMotion CSS exists to make motion and interaction feel **effortless and consistent** across real-world pages. This submission proves that goal in a content-rich vertical (online music education) by:

- Demonstrating how a **complete online-course landing page** can be assembled using only `ease-*` classes — no custom keyframes invented at the HTML level, no JS framework, no CDN, no external image files.
- Showing **composable patterns** (`ease-reveal-up` + `ease-reveal-d1/d2/d3` for staggered entrance, `ease-hover-lift` for cards/tiers/players, `ease-hover-underline` for nav, `ease-float` for ambient motion in hero).
- Providing a **realistic copy-paste template** other contributors and users can adapt for any online-education business — language apps, coding bootcamps, design schools, photography courses, etc.
- Respecting accessibility with a `prefers-reduced-motion` guard so animations and the floating hero instruments gracefully disable for users who request it.

---

## Sections included

| # | Section | EaseMotion classes used |
|---|---|---|
| 1 | Sticky navbar | `ease-nav`, `ease-nav-link`, `ease-hover-underline` |
| 2 | Hero with musical-instrument SVGs | `ease-hero`, `ease-text-gradient`, `ease-pill`, `ease-float`, `ease-reveal-up` |
| 3 | Course curriculum preview (8 modules) | `ease-modules`, `ease-module`, `ease-hover-lift`, `ease-reveal-d1/d2/d3` |
| 4 | Instructor bio & credentials | `ease-instructor`, `ease-instructor-avatar`, `ease-instructor-badge`, `ease-cred-list` |
| 5 | Sample lesson preview | `ease-lesson`, `ease-lesson-player`, `ease-lesson-play`, `ease-tag`, `ease-hover-lift` |
| 6 | Pricing tiers (Self-Paced / Mentored / 1-on-1) | `ease-tier`, `ease-tier-featured`, `ease-tier-badge`, `ease-grid-3`, `ease-hover-lift` |
| 7 | Student testimonials | `ease-quote`, `ease-quote-stars`, `ease-quote-author`, `ease-hover-lift` |
| 8 | Enroll CTA with form | `ease-cta-band`, `ease-cta-grid`, `ease-form`, `ease-field`, `ease-form-success` |
| 9 | Footer | `ease-footer`, `ease-footer-grid`, `ease-footer-link` |

---

## Requirements checklist (from issue #21038)

- [x] Single `demo.html` — opens directly in browser, no build step
- [x] Uses only existing `ease-*` classes — no custom keyframes invented in the demo
- [x] Fully responsive (mobile, tablet, desktop — 3 breakpoints)
- [x] Entrance animations on scroll/load (`ease-reveal-up` + `IntersectionObserver`)
- [x] Hover interactions throughout (`ease-hover-lift`, `ease-hover-underline`)
- [x] Realistic placeholder content — no lorem ipsum (real-sounding instructor bio, curriculum, prices, reviews)
- [x] `README.md` listing which EaseMotion classes are showcased

---

## Author

Submitted by [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux) — suffix `-ssx` appended to the folder name per the contribution guidelines on unique identifiers.