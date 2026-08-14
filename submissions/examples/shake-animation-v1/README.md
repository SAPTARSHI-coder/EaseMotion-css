# shake-animation

**GSSoC · EaseMotion CSS Submission**  
Issue: *"Add ease-shake animation for error states"*

---

## What does this do?

This submission adds a **horizontal shake animation** designed for error and
validation states in web UIs. When a user submits invalid data — a wrong
password, a malformed email, an incorrect OTP — the offending element shakes
rapidly from side to side, snapping the user's attention to exactly what needs
fixing without a page reload or a loud alert.

Three intensity variants are included:

| Class | Duration | Displacement | Use case |
|---|---|---|---|
| `shake-error` | 0.52 s | ±7 px | General form fields |
| `shake-error--subtle` | 0.40 s | ±5 px | OTP boxes, inline inputs |
| `shake-error--strong` | 0.65 s | ±11 px | Auth failures, critical alerts |

---

## How is it used?

### 1. Link the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

### 2. Mark the element with `shake-error`

Add the class directly in HTML for a persistent demo state:

```html
<input class="form-input shake-error" type="text" value="bad@" />
```

Or apply it dynamically via JavaScript on validation failure:

```js
function triggerShake(el, variant = 'shake-error') {
  el.classList.remove(variant);
  void el.offsetWidth;          // force reflow so animation re-fires
  el.classList.add(variant);
}

// Example: shake a form group on invalid email
triggerShake(document.getElementById('group-email'));
```

### 3. Pair with the `error-field` state class (optional)

`error-field` applies red border, tinted background, and reveals the
`.error-message` text beneath the input — giving full visual feedback alongside
the motion:

```html
<div class="form-group error-field shake-error" id="group-email">
  <label class="form-label" for="email">Email</label>
  <input class="form-input" type="email" id="email" />
  <span class="error-message">Please enter a valid email address.</span>
</div>
```

### 4. Choose a variant

```html
<!-- Subtle — OTP digits -->
<div class="otp-row shake-error--subtle"> … </div>

<!-- Strong — whole card auth error -->
<div class="login-card shake-error--strong"> … </div>
```

---

## Why is it useful?

**Motion is a faster language than text.** A field that shakes tells the user
"this is wrong" in a fraction of a second, long before they finish reading the
error message. This makes form validation feel responsive and alive rather than
static.

Key benefits:

- **Instant attention** — the eye catches motion before it reads text.
- **Zero JS logic** — the animation is entirely CSS; JavaScript only toggles a
  class. You can even pre-apply the class in server-rendered HTML.
- **Re-triggerable** — removing and re-adding the class (with a forced reflow)
  replays the animation every time, even on repeated invalid submissions.
- **Accessible** — a `@media (prefers-reduced-motion: reduce)` block disables
  all shake animations for users who have opted out of motion in their OS
  settings.
- **Composable** — works on any element: `<input>`, `<div>`, `<form>`, `<button>`.
  Pair with your own error styles or use the included `error-field` state class.
- **Scalable** — three pre-built variants cover the full spectrum from a gentle
  inline nudge to a dramatic full-card rejection.

---

## Files

```
submissions/examples/shake-animation/
├── demo.html   — Live demo: sign-in form + OTP verification + variant showcase
├── style.css   — Animation keyframes, variants, error-field state, full form UI
└── README.md   — This file
```

---

## Browser support

All modern browsers (Chrome, Firefox, Safari, Edge). Animation degrades
gracefully to no movement in environments that do not support `@keyframes`.

---

*Submitted for GSSoC · EaseMotion CSS open-source project.*