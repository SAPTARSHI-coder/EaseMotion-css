# ease-reveal Fires Before Images Load (Layout Shift)

A documentation showcase that demonstrates **CLS (Cumulative Layout Shift)** when `ease-reveal` triggers before image dimensions are known — plus documented fix patterns.

> Submission track: `submissions/docs/ease-reveal-cls-issue-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44494

---

## What does this do?

EaseMotion's scroll reveal (`core/reveal.js` + `.ease-reveal` classes) can activate before async images reserve layout space. When images load later, content jumps — hurting Core Web Vitals CLS scores.

This showcase lets contributors:

- Reproduce the CLS issue with delayed image loading
- Compare broken vs fixed implementations side by side
- View live CLS scores via `PerformanceObserver`
- Learn fix patterns and copy HTML snippets

## How is it used?

1. Open `demo.html` in a browser.
2. Click **Replay demo** to reload images with a 2.5s delay.
3. Watch the **Broken** panel caption jump when the image loads.
4. Compare with the **Fixed** panel (aspect-ratio + skeleton).
5. Toggle **Delay reveal until images load** on the fixed panel.
6. Copy snippets for your own CLS-safe reveal usage.

## Features

- Reproducible `ease-reveal` + unloaded image CLS demo
- Side-by-side broken vs fixed comparison
- CLS impact visualization panel
- Fix patterns: `width`/`height`, `aspect-ratio`, skeleton placeholders
- Delayed reveal trigger (wait for `load` event)
- Educational notes on CLS and reveal timing
- Copy-ready HTML snippets
- Responsive, accessible UI
- Uses EaseMotion CSS CDN + `core/reveal.js`

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive CLS demo and snippet tabs |
| `style.css` | Lab layout and broken/fixed visual styling |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/`.
- No edits to `core/`, `components/`, or existing project files.
- Self-contained — no backend, no build step.
