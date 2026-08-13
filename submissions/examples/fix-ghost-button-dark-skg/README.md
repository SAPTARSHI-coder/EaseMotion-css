# Fix: Ghost Button Variant Nearly Invisible on Dark Backgrounds

**Resolves issue [#55576](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55576)**

---

## 1. What does this do?

Makes the `.ease-btn-ghost` button readable and visually distinct on both light and dark page backgrounds by replacing hardcoded light-theme neutral colours with theme-aware CSS variables, adding a subtle border, and providing an explicit dark-mode override.

---

## 2. How is it used?

The fix is a drop-in replacement for the existing `.ease-btn-ghost` rule in `components/buttons.css`. No markup changes are needed.

```html
<!-- Unchanged HTML -->
<button class="ease-btn ease-btn-ghost">Ghost</button>
```

### Proposed CSS change (for maintainer integration)

```css
/* ── BEFORE (current broken code) ── */
.ease-btn-ghost {
  background-color: transparent;
  color: var(--ease-color-neutral-700, #334155);   /* dark gray — invisible on dark bg */
  border-color: transparent;                        /* no border — doesn't read as a button */
}
.ease-btn-ghost:hover {
  background-color: var(--ease-color-neutral-100, #f1f5f9);  /* near-white — broken on dark */
  color: var(--ease-color-neutral-900, #0f172a);
}

/* ── AFTER (fixed) ── */
.ease-btn-ghost {
  background-color: transparent;
  color: var(--ease-color-text, var(--ease-color-neutral-700, #334155));
  border: 1px solid rgba(100, 116, 139, 0.35);   /* subtle shape cue */
}

.ease-btn-ghost:hover {
  background-color: rgba(100, 116, 139, 0.12);   /* semi-transparent — any bg */
  border-color: rgba(100, 116, 139, 0.55);
  color: var(--ease-color-text, var(--ease-color-neutral-900, #0f172a));
}

/* Explicit dark-mode override */
@media (prefers-color-scheme: dark) {
  .ease-btn-ghost {
    color: var(--ease-color-neutral-300, #cbd5e1);
    border-color: rgba(203, 213, 225, 0.25);
  }

  .ease-btn-ghost:hover {
    background-color: rgba(203, 213, 225, 0.1);
    border-color: rgba(203, 213, 225, 0.45);
    color: var(--ease-color-neutral-100, #f1f5f9);
  }
}
```

---

## 3. Why is it useful?

### Exact root cause

In `components/buttons.css` the ghost button is defined as:

```css
.ease-btn-ghost {
  color: var(--ease-color-neutral-700, #334155);  /* hardcoded dark gray */
  border-color: transparent;                       /* no visible border  */
}
.ease-btn-ghost:hover {
  background-color: var(--ease-color-neutral-100, #f1f5f9);  /* near-white fill */
}
```

The fallback values (`#334155` text, `#f1f5f9` hover) are correct for a white page but fail on the dark demo page (`#0f172a` / `#1e293b` background) because:

| Problem | Value | Effect on dark bg |
|---|---|---|
| Text colour | `#334155` (dark gray) | Almost invisible — low contrast |
| Border | `transparent` | No shape — doesn't read as a button |
| Hover bg | `#f1f5f9` (near-white) | Jarring bright fill on a dark surface |

All other variants (Primary, Success, Danger, Outline) use `#ffffff` text or a coloured solid background, so they remain visible on dark pages. Ghost is the only variant with this issue.

### What the fix changes and why

| Change | Technique | Reason |
|---|---|---|
| Text colour | `var(--ease-color-text, ...)` CSS variable | Inherits the page's text token so it automatically adapts to the current theme |
| Border | `1px solid rgba(slate-500, 0.35)` | Gives the button a clear shape on **any** background without adding visual weight; rgba means it blends correctly everywhere |
| Hover background | `rgba(slate-500, 0.12)` semi-transparent | Works on both light (slight darkening) and dark (slight lightening) surfaces — unlike an opaque light color |
| Dark mode | `@media (prefers-color-scheme: dark)` block | Flips text to `--ease-color-neutral-300` (#cbd5e1) — the same pattern used by other components in the framework |

The fix is backward-compatible: the ghost button continues to look correct on white/light backgrounds, and no HTML changes are required by users of the framework.
