# prefers-contrast Media Query Motion Lab

An interactive documentation lab comparing **normal contrast** vs **high-contrast** UI under `prefers-contrast: more` — with borders, focus rings, and glow shadows adjusted for readability.

> Submission track: `submissions/docs/ease-prefers-contrast-lab-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44485

---

## What does this do?

EaseMotion CSS includes glow shadows and soft borders that can reduce readability for contrast-sensitive users. This lab shows side-by-side comparisons and lets you simulate `prefers-contrast: more` to see the adjustments.

---

## Comparisons included

| Pattern | Normal | High contrast |
|---------|--------|---------------|
| Glow button | `.ease-hover-glow` drop-shadow | Solid `outline` instead |
| Glow card | `.ease-card-glow` box-shadow | 2px solid border |
| Focus ring | 2px primary outline | 3px dark outline |
| Card shadow | `.ease-card-shadow` depth | Border, no shadow |

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Toggle **Simulate prefers-contrast: more** to transform the live preview zone.
3. Browse side-by-side comparison cards for each pattern.
4. Tab to focus buttons to test focus ring visibility.
5. Copy the CSS snippet for contrast-safe overrides.

---

## Features

- Side-by-side comparison panels (Normal vs High Contrast)
- Border and outline adjustments for high-contrast mode
- Focus ring visibility examples for keyboard users
- Glow shadow reduction / removal under high contrast
- `prefers-contrast` media query demonstration and manual toggle
- Educational notes on contrast + motion best practices
- Copy-ready CSS snippets for contrast-safe patterns
- Responsive, accessible UI with keyboard-friendly controls

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Contrast overrides | `style.css` (`@media` + simulation class) |
| Toggle logic | Inline JS in `demo.html` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Live preview, comparisons, copy snippet |
| `style.css` | Normal vs HC styling, media query rules |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-prefers-contrast-lab-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
