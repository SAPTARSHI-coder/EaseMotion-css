# Magnetic Kanban Board (`magnetic-kanban-board`)

An intermediate kanban board where cards behave like objects in a magnetic
field: hovering one pulls a spinning red/blue field ring around it while the
cards beneath drift away, as if repelled. Columns collapse and priority
tiers filter in and out — all driven by hidden checkboxes, zero JavaScript.

## EaseMotion Keyframes

| Keyframe | Effect |
|---|---|
| `ease-fade-up` | Page-load entrance for the title and board |
| `ease-card-drop-in` | Cards drop into place with a per-column stagger on load |
| `ease-field-spin` | The conic-gradient north/south field ring rotates around a hovered or focused card |
| `ease-priority-pulse` | The priority dot on high-priority cards pulses continuously |
| `ease-magnet-wobble` | The magnet icon in each column header rocks side to side, ambient |
| `ease-filter-pop` | A filter chip pops when toggled active |

## Animation Sequence

```
0.05s–0.25s  — eyebrow, title, note, board fade up on load
0.30s–0.51s  — cards drop into each column, staggered ~70ms apart
   loop      — magnet icons in column headers wobble gently, forever
   loop      — high-priority dots pulse, forever
on card hover — field ring spins around the card (red → violet → blue)
on card hover — every card below it in the column drifts down 9px
on chip toggle — chip pops, matching-priority cards vanish from the board
on header click — column collapses/expands with a chevron flip
```

## Magnetic Repulsion Technique

No mouse-tracking or JavaScript is used to simulate the "pull." A single
sibling combinator does the work — hovering or focusing a card nudges every
card that follows it in the same column:

```css
.card:hover ~ .card,
.card:focus-within ~ .card {
  transform: translateY(9px);
}
```

The field ring itself is a `conic-gradient` masked into a 1px border, so it
reads as a glowing ring rather than a filled halo:

```css
.card::before {
  background: conic-gradient(from 0deg, var(--pole-n), var(--mid), var(--pole-s), var(--mid), var(--pole-n));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
}
```

## Checkbox-Driven State

Both interactive features reuse the same pattern as the rest of EaseMotion's
JS-free components — a visually hidden but focusable checkbox, read with
sibling selectors:

```css
/* Column collapse */
.col-toggle:checked ~ .kanban-cards { max-height: 0; opacity: 0; }

/* Priority filter — checkbox must be a direct sibling of .kanban-board
   for the combinator to reach it */
#filter-hide-high:checked ~ .kanban-board .card[data-priority="high"] {
  display: none;
}
```

## Accessibility

- Every toggle (column collapse, filter chips) is a real `<input type="checkbox">`,
  hidden with a clip technique rather than `display: none`, so it keeps
  keyboard focus and native `Space`-to-toggle behavior.
- Cards are focusable (`tabindex="0"`) and the field-ring/hover treatment is
  mirrored on `:focus-within`, so keyboard users get the same feedback as
  mouse users.
- Visible focus outlines are forwarded from each hidden checkbox to its
  visible label with `:focus-visible + label`.
- Priority is never color-only: every card also carries a text label
  ("High" / "Medium" / "Low") next to its dot.
- `prefers-reduced-motion` removes the drop-in, wobble, pulse, and field-spin
  animations, and cancels the sibling-repulsion transform entirely.
- Board collapses to a single column under 820px; the repulsion effect is
  disabled at that breakpoint since cards already stack full-width.

## Workspace Tree Map

```
submissions/examples/magnetic-kanban-board-claude/
├── demo.html
├── style.css
└── README.md
```
---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**