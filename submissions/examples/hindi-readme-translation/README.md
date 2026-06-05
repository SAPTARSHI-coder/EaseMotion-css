# Hindi README Translation — EaseMotion CSS

**Submission path:** `submissions/examples/hindi-readme-translation/`

---

## 1. What does this do?

Provides a fully translated Hindi version of the EaseMotion CSS README, presented as a polished side-by-side bilingual showcase page where the English source and its Hindi translation are displayed in parallel columns.

---

## 2. How is it used?

Open `demo.html` directly in any browser — no server, no build step, no JavaScript. It is a self-contained documentation page that community members, contributors, or Hindi-speaking users can read to understand the project.

The layout class applied to a content pair:

```html
<section class="translation-block">
  <div class="col col-en">
    <!-- English content -->
  </div>
  <div class="col col-hi">
    <!-- Hindi content -->
  </div>
</section>
```

The demo strip at the bottom also showcases four CSS-only hover effects — grow, border glow, lift, and shimmer — each using simple classes defined in `style.css`:

```html
<div class="demo-card card-grow">Hover me</div>
<div class="demo-card card-fade-border">Hover me</div>
<div class="demo-card card-lift">Hover me</div>
<div class="demo-card card-shimmer">Hover me</div>
```

---

## 3. Why is it useful?

EaseMotion CSS is built around the idea that motion should feel natural and accessible. Accessibility includes linguistic accessibility — a README translated into Hindi opens the project to over 600 million Hindi speakers worldwide, many of whom are active open-source contributors.

This submission fits EaseMotion CSS's philosophy in two ways:

- **Inclusivity as enhancement:** Just as the library enhances interfaces without requiring JavaScript, this translation enhances the project's reach without requiring any tooling or framework.
- **Composability:** The bilingual layout classes (`translation-block`, `col-en`, `col-hi`) are self-contained and composable — they can be dropped into any documentation page.

The four demo hover effects in the live preview strip also serve as a practical illustration of EaseMotion CSS's core animation primitives in a real UI context.

---

## Files

| File        | Purpose                                        |
| ----------- | ---------------------------------------------- |
| `demo.html` | Self-contained bilingual showcase page         |
| `style.css` | Bilingual layout + four CSS-only hover effects |
| `README.md` | This file                                      |

---

## Notes for Maintainer

- Class names follow the no-`ease-`-prefix rule. Rename to `ease-*` as needed.
- Hard-coded timing values (`180ms`, `280ms`) and easing functions should be replaced with `var(--ease-speed-*)` and `var(--ease-ease-*)` tokens upon integration.
- The Hindi text has been written in standard Devanagari script. No font embedding is used; the browser's default system fonts handle Devanagari correctly across all major platforms.
- The shimmer effect uses a CSS `::after` pseudo-element with `transform: translateX` — no JavaScript whatsoever.
