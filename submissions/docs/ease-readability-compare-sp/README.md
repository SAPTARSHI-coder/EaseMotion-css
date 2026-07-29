# Tailwind vs EaseMotion Readability Comparator

An interactive documentation showcase that displays the **same hero section twice** — once with Tailwind utility classes and once with EaseMotion readable classes — with plain-English explanations on hover for every class.

> Submission track: `submissions/docs/ease-readability-compare-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43336

---

## What does this do?

EaseMotion CSS's core pitch is simple: **if you can say it in English, you can write it as a class.** This comparator makes that claim tangible by showing two identical hero sections side by side and letting you explore what every class actually means.

| Tailwind | EaseMotion |
|----------|------------|
| `flex items-center justify-center` | `ease-center` |
| `hover:scale-105 transition-transform` | `ease-hover-grow` |
| Custom `@keyframes` or plugins | `ease-fade-in`, `ease-slide-up` |

Hover any class chip below a preview to see a tooltip with a plain-English explanation.

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Compare the two live hero previews at the top.
3. Scroll to the **class breakdown** under each column.
4. **Hover or focus** any class chip to read what it does in plain English.
5. Read the **readability table** and educational notes at the bottom.

## Features

- Side-by-side Tailwind vs EaseMotion hero section comparison
- 27 Tailwind class chips + 12 EaseMotion class chips with hover tooltips
- Matching layout and visual output in both versions
- Comparison table highlighting readability differences
- Educational notes on when each framework shines
- Responsive layout (columns stack on mobile)
- `prefers-reduced-motion` respected

## Why is it useful?

- **Supports the "why EaseMotion" pitch** with evidence, not just marketing copy.
- **Beginner-friendly** — tooltips decode abbreviations like `items-center` and `tracking-widest` without opening docs.
- **Honest comparison** — notes explain when Tailwind is the better choice too.
- **Self-contained** — no backend, no build step, no changes to `core/` or `components/`.

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Tailwind CSS | CDN (`cdn.tailwindcss.com`) — comparison only |
| Layout styles | `style.css` (uses `--ease-*` tokens) |

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Comparator UI, live heroes, tooltip logic |
| `style.css` | Layout and comparator-specific styles |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/`.
- Tailwind is loaded via CDN for visual comparison only — not integrated into the framework.
- Folder name carries the unique contributor suffix `-sp`.
