# ease-accordion

An expandable/collapsible content panel built on the native `<details>`/`<summary>` HTML elements, enhanced with a smooth height animation (via the CSS `grid-template-rows: 0fr → 1fr` trick) and a rotating chevron icon — since `<details>` alone snaps open/closed with no animation.

## What does this do?

- Uses native `<details>`/`<summary>`, so toggle logic, keyboard support (Enter/Space to toggle, Tab to traverse), and screen-reader expanded/collapsed announcements come for free — **no JavaScript**.
- Removes the default disclosure triangle (`::-webkit-details-marker` + `list-style`) and replaces it with a CSS-drawn chevron (two borders forming a rotated corner) that rotates 90° on open.
- Animates the panel height smoothly using the modern `grid-template-rows: 0fr → 1fr` technique: the content wrapper is a single-row grid whose track interpolates, so the panel slides open to its **natural auto height** — something `height: auto` can't animate directly.

## How is it used?

1. Link the stylesheet.
2. Use the markup below. The structure matters: `.accordion__panel` (the grid row) must wrap `.accordion__inner` (the content), so the `0fr→1fr` track can collapse/expand.

```html
<link rel="stylesheet" href="style.css" />

<details class="accordion__item" open>
  <summary class="accordion__trigger">
    <span class="accordion__title">What is EaseMotion CSS?</span>
    <span class="accordion__icon" aria-hidden="true"></span>
  </summary>
  <div class="accordion__panel">
    <div class="accordion__inner">
      <p>A lightweight, animation-first CSS component library.</p>
    </div>
  </div>
</details>
```

Multiple `.accordion__item` elements inside a `.accordion` wrapper get spacing and grouping. Nest `.accordion.accordion--nested` inside `.accordion__inner` for sub-panels.

## Why is this useful?

- **Accessible by default** — `<details>`/`<summary>` are semantic and keyboard-operable; the chevron is `aria-hidden` (decorative). No ARIA wiring or JS toggle to forget.
- **Real auto-height animation** — the `grid-template-rows: 0fr → 1fr` trick solves the classic "can't animate to `height: auto`" problem elegantly, with a single transition.
- **No JS at all** — independent `<details>` each manage their own state, so any number of panels can be open at once.
- **Reusable** — configurable via CSS custom properties (`--ac-radius`, `--ac-pad`, `--ac-accent`, `--ac-dur`, `--ac-icon-size`, etc.).
- **Reduced motion** — full `prefers-reduced-motion` support disables the slide/rotation.

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). An FAQ group plus a nested accordion.
- `style.css` — `<details>`/`<summary>` reset, CSS chevron, `grid-template-rows` height animation, hover/focus/open states, nested styling, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
