# interactive-kanban-board

An animated drag-and-drop Kanban board: HTML5 drag-and-drop card reordering across four columns (To Do / In Progress / In Review / Completed), with a 3D tilt + elevation effect on the dragged card, fluid placeholder slots that scale open, priority badges (High / Medium / Low), and per-card progress bars. Native DnD for reordering + CSS for all motion.

## What does this do?

- **HTML5 drag-and-drop** — cards are `draggable="true"`; a tiny script (`dragstart` / `dragover` / `drop` / `dragend`) moves the card node into the target column, inserting before the card under the pointer. Column counts recompute on drop.
- **3D tilt + elevation on drag** — the dragged card gets `.is-dragging`, which applies `translateY(-0.4rem) rotate(3deg) scale(1.05)` with a deepened shadow and accent border.
- **Fluid placeholder slots** — when a column's dropzone is hovered (`.is-over`), a dashed accent slot animates open with `scaleY` (`@keyframes kb-slot-open`) showing where the card will land.
- **Priority badges** — High (red), Medium (amber), Low (green) with soft tinted backgrounds and matching ring colors.
- **Per-card progress bars** — gradient fill whose width is set inline; Completed cards get green 100% fill, struck-through titles, and muted opacity.
- **Hover lift** — every card lifts slightly with a stronger shadow on hover.

## How is it used?

1. Link the stylesheet + the tiny script (in `demo.html`).
2. Use the markup below. The script hooks `#board` and relies on `draggable="true"` cards inside `[data-dropzone]` column bodies.

```html
<link rel="stylesheet" href="style.css" />

<section class="board" id="board">
  <div class="column" data-column="todo">
    <header class="column__head"><h2>To Do</h2><span class="column__count">1</span></header>
    <div class="column__body" data-dropzone>
      <article class="card" draggable="true">
        <div class="card__top">
          <span class="badge badge--high">High</span>
          <span class="card__id">ENG-241</span>
        </div>
        <h3 class="card__title">Wire up auth flow</h3>
        <div class="card__progress"><div class="card__progress-fill" style="width: 15%"></div></div>
      </article>
    </div>
  </div>
  <!-- …more columns… -->
</section>
```

## Why is this useful?

- **Animation-first productivity UI** — the tilt/elevation, placeholder slot, and hover lift are exactly the fluid motion the issue requests; all driven by CSS classes the script toggles.
- **Native, accessible DnD** — uses the platform HTML5 drag-and-drop API (no DnD library); keyboard users can still focus cards (draggable elements are focusable). Add `tabindex`/keyboard reorder handlers if you need full keyboard DnD.
- **Self-contained** — no frameworks, no CDNs, no build step; the script is ~30 lines.
- **Reusable** — configurable via CSS custom properties (`--kb-accent`, `--kb-radius`, priority colors, `--kb-dur`, etc.); `card--done` and `column--done` modifiers for completed state.

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Four columns with sample cards + the DnD script.
- `style.css` — board/column/card layout, `.is-dragging` tilt + elevation, `.is-over` placeholder slot `scaleY` animation, priority badges, progress bars, done state, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
