# Sidebar Toggle — Namespace Pollution Fix

> Submission for issue [#2482](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2482) —
> *[BUG] Global Namespace Pollution in `.sidebar-toggle`*.

---

## 1. What does this do?

It demonstrates the global namespace collision caused by the **unprefixed** `.sidebar-toggle` selector still used in `docs/` and a few legacy submissions, and shows the **already-existing** framework-safe replacement: `.ease-sidebar-toggle` (defined in `components/sidebar.css`). The demo proves the collision visually, then proves the fix is immune to it.

---

## 2. How is it used?

Open `demo.html` directly in a browser (no server, no CDNs) to see a side-by-side comparison.

### ❌ Before (collides with host applications)

```html
<button class="sidebar-toggle">☰ Toggle Sidebar</button>
```

```css
/* user's own app.css — perfectly legitimate */
.sidebar-toggle { background: red; border: 2px solid darkred; }
/* 💥 silently overrides EaseMotion's intended styling */
```

### ✅ After (framework-prefixed, collision-proof)

```html
<div class="ease-sidebar-layout">
  <button class="ease-sidebar-toggle">☰ Toggle Sidebar</button>
</div>
```

```css
/* user's own app.css — same rule, now harmless */
.sidebar-toggle { background: red; }   /* cannot match .ease-sidebar-toggle */
```

### 🔄 Collapsed-state rotation still works

```html
<div class="ease-sidebar-layout ease-sidebar-collapsed">
  <button class="ease-sidebar-toggle">▶</button>  <!-- rotates 180° -->
</div>
```

---

## 3. Why is it useful?

### The bug in plain English

The class name `.sidebar-toggle` is so generic that **any developer using EaseMotion CSS in a real project is likely to already have a class with the same name** in their own stylesheet. When that happens, CSS specificity and source order silently decide which rule wins, producing unpredictable visual bugs that are hard to trace.

### What the framework already gets right

`components/sidebar.css` **already uses the safe selector** `.ease-sidebar-toggle`. The bug only survives because the unprefixed name is still used in:

| Location | Lines | Why it matters |
|---|---|---|
| `docs/docs.css` | 352, 724 | Documentation site styling |
| `docs/index.html` | 177 | Documentation markup |
| Legacy submission demos | various | Copy-paste examples |

A user reading the docs sees `.sidebar-toggle` and assumes it's the public API — then runs into the collision in their own project.

### What this submission contributes

✅ A **clear, self-contained reproduction** of the namespace pollution in one HTML file.
✅ A **side-by-side visual proof** that the prefixed selector is immune to the collision.
✅ A **migration checklist** any user can follow in under a minute.
✅ Zero changes to `core/`, `components/`, `docs/`, or other contributors' submissions — fully compliant with the current core-freeze policy in `CONTRIBUTING.md`.

### Fits EaseMotion's philosophy

EaseMotion CSS values **curated quality** and **predictable, opt-in behavior**. A framework that silently breaks because of class-name collisions is the opposite of predictable. Documenting the fix and demonstrating the migration path supports the long-term DX goal: *"drop this in any project, nothing breaks."*

---

## Files in this submission

| File | Purpose |
|---|---|
| `style.css` | Simulated host-app `.sidebar-toggle` rule + the framework's namespace-safe `.ease-sidebar-toggle` rule (copied from `components/sidebar.css`) |
| `demo.html` | Side-by-side visual reproduction of the bug and the fix |
| `README.md` | This document |

---

## Notes for the maintainer

- This is a **showcase / documentation submission**, not a direct edit of `components/` or `docs/`. Any rename/cleanup of the legacy `.sidebar-toggle` usages in `docs/docs.css`, `docs/index.html`, and the affected legacy submissions is left to your discretion per the submission-first pipeline.
- Folder name uses the unique suffix `-sou` per the "Contribution Policy Update" section of `CONTRIBUTING.md` to avoid collisions with parallel submissions.
- The `.ease-sidebar-toggle` styles in `style.css` are copied verbatim from `components/sidebar.css` so the demo is fully self-contained (no `@import` from outside the submission folder).
- A commented-out **migration helper** block is included at the bottom of `style.css` in case you want to add a temporary backwards-compatibility shim during the rename.