# Fade-In Accordion — Responsive Dashboard

A pure CSS, zero-dependency **service-status accordion** for dashboard
panels whose signature is a **summary ⇄ detail crossfade**: every closed
header carries a compact headline metric ("142 ms", "78% storage");
opening the section fades that metric out exactly while the detail rows
fade in, so the same number never shows twice — and closing fades the
metric back. Built on native `<details>`/`<summary>`; no JavaScript
anywhere.

Resolves Issue: #32821

## ✨ Features

- **Crossfade, not just fade-in** — the headline metric lives in the
  always-rendered header, so a plain `transition` fades it both ways:
  out on open, back in on close (a genuine animated close, no tricks).
  The detail rows live inside the `<details>` content, so their fade-in
  replays on every open. Two mechanisms, one seamless gesture.
- **Opacity only** — no translate, no scale; dashboards want data, not
  drama.
- **Native accordion semantics** — `<details name="fd-status">` gives
  exclusive-open behavior (one section at a time) straight from the
  browser; remove the `name` to allow multiple open.
- **Keyboard accessible** — `<summary>` is natively focusable and toggles
  with Enter/Space; 2px accent `:focus-visible` ring; the open card is
  additionally marked by an accent border, a cue that survives with
  animations disabled.
- **Dashboard-native details** — green/amber/red status dots on each
  header, tabular numerals, status pills, dashed row separators.
- **Genuinely responsive** — fluid panel up to 540px; under 420px the
  row values wrap onto their own line so rows stay readable on phones.
- **Tunable via custom properties** — detail fade duration, metric fade
  duration, easing, and chevron rotation on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes both fades and all
  transitions; the metric swaps instantly and the accent border still
  marks the open section.

## 🔧 Custom Properties

| Property               | Default    | Role                            |
| ---------------------- | ---------- | ------------------------------- |
| `--fd-duration`        | `300ms`    | Detail rows fade-in             |
| `--fd-stat-duration`   | `240ms`    | Headline metric fade (both ways)|
| `--fd-ease`            | `ease-out` | Fade curve                      |
| `--fd-toggle-duration` | `220ms`    | Chevron rotation time           |

## 🚀 Usage

```html
<details class="fd-item" name="my-status">
  <summary class="fd-head">
    <span class="fd-dot" aria-hidden="true"></span>
    API
    <span class="fd-head-stat">142 ms</span>
    <span class="fd-chevron" aria-hidden="true"></span>
  </summary>
  <div class="fd-body">
    <div class="fd-row">
      <span class="fd-row-label">P50 latency</span>
      <span class="fd-pill is-ok">Healthy</span>
      <span class="fd-row-value">142 ms</span>
    </div>
  </div>
</details>
```

## 📂 Files

- `demo.html` — a "Service Status" panel (API / database / CDN).
- `style.css` — motion tokens, crossfade engine, dashboard skin, a11y guards.
- `README.md` — this document.
