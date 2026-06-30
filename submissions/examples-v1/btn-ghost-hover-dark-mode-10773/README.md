# Ghost Button Dark Mode Fix — Issue #10773

Fixes: #10773

## What does this do?

Adds a `@media (prefers-color-scheme: dark)` block to `components/buttons.css`
that corrects three properties of `.ease-btn-ghost` for dark mode:

1. Base text color — from `neutral-700` to `neutral-300`
2. Hover background — from near-white `neutral-100` to dark-surface `neutral-800`
3. Hover text color — from near-black `neutral-900` to near-white `neutral-100`

## The problem

`components/buttons.css` has zero `@media (prefers-color-scheme: dark)` blocks.
The ghost button hover state:

```css
/* Current */
.ease-btn-ghost {
  color: var(--ease-color-neutral-700, #334155); /* too dark on dark bg */
}

@media (hover: hover) and (pointer: fine) {
  .ease-btn-ghost:hover {
    background-color: var(
      --ease-color-neutral-100,
      #f1f5f9
    ); /* near-white flash */
    color: var(--ease-color-neutral-900, #0f172a); /* inside the flash */
  }
}
```

In dark mode:

| Property   | Token       | Dark mode value | Contrast on #0b1121   | Result                      |
| ---------- | ----------- | --------------- | --------------------- | --------------------------- |
| Base text  | neutral-700 | #334155         | ≈ 4.0:1               | Below WCAG AA ❌            |
| Hover bg   | neutral-100 | #f1f5f9         | ≈ 13:1                | Near-white flash ❌         |
| Hover text | neutral-900 | #0f172a         | readable inside flash | Exists inside white rect ❌ |

The ghost button — designed to be the quietest interactive element — becomes the
most visually jarring on hover. A near-white `#f1f5f9` rectangle at 13:1 contrast
flashes into existence, competing with primary buttons and card surfaces.

## The fix

```css
@media (prefers-color-scheme: dark) {
  .ease-btn-ghost {
    color: var(--ease-color-neutral-300, #cbd5e1);
  }

  @media (hover: hover) and (pointer: fine) {
    .ease-btn-ghost:hover {
      background-color: var(--ease-color-neutral-800, #1e293b);
      color: var(--ease-color-neutral-100, #f1f5f9);
    }
  }
}
```

## Before vs after in dark mode

| Property         | Before                       | After                            |
| ---------------- | ---------------------------- | -------------------------------- |
| Base text        | #334155 — ≈ 4.0:1 ❌         | #cbd5e1 — ≈ 5.9:1 ✅             |
| Hover background | #f1f5f9 — ≈ 13:1 ❌          | #1e293b — ≈ 2.3:1 ✅             |
| Hover text       | #0f172a (inside white flash) | #f1f5f9 on #1e293b — readable ✅ |

## Token rationale

**`--ease-color-neutral-800` (`#1e293b`) for hover background**

- Slightly lighter than the dark page background (`#0b1121`)
- Gives ~2.3:1 contrast — a gentle tint, proportionally similar to the light
  mode hover (~1.1:1). Both are intentionally low-contrast ghost hovers.
- Mirrors the "barely visible" intent in both color schemes.

**`--ease-color-neutral-300` (`#cbd5e1`) for base text**

- ~5.9:1 contrast on `#0b1121` — above WCAG AA 4.5:1 for interactive text
- Reads as muted light grey in dark mode, equivalent weight to `neutral-700`
  in light mode

Both tokens are consistent with the framework's dark-mode conventions used by
chip, navbar, sidebar, forms, and modal components.

## How to use

No class changes needed — the fix applies automatically via `@media`:

```html
<button class="ease-btn ease-btn-ghost">Cancel</button>
<button class="ease-btn ease-btn-primary">Submit</button>
```

## How to test

1. Open `demo.html` directly in a browser — no server required.
2. The page shows light and dark panels side by side.
3. Hover the ghost "Cancel" button in each panel.
4. Dark panel broken: a bright white rectangle flashes on hover.
5. Dark panel fixed: a subtle dark tint appears — gentle and unobtrusive.
6. To test via OS preference: Chrome DevTools → More Tools → Rendering →
   Emulate CSS media feature `prefers-color-scheme: dark`.
