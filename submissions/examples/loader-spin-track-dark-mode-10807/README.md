# Loader Spin Track Dark Mode Fix — Issue #10807

Fixes: #10807

## What does this do?

Adds a `@media (prefers-color-scheme: dark)` block to `components/loaders.css`
so the `.ease-loader-spin` track ring uses a dark-appropriate border color instead
of the near-white `--ease-color-neutral-200` in dark mode.

## The problem

`components/loaders.css` line 19:

```css
.ease-loader-spin {
    border: 3px solid var(--ease-color-neutral-200); /* full ring — no dark override */
    border-top-color: var(--ease-color-primary);     /* active arc — primary color */
    animation: ease-kf-rotate 0.8s var(--ease-ease-linear) infinite;
}
```

A CSS spinner works by drawing a full circular border and making one segment
a different color. The visual effect depends on:

- **Active arc** (`border-top-color`): the focal color — should draw the eye
- **Inactive track** (`border` color): the ground — should recede into the background

In dark mode:

| | Background | Track | Arc |
|---|---|---|---|
| Light mode (correct) | #f8fafc | #e2e8f0 — ~1.1:1 ✅ quiet | #6c63ff — ~4.5:1 ✅ prominent |
| Dark mode (broken) | #0b1121 | #e2e8f0 — ~13:1 ❌ dominates | #6c63ff — ~4.5:1 — now less visible than track |

The inactive track is ~3× more contrasty than the animated arc it is supposed
to support. The figure-ground relationship is inverted: users see a bright white
ring with a slightly different-colored segment, not a clean rotating arc.

## The fix

```css
@media (prefers-color-scheme: dark) {
    .ease-loader-spin {
        border-color: var(--ease-color-neutral-700, #334155);
    }
}
```

`border-color` sets all four sides to `neutral-700`. The existing
`border-top-color: var(--ease-color-primary)` in the base rule is a more
specific longhand and continues to apply on top — the active arc color is
completely unaffected.

## Before vs after in dark mode

| | Track color | Track contrast on #0b1121 | Arc contrast on #0b1121 | Result |
|---|---|---|---|---|
| Before | #e2e8f0 (neutral-200) | ≈ 13:1 ❌ | ≈ 4.5:1 | Track dominates arc |
| After | #334155 (neutral-700) | ≈ 3.5:1 ✅ | ≈ 4.5:1 | Arc is focal point ✅ |

## Why `--ease-color-neutral-700`

`--ease-color-neutral-700` (`#334155`) is the framework's established
dark-mode border token, used by the sidebar fix (PR #10680), forms, modals,
tabs, and cards. It gives ~3.5:1 contrast on the `#0b1121` dark background —
quiet and unobtrusive, appropriate for a track that should recede.

## How to use

No class changes needed. The fix applies automatically via the `@media` block:

```html
<div class="ease-loader ease-loader-spin" role="status" aria-label="Loading"></div>
```

## How to test

1. Open `demo.html` directly in a browser — no server required.
2. The page shows a split light/dark panel side by side.
3. The dark panel shows the broken spinner (bright white track) and the fixed
   spinner (subtle dark track) for direct comparison.
4. To verify via OS preference: Chrome DevTools → More Tools → Rendering →
   Emulate CSS media feature `prefers-color-scheme: dark`.
