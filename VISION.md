# EaseMotion CSS Vision

EaseMotion CSS aims to become a human-readable design language for the web.

---

## The Problem

Modern CSS frameworks push developers in one of two directions:

- **Vanilla CSS** — full power, but everything written from scratch. Slow, inconsistent across projects.
- **Utility frameworks** (Tailwind, etc.) — fast, but class names are abbreviated, cryptic, and require memorization. A new developer cannot read `pt-4 flex items-center gap-x-2` and understand the layout.

Neither approach makes CSS feel natural. Both create cognitive overhead at different points.

---

## The Idea

> Instead of writing complex CSS or memorizing utility classes, developers should be able to describe UI in simple, expressive terms.

EaseMotion CSS is built around a single belief: **if you can say it in English, you should be able to write it as a class.**

```html
<!-- You want to center something — just say it -->
<div class="ease-center">

<!-- You want it to fade in — say it -->
<div class="ease-fade-in">

<!-- You want it to grow on hover — say it -->
<button class="ease-hover-grow">
```

No documentation lookup needed. The class name is the documentation.

---

## The System

EaseMotion CSS is not an open-edit utility library. It is a **curated design system** built through a structured pipeline:

```
Community Ideas
      ↓
 Raw submissions (submissions/examples/)
      ↓
 Maintainer review & standardization
      ↓
 Integrated into core (ease-* naming, CSS variables, comments)
      ↓
 Released as part of the framework
```

Every class that enters EaseMotion CSS has been:
- Reviewed for fit with the philosophy
- Renamed to follow `ease-kebab-case` convention
- Optimized to use CSS custom properties
- Documented before release

This is what separates EaseMotion CSS from a collection of snippets. The curation is the product.

---

## Long-Term Goals

| Goal | Status |
|------|--------|
| Human-readable core utilities | ✅ v1.0 |
| Animation-first motion library | ✅ v1.0 |
| Curated contribution pipeline | ✅ v1.0 |
| Component library (buttons, cards) | ✅ v1.0 |
| Form components | 🔜 Planned |
| Dark mode tokens | 🔜 Planned |
| CDN distribution | 🔜 Planned |
| npm package | 🔜 Planned |

---

## Design Principles (Non-negotiable)

These principles will never be violated, regardless of contributor demand:

1. **Readability over brevity** — `ease-hover-grow` always over `ease-hg`
2. **CSS variables over hard-coded values** — every color, spacing, and timing value must reference a token
3. **One class, one behavior** — no "super classes" that do five things at once
4. **Accessibility by default** — `prefers-reduced-motion` respected everywhere
5. **Zero dependencies** — EaseMotion CSS ships as plain CSS files, nothing else

---

## Maintained by

**Saptarshi Sadhu**

EaseMotion CSS is a personal project built with long-term intent. The curated model exists not to gatekeep, but to ensure that every release reflects a cohesive, deliberate design language — not a crowdsourced collection of random styles.

GitHub: [@SAPTARSHI-coder](https://github.com/SAPTARSHI-coder)
