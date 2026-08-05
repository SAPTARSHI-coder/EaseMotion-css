# Draw-Border Line Accordion — Glassmorphism UI

A pure CSS, zero-dependency **accordion of frosted-glass cards** where
opening a section makes a luminous line **draw itself clockwise around
the card** — top and right edges first, then bottom and left — and
**retrace the way it came** on close. Because the draw is a
`background-size` *transition* (not a keyframe animation), it is fully
reversible mid-gesture: close a half-drawn card and the line walks back
from wherever it was. Built on native `<details>`/`<summary>`; no
JavaScript anywhere.

Resolves Issue: #33188

## ✨ Features

- **Two-phase perimeter draw** — `::before` holds the top and right
  lines, `::after` the bottom and left; each line is a `linear-gradient`
  that grows via `background-size` (`0 → 100%` along its axis). Phase
  delays sequence them clockwise on open, and the delays swap in the
  closed state so the retraction plays in reverse order.
- **Reversible mid-gesture** — transitions, not animations: interrupting
  the draw reverses it smoothly from its current length instead of
  snapping.
- **Luminous stroke** — the mint line carries a `drop-shadow` glow so it
  reads as light traveling along the glass edge, not a hairline border.
- **Real glass recipe** — `backdrop-filter: blur(14px) saturate(1.35)`
  (with `-webkit-` twin), translucent tint and border, deeper tint when
  open, and an `@supports` fallback that darkens the card where
  backdrop-filter is unsupported.
- **Native accordion semantics** — `<details name="dl-trip">` gives
  exclusive-open behavior straight from the browser; remove the `name`
  to allow multiple open.
- **Keyboard accessible** — `<summary>` is natively focusable and toggles
  with Enter/Space; a 2px mint `:focus-visible` ring matches the stroke.
- **Itinerary-style content** — day chips, tabular time column, activity
  + note rows with hairline separators; body content fades quietly so
  the drawn line stays the star.
- **Genuinely responsive** — fluid stack up to 520px; under 420px the
  notes wrap beneath their activity.
- **Tunable via custom properties** — stroke thickness, full-perimeter
  duration, easing, line color, and body fade on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes the travel; the
  line appears fully drawn on open, instantly.

## 🔧 Custom Properties

| Property               | Default       | Role                          |
| ---------------------- | ------------- | ----------------------------- |
| `--dl-line`            | `2px`         | Stroke thickness              |
| `--dl-draw-duration`   | `520ms`       | Full perimeter draw time      |
| `--dl-ease`            | `ease-in-out` | Pen-like draw curve           |
| `--dl-line-color`      | `#7ff5e3`     | Luminous stroke color         |
| `--dl-body-duration`   | `260ms`       | Content fade on open          |
| `--dl-blur`            | `14px`        | Backdrop frost radius         |

## 🚀 Usage

```html
<details class="dl-item" name="my-trip">
  <summary class="dl-head">
    <span class="dl-day">Day 1</span>
    Arrival &amp; Higashiyama
    <span class="dl-head-meta">3 stops</span>
    <span class="dl-chevron" aria-hidden="true"></span>
  </summary>
  <div class="dl-body">
    <div class="dl-row">
      <span class="dl-time">09:40</span>
      <span class="dl-what">Land at KIX, express to Kyoto</span>
      <span class="dl-note">IC card ready</span>
    </div>
  </div>
</details>
```

## 📂 Files

- `demo.html` — a three-day Kyoto itinerary in glass cards.
- `style.css` — motion tokens, two-phase draw engine, glass recipe + fallback, a11y guards.
- `README.md` — this document.

## 📝 Note

The gradient lines are straight, so they are clipped by the card's
10px `border-radius` at the corners — kept small deliberately so the
stroke hugs the glass edge cleanly.
