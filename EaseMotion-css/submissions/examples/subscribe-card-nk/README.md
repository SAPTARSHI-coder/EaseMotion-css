# Subscription / Email Capture Card — `subscribe-card-nk`

## 1. What does this do?

An animated email subscription card with 4 CSS-driven states: idle (floating envelope icon + left-to-right focus border draw), loading (button width-collapses to a spinning pill), success (SVG envelope + checkmark draw with staggered entrance), and error (input shake + red glow) — all transitions driven by pure CSS keyframes off state classes toggled by a minimal JS bridge.

---

## 2. How is it used?

### HTML structure

```html
<div class="sc-card">

  <!-- IDLE pane -->
  <div class="sc-pane sc-pane--idle" id="pane-idle">
    <form class="sc-form">
      <div class="sc-field">
        <input class="sc-input" type="email" placeholder="you@example.com" />
        <span class="sc-border-draw"></span> <!-- animated focus underline -->
      </div>
      <p class="sc-error" role="alert" aria-live="assertive"></p>
      <button class="sc-btn" type="submit">
        <span class="sc-btn__label">Subscribe →</span>
        <span class="sc-btn__spinner" aria-hidden="true"></span>
      </button>
    </form>
  </div>

  <!-- SUCCESS pane -->
  <div class="sc-pane sc-pane--success" hidden>
    <svg class="sc-success__svg" viewBox="0 0 80 80">
      <rect  class="sc-env-body" .../>
      <path  class="sc-env-flap" .../>
      <circle class="sc-check-circle" .../>
      <path  class="sc-check-tick" .../>
    </svg>
  </div>

</div>
```

### State classes

| Class | Applied to | Effect |
|---|---|---|
| `:focus ~ .sc-border-draw` | `.sc-border-draw` | Left-to-right border draw on input focus |
| `sc-input--error` | `.sc-input` | Red border + glow |
| `sc-input--shake` | `.sc-input` | Horizontal shake animation |
| `sc-btn--loading` | `.sc-btn` | Width collapses to pill + spinner fades in |
| `sc-pane--exit` | `.sc-pane--idle` | Fade + scale out on submit |
| `sc-pane--enter` | `.sc-pane--success` | Fade + scale in on success |

### JS bridge (minimal — only toggles classes and hidden state)

```js
// Show loading
btn.classList.add('sc-btn--loading');

// Show success — cross-fade panes
paneIdle.classList.add('sc-pane--exit');
// on animationend:
paneSuccess.hidden = false;
paneSuccess.classList.add('sc-pane--enter');

// Show error shake
input.classList.add('sc-input--error', 'sc-input--shake');
```

All visual transitions — border draw, button collapse, spinner, pane cross-fade, SVG draws, success entrance — are pure CSS. The JS manages state and hidden attributes only.

---

## 3. Why is it useful?

Email capture cards appear on virtually every marketing and SaaS landing page. Most implementations do an instant state swap with no animation — users are left wondering if their click registered, if the form submitted, or if anything happened at all.

This component fits EaseMotion's philosophy because:

- **Every state tells a story through motion.** The focus border draws left-to-right to signal "you're interacting." The button collapses to a spinner to say "working." The envelope draws itself to say "sent." The shake says "fix this." No ambiguity at any step.
- **CSS does the heavy lifting.** All 9 keyframes (fade-up, pane-out, pane-in, shake, btn-collapse, spin, icon-float, draw, check-circle-pop) are pure CSS driven by class toggles. The JS is ~60 lines managing state transitions only — replace with React `useState`, Alpine `x-bind`, or HTMX without touching the stylesheet.
- **Accessible by default.** The error uses `role="alert"` + `aria-live="assertive"`. A global `role="status"` live region announces every state change. The button's `disabled` attribute is set during loading. `prefers-reduced-motion` collapses all durations to near-zero.
- **Zero dependencies.** Open `demo.html` directly in any modern browser — no server, no CDN, no build step.

---

## Animations used

| Animation | Trigger | Effect |
|---|---|---|
| `sc-fade-up` | Card / hint on page load | Fade + slide up entrance |
| `sc-icon-float` | Envelope icon (idle) | Gentle infinite vertical float |
| `sc-border-draw` | Input `:focus` | Left-to-right underline draws in |
| `sc-shake` | `.sc-input--shake` on error | 7-step horizontal shake |
| `sc-btn-collapse` | `.sc-btn--loading` | Width collapses from 100% → pill |
| `sc-spin` | `.sc-btn__spinner` while loading | Continuous spinner rotation |
| `sc-pane-out` | `.sc-pane--exit` on submit | Fade + scale out upward |
| `sc-pane-in` | `.sc-pane--enter` on success | Fade + scale in from below |
| `sc-success-entrance` | SVG container on success | Scale pop from 0.7 → 1 |
| `sc-draw` | `.sc-env-body`, `.sc-env-flap`, `.sc-check-tick` | Stroke-dashoffset draw (staggered) |
| `sc-check-circle-pop` | `.sc-check-circle` | Scale bounce from 0 → 1 |

---

## Files

```
submissions/examples/subscribe-card-nk/
├── demo.html   — self-contained demo, works by opening directly in a browser
├── style.css   — all styles, keyframes, and state transitions
└── README.md   — this file
```

### Demo test values
- `already@subscribed.com` → shake + "You're already subscribed!" error
- Empty submit → shake + "Please enter your email address."
- Invalid format → shake + "Please enter a valid email address."
- Any other valid email → loading pill → success card
