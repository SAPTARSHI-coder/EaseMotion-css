# Blur-Entrance Modal — E-Commerce Checkout

A pure CSS, zero-dependency **order-review modal** for checkout flows.
Activating "Review & place order" pulls a confirmation dialog into focus:
it starts soft (`filter: blur`), slightly small and low, then sharpens
into place while the checkout page behind it falls out of focus
(`backdrop-filter`). Driven entirely by the `:target` selector — no
JavaScript anywhere.

Resolves Issue: #33971

## ✨ Features

- **Blur entrance ("focus pull")** — the dialog animates
  `filter: blur(14px) → 0` together with a small scale/translate settle,
  while the overlay's `backdrop-filter` defocuses the page behind it, so
  attention lands exactly where the money is about to move.
- **Asymmetric timing** — 340ms in, 170ms out; review deserves a beat,
  dismissal should feel instant.
- **Zero JavaScript** — the trigger is a real link to `#ck-order-modal`;
  the modal shows while it is the URL `:target`. Close controls are links
  back to `#ck-checkout`, including an invisible full-backdrop scrim for
  click-away dismissal.
- **Keyboard accessible** — every control is a native `<a>`: Tab reaches
  the trigger, close ✕, scrim, and both action buttons; Enter activates;
  3px accent `:focus-visible` rings throughout. The dialog carries
  `role="dialog"`, `aria-modal`, `aria-labelledby` and `aria-describedby`.
- **Checkout-native details** — warm neutral canvas, itemized order lines
  with dashed separators, free-shipping accent, ship-to / pay-with /
  arrives meta strip, primary vs. ghost action pair.
- **Genuinely responsive** — dialog width is `min(430px, 100%)` inside a
  padded overlay; under 420px the action buttons stack full-width.
- **Tunable via custom properties** — starting blur, scale, rise,
  entrance/exit durations, easing, and overlay blur are exposed on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes all transitions and
  the blur choreography; the modal simply appears.

## 🔧 Custom Properties

| Property             | Default                             | Role                     |
| -------------------- | ----------------------------------- | ------------------------ |
| `--ck-blur-from`     | `14px`                              | Dialog starting blur     |
| `--ck-scale-from`    | `0.94`                              | Dialog starting scale    |
| `--ck-rise`          | `12px`                              | Dialog starting offset   |
| `--ck-duration`      | `340ms`                             | Entrance time            |
| `--ck-ease`          | `cubic-bezier(0.18, 0.9, 0.32, 1)`  | Settle curve             |
| `--ck-exit-duration` | `170ms`                             | Dismissal time           |
| `--ck-overlay-blur`  | `5px`                               | Page defocus behind      |

## 🚀 Usage

```html
<!-- Trigger -->
<a class="ck-cta" href="#ck-order-modal">Review &amp; place order</a>

<!-- Modal -->
<div class="ck-modal" id="ck-order-modal">
  <a class="ck-scrim" href="#ck-checkout" aria-label="Close"></a>
  <div class="ck-dialog" role="dialog" aria-modal="true" aria-labelledby="title">
    <a class="ck-close" href="#ck-checkout" aria-label="Close">✕</a>
    <h2 class="ck-dialog-title" id="title">Confirm your order</h2>
    <!-- recap, meta, actions -->
  </div>
</div>
```

## 📂 Files

- `demo.html` — a checkout review step (order summary → confirm dialog).
- `style.css` — motion tokens, `:target` blur engine, checkout skin, a11y guards.
- `README.md` — this document.

## 📝 Note

`:target` modals cannot close on the Esc key without JavaScript — that is
a browser limitation of the pure CSS approach, mitigated here by three
separate close affordances (✕, scrim, and both action links).
