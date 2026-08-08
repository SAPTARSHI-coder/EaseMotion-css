# Neon Glow Modal — Responsive Dashboard

A pure CSS, zero-dependency **incident-details modal** for dark ops
dashboards. Opening it "ignites" the dialog's neon edge — the cyan/pink
glow ramps from cold to full bloom while the dialog settles into place —
then the glow keeps **breathing** on a slow pulse. Driven entirely by the
`:target` selector; the ignition replays from cold on every open. No
JavaScript anywhere.

Resolves Issue: #33991

## ✨ Features

- **Neon ignition + breathing** — two chained keyframe animations gated
  behind `:target`: `ng-ignite` blooms a layered `box-shadow` (cyan core,
  pink halo, inner rim) over the entrance, then `ng-breathe` pulses it on
  an infinite alternate cycle. Both restart naturally each time the modal
  opens, because the animations only apply while it is the target.
- **Zero JavaScript** — trigger, ✕, click-away scrim, and action buttons
  are all real links; the modal shows while it is the URL `:target`.
- **Keyboard accessible** — every control is a native `<a>` reachable
  with Tab and activated with Enter; neon `:focus-visible` rings
  throughout; the dialog carries `role="dialog"`, `aria-modal`,
  `aria-labelledby`, and `aria-describedby`.
- **Dashboard-native details** — dark canvas, fluid `auto-fit` KPI strip
  behind the modal (3-across → single column), tabular numerals, bordered
  status pills, incident rows with dashed separators.
- **Genuinely responsive** — dialog width is `min(440px, 100%)` inside a
  padded overlay; under 420px the action buttons stack full-width.
- **Tunable via custom properties** — glow colors, bloom size, ignition
  duration, easing, exit time, starting scale, and pulse period are all
  exposed on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes the settle and the
  pulse; the modal appears instantly with the glow already at full bloom
  (steady, not flashing).

## 🔧 Custom Properties

| Property             | Default                          | Role                       |
| -------------------- | -------------------------------- | -------------------------- |
| `--ng-glow`          | `#22d3ee`                        | Primary neon (cyan)        |
| `--ng-glow-hot`      | `#f472b6`                        | Secondary halo (pink)      |
| `--ng-glow-size`     | `26px`                           | Full-bloom outer glow      |
| `--ng-duration`      | `380ms`                          | Entrance / ignition time   |
| `--ng-ease`          | `cubic-bezier(0.2, 0.9, 0.3, 1)` | Settle curve               |
| `--ng-exit-duration` | `160ms`                          | Dismissal time             |
| `--ng-scale-from`    | `0.92`                           | Dialog starting scale      |
| `--ng-pulse-period`  | `2.6s`                           | Breathing cycle            |

## 🚀 Usage

```html
<!-- Trigger -->
<a class="ng-cta" href="#ng-incident-modal">Incident details</a>

<!-- Modal -->
<div class="ng-modal" id="ng-incident-modal">
  <a class="ng-scrim" href="#ng-board" aria-label="Close"></a>
  <div class="ng-dialog" role="dialog" aria-modal="true" aria-labelledby="title">
    <a class="ng-close" href="#ng-board" aria-label="Close">✕</a>
    <h2 class="ng-dialog-title" id="title">INC-2417 · Gateway latency</h2>
    <!-- rows, actions -->
  </div>
</div>
```

## 📂 Files

- `demo.html` — a network-ops board (uptime / alerts / throughput) with an incident dialog.
- `style.css` — motion tokens, `:target` ignition engine, dark dashboard skin, a11y guards.
- `README.md` — this document.

## 📝 Note

`:target` modals cannot close on the Esc key without JavaScript — a
limitation of the pure CSS approach, mitigated here by three separate
close affordances (✕, scrim, and both action links).
