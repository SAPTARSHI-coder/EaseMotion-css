# Micro Shake Modal — Marketing Landing Page

A pure CSS, zero-dependency **promo modal** for landing pages. "Claim 20%
off" pops a discount dialog in with a soft overshoot, then delivers a
**micro shake** — three quick, decaying horizontal nudges of a couple of
pixels, ending dead center. It's the UI-scale version of waving for
attention: big enough to catch the eye, small enough not to read as an
error. Driven entirely by the `:target` selector — no JavaScript.

Resolves Issue: #34011

## ✨ Features

- **Pop, then micro shake** — `mk-pop` scales the dialog in with a gentle
  overshoot (`cubic-bezier(0.34, 1.4, 0.5, 1)`), then `mk-shake` runs a
  decaying translateX gesture (−3px → +3px → ∓1.8px → ∓0.75px → 0).
  Keeping the shake on translateX only — no rotation — is what keeps it
  "micro": it reads as a wave, not a validation failure.
- **Replays on every open** — both animations are gated behind `:target`,
  so each open restarts the choreography from scratch. Zero JS.
- **Careful animation layering** — the shake deliberately carries no fill
  mode; a backwards fill would pin `transform` during its delay and
  cancel the pop (later animations in the list win shared properties).
- **Keyboard accessible** — trigger, ✕, click-away scrim, and both action
  buttons are native `<a>` elements: Tab reaches them, Enter activates;
  3px brand `:focus-visible` rings throughout; the dialog carries
  `role="dialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`.
- **Landing-page-native details** — gradient headline and CTA, floating
  "Limited · 48h" badge bridging the dialog edge, dashed monospace
  discount code block, checkmark perk list, primary vs. ghost actions.
- **Genuinely responsive** — fluid hero type via `clamp()`, dialog width
  `min(420px, 100%)`, actions stack full-width under 420px.
- **Tunable via custom properties** — shake distance, shake duration,
  pop duration, easing, starting scale, and exit time on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes the pop and the
  shake entirely; the modal simply appears.

## 🔧 Custom Properties

| Property               | Default                            | Role                        |
| ---------------------- | ---------------------------------- | --------------------------- |
| `--mk-shake-distance`  | `3px`                              | Max nudge (decays from here)|
| `--mk-shake-duration`  | `420ms`                            | Whole shake gesture         |
| `--mk-pop-duration`    | `300ms`                            | Entrance pop time           |
| `--mk-ease`            | `cubic-bezier(0.34, 1.4, 0.5, 1)`  | Pop overshoot curve         |
| `--mk-scale-from`      | `0.9`                              | Dialog starting scale       |
| `--mk-exit-duration`   | `150ms`                            | Dismissal time              |

## 🚀 Usage

```html
<!-- Trigger -->
<a class="mk-cta" href="#mk-offer-modal">Claim 20% off</a>

<!-- Modal -->
<div class="mk-modal" id="mk-offer-modal">
  <a class="mk-scrim" href="#mk-hero" aria-label="Close"></a>
  <div class="mk-dialog" role="dialog" aria-modal="true" aria-labelledby="title">
    <span class="mk-badge">Limited · 48h only</span>
    <a class="mk-close" href="#mk-hero" aria-label="Close">✕</a>
    <h2 class="mk-dialog-title" id="title">Here's your 20% off</h2>
    <span class="mk-code">SUMMER-20</span>
    <!-- perks, actions -->
  </div>
</div>
```

## 📂 Files

- `demo.html` — a landing-page hero with a limited-offer discount dialog.
- `style.css` — motion tokens, `:target` pop + shake engine, landing skin, a11y guards.
- `README.md` — this document.

## 📝 Note

`:target` modals cannot close on the Esc key without JavaScript — a
limitation of the pure CSS approach, mitigated here by three separate
close affordances (✕, scrim, and both action links).
