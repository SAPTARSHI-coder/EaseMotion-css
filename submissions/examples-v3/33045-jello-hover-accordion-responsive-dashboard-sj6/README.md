# Jello-Hover Accordion — Responsive Dashboard

A pure CSS, zero-dependency **accordion** for dashboard panels whose
closed sections **jello on hover** — a squash-and-stretch wiggle that
decays back to rest, with the whole gesture driven by a single amplitude
token. Built on native `<details>`/`<summary>`, so keyboard support and
exclusive-open behavior come from the browser, not JavaScript.

Resolves Issue: #33045

## ✨ Features

- **One-token jello** — the keyframes compute every squash and stretch
  from `--jl-squash` via `calc()` (±5% → ∓4% → ±2.25% → ∓1% → ±0.4% → 0),
  so a single number makes the whole gesture subtler or bouncier. No
  hand-tuned keyframe soup.
- **Closed sections only** — the wiggle applies via
  `.jl-item:not([open]):hover`, so an open section holds perfectly still
  while its content is being read. Motion invites interaction; it never
  interferes with reading.
- **Keyboard parity** — `:focus-within` triggers the same jello + accent
  highlight when the summary takes keyboard focus, so Tab users get the
  identical affordance; Enter/Space toggles natively; 2px accent
  `:focus-visible` ring on the header.
- **Native accordion semantics** — `<details name="jl-demo">` makes the
  group exclusive (opening one closes the rest) with zero JS; remove the
  `name` to allow multiple open sections.
- **Replaying reveal** — content inside a closed `<details>` isn't
  rendered, so the body's fade-rise replays naturally on every open.
- **Dashboard-native details** — analytics workspace skin, icon chips,
  headline stat visible on each closed header, green/red trend deltas,
  tabular numerals.
- **Genuinely responsive** — fluid panel up to 540px; under 420px values
  wrap onto their own line so rows stay readable on phones.
- **Motion-safe** — `prefers-reduced-motion` removes the jello and the
  reveal but keeps the border/shadow hover affordance, so the interaction
  cue survives without any movement.

## 🔧 Custom Properties

| Property               | Default                          | Role                          |
| ---------------------- | -------------------------------- | ----------------------------- |
| `--jl-squash`          | `0.05`                           | Jello amplitude (0.05 = ±5%)  |
| `--jl-duration`        | `560ms`                          | Whole wiggle gesture          |
| `--jl-open-duration`   | `260ms`                          | Body fade-rise on open        |
| `--jl-ease`            | `cubic-bezier(0.22, 1, 0.36, 1)` | Reveal curve                  |
| `--jl-toggle-duration` | `220ms`                          | Chevron rotation              |

## 🚀 Usage

```html
<details class="jl-item" name="my-accordion">
  <summary class="jl-head">
    <span class="jl-head-icon" aria-hidden="true">⚡</span>
    Section Title
    <span class="jl-head-stat">42 pts</span>
    <span class="jl-chevron" aria-hidden="true"></span>
  </summary>
  <div class="jl-body">
    <div class="jl-row">
      <span class="jl-row-label">Metric name</span>
      <span class="jl-delta is-up">▲ 8%</span>
      <span class="jl-row-value">46 pts</span>
    </div>
  </div>
</details>
```

## 📂 Files

- `demo.html` — a "Team Performance" panel (velocity / review turnaround / deploys).
- `style.css` — motion tokens, calc()-driven jello engine, analytics skin, a11y guards.
- `README.md` — this document.
