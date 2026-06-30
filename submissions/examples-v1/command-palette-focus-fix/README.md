# Fix: Command Palette Keyboard Focus Mismatch in Dark Mode

**Fixes:** [#26399](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/26399)

---

## 🐛 Bug Description

In `components/command-palette.css`, the `.ease-command-palette-item:focus` state lacks dark mode overrides in both the `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]` selector blocks.

When a keyboard user navigates the command palette in dark mode by pressing the `Tab` key, the focused item flashes to a bright light-mode background color (`#f1f5f9`). This creates a theme leak and results in extremely low text contrast (white text on a light gray background), violating WCAG 2.1 accessibility guidelines.

---

## ✅ Fix

Include the `:focus` selector in both dark mode override blocks alongside `:hover` and `-active`:

```css
/* ✅ Fixed prefers-color-scheme block */
@media (prefers-color-scheme: dark) {
  .ease-command-palette-item:hover,
  .ease-command-palette-item:focus,
  .ease-command-palette-item-active {
    background-color: var(--ease-color-neutral-800, #1e293b);
  }
}

/* ✅ Fixed data-theme block */
[data-theme="dark"] .ease-command-palette-item:hover,
[data-theme="dark"] .ease-command-palette-item:focus,
[data-theme="dark"] .ease-command-palette-item-active {
  background-color: #1e293b;
}
```

---

## 📁 Submission Contents

| File        | Purpose                                                                      |
| ----------- | ---------------------------------------------------------------------------- |
| `demo.html` | Side-by-side live demonstration of the bug vs. the fix in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout                        |
| `README.md` | This documentation file                                                      |
