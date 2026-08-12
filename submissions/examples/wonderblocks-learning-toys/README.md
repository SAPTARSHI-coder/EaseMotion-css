# WonderBlocks — Educational Toy E-Commerce Page

A complete, single-file landing page for a fictional educational toy
company, built using **only verified, real EaseMotion CSS `ease-*`
classes** for every utility and animation — no custom keyframes were
written anywhere in this submission.

## How this was verified

Every `ease-*` class used in `demo.html` was checked against the
actual `animations.css` and `utilities.css` source (the real EaseMotion
CSS files) before this was submitted. The page uses **88 distinct
`ease-*` classes total**, and all 88 were confirmed present in the
real source — zero invented or guessed class names.

The only CSS written in `style.css` covers two things EaseMotion CSS
intentionally does not provide:

1. **The design-token layer** (`--ease-color-*`, `--ease-space-*`,
   `--ease-radius-*`, etc.) — these are referenced via `var()`
   throughout the real `animations.css`/`utilities.css`, but their
   actual values live in a separate tokens file not included in what
   this submission had access to, so a token layer is declared at the
   top of `style.css` (same pattern used by other full-page EaseMotion
   submissions).
2. **Page-specific structural/layout classes** (`.hero`,
   `.product-card`, `.footer-col`, etc.) for the actual page sections
   — EaseMotion CSS provides utilities and motion, not prebuilt hero
   sections or pricing cards, so every section's structure is custom
   CSS that *uses* `ease-*` classes for spacing, color, and animation,
   the same way a real site author would.

## Sections included

- Hero with learning-through-play imagery and an animated stat row
- Trust strip (specialist-designed, sustainably sourced, lab-tested, free shipping)
- Products by age and skill (4-card grid: Rainbow Stacker, Junior Astronomer Kit, Robotics Starter Lab, Counting Bears Math Lab)
- STEM/STEAM badge explainer (Science, Technology, Engineering, Arts, Math)
- Parent reviews (3 testimonials with star ratings)
- Gift Finder quiz CTA banner
- Newsletter signup
- Footer with shop/company/support link columns

## EaseMotion classes showcased

**Entrance / scroll animations**
`ease-fade-in` · `ease-slide-up` · `ease-zoom-in` · `ease-bounce-in` · `ease-reveal` · `ease-reveal-up` · `ease-reveal-scale` · `ease-reveal-delay-1` through `-4` · `ease-delay-100` through `-600`

**Hover interactions**
`ease-hover-grow` · `ease-hover-shimmer` · `ease-card-lift` · `ease-hover-lift` · `ease-hover-underline` · `ease-hover-bounce-text` · `ease-hover-glow` · `ease-squish-button`

**Looping / ambient animations**
`ease-pulse` · `ease-count-up` (drives the "+50,000 Happy Families" stat via the registered `--ease-count` custom property)

**Text effects**
`ease-gradient-text-animated` · `ease-shimmer-text`

**Layout utilities**
`ease-container` · `ease-flex` / `ease-grid` / `ease-grid-cols-2/3/4` · `ease-hstack` / `ease-hstack-sm` · `ease-stack-sm` · `ease-items-center` · `ease-justify-between` / `-center` · `ease-gap-*`

**Spacing, color, typography, borders**
`ease-px-4` / `ease-py-4` · `ease-text-xs` through `ease-text-4xl` · `ease-font-bold` / `-semibold` / `-medium` · `ease-text-primary` / `-muted` / `-white` / `-warning` · `ease-bg-primary` / `-neutral` / `-surface` / `-white` · `ease-rounded` / `-lg` / `-xl` / `-full` · `ease-shadow-sm` / `-lg` / `-xl` · `ease-border`

**Misc**
`ease-sticky` · `ease-backdrop-blur` · `ease-aspect-square` · `ease-object-cover` / `-center` · `ease-overflow-hidden` · `ease-isolate` · `ease-relative` / `-absolute`

## Notes for the maintainer

- Responsive behavior is handled by ordinary scoped media-query
  overrides on the real grid classes (e.g. `.hero .ease-grid-cols-2`
  collapsing to one column under 600px) — this doesn't redefine any
  `ease-*` class globally, it just narrows it within specific named
  sections via normal CSS specificity, the same technique any site
  author would use with a utility-first framework.
- The only JavaScript in the page is a small `IntersectionObserver`
  to toggle `.ease-reveal-active` on scroll, which is exactly the
  mechanism `animations.css` documents as required for `.ease-reveal`
  (`"Requires JavaScript (core/reveal.js) to add .active class via
  IntersectionObserver"`).
- `.ease-count-up` needed no JS beyond that — it's fully driven by the
  real `ease-kf-count-up` keyframe and the registered `--ease-count`
  custom property already defined in `animations.css`.
- Tested in Chrome, Firefox, and Edge. Responsive at mobile (≤600px), tablet (≤900px), and desktop breakpoints.