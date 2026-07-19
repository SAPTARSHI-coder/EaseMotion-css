# Core Web Vitals Impact of Animations Guide

An interactive documentation guide that compares **heavy EaseMotion animation patterns** with **production-optimized alternatives** — showing how motion choices affect **LCP**, **CLS**, and **INP**.

> Submission track: `submissions/docs/ease-web-vitals-motion-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43652

---

## What does this do?

EaseMotion CSS makes expressive animations easy, but beginners often do not realize how animation timing and property choices can hurt real-world **Core Web Vitals** scores.

This guide provides side-by-side **Heavy Motion vs Optimized Motion** panels so you can see the performance trade-offs before shipping animated UI.

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Read the **LCP / CLS / INP legend** at the top.
3. Browse comparison cards for hero timing, layout shifts, button feedback, and loop overload.
4. Use the **metric filter** (All · LCP · CLS · INP) to focus on one vital.
5. Toggle **Simulate prefers-reduced-motion** to test fallback behavior.
6. Press **Copy safe class** for recommended snippets.
7. Review the **production checklist** at the bottom.

---

## Features

- Side-by-side Heavy Motion vs Optimized Motion panels
- LCP impact examples (hero entrance timing and delayed paint)
- CLS impact examples (width animation vs transform scale)
- INP impact examples (slow multi-property click vs fast transform)
- Loop overload demo (`ease-ping` + `ease-pulse` + `ease-bounce`)
- Safe motion guidance using `transform` and `opacity`
- `--ease-animation-iterations` recommendation for loops
- `prefers-reduced-motion` simulation toggle
- Metric filter buttons (LCP / CLS / INP)
- Copy-ready safe class combination snippets
- Production performance checklist
- Responsive, accessible UI with keyboard-friendly controls

---

## Patterns covered

| Scenario | Heavy pattern | Optimized alternative |
|----------|---------------|----------------------|
| Hero entrance | `.ease-slide-up` + `.ease-delay-600` | `.ease-fade-in` (no delay) |
| Expanding chip | `width` keyframe animation | `transform: scaleX()` |
| Button feedback | 450ms multi-property transition | `.ease-hover-grow` |
| Loop overload | 3 infinite loops at once | `.ease-fade-in` one-shot |
| Staggered slide | `.ease-slide-up` + `.ease-delay-500` | `.ease-fade-in` above fold |

---

## Why is it useful?

- **Bridges animation and performance** — connects EaseMotion classes to real metrics.
- **Visual before/after** — heavy patterns shown next to safer replacements.
- **Framework-native** — uses real EaseMotion CDN classes plus documented safe rules.
- **GSSoC educational value** — helps contributors build performant animation demos.
- **Self-contained** — no edits to `core/`, `components/`, or existing files.

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Heavy vs safe demos | `style.css` (custom presets) |
| Filter & copy logic | Inline JS in `demo.html` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Comparison guide UI, filters, copy logic |
| `style.css` | Demo presets, layout, metric styling |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-web-vitals-motion-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
