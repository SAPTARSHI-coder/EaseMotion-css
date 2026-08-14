# ease-drag-handle

A 6-dot sortable grip icon (2 columns × 3 rows) commonly used as a drag affordance in reorderable lists, with a subtle hover scale and a `grab`/`grabbing` cursor change signaling "this is draggable." Pure CSS dot grid via `box-shadow` — no icon asset needed.

## What does this do?

A single `<span>` renders all six dots: the element itself is the top-left dot, and a `box-shadow` stack stamps out the other five (the second column and the two lower rows). On hover the whole grip scales up (`--dh-scale`) and every dot recolors to the accent; the cursor becomes `grab`, and `grabbing` while active. All gap/dot sizes are `em`-based so the entire icon scales with `font-size`.

## How is it used?

1. Link the stylesheet.
2. Drop a `.drag-handle` `<span>` (marked `aria-hidden`, since it is decorative — real reorder UX needs a separate accessible control) next to your list item content.

```html
<link rel="stylesheet" href="style.css" />

<ul class="sortlist">
  <li class="list-item">
    <span class="drag-handle" aria-hidden="true"></span>
    <span>Task item text</span>
  </li>
  <li class="list-item">
    <span class="drag-handle" aria-hidden="true"></span>
    <span>Another task</span>
  </li>
</ul>

<!-- standalone, with sizes -->
<span class="drag-handle drag-handle--sm" aria-hidden="true"></span>
<span class="drag-handle" aria-hidden="true"></span>
<span class="drag-handle drag-handle--lg" aria-hidden="true"></span>
```

## Why is this useful?

- **No icon asset** — six dots from one element + a `box-shadow` stack; crisp at any DPI, themeable via custom properties.
- **Drag affordance** — hover scale + `grab`/`grabbing` cursor immediately communicate "this is movable," pairing naturally with any drag-and-drop library (native or JS-based). EaseMotion supplies purely the visual/hover polish.
- **Scalar** — gaps and dot sizes are `em`-based, so `font-size` (or the `--sm`/`--lg` modifiers) resizes the whole grip uniformly.
- **Accessible** — marked `aria-hidden` (decorative); focus-visible styling; full `prefers-reduced-motion` support disables the scale.
- **Reusable** — configurable via CSS custom properties (`--dh-dot`, `--dh-dot-hover`, `--dh-gap`, `--dh-row-gap`, `--dh-size`, `--dh-scale`, `--dh-dur`, `--dh-ease`).

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Shows the grip inside a sortable list and standalone at three sizes.
- `style.css` — box-shadow dot grid, hover scale/recolor, cursor states, size modifiers, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
