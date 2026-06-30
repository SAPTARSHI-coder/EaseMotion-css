# CSS Size Badge — EaseMotion CSS

## What does this do?

This showcase demonstrates a **dynamic CSS size badge** that displays the minified bundle size of `easemotion.min.css` (24.8 KB) using a Shields.io–style visual badge. The page explains how open-source projects can surface their CSS bundle size directly in their repository `README.md` — and keep it automatically updated with every release.

The demo includes:

- A large hero badge preview with a pulsing glow animation
- Four badge variants: Default, Dark, Rounded, and Flat
- Markdown snippet and badge URL ready to copy into any `README.md`
- A step-by-step update flow illustrating release automation
- A benefits section explaining why size badges improve developer experience
- A size comparison showing EaseMotion CSS alongside other popular CSS libraries

## Dynamic Badge Overview

A dynamic badge is a URL-based image hosted on [Shields.io](https://shields.io) that reflects live data. In this concept, the badge label is `CSS Size` and the value is the current minified CSS size in kilobytes (e.g. `24.8 KB`). The badge URL uses a custom colour parameter (`-6c5ce7`) to match the EaseMotion brand.

**Example Markdown:**

```markdown
[![CSS Size](https://img.shields.io/badge/CSS%20Size-24.8%20KB-6c5ce7)](https://github.com/SAPTARSHI-coder/EaseMotion-css)
```

This renders as a clickable badge in any GitHub-flavoured Markdown document.

## CSS Size Transparency

When developers evaluate a CSS library, bundle size is a critical factor. By placing the exact minified size in a prominent badge:

- Users know immediately how lightweight the library is
- Performance-conscious adopters can make informed decisions
- Maintainers are encouraged to keep the bundle lean across releases

The badge makes size visible *without* requiring a download, build, or inspection.

## Release Update Concept

The badge stays current through a fully automated pipeline:

1. A maintainer publishes a new **GitHub Release**
2. A **GitHub Action** (or equivalent CI step) triggers on `release`
3. The workflow builds the project, minifies `easemotion.min.css`, and extracts its byte size
4. The size is pushed to a JSON endpoint or directly into the Shields.io badge URL
5. The `README.md` badge automatically reflects the updated value — no manual edits required

This concept works with any CI provider (GitHub Actions, GitLab CI, CircleCI, etc.) and can be adapted to other badge services.

## How is it used?

1. **Open** `demo.html` in any modern browser — no build step required
2. **View** the hero badge, gallery, integration details, and benefits
3. **Copy** the Markdown snippet from the Integration section into your project's `README.md`
4. **Customise** the badge URL colour parameter to match your brand
5. **Add** a CI step (GitHub Action, etc.) that writes the minified CSS size to the badge URL on each release

## Why is it useful?

- **Transparency** — Instant visibility of CSS bundle size builds trust with users
- **Performance Awareness** — A visible metric keeps bundle bloat in check
- **Release Monitoring** — Teams can spot size regressions at a glance
- **Developer Confidence** — A professional badge signals a well-maintained, lean library

## Responsive Behaviour Notes

- The layout uses a flexible grid that collapses to a single column on narrow viewports (≤480 px)
- The hero badge preview stacks vertically on small screens for readability
- All typography uses `clamp()` for fluid scaling
- Touch targets remain comfortably large on mobile
- No JavaScript is used anywhere — all behaviour is CSS-only

## File Structure

```
submissions/examples/css-size-badge-nb/
├── demo.html      # Self-contained showcase page
├── style.css      # All styles and animations
└── README.md      # This file
```

## Typical Open-Source Use Cases

- **CSS libraries / frameworks** — Display minified bundle size in the repository README
- **Design systems** — Show per-component CSS weight alongside documentation
- **Utility-first projects** — Highlight how small the final production build remains
- **Animation libraries** — Demonstrate that rich motion does not require large CSS payloads
- **Any npm/css package** — Give consumers confidence in the dependency weight before installing

---

Built with [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) — A premium CSS animation library.