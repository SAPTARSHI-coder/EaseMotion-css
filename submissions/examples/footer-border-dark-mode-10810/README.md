# Footer Border Dark Mode Fix — Issue #10810

Fixes: #10810

## What does this do?

Adds a `@media (prefers-color-scheme: dark)` override to `components/footer.css`
so the `border-top` on `.ease-footer` and `.ease-footer-bottom` uses a dark-appropriate
token instead of the near-white `--ease-color-neutral-200`.

## The problem

`components/footer.css` has two rules using `--ease-color-neutral-200` (`#e5e7eb`)
for `border-top`:

```css
/* Line ~11 */
.ease-footer {
    background: var(--ease-color-neutral-900, #111);
    border-top: 1px solid var(--ease-color-neutral-200, #e5e7eb); /* ← near-white */
}

/* Line ~144 */
.ease-footer-bottom {
    border-top: 1px solid var(--ease-color-neutral-200, #e5e7eb); /* ← near-white */
}
```

The footer background is intentionally dark (`#111`) in **both** light and dark mode.
`--ease-color-neutral-200` has no dark mode override in `core/variables.css`, so the
border stays `#e5e7eb` regardless of color scheme.

Contrast ratio of `#e5e7eb` on `#111`: **≈ 14:1** — the same contrast as black text
on white. A 1px border at this contrast is the most visible horizontal line on the page,
which defeats the intent of a subtle section separator.

This is the same structural issue as `sidebar.css` (fixed in PR #10680): a dark-background
component using a light-mode border token with no dark mode correction block.

## The fix

```css
@media (prefers-color-scheme: dark) {
    .ease-footer {
        border-top-color: var(--ease-color-neutral-700, #334155);
    }

    .ease-footer-bottom {
        border-top-color: var(--ease-color-neutral-700, #334155);
    }
}
```

`--ease-color-neutral-700` (`#334155`) against the `#111` footer background gives
**≈ 3.5:1** contrast — subtle and appropriate for a section divider.

## Before vs after

| Rule | Before | After |
|---|---|---|
| `.ease-footer` border-top | `#e5e7eb` — 14:1 on dark footer ❌ | `#334155` — 3.5:1 on dark footer ✅ |
| `.ease-footer-bottom` border-top | `#e5e7eb` — 14:1 on dark footer ❌ | `#334155` — 3.5:1 on dark footer ✅ |

## Why `--ease-color-neutral-700`

The same token is used for dark-mode borders in the sidebar fix (PR #10680),
forms, modals, tabs, and cards — it is the established dark-surface border
convention across the framework.

## How to use

```html
<!-- No class changes needed — the fix is applied via @media in the component CSS -->
<footer class="ease-footer">
    <div class="ease-footer-grid"><!-- columns --></div>
    <div class="ease-footer-bottom">
        <span>© 2026 Company</span>
    </div>
</footer>
```

## How to test

1. Open `demo.html` directly in a browser — no server required.
2. The **Broken** footer shows a near-white `#e5e7eb` border against the dark background.
3. The **Fixed** footer shows a subtle dark `#334155` border.
4. To test the `@media` path: Chrome DevTools → More Tools → Rendering →
   Emulate CSS media feature `prefers-color-scheme: dark`.
