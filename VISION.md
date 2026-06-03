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
 ## Short-Term Roadmap (Next 3 Months)

### Month 1

* Expand core utility classes
* Improve documentation coverage
* Add more real-world examples
* Improve contributor onboarding

### Month 2

* Introduce additional form-related components
* Expand animation utilities
* Improve accessibility testing and validation
* Increase automated quality checks

### Month 3

* Refine component library consistency
* Improve CDN and package distribution experience
* Expand documentation website content
* Prepare for larger community contributions

---

## Scope Boundaries (What Will NOT Be Added)

To preserve the project's philosophy, EaseMotion CSS intentionally avoids:

* Abbreviated utility naming conventions
* Mandatory build steps or compilation requirements
* JavaScript-dependent core functionality
* Large plugin ecosystems that increase complexity
* Multiple competing naming styles
* Features that reduce readability in favor of shorter syntax

These boundaries help maintain a simple, human-readable design language.

---

## Community Vision

EaseMotion CSS aims to grow through thoughtful community collaboration.

Contributors are encouraged to:

* Propose new utility classes
* Share examples and use cases
* Improve documentation
* Report bugs and accessibility concerns
* Suggest improvements aligned with project philosophy

The goal is not to become the largest CSS framework, but to become one of the most approachable and readable frameworks for developers of all experience levels.

Community contributions will continue to be reviewed and curated to ensure consistency, quality, and alignment with the EaseMotion vision.
