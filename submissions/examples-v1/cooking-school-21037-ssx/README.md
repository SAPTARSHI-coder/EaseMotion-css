# Cooking School — Saffron & Sage (Issue #21037)

A complete, copy-paste-ready demo page for a **Culinary Education business**, built entirely with `ease-*` utility classes from EaseMotion CSS.

> **Submission folder:** `submissions/examples/cooking-school-21037-ssx/`  
> **Issue:** [#21037 — Advanced: Education — Cooking School](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/21037)

---

## What does this do?

It is a full, self-contained marketing site for a fictional culinary school ("Saffron & Sage") that showcases EaseMotion CSS in a real-world education layout — hero, class catalog, chef profiles, kitchen gallery, schedule & pricing table, gift CTA, enrollment form, and footer.

## How is it used?

Open `demo.html` directly in any modern browser. No build step, no CDN, no JavaScript framework — just `demo.html` + `style.css`.

The page is composed entirely of `ease-*` utility classes. A few examples:

```html
<!-- Scroll-revealed card that lifts on hover -->
<article class="ease-card ease-reveal-up ease-hover-lift">
  <h3 class="ease-card-title">Beginner Foundations</h3>
  <p class="ease-card-text">Knife skills, mise en place, stocks and sauces.</p>
</article>

<!-- Staggered scroll reveals using delay classes -->
<div class="ease-reveal-up">First in</div>
<div class="ease-reveal-up ease-reveal-d1">Second in</div>
<div class="ease-reveal-up ease-reveal-d2">Third in</div>

<!-- Nav link with animated underline -->
<a href="#classes" class="ease-nav-link ease-hover-underline">Classes</a>

<!-- Gallery image with zoom-on-hover -->
<div class="ease-gallery-item ease-hover-zoom"></div>
```

A tiny inline `IntersectionObserver` (browser-native, no library) toggles the `is-visible` class on `ease-reveal-up` elements as they scroll into view.

## Why is it useful?

EaseMotion CSS exists to make motion and interaction feel **effortless and consistent** across real-world pages. This submission proves that goal in a content-rich vertical (culinary education) by:

- Demonstrating how a **complete business page** can be assembled using only `ease-*` classes — no custom keyframes, no JS framework.
- Showing **composable patterns** (`ease-reveal-up` + `ease-reveal-d1/d2/d3` for staggered entrance, `ease-hover-lift` + `ease-hover-zoom` for tactile feedback).
- Providing a **realistic copy-paste template** other contributors and users can adapt for any education business — language schools, music academies, coding bootcamps, etc.
- Respecting accessibility with a `prefers-reduced-motion` guard so animations gracefully disable for users who request it.

---

## Sections included

| #   | Section                                                    | EaseMotion classes used                                               |
| --- | ---------------------------------------------------------- | --------------------------------------------------------------------- |
| 1   | Sticky navbar                                              | `ease-nav`, `ease-nav-link`, `ease-hover-underline`                   |
| 2   | Hero with food imagery                                     | `ease-hero`, `ease-text-gradient`, `ease-pill`, `ease-reveal-up`      |
| 3   | Class types (Beginner / Advanced / Baking / International) | `ease-grid-4`, `ease-card`, `ease-hover-lift`, `ease-reveal-d1/d2/d3` |
| 4   | Chef instructor profiles                                   | `ease-grid-3`, `ease-chef`, `ease-hover-lift`                         |
| 5   | Kitchen facility gallery                                   | `ease-gallery`, `ease-hover-zoom`                                     |
| 6   | Schedule & pricing table                                   | `ease-table`, `ease-hover-row`, `ease-link-pill`                      |
| 7   | Gift cooking class CTA                                     | `ease-cta-band`, `ease-btn-light`                                     |
| 8   | Enrollment form                                            | `ease-form-grid`, `ease-form`, `ease-field`, `ease-form-success`      |
| 9   | Footer                                                     | `ease-footer`, `ease-footer-grid`, `ease-footer-link`                 |

---

## Requirements checklist (from issue #21037)

- [x] Single `demo.html` — opens directly in browser, no build step
- [x] Uses only existing `ease-*` classes — no custom keyframes invented in the demo
- [x] Fully responsive (mobile, tablet, desktop — 3 breakpoints)
- [x] Entrance animations on scroll/load
- [x] Hover interactions throughout (`ease-hover-lift`, `ease-hover-zoom`, `ease-hover-underline`, `ease-hover-row`)
- [x] Realistic placeholder content — no lorem ipsum
- [x] `README.md` listing which EaseMotion classes are showcased

---

## Author

Submitted by [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux) — suffix `-ssx` appended to the folder name per the contribution guidelines on unique identifiers.
