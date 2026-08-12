# Astro Island Hydration + EaseMotion Class Timing

A static documentation guide explaining how Astro `client:*` hydration timing interacts with EaseMotion CSS classes — and which patterns keep entrance and hover motion predictable.

> Submission track: `submissions/docs/ease-astro-hydration-motion-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #47699

---

## What does this do?

EaseMotion CSS is CSS-first: entrance and hover classes work without JavaScript. But Astro Islands hydrate on a schedule (`client:load`, `client:idle`, `client:visible`), which can confuse beginners who expect JS-driven interactivity to fire immediately.

This guide clarifies:
- which EaseMotion classes work before hydration
- which patterns wait for island activation
- how to choose the right `client:*` directive for motion UX

## How is it used?

1. Open `demo.html` in a browser (no build step).
2. Read the CSS-first vs hydration timeline explanation.
3. Compare problematic vs recommended Astro patterns.
4. Use the interactive hydration delay simulator.
5. Copy snippets for `Layout.astro` and island components.
6. Apply the hydration strategy checklist.

## Features

- Explains Astro Island hydration timing in motion context
- Demonstrates delayed-interaction pitfalls with `client:*` directives
- Shows recommended patterns for stable entrance/hover behavior
- Copy-ready snippet examples for Astro components and directives
- Interactive hydration delay simulator
- Checklist for choosing hydration strategy by interaction criticality
- Responsive and beginner-friendly documentation UI

## Why is it useful?

- **Closes an Astro docs gap** — README mentions Astro but has no hydration timing guide.
- **Prevents false bug reports** — "hover doesn't work until scroll" is often `client:visible`.
- **Separates CSS from JS** — EaseMotion utilities don't need hydration; JS triggers do.
- **Self-contained** — no edits to `core/`, `components/`, or existing files.

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Hydration simulator | Inline JS in `demo.html` |
| Layout styles | `style.css` |

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Guide UI, timeline, simulator, copy snippets |
| `style.css` | Layout, cards, timeline, responsive styling |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-astro-hydration-motion-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Folder name carries the unique contributor suffix `-sp`.
