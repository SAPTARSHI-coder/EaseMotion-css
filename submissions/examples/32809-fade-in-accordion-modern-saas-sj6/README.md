# Fade-In Accordion — Modern SaaS

A pure CSS, zero-dependency **feature accordion** for SaaS pricing and
marketing pages with a **two-stage fade-in**: when a section opens, the
tinted panel surface fades up first, then the feature rows bloom in a
beat later. Opacity only — no translate, no scale — which keeps the
motion calm and product-page appropriate. Built on native
`<details>`/`<summary>`; no JavaScript anywhere.

Resolves Issue: #32809

## ✨ Features

- **Two-stage fade** — one keyframe (`fi-fade`), two elements: the body
  surface animates immediately, the rows repeat the same fade after
  `--fi-content-delay` with `both` fill so they hold invisible during
  the delay. The layering reads as depth without a single pixel moving.
- **Replays on every open** — content inside a closed `<details>` is not
  rendered, so both stages restart naturally each time a section opens.
  Zero JS.
- **Native accordion semantics** — `<details name="fi-features">` gives
  exclusive-open behavior (one section at a time) straight from the
  browser; remove the `name` to allow multiple open.
- **Keyboard accessible** — `<summary>` is natively focusable and
  toggles with Enter/Space; 2px accent `:focus-visible` ring; the open
  card is additionally marked by an accent border + soft shadow, a cue
  that survives with animations disabled.
- **SaaS-native details** — eyebrow badge, fluid `clamp()` headline,
  icon chips, plan-availability pills on each header, checkmark feature
  rows with muted right-hand notes.
- **Genuinely responsive** — fluid column up to 540px; under 420px the
  row notes wrap to their own line so features stay readable on phones.
- **Tunable via custom properties** — stage duration, content delay,
  easing, and chevron rotation on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes both fade stages
  and all transitions; content simply appears, and the accent border
  still marks the open section.

## 🔧 Custom Properties

| Property               | Default    | Role                                |
| ---------------------- | ---------- | ----------------------------------- |
| `--fi-duration`        | `320ms`    | Each fade stage                     |
| `--fi-content-delay`   | `140ms`    | Delay before the rows' fade begins  |
| `--fi-ease`            | `ease-out` | Fade curve                          |
| `--fi-toggle-duration` | `220ms`    | Chevron rotation time               |

## 🚀 Usage

```html
<details class="fi-item" name="my-features">
  <summary class="fi-head">
    <span class="fi-head-icon" aria-hidden="true">👥</span>
    Collaboration
    <span class="fi-plan">All plans</span>
    <span class="fi-chevron" aria-hidden="true"></span>
  </summary>
  <div class="fi-body">
    <div class="fi-rows">
      <div class="fi-row">
        <span class="fi-row-label">Unlimited shared workspaces</span>
        <span class="fi-row-note">no seat minimum</span>
      </div>
    </div>
  </div>
</details>
```

## 📂 Files

- `demo.html` — a pricing-page "what's included" block (collaboration / automation / security).
- `style.css` — motion tokens, two-stage fade engine, SaaS skin, a11y guards.
- `README.md` — this document.

## 📝 Note

The body surface tint uses `color-mix()` (supported in all evergreen
browsers); if unavailable, the panel simply renders without the tint —
the fades are unaffected.
