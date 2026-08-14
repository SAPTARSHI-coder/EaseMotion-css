# Fix: Password Strength Meter ARIA Semantics

**Fixes:** [#60878](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/60878)

---

## 🐛 Bug Description

The Password Strength component (`components/password-strength.css`, used
via the `.ease-password-strength` / `.ease-password-strength-bar` markup)
changes color and width dynamically as password strength changes, but the
bar is a plain unlabeled `<div>` with no semantic role or exposed value.

Screen reader users get no indication that:

- The element is a progress/strength indicator at all
- What the current strength level is
- When the strength level changes as they type

This fails WCAG 4.1.2 (Name, Role, Value) for a dynamic status indicator.

---

## ✅ Fix

Add standard ARIA progressbar semantics to the bar element, and mark the
adjacent strength label as a live region so assistive tech announces
changes as they happen:

```diff
 <div class="ease-password-strength">
   <div
     class="ease-password-strength-bar is-weak"
+    role="progressbar"
+    aria-label="Password strength"
+    aria-valuemin="0"
+    aria-valuemax="100"
+    aria-valuenow="25"
+    aria-valuetext="Weak"
   ></div>
   <div class="ease-password-strength-label">
     <span>Strength</span>
-    <span>Weak</span>
+    <span aria-live="polite">Weak</span>
   </div>
 </div>
```

Whenever a strength level changes (weak → medium → strong), the
implementation should update **both**:

- `aria-valuenow` — a numeric value (this demo uses 25 / 60 / 100 to match
  the existing `.is-weak` / `.is-medium` / `.is-strong` bar widths)
- `aria-valuetext` — a human-readable value ("Weak" / "Medium" / "Strong"),
  which screen readers announce in place of the raw number

No visual styling changes are required — `components/password-strength.css`
is untouched. This is purely additive markup, so it's fully backward
compatible with any existing usage.

---

## 📁 Submission Contents

| File        | Purpose                                                                 |
| ----------- | ------------------------------------------------------------------------ |
| `demo.html` | Side-by-side before/after comparison — type a password or use the preset buttons to see the fixed version update its ARIA values live |
| `style.css` | Demo page layout styles only (no changes to the actual component)        |
| `README.md` | This documentation file                                                  |

## 🧪 How to Verify

1. Open `demo.html` in a browser with a screen reader running (NVDA,
   VoiceOver, etc.), or inspect the **Accessibility** tab in Chrome/Firefox
   DevTools.
2. Interact with the **"Before"** panel — the accessibility tree shows a
   generic, unnamed `group`/`div` with no exposed value.
3. Interact with the **"After"** panel — the accessibility tree shows a
   `progressbar` named "Password strength" with a live numeric value and
   text description, and the strength label announces changes via its
   `aria-live="polite"` region.