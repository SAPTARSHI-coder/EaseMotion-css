# ease-astro-hydration-motion-skg

> EaseMotion CSS · Docs Track Submission  
> Contributor: karrisanthoshigayatri · Issue #47699

---

## What does this do?

An interactive documentation guide explaining how Astro Island hydration
timing (`client:*` directives) interacts with EaseMotion CSS entrance and
hover animations — including common pitfalls, recommended patterns, a
directive chooser, and copy-ready integration snippets.

---

## How is it used?

Open `demo.html` directly in any modern browser — no server or build step:

```
# Windows
start submissions/docs/ease-astro-hydration-motion-skg/demo.html

# macOS / Linux
open  submissions/docs/ease-astro-hydration-motion-skg/demo.html
```

### Interactive features

| Feature | Interaction |
|---|---|
| **Directive Accordion** | Click any `client:*` directive row to expand timing details and motion impact |
| **Pitfall Cards** | Click a pitfall header to expand the problematic vs fixed code comparison |
| **Directive Chooser** | Answer two questions to get the recommended hydration directive |
| **Snippet Copy** | Click 📋 Copy on any code snippet to copy it to clipboard |

---

## Why is it useful?

Beginners using EaseMotion CSS with Astro often assume motion requires
JavaScript — so they reach for hydrated islands when a plain `.astro` file
and pure CSS would work perfectly. The opposite confusion also happens: they
use `client:idle` or `client:visible` for components where JS-toggled
EaseMotion classes need to fire immediately, leading to silent failures where
users click or hover with no visible response.

This guide closes both gaps by:

- Explaining the CSS-first principle: EaseMotion animations never need JS
- Showing exactly how each `client:*` directive affects motion timing
- Demonstrating all three common broken patterns with side-by-side code comparisons
- Providing four copy-ready integration patterns for common scenarios

It fits EaseMotion's philosophy of showing rather than describing — every
concept is demonstrated with real, runnable code snippets.

---

## Guide sections

| # | Section | Content |
|---|---|---|
| 1 | Core Concepts | Four concept cards: Islands, Hydration, EaseMotion, The Mismatch |
| 2 | Hydration Directives | Accordion: `client:load`, `idle`, `visible`, `media`, `only` — timing + impact |
| 3 | Common Pitfalls | Three expandable cards with ❌ bad / ✅ fixed code comparisons |
| 4 | Recommended Patterns | Four patterns: CSS-first, static shell, is-hydrated guard, fill-mode |
| 5 | Directive Chooser | Two-question interactive guide to the right `client:*` directive |
| 6 | Copy-Ready Snippets | Four Astro/React integration snippets with one-click clipboard copy |

---

## File structure

```
submissions/docs/ease-astro-hydration-motion-skg/
├── demo.html    ← full interactive guide, opens directly in browser
├── style.css    ← layout, accordion, code compare, chooser, syntax colors
├── script.js    ← accordion toggles, chooser logic, snippet copy
└── README.md    ← this file
```

---

## Accessibility

- Accordion headers are keyboard-focusable (native `div` click; can be
  enhanced to `button` elements for production use)
- Toast uses `role="status"` and `aria-live="polite"`
- Copy buttons include `aria-label`
- `prefers-reduced-motion: reduce` disables all CSS transitions

---

## Browser compatibility

| Browser | Status |
|---|---|
| Chrome 110+ | ✅ |
| Firefox 110+ | ✅ |
| Safari 16+ | ✅ |
| Edge 110+ | ✅ |

---

## Contribution notes

- No core framework files were modified.
- All files are within `submissions/docs/ease-astro-hydration-motion-skg/`.
- Maintainer may rename/standardize as needed before integration.
