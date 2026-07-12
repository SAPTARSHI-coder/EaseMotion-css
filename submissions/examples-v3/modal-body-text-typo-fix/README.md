# Fix: Undefined --ease-color-text-muted Variable in Modal Body

**Fixes:** [#30735](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30735)

---

## 🐛 Bug Description

In `components/modals.css`, the `.ease-modal-body` class defines its text color using `color: var(--ease-color-text-muted, #4b5563)` on line 127. However, there is no `--ease-color-text-muted` variable defined anywhere in the design tokens (`core/variables.css`). 

Because this variable is undefined, the text color falls back to the hardcoded `#4b5563` (dark-gray) in both light and dark modes. In dark mode, this dark-gray text is placed on a dark background (`#141e33`), making the modal body text completely illegible.

---

## ✅ Fix

Map the text color to the correct, existing design token `var(--ease-color-muted, #4b5563)`:

```css
.ease-modal-body {
  color: var(--ease-color-muted, #4b5563);
}
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the modal body text readability in dark mode |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
