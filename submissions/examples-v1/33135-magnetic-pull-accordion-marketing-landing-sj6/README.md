# Magnetic Pull Accordion — Marketing Landing Page

A pure CSS, zero-dependency **FAQ accordion** for bright marketing
landing pages. Each question carries a two-pole magnet chip — an indigo
north half and a pink south half resting a visible gap apart. Hovering
a closed question **engages the field**: the poles creep toward each
other and the card lifts to meet the cursor. Opening **snaps** the
poles into one gradient pill with an accelerating pull, a click-ring
radiates from the dock, and the answer is pulled up into place with a
tiny overshoot settle. Built on native `<details>`/`<summary>`; no
JavaScript anywhere.

Resolves Issue: #33135

## ✨ Features

- **Two-pole magnet chip** — the indicator is two half-pills (indigo /
  pink) whose separation is a single token (`--mg-gap`). Hover narrows
  it to `--mg-creep` (attraction at range); open pulls both halves to
  zero, docking them into one gradient pill.
- **Magnetic snap easing** — `cubic-bezier(0.7, 0, 0.3, 1.35)` starts
  slow, accelerates as the gap closes (force grows with proximity) and
  overshoots a hair on dock, like real magnets clicking shut.
- **Click-ring on contact** — a radiating box-shadow ring fires once
  per open, selling the moment the poles touch.
- **Reversible mid-gesture** — pole travel is a transform transition,
  not a keyframe: closing releases the poles back to rest from wherever
  they are, smoothly.
- **Pulled-in answer** — the body rises 14px into place, overshoots
  2px, and settles, echoing the same pull physics.
- **Native accordion semantics** — `<details name="mg-faq">` gives
  exclusive-open behavior straight from the browser; remove the `name`
  to allow multiple open.
- **Keyboard accessible** — `<summary>` is natively focusable and
  toggles with Enter/Space; `:focus-visible` shows a 2px indigo ring
  and triggers the same pole creep as hover.
- **Genuinely responsive** — fluid section up to 620px; under 440px the
  answer text realigns to the card edge and rows tighten.
- **Tunable via custom properties** — pole gap, creep distance, snap
  duration/easing, pull duration, and both brand colors on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes all travel; poles
  rest apart or docked with no animation.

## 🔧 Custom Properties

| Property             | Default                            | Role                          |
| -------------------- | ---------------------------------- | ----------------------------- |
| `--mg-gap`           | `6px`                              | Pole separation at rest       |
| `--mg-creep`         | `2px`                              | Separation while hovered      |
| `--mg-snap-duration` | `300ms`                            | Pole snap / release           |
| `--mg-snap-ease`     | `cubic-bezier(0.7, 0, 0.3, 1.35)`  | Accelerating pull, soft dock  |
| `--mg-pull-duration` | `340ms`                            | Answer pulled into place      |
| `--mg-accent`        | `#6d5cff`                          | North pole (indigo)           |
| `--mg-accent-2`      | `#ff5ca8`                          | South pole (pink)             |

## 🚀 Usage

```html
<details class="mg-item" name="my-faq">
  <summary class="mg-head">
    <span class="mg-poles" aria-hidden="true">
      <span class="mg-pole mg-pole-n"></span>
      <span class="mg-pole mg-pole-s"></span>
    </span>
    How does the 14-day free trial work?
    <span class="mg-chevron" aria-hidden="true"></span>
  </summary>
  <div class="mg-body">
    <p>Every plan starts with all features unlocked for 14 days…</p>
  </div>
</details>
```

## 📂 Files

- `demo.html` — a pricing FAQ section (trial / plans / cancel / seats).
- `style.css` — motion tokens, two-pole magnet engine, landing-page skin, a11y guards.
- `README.md` — this document.
