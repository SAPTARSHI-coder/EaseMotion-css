# Zoom-In Accordion — Creative Portfolio

A pure CSS, zero-dependency **exhibition-index accordion** for portfolio
sites with a **layered zoom**: opening a project makes its artwork settle
*down* from an over-zoom (1.12 → 1, a camera pulling focus) while the
text block zooms *up* into place (0.94 → 1) a beat later. Two directions,
one gesture — it reads as depth, the way a gallery wall does when you
step toward a piece. Built on native `<details>`/`<summary>`; no
JavaScript anywhere.

Resolves Issue: #32854

## ✨ Features

- **Layered, opposing zoom** — the artwork's over-zoom is clipped by its
  frame (`overflow: hidden`), so it settles *into* the frame; the text
  column scales up from `transform-origin: left top` after
  `--zi-text-delay`. Opposing directions give parallax-like depth from
  two cheap transforms.
- **Replays on every open** — content inside a closed `<details>` is not
  rendered, so both zoom layers restart naturally each time. Zero JS.
- **CSS-generated artwork** — three distinct covers built from
  radial/conic/repeating gradients, no image files; each carries
  `role="img"` with an `aria-label` description.
- **Native accordion semantics** — `<details name="zi-index">` gives
  exclusive-open behavior (one piece at a time), matching how galleries
  show work; remove the `name` to allow multiple open.
- **Keyboard accessible** — `<summary>` is natively focusable and toggles
  with Enter/Space; accent `:focus-visible` outline; the plus mark
  rotates to × on open (drawn with two pseudo-element bars, no assets).
- **White-cube gallery skin** — hairline rules, tabular index numbers,
  serif titles, uppercase category tags, one restrained terracotta
  accent.
- **Genuinely responsive** — the artwork/text grid collapses to a single
  column under 480px with the art staying framed edge-to-edge.
- **Tunable via custom properties** — art over-zoom, text scale, settle
  duration, text delay, easing, and marker rotation on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes both zoom layers;
  pieces appear hung, not zoomed.

## 🔧 Custom Properties

| Property               | Default                          | Role                        |
| ---------------------- | -------------------------------- | --------------------------- |
| `--zi-art-from`        | `1.12`                           | Artwork starting over-zoom  |
| `--zi-text-from`       | `0.94`                           | Text starting scale         |
| `--zi-duration`        | `420ms`                          | Zoom settle time            |
| `--zi-text-delay`      | `60ms`                           | Text starts after the art   |
| `--zi-ease`            | `cubic-bezier(0.22, 1, 0.36, 1)` | Focus-pull curve            |
| `--zi-toggle-duration` | `240ms`                          | Plus-mark rotation          |

## 🚀 Usage

```html
<details class="zi-item" name="my-index">
  <summary class="zi-head">
    <span class="zi-num">01</span>
    <span class="zi-name">Night Signals</span>
    <span class="zi-kind">Identity</span>
    <span class="zi-mark" aria-hidden="true"></span>
  </summary>
  <div class="zi-body">
    <div class="zi-frame">
      <div class="zi-art is-signals" role="img" aria-label="Cover description"></div>
    </div>
    <div class="zi-info">
      <h2 class="zi-info-title">Project headline</h2>
      <p class="zi-info-text">Short description.</p>
    </div>
  </div>
</details>
```

## 📂 Files

- `demo.html` — a three-entry portfolio index (identity / editorial / exhibition).
- `style.css` — motion tokens, layered zoom engine, white-cube skin, a11y guards.
- `README.md` — this document.
