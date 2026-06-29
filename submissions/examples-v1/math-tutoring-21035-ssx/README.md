# Math Tutoring Center — Northstar Math (Issue #21035)

A complete, copy-paste-ready demo page for an **Academic Tutoring Center**, built entirely with `ease-*` utility classes from EaseMotion CSS.

> **Submission folder:** `submissions/examples/math-tutoring-21035-ssx/`  
> **Issue:** [#21035 — Advanced: Education — Math Tutoring Center](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/21035)

---

## What does this do?

It is a full, self-contained marketing site for a fictional math tutoring center ("Northstar Math") that showcases EaseMotion CSS in a real-world academic-education layout — hero with student-success imagery, subjects & grade levels, 4-step teaching methodology, tutor profiles, animated results count-up, parent testimonials, enrollment form, and footer.

## How is it used?

Open `demo.html` directly in any modern browser. No build step, no CDN, no JavaScript framework — just `demo.html` + `style.css`.

The page is composed entirely of `ease-*` utility classes. A few examples:

```html
<!-- Subject card that lifts on hover and reveals on scroll -->
<article class="ease-subject ease-reveal-up ease-hover-lift">
  <div class="ease-subject-icon">∫</div>
  <h3 class="ease-subject-title">Pre-Calc &amp; Calculus</h3>
  <p class="ease-subject-grade">Grades 11 – College</p>
</article>

<!-- Staggered reveal across a 4-step methodology -->
<article class="ease-step ease-reveal-up">…</article>
<article class="ease-step ease-reveal-up ease-reveal-d1">…</article>
<article class="ease-step ease-reveal-up ease-reveal-d2">…</article>
<article class="ease-step ease-reveal-up ease-reveal-d3">…</article>

<!-- Animated count-up number (rolls from 0 → target on scroll) -->
<span class="ease-counter-num" data-target="1800" data-suffix="+">0</span>

<!-- Tutor card with painted avatar + credential pills -->
<article class="ease-tutor ease-hover-lift">
  <div class="ease-tutor-photo ease-tutor-photo-1"></div>
  <span class="ease-meta-pill">MA Math Ed · UCLA</span>
</article>
```

Two tiny inline `IntersectionObserver`s (browser-native, no library) handle the work:

1. One toggles `is-visible` on `.ease-reveal-up` elements as they scroll into view.
2. One animates the `.ease-counter-num` values from `0` up to their `data-target` using `requestAnimationFrame` with an ease-out curve — perfect for the "Results / score improvements (count-up)" requirement.

## Why is it useful?

EaseMotion CSS is built to make motion and interaction feel **effortless and consistent** across real-world pages. This submission proves that goal in a content-rich vertical (academic tutoring) by:

- Demonstrating how a **complete tutoring-center landing page** can be assembled using only `ease-*` classes — no custom keyframes invented at the HTML level, no JS framework, no CDN, no external image files.
- Showing **composable patterns** (`ease-reveal-up` + `ease-reveal-d1/d2/d3` for staggered entrance, `ease-hover-lift` for cards/tutors/counters, `ease-hover-underline` for nav, `ease-float` for ambient hero motion, plus an `ease-counter-num` count-up pattern for the Results section).
- Providing a **realistic copy-paste template** other contributors and users can adapt for any academic / tutoring / coaching business — test prep, language tutoring, music lessons, sports coaching, etc.
- Respecting accessibility with a `prefers-reduced-motion` guard so animations, the floating hero SVGs, and even the count-up gracefully disable for users who request it.

---

## Sections included

| # | Section | EaseMotion classes used |
|---|---|---|
| 1 | Sticky navbar | `ease-nav`, `ease-nav-link`, `ease-hover-underline` |
| 2 | Hero with student-success SVGs | `ease-hero`, `ease-text-gradient`, `ease-pill`, `ease-float`, `ease-reveal-up` |
| 3 | Subjects &amp; grade levels (4 cards) | `ease-grid-4`, `ease-subject`, `ease-subject-icon`, `ease-hover-lift`, `ease-reveal-d1/d2/d3` |
| 4 | Teaching methodology (4 steps) | `ease-method`, `ease-step`, `ease-step-num`, `ease-hover-lift` |
| 5 | Tutor profiles (3 cards) | `ease-grid-3`, `ease-tutor`, `ease-tutor-photo-1/2/3`, `ease-meta-pill`, `ease-hover-lift` |
| 6 | Results / score improvements (count-up) | `ease-results-band`, `ease-counter`, `ease-counter-num` (animated via `IntersectionObserver` + `requestAnimationFrame`) |
| 7 | Parent testimonials | `ease-quote`, `ease-quote-stars`, `ease-quote-author`, `ease-hover-lift` |
| 8 | Enrollment form | `ease-form-grid`, `ease-form`, `ease-field`, `ease-form-success` |
| 9 | Footer | `ease-footer`, `ease-footer-grid`, `ease-footer-link` |

---

## Requirements checklist (from issue #21035)

- [x] Single `demo.html` — opens directly in browser, no build step
- [x] Uses only existing `ease-*` classes — no custom keyframes invented in the demo
- [x] Fully responsive (mobile, tablet, desktop — 3 breakpoints)
- [x] Entrance animations on scroll/load (`ease-reveal-up` + `IntersectionObserver`)
- [x] Hover interactions throughout (`ease-hover-lift`, `ease-hover-underline`)
- [x] Realistic placeholder content — no lorem ipsum (real-sounding tutor bios, parent quotes, subjects, grade levels, prices)
- [x] `README.md` listing which EaseMotion classes are showcased
- [x] **Results / score improvements rendered as an animated count-up** — explicitly required by the issue ✅

---

## Author

Submitted by [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux) — suffix `-ssx` appended to the folder name per the contribution guidelines on unique identifiers. This is my third merged submission in the Education series (after #21037 Cooking School and #21038 Music Theory Online Course).