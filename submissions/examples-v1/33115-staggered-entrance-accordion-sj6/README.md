# Staggered Entrance Accordion — Responsive Dashboard

A pure CSS, zero-dependency **accordion** for dashboard side panels whose
sections **rise into view one after another** on load — and whose metric
rows **cascade in again every time a section is opened**. Built on native
`<details>`/`<summary>`, so keyboard support and exclusive-open behavior
come from the browser, not JavaScript.

Resolves Issue: #33115

## ✨ Features

- **Two-layer stagger** — on load, each accordion section enters on a
  delay computed from its index (`calc(var(--sea-i) * var(--sea-stagger-step))`,
  assigned via `nth-of-type`); on open, the rows inside the panel replay
  their own cascade because a closed `<details>` doesn't render its
  content — animations restart naturally, zero JS.
- **Native accordion semantics** — `<details name="sea-demo">` makes the
  group exclusive (opening one closes the rest) using the browser's own
  behavior; remove the `name` to allow multiple open sections.
- **Keyboard accessible** — `<summary>` is natively focusable and toggles
  with Enter/Space; a 2px accent `:focus-visible` ring keeps focus obvious.
- **Dashboard-native details** — white panel on a cool canvas, icon chips,
  green/amber/red status pills, and mini capacity bars driven by a
  `--sea-fill` custom property.
- **Genuinely responsive** — the panel is fluid up to 520px; under 420px
  values wrap onto their own line so rows stay readable on phones.
- **Tunable via custom properties** — stagger step, entrance duration,
  easing, rise distance, and the row cascade are all exposed on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes every animation and
  transition; content simply appears in place.

## 🔧 Custom Properties

| Property              | Default                            | Role                            |
| --------------------- | ---------------------------------- | ------------------------------- |
| `--sea-stagger-step`  | `95ms`                             | Delay between section entrances |
| `--sea-item-duration` | `430ms`                            | One section's entrance time     |
| `--sea-ease`          | `cubic-bezier(0.22, 1, 0.36, 1)`   | Entrance curve                  |
| `--sea-rise`          | `16px`                             | Section slide-up distance       |
| `--sea-row-step`      | `60ms`                             | Delay between row entrances     |
| `--sea-row-duration`  | `300ms`                            | One row's entrance time         |
| `--sea-row-rise`      | `8px`                              | Row slide-up distance           |
| `--sea-toggle-duration` | `240ms`                          | Chevron rotation time           |

## 🚀 Usage

```html
<details class="sea-item" name="my-accordion">
  <summary class="sea-head">
    <span class="sea-head-icon" aria-hidden="true">▲</span>
    Section Title
    <span class="sea-head-meta">meta text</span>
    <span class="sea-chevron" aria-hidden="true"></span>
  </summary>
  <div class="sea-body">
    <div class="sea-row">
      <span class="sea-row-label">Metric name</span>
      <span class="sea-pill is-ok">Stable</span>
      <span class="sea-row-value">1,284</span>
    </div>
  </div>
</details>
```

## 📂 Files

- `demo.html` — an "Operations Overview" panel (traffic / server health / queue / alerts).
- `style.css` — motion tokens, two-layer stagger engine, dashboard skin, a11y guards.
- `README.md` — this document.
