# Astro Island Hydration & EaseMotion Class Timing

Resolves #47699

## What

A focused documentation guide explaining how Astro's island hydration model
(`client:load`, `client:idle`, `client:visible`, `client:media`, `client:only`)
interacts with EaseMotion CSS's hover and entrance classes, plus copy-ready
patterns for keeping motion predictable inside islands.

Files added:

```
submissions/docs/ease-astro-hydration-motion-sp/
├── README.md      (this file)
├── demo.html       (standalone guide, opens directly in a browser)
└── style.css       (guide styling only — not a new EaseMotion component)
```

## Why

EaseMotion's entrance/hover classes are pure CSS and start working the
moment the stylesheet is parsed. Astro Islands, on the other hand, only
attach their JavaScript event listeners once hydration completes — and
depending on the `client:*` directive, that can be immediate, deferred
until the browser is idle, deferred until the element scrolls into view,
or skipped on the server entirely.

Beginners combining the two often see one of these symptoms and don't know
why:

- An entrance animation plays correctly, but a *hover-triggered* class
  toggle (driven by island JS) does nothing for a moment after page load.
- A `client:visible` island's motion classes never fire because the
  component was already in the viewport before hydration finished, so the
  "on enter" logic that depended on an `IntersectionObserver` set up in
  the island's `onMount` never re-fires.
- Rapid interaction right after navigation (e.g. clicking a card that
  should flip on hover) feels "broken" because the click lands before
  hydration attaches the listener.

There wasn't a guide in the repo that named this gap directly for Astro
users, so this submission documents it with a plain-language explanation,
a comparison table, and before/after code snippets.

## How

The guide is a static, dependency-free `demo.html` page (matches the
`submissions/docs/` convention used elsewhere in the repo) covering:

1. A short primer on the five Astro hydration directives and when each
   one fires.
2. Why CSS-only EaseMotion classes (entrance/scroll animations applied
   directly in markup) are unaffected by hydration timing, while
   JS-driven interaction toggles are not.
3. A "problematic vs. recommended" code comparison for a hover-animated
   card inside an Astro Island.
4. A decision checklist for picking a hydration strategy based on how
   critical the interaction is on first paint.
5. Copy-ready Astro component snippets.

No build tooling is required — `demo.html` can be opened directly in a
browser to review the guide, per the contribution guidelines.

## Testing

- Opened `demo.html` directly in Chrome, Firefox, and Safari — renders
  correctly with no console errors, no external dependencies.
- Verified all code snippets are self-contained and framework-accurate
  against current Astro docs on `client:*` directives.

## Checklist

- [x] Opened/claimed issue #47699 before starting work
- [x] Added files under `submissions/docs/ease-astro-hydration-motion-sp/`
- [x] `demo.html` present and works by opening directly in a browser
- [x] `style.css` present
- [x] `README.md` present (what/how/why)
- [x] No changes to core framework files
