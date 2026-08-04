# Delay Class Gap Finder

An educational documentation showcase that maps EaseMotion’s official `ease-delay-*` ladder, highlights gaps (especially **200ms → 300ms** with no 250ms class), and teaches safe `--custom-delay` / inline patterns — **without editing core**.

> Submission track: `submissions/docs/ease-delay-gap-lab-sp/`  
> Contributor suffix: `sp`  
> Related issue: [#47543](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/47543)

---

## What does this do?

EaseMotion ships a fixed set of animation-delay utilities in `core/animations.css`:

| Class | Delay |
|-------|-------|
| `ease-delay-75` | 75ms |
| `ease-delay-100` | 100ms |
| `ease-delay-150` | 150ms |
| `ease-delay-200` | 200ms |
| `ease-delay-300` | 300ms |
| `ease-delay-400` | 400ms |
| `ease-delay-500` | 500ms |
| `ease-delay-600` | 600ms |
| `ease-delay-700` | 700ms |
| `ease-delay-800` | 800ms |
| `ease-delay-1000` | 1000ms |

There is **no** `ease-delay-250` (or `ease-delay-900`). This lab is not a stagger builder — it is a gap finder and workaround guide.

## How is it used?

1. Open `demo.html` in a browser (EaseMotion CSS loads from the jsDelivr CDN).
2. Read the **official ladder** and note highlighted gaps.
3. Replay the **200 vs 250 vs 300** comparison to feel the mid-value difference.
4. Copy a workaround pattern:
   - Prefer an official class when it fits
   - Use `--custom-delay` for mid-gap values
   - Use inline `animation-delay` only for quick prototypes
5. Drag the **Try a custom delay** slider to generate a ready-to-paste snippet.

### Recommended custom-delay pattern

```html
<div
  class="ease-fade-in custom-delay"
  style="--custom-delay: 250ms"
>
  …
</div>
```

```css
/* In your project stylesheet — not in core/ */
.custom-delay {
  animation-delay: var(--custom-delay, 0ms);
}
```

## Why is it useful?

- Documents real ladder limits so contributors do not invent missing utility names by mistake
- Shows that mid-values are a **project-level** CSS variable concern, not a core PR
- Gives copy-friendly snippets for 250ms (and any other gap fill)
- Keeps the submission self-contained under `submissions/docs/`

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive lab UI + replay / slider logic |
| `style.css` | Lab layout styles (uses `--ease-*` tokens; local `.custom-delay` helper only) |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-delay-gap-lab-sp/` — no core, components, or workflow changes
- Uses the official CDN bundle (`easemotion.min.css`); no framework source copied
- Folder name includes unique contributor suffix `-sp`
- Respects `prefers-reduced-motion` in local demo styles (EaseMotion also reduces motion globally)
