# Announce Bar Pattern Library (5 variants)

A pattern library showcasing **five reusable announce-bar layouts** using the EaseMotion `announce-bar` component — sticky promo, dismissible slide-down, rotating messages, sale countdown, and cookie-style consent.

> Submission track: `submissions/examples/ease-announce-bar-patterns-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44483

---

## What does this do?

EaseMotion CSS includes an `announce-bar` component, but beginners often lack real-world pattern examples. This library demonstrates five common announce-bar layouts in one demo page.

---

## Patterns included

| # | Pattern | Key classes |
|---|---------|-------------|
| 1 | Sticky promo bar | `.ease-announce-bar.is-fixed.is-warning` |
| 2 | Dismissible slide-down | `.ease-announce-bar-dismiss` + close label |
| 3 | Rotating messages | `.ease-announce-bar.is-success` + JS cycle |
| 4 | Sale countdown strip | `.ease-announce-bar.is-danger` + timer |
| 5 | Cookie consent bar | Bottom-fixed bar with accept/decline |

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Browse all 5 pattern cards with live previews.
3. Interact with dismiss, rotate dots, countdown, and cookie buttons.
4. Copy snippets for each pattern at the bottom.
5. Read accessibility and variant modifier notes.

---

## Features

- Sticky promo bar pattern (fixed top announcement)
- Dismissible slide-down bar with close button
- Rotating messages bar (multiple announcements cycling)
- Sale countdown strip pattern
- Cookie-style info / consent bar pattern
- Uses EaseMotion announce-bar component classes
- Entrance animations (built-in slide-down on `.ease-announce-bar`)
- Copy-ready HTML snippet for each of the 5 variants
- Responsive and clean demo page
- Accessible labels, keyboard-friendly dismiss controls

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Rotating / countdown logic | Inline JS in `demo.html` |
| Demo layout | `style.css` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | 5 pattern demos, copy snippets, interactions |
| `style.css` | Demo layout, cookie bar, countdown styling |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/examples/ease-announce-bar-patterns-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
