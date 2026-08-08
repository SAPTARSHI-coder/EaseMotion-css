# Grid Auto-Fit + Entrance Animations CLS Mini-Lab

A documentation showcase that reproduces **Cumulative Layout Shift (CLS)** when `ease-grid-auto` cards use `ease-zoom-in`, and documents before/after containment patterns that keep the grid stable.

> Submission track: `submissions/docs/ease-grid-auto-cls-sp/`  
> Contributor suffix: `sp`  
> Related issue: [#47545](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/47545)

---

## What does this do?

EaseMotion’s responsive auto-fit grid (`ease-grid-auto`) pairs poorly with bounce zoom entrances (`ease-zoom-in`) when the animation runs on the **grid item itself**. Overshoot can spill into neighbors and disturb auto-fit tracks — a layout + motion CLS issue distinct from reveal-CLS or loop-CPU demos.

This mini-lab:

- Reproduces the broken pattern (zoom on grid children)
- Shows a contained fix (stable shell + inner zoom)
- Documents copy-friendly containment patterns
- Optionally reports CLS via `PerformanceObserver` when the browser supports it

## How is it used?

1. Open `demo.html` in a browser (EaseMotion CSS loads from the jsDelivr CDN).
2. Watch the **Before** panel — cards zoom on the grid items with stagger delays.
3. Compare the **After** panel — same motion, but shells reserve space and clip overshoot.
4. Click **Replay entrance animations** to re-run both sides.
5. Copy a containment snippet from the patterns section.

### Preferred fix pattern

```html
<div class="ease-grid ease-grid-auto ease-gap">
  <article class="card-shell">
    <div class="card-inner ease-zoom-in">…</div>
  </article>
</div>
```

```css
.card-shell {
  min-height: 8rem;
  overflow: hidden;
  contain: layout;
}
```

## Why is it useful?

- Teaches a real Core Web Vitals risk when combining auto-fit grids and zoom entrances
- Separates **layout shell** from **motion node** — the key mental model
- Keeps the fix project-local (no core edits)
- Complements (does not duplicate) reveal-CLS and loop-CPU showcases

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Before/after grids, CLS readout, pattern snippets |
| `style.css` | Lab layout + shell/containment helpers only |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-grid-auto-cls-sp/`
- No changes to `core/`, `components/`, workflows, or existing files
- Uses the official CDN bundle; no framework source copied
- Folder name includes unique contributor suffix `-sp`
- Respects `prefers-reduced-motion` in local demo styles
