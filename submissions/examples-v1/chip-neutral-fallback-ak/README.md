# Chip Neutral Fallback Colors

Demonstrates a bug where the chip component's neutral color variant uses hardcoded fallback values that mismatch the actual framework design tokens.

**Issue:** [#5753 — Chip neutral fallback mismatch](https://github.com/anomalyco/easemotion/issues/5753)

---

## What does this show?

When a chip uses `var(--ease-chip-neutral-bg, #f3f4f6)`, the fallback `#f3f4f6` may not match the framework's actual neutral token value (e.g. `--ease-color-neutral-100`). This causes visual inconsistency when the CSS variable is not defined.

### Comparison

| Variant             | Fallback Value                  | Expected Token             | Match?            |
| ------------------- | ------------------------------- | -------------------------- | ----------------- |
| Neutral (buggy)     | `#f3f4f6` / `#374151`           | `--ease-color-neutral-100` | ❌ May drift      |
| Neutral (fixed)     | `var(--ease-color-neutral-100)` | `--ease-color-neutral-100` | ✅ Always aligned |
| Primary (reference) | `var(--ease-color-primary-500)` | `--ease-color-primary-500` | ✅                |

---

## Files

| File        | Purpose                                                  |
| ----------- | -------------------------------------------------------- |
| `demo.html` | Side-by-side comparison of incorrect vs correct fallback |
| `style.css` | Demo-specific styles                                     |
| `README.md` | This file                                                |
