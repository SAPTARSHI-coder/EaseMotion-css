# Password Strength Meter — Pure CSS

## What does this do?

A real-time password strength meter with visual feedback, requirement checklist, and form state management — built entirely with CSS pseudo-classes (`:valid`, `:invalid`, `:placeholder-shown`) and the `:has()` relational selector. No JavaScript required.

## How is it used?

```html
<link rel="stylesheet" href="style.css">

<form class="pw-wrapper" novalidate>
  <label for="password" class="pw-label">Create a password</label>
  <div class="pw-input-group">
    <input type="password" id="password" class="pw-input"
           placeholder="Enter your password"
           minlength="8"
           pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}"
           required>
  </div>

  <!-- Meter is shown/hidden automatically via :has() -->
  <div class="pw-meter">
    <div class="pw-meter-bar"><div class="pw-meter-fill"></div></div>
  </div>

  <!-- Feedback switches based on validation state -->
  <div class="pw-feedback">
    <span class="pw-feedback-empty">Start typing…</span>
    <span class="pw-feedback-weak">Weak password</span>
    <span class="pw-feedback-strong">Strong password!</span>
  </div>

  <button type="submit" class="pw-submit" disabled>Create Account</button>
</form>
```

**Validation logic:**
- **Empty** → `:placeholder-shown` hides the meter
- **Weak** → `:invalid` shows red bar and weak text
- **Strong** → `:valid` shows green bar and strong text, enables submit button

## Why is it useful?

Password strength is a universal form pattern that typically requires JavaScript. This submission demonstrates that modern CSS can handle common validation UI states declaratively, reducing JS dependency and improving accessibility by leveraging native browser form validation.

**Features:**
- **Zero JavaScript** — Meter, feedback, requirement icons, and button state are CSS-driven
- **Browser-native validation** — Uses HTML5 `pattern`, `minlength`, and `required` attributes
- **Dark mode** — Automatic via `prefers-color-scheme` with manual toggle
- **`prefers-reduced-motion`** — Disables all transitions for vestibular comfort
- **`prefers-contrast`** — Enhanced borders and outlines for high contrast mode
- **`forced-colors: active`** — Full Windows High Contrast Mode support
- **Keyboard accessible** — All interactive elements are focusable with `focus-visible` rings
- **`aria-live` region** — Screen readers announce feedback changes
- **`aria-describedby`** — Links input to feedback and requirements
- **Responsive** — Adapts from 320px mobile to wide screens
- **Print-friendly** — Strips interactive chrome on print
- **Semantic HTML** — Proper `<form>`, `<label>`, `pattern`, `<button disabled>`
