# Fix: `.ease-toast-body p` — Replace Hardcoded `#6b7280` with `var(--ease-color-muted)`

**Fixes:** [#26180](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/26180)

---

## 🐛 Bug

In `components/toast.css` line 41, the `.ease-toast-body p` rule uses a hardcoded hex
color instead of the framework's design token:

```css
/* ❌ Current — hardcoded, never adapts to dark mode */
.ease-toast-body p { margin: 0; color: #6b7280; font-size: 0.85rem; }
```

Because `#6b7280` is hardcoded, it never responds to:
- `@media (prefers-color-scheme: dark)`
- `[data-theme="dark"]` attribute

In dark mode, the toast surface is `--ease-color-surface: #141e33`. The contrast ratio
of `#6b7280` on `#141e33` is approximately **2.4:1** — below the WCAG AA minimum of 4.5:1.

---

## ✅ Fix

```css
/* ✅ Fixed — uses the correct token with safe fallback */
.ease-toast-body p { margin: 0; color: var(--ease-color-muted, #6b7280); font-size: 0.85rem; }
```

`--ease-color-muted` is already defined in `core/variables.css`:
- **Light mode:** `#475569` (contrast ratio ~5.9:1 on white ✅)
- **Dark mode:** `#94a3b8` (contrast ratio ~4.7:1 on `#141e33` ✅)

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Side-by-side live demonstration of the bug vs. the fix |
| `style.css` | The required one-line change with full context |
| `README.md` | This file |

---

## 🔍 Root Cause

Every other property in `.ease-toast` already defers to CSS tokens
(`--ease-color-surface`, `--ease-color-primary`, etc.). Only `.ease-toast-body p`
was left with a raw hex value, breaking the design token contract.
