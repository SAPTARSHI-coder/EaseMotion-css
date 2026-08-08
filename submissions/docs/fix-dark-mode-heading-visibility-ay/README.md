# Fix: Invisible Headings in Dark Mode

Addresses issue #38274: heading elements (h1–h6) use a hardcoded static
color token that is never updated in dark mode, making them nearly invisible
against dark backgrounds — a critical accessibility regression.

## Root Cause

`core/base.css` line 37:

```css
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: var(--ease-leading-tight);
  color: var(--ease-color-neutral-900);   /* ← #0f172a — never changes */
}
```

`--ease-color-neutral-900` resolves to `#0f172a` — near-black — and is a
**static palette token** that is never overridden in any dark mode block.

In contrast, `--ease-color-text` is a **semantic token** that correctly
updates in every dark-mode activation path the framework supports:

| Activation path | `--ease-color-text` value |
|---|---|
| `:root` (light default) | `var(--ease-color-neutral-800)` → `#1e293b` |
| `@media (prefers-color-scheme: dark)` | `#e2e8f0` ✅ |
| `[data-theme="dark"]` | `#e2e8f0` ✅ |
| `[data-theme="light"]` | `var(--ease-color-neutral-800)` → `#1e293b` |

`body` already uses `color: var(--ease-color-text)` (line 26), making this
inconsistency in the heading rule a clear oversight.

The `p` element (line 49) has the same class of bug:
`color: var(--ease-color-neutral-700)` → `#334155` (dark text, static).
It should use `color: var(--ease-color-muted)`, which also updates correctly
in dark mode to `#94a3b8`.

## The Fix

Two one-line changes in `core/base.css`:

```diff
--- a/core/base.css
+++ b/core/base.css
@@ line 34 @@
 h1, h2, h3, h4, h5, h6 {
   font-weight: 700;
   line-height: var(--ease-leading-tight);
-  color: var(--ease-color-neutral-900);
+  color: var(--ease-color-text);
 }

@@ line 47 @@
 p {
   margin-bottom: var(--ease-space-4);
-  color: var(--ease-color-neutral-700);
+  color: var(--ease-color-muted);
 }
```

## Why these tokens?

| Element | Old token | Old value (dark) | New token | New value (dark) |
|---|---|---|---|---|
| `h1`–`h6` | `--ease-color-neutral-900` | `#0f172a` 🚫 nearly invisible | `--ease-color-text` | `#e2e8f0` ✅ |
| `p` | `--ease-color-neutral-700` | `#334155` 🚫 very low contrast | `--ease-color-muted` | `#94a3b8` ✅ |

Both `--ease-color-text` and `--ease-color-muted` are already the semantic
tokens used by `body` and other components across the framework. Aligning
headings and paragraphs to the same pattern is the consistent choice.

## WCAG Contrast

After the fix, on the framework dark background (`#0b1121`):

| Text | Color | Contrast ratio |
|---|---|---|
| Headings (`#e2e8f0` on `#0b1121`) | passes | **≈ 14.5 : 1** ✅ AAA |
| Paragraphs (`#94a3b8` on `#0b1121`) | passes | **≈ 6.1 : 1** ✅ AA |

Before the fix, headings (`#0f172a` on `#0b1121`) had a contrast ratio of
approximately **1.07 : 1** — effectively invisible.

## Verification

Open `demo.html` in a browser, then:
1. Toggle OS dark mode (or DevTools → Rendering → Emulate prefers-color-scheme: dark)
2. Observe headings and paragraph text are clearly readable in both themes
3. Add `data-theme="dark"` to `<html>` to verify the explicit theme attribute path
