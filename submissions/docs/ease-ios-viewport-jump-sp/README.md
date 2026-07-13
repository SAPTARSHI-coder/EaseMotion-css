# iOS Safari 100vh + Fixed Navbar Jump with Entrance Animations

A documentation showcase that reproduces and explains the **iOS Safari viewport jump** when `ease-fade-in` hero sections use `100vh` with fixed navbars — plus tested workaround patterns.

> Submission track: `submissions/docs/ease-ios-viewport-jump-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44493

---

## What does this do?

EaseMotion hero entrances like `ease-fade-in` combined with `100vh` layouts and fixed navbars can cause visible layout jumps on iOS Safari when browser chrome shows or hides. This guide documents the root cause (dynamic viewport behavior) and provides iOS-safe CSS patterns.

---

## Demos included

| Panel | Pattern | Behavior |
|-------|---------|----------|
| Broken | `min-height: 100%` (≈ `100vh`) | Hero grows when URL bar hides — content jumps |
| Fixed | `100svh` + `safe-area-inset` | Hero height stays stable — no jump |

---

## How is it used?

1. Open `demo.html` in a browser (test on real iOS Safari for full accuracy).
2. Click **Toggle Safari chrome** to simulate URL bar hide/show.
3. Compare broken vs fixed phone mockups side by side.
4. Try **Landscape** orientation and **Replay ease-fade-in**.
5. Copy the iOS-safe hero CSS snippet.

---

## Features

- Reproducible demo of 100vh jump with fixed navbar + `ease-fade-in` hero
- Side-by-side comparison (Broken vs Fixed layout)
- Workaround patterns: `100dvh`, `100svh`, `-webkit-fill-available`, safe-area insets
- Fixed navbar positioning fixes for iOS Safari
- Educational notes on dynamic viewport units vs static `100vh`
- Mobile viewport simulation panel with resize/orientation toggle
- Copy-ready CSS snippets for iOS-safe hero + entrance animation combos
- Responsive demo page with accessible labels and readable contrast

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Phone mockups + workarounds | `style.css` |
| Chrome/orientation simulation | Inline JS in `demo.html` |

---

## Key workarounds

```css
.ios-safe-hero {
  min-height: 100svh;
  min-height: 100dvh;
  padding-top: calc(3rem + env(safe-area-inset-top, 0px));
}
```

Include `viewport-fit=cover` in the viewport meta tag for `env(safe-area-inset-*)` to work.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Side-by-side mockups, controls, copy snippet |
| `style.css` | Broken vs fixed layouts, phone chrome simulation |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-ios-viewport-jump-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
