# Micro Shake Modal — Creative Portfolio

A pure CSS, zero-dependency **project quick-view modal** for portfolio
sites. Opening it behaves like a print being placed on a table: the
dialog drops in and settles, then gives a **micro shake** — a tiny
decaying *rotational* wobble (fractions of a degree) rather than a
side-to-side nudge. That hand-placed wobble is what makes the motion
feel crafted instead of mechanical. Driven entirely by the `:target`
selector — no JavaScript anywhere.

Resolves Issue: #34021

## ✨ Features

- **Drop, then micro wobble** — `pf-drop` settles the dialog from 18px
  above with a soft-landing curve (`cubic-bezier(0.3, 1.25, 0.45, 1)`),
  then `pf-wobble` rotates it −0.8° → +0.8° → ∓0.36° → ±0.16° → 0,
  coming to rest exactly level. Rotation instead of translation is the
  signature: it reads as *placed by hand*, which suits portfolio work.
- **Replays on every open** — both animations are gated behind `:target`,
  so each open restarts the choreography from scratch. Zero JS.
- **Careful animation layering** — the wobble deliberately carries no
  fill mode; a backwards fill would pin `transform` during its delay and
  cancel the drop (later animations in a comma list win shared
  properties). Commented in the CSS.
- **Keyboard accessible** — trigger, ✕, click-away scrim, and both action
  buttons are native `<a>` elements (Tab + Enter); gold `:focus-visible`
  rings throughout; the dialog carries `role="dialog"`, `aria-modal`,
  `aria-labelledby`, and `aria-describedby`.
- **Portfolio-native details** — dark editorial skin with serif display
  type, CSS-gradient cover art (no image files), full-bleed cover across
  the dialog top, role/year/tools meta strip, uppercase letter-spaced
  actions.
- **Genuinely responsive** — the work grid is `auto-fit, minmax(210px, 1fr)`
  (two-across → one column), dialog width `min(430px, 100%)`, actions
  stack full-width under 420px.
- **Tunable via custom properties** — wobble angle, wobble duration, drop
  duration, drop distance, easing, and exit time on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes the drop and the
  wobble entirely; the modal simply appears.

## 🔧 Custom Properties

| Property              | Default                            | Role                         |
| --------------------- | ---------------------------------- | ---------------------------- |
| `--pf-shake-angle`    | `0.8deg`                           | Max tilt (decays from here)  |
| `--pf-shake-duration` | `460ms`                            | Whole wobble gesture         |
| `--pf-drop-duration`  | `320ms`                            | Entrance drop/settle time    |
| `--pf-drop-distance`  | `-18px`                            | Starting offset above rest   |
| `--pf-ease`           | `cubic-bezier(0.3, 1.25, 0.45, 1)` | Soft-landing curve           |
| `--pf-exit-duration`  | `150ms`                            | Dismissal time               |

## 🚀 Usage

```html
<!-- Trigger -->
<a class="pf-view" href="#pf-quickview">Quick view</a>

<!-- Modal -->
<div class="pf-modal" id="pf-quickview">
  <a class="pf-scrim" href="#pf-index" aria-label="Close"></a>
  <div class="pf-dialog" role="dialog" aria-modal="true" aria-labelledby="title">
    <div class="pf-dialog-cover" aria-hidden="true"></div>
    <a class="pf-close" href="#pf-index" aria-label="Close">✕</a>
    <div class="pf-dialog-inner">
      <h2 class="pf-dialog-title" id="title">Night Signals</h2>
      <!-- meta, blurb, actions -->
    </div>
  </div>
</div>
```

## 📂 Files

- `demo.html` — a portfolio index (two work tiles) with a quick-view dialog.
- `style.css` — motion tokens, `:target` drop + wobble engine, editorial skin, a11y guards.
- `README.md` — this document.

## 📝 Note

`:target` modals cannot close on the Esc key without JavaScript — a
limitation of the pure CSS approach, mitigated here by three separate
close affordances (✕, scrim, and both action links).
