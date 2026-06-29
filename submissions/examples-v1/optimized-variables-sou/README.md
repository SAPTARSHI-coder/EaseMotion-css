# Optimized `variables.css` Proposal

> Submission for issue [#16932](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/16932) —
> *[Enhancement] Optimize `variables.css` by grouping related design tokens*.

---

## 1. What does this do?

It proposes a **reorganized, hierarchically grouped** version of `core/variables.css` that keeps every existing token value unchanged but makes the file dramatically easier to read, navigate, and extend — and introduces a new layer of **component-scoped tokens** for per-component theming.

---

## 2. How is it used?

Open `demo.html` directly in a browser (no server, no CDNs, no build step) to see the proposed tokens in action.

The demo showcases:

- 🎨 Brand & semantic color swatches
- 📏 The full spacing scale
- 🌑 Shadow & radius effects
- 🧩 **Two cards and three buttons** styled *only* through the new component-scoped tokens

### Using a global token

```html
<div style="background: var(--ease-color-primary); padding: var(--ease-space-4);">
  Hello
</div>
```

### Using a component-scoped token (NEW)

```html
<button class="ease-btn">Default purple button</button>

<!-- Override a single instance without affecting other buttons -->
<button class="ease-btn" style="--ease-btn-bg: var(--ease-color-success);">
  Green button (same component, different theme)
</button>
```

### Switching themes

```html
<html data-theme="dark">   <!-- forced dark  -->
<html data-theme="light">  <!-- forced light -->
<html>                     <!-- auto (follows OS) -->
```

---

## 3. Why is it useful?

EaseMotion's existing `core/variables.css` is a flat list of ~80 custom properties. As the framework grows, it becomes harder to:

- Find a related group of tokens (e.g. "all easing curves")
- Understand the relationships between tokens
- Override tokens for a single component without affecting globals

This proposal addresses every point raised in issue #16932 while staying **100% backwards-compatible** — no existing token name or value is removed or changed.

### Improvements at a glance

| Area | Before | After |
|---|---|---|
| **Structure** | Flat list with small section comments | 8 numbered sections + sub-sections with banner headers |
| **Navigation** | Scroll to find tokens | Table of contents at the top |
| **Motion tokens** | Mixed into one block | Split into Durations / Easing / Animation Controls |
| **Color tokens** | One long list | Brand / Semantic / Neutral / Surface / Alpha / Glass |
| **Layout tokens** | Scattered (spacing, radius, z-index, container) | Grouped under one section |
| **Component theming** | Only globals — overriding affects everything | New `--ease-btn-*`, `--ease-card-*`, `--ease-modal-*` scoped tokens |
| **Theme variants** | Repeated blocks | Numbered as 8.1 / 8.2 / 8.3 with clear intent |

### Fits EaseMotion's philosophy

EaseMotion CSS values:

- **Curated quality** → cleaner files are easier for the maintainer to review and standardize.
- **Zero-config DX** → the demo still works by simply opening `demo.html`.
- **Predictable theming** → the new component-scoped tokens make it trivial to override one component without touching globals, encouraging the kind of opt-in customization the framework already promotes.

### Backwards compatibility

✅ Every existing `--ease-*` custom property is preserved with the same value.
✅ The `@layer easemotion-base` wrapper is preserved.
✅ All `@supports (color-mix(...))`, `@media (prefers-color-scheme: dark)`, and `[data-theme]` blocks are preserved.
✅ The new component-scoped tokens (`--ease-btn-*`, `--ease-card-*`, `--ease-modal-*`) are **additive** — they reference the existing globals via `var(...)`, so removing them later would not break anything.

---

## Files in this submission

| File | Purpose |
|---|---|
| `style.css` | The proposed reorganized `variables.css` |
| `demo.html` | Self-contained visual showcase of every token group |
| `README.md` | This document |

---

## Notes for the maintainer

- This is a **proposal**, submitted under `submissions/examples/` per the current contribution freeze. Promotion into `core/variables.css` is left to your discretion.
- Class names in `demo.html` use `ease-*` for illustration only; please rename freely during standardization.
- Unique suffix `-sou` is appended to the folder name (per the "Contribution Policy Update" section of `CONTRIBUTING.md`) to avoid collisions with parallel submissions.