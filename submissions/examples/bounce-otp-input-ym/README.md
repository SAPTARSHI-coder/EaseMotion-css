## EaseMotion tokens used

Defined at the top of `style.css`, scoped so they won't collide with the rest
of the library:

| Token | Purpose |
|---|---|
| `--ease-bounce-in` | Overshoot/"pop" curve (back-ease) for the entrance and focus bounce |
| `--ease-bounce-settle` | Smooth deceleration for border/shadow/button transitions |
| `--ease-bounce-shake` | Reserved curve for an error-shake state, if extended later |

Keyframes:
- `otp-bounce-in` — the staggered entrance bounce for each digit box
- `otp-focus-bounce` — the extra pop when a box receives focus

## A note on "pure CSS"

The issue asks for pure CSS where possible. Everything here — the bounce
animations, focus states, and filled-state styling — is 100% CSS. One thing
CSS genuinely cannot do on its own is auto-advance focus to the next box
after a digit is typed; that specific behavior requires a few lines of JS in
any real implementation. Rather than fake it, this component ships as a
clean, fully-functional no-JS input group: users tab or click between boxes
normally. If auto-advance is wanted later, it can be layered on top without
touching these styles.

## How to use

1. Copy `style.css` into your project (or merge its rules into your existing
   EaseMotion CSS stylesheet).
2. Copy the markup structure from `demo.html`'s `<form class="bounce-otp-card">`
   block into your page.
3. Give each `<input>` a `style="--i:N;"` (0 through 5) to preserve the
   staggered entrance order.
4. Swap `+91 98765 43210` in the subtitle for the real destination (phone or
   email) at render time.

## Accessibility

- Each digit box has its own visually-hidden `<label>` ("Digit 1 of 6", etc.)
  so screen readers announce position within the code, not just "edit text".
- `inputmode="numeric"` and `pattern="[0-9]*"` bring up a numeric keyboard on
  mobile without any JS.
- `autocomplete="one-time-code"` on the first box lets browsers/OSes offer
  to autofill an SMS code.
- Clear visible focus state (color + glow ring) on the active box.
- Respects `prefers-reduced-motion`: entrance and focus bounce animations are
  disabled, boxes simply appear at full opacity for users who request less
  motion.

## Responsive behavior

Below 420px, card padding tightens and digit boxes shrink slightly with a
smaller gap between them, so all six stay comfortably tappable on narrow
phone screens.

## Browser support

Uses standard CSS (flexbox, custom properties, `:not(:placeholder-shown)`
for the filled state). No JavaScript, no build step — works in all current
evergreen browsers.