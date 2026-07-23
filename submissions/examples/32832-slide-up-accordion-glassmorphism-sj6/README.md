# Slide-Up Accordion — Glassmorphism UI

A pure CSS, zero-dependency **accordion of frosted-glass cards** over a
vivid gradient scene. On open, the panel content **slides up out of the
glass**: the card clips its content, so the rows rise from below the
header's frost line and settle into place — like a sheet of glass
revealing what was underneath. Built on native `<details>`/`<summary>`;
no JavaScript anywhere.

Resolves Issue: #32832

## ✨ Features

- **Clipped slide-up** — `overflow: hidden` on the card means the rising
  content (`translateY(22px) → 0` + fade) emerges from inside the glass
  instead of floating in from open space; the start of the rise is
  physically clipped by the card edge.
- **Replays on every open** — content inside a closed `<details>` is not
  rendered, so the slide-up restarts naturally each time. Zero JS.
- **Real glass recipe** — `backdrop-filter: blur(16px) saturate(1.4)`
  (with `-webkit-` twin), translucent fill and border, a 1px gradient
  highlight along the top edge, and a deeper open-state tint. An
  `@supports not (backdrop-filter…)` fallback swaps in a deeper opaque
  tint so text stays readable where frost is unsupported.
- **Native accordion semantics** — `<details name="gl-cc">` gives
  exclusive-open behavior (one card at a time) straight from the
  browser; remove the `name` to allow multiple open.
- **Keyboard accessible** — `<summary>` is natively focusable and toggles
  with Enter/Space; 2px gold `:focus-visible` ring tuned to stay visible
  against the frost.
- **Control-center details** — icon chips in glass squares, state chips
  (on-state filled gold), hairline translucent row separators, tabular
  numerals.
- **Genuinely responsive** — fluid stack up to 520px; under 420px row
  values wrap onto their own line; the gradient scene is fixed-attached
  so the frost has something to blur at every size.
- **Tunable via custom properties** — rise distance, duration, easing,
  chevron time, blur radius, and all glass tints on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes the slide and all
  transitions; cards simply open with the frost intact.

## 🔧 Custom Properties

| Property               | Default                          | Role                       |
| ---------------------- | -------------------------------- | -------------------------- |
| `--gl-rise`            | `22px`                           | Slide-up distance          |
| `--gl-duration`        | `360ms`                          | Slide-up time              |
| `--gl-ease`            | `cubic-bezier(0.22, 1, 0.36, 1)` | Glide-out curve            |
| `--gl-toggle-duration` | `240ms`                          | Chevron rotation           |
| `--gl-blur`            | `16px`                           | Backdrop frost radius      |
| `--gl-tint`            | `rgba(255, 255, 255, 0.14)`      | Card fill                  |
| `--gl-tint-open`       | `rgba(255, 255, 255, 0.2)`       | Open card fill             |
| `--gl-edge`            | `rgba(255, 255, 255, 0.35)`      | Card border                |

## 🚀 Usage

```html
<details class="gl-item" name="my-glass">
  <summary class="gl-head">
    <span class="gl-head-icon" aria-hidden="true">🎧</span>
    Now playing
    <span class="gl-head-meta">Bedroom mix</span>
    <span class="gl-chevron" aria-hidden="true"></span>
  </summary>
  <div class="gl-body">
    <div class="gl-row">
      <span class="gl-row-label">Track</span>
      <span class="gl-row-value">Glass Hours — Mirea</span>
    </div>
  </div>
</details>
```

## 📂 Files

- `demo.html` — a "Control Center" stack (now playing / notifications / connectivity).
- `style.css` — motion tokens, clipped slide-up engine, glass recipe + fallback, a11y guards.
- `README.md` — this document.
