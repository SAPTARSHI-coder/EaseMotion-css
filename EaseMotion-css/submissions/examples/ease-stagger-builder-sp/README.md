# EaseMotion Stagger Delay Choreography Builder

An interactive example that lets you **automatically build staggered animation sequences** — enter the number of items and a base delay, and the builder generates `ease-slide-up ease-delay-*` markup with a live preview.

> Submission track: `submissions/examples/ease-stagger-builder-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43229

---

## What does this do?

Staggered entrances are one of the most common animation patterns in modern UI — hero text lines, feature lists, card grids, and nav items all benefit from choreographed delays. The README shows the pattern manually:

```html
<div class="ease-slide-up ease-delay-100">First</div>
<div class="ease-slide-up ease-delay-200">Second</div>
<div class="ease-slide-up ease-delay-300">Third</div>
```

This builder automates that process. Pick your item count, base delay, and entrance animation — it generates the classes, previews the sequence live, and gives you copy-ready HTML.

## How is it used?

1. Open `demo.html` in a browser (EaseMotion CSS loads from jsDelivr CDN).
2. Adjust the controls:
   - **Number of items** — how many elements in the sequence (2–12)
   - **Base delay** — milliseconds between each step (50–500ms)
   - **Entrance animation** — slide-up, fade-in, zoom-in, slide-in-left, etc.
3. Watch the **live preview** animate each item with progressively larger delays.
4. Check the **delay timeline** panel to see each item's `ease-delay-*` class and millisecond value.
5. Press **Copy HTML** to grab the generated markup.
6. Press **Replay animation** to watch the sequence again.

### Quick presets

| Preset | Items | Base delay | Best for |
|--------|-------|------------|----------|
| Hero | 3 | 100ms | Headline + subtitle + CTA |
| List | 5 | 100ms | Feature or nav item lists |
| Grid | 6 | 150ms | Card or stat grids |
| Fast | 8 | 75ms | Dense UI with quick stagger |

## Why is it useful?

- **Saves manual math** — no more counting delay multiples by hand.
- **Snaps to valid classes** — only uses `ease-delay-*` values that exist in EaseMotion CSS (75, 100, 150, 200, 300…). If your calculated delay doesn't match exactly, the builder snaps to the nearest and shows a note.
- **Teaches the pattern** — the timeline panel and tips section explain *why* stagger works without JavaScript timers.
- **Copy-paste ready** — generated HTML goes straight into any project using EaseMotion.

## How stagger delay math works

For `n` items with base delay `d`:

| Item | Calculated delay | Class |
|------|-----------------|-------|
| 1 | d × 1 | `ease-delay-{d}` |
| 2 | d × 2 | `ease-delay-{2d}` |
| 3 | d × 3 | `ease-delay-{3d}` |
| … | … | … |

Each item shares the same entrance animation class but gets a unique delay class, creating a choreographed cascade.

## Accessibility

- All controls have visible labels and keyboard support.
- Copy feedback uses `aria-live="polite"`.
- `prefers-reduced-motion: reduce` is respected globally by EaseMotion CSS — animations are minimized automatically when the OS preference is set.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Builder UI + vanilla JS logic |
| `style.css` | Layout styles using `--ease-*` design tokens |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/examples/` — no existing files modified or deleted.
- Uses official CDN bundle (`easemotion.min.css`); no framework source copied.
- Folder name carries the unique contributor suffix `-sp`.
