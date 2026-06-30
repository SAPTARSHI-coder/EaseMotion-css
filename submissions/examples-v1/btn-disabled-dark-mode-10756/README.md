# Disabled Button Dark Mode Fix — Issue #10756

Fixes: #10756

## What does this do?

Adds a `@media (prefers-color-scheme: dark)` block to `components/buttons.css`
so `.ease-btn:disabled` (and its interaction-state variants) renders as a muted
dark surface instead of a near-white rectangle in dark mode.

## The problem

`components/buttons.css` has zero `@media (prefers-color-scheme: dark)` blocks.
The disabled button state:

```css
/* Current */
.ease-btn:disabled,
.ease-btn[disabled],
.ease-btn-disabled {
  background-color: var(
    --ease-color-neutral-200,
    #e2e8f0
  ) !important; /* near-white — no dark override */
  color: var(--ease-color-neutral-500, #64748b) !important;
  border-color: var(
    --ease-color-neutral-200,
    #e2e8f0
  ) !important; /* near-white — no dark override */
  cursor: not-allowed;
}
```

In dark mode, `--ease-color-neutral-200` stays `#e2e8f0` (near-white) with no
override. Against the `#0b1121` dark page background:

| State                         | Background         | Contrast on #0b1121 | Result                    |
| ----------------------------- | ------------------ | ------------------- | ------------------------- |
| Light mode disabled (correct) | #e2e8f0 on #f8fafc | ≈ 1.1:1             | Muted grey — quiet ✅     |
| Dark mode disabled (broken)   | #e2e8f0 on #0b1121 | ≈ 13:1              | Near-white — dominates ❌ |

The enabled buttons (primary, success, danger) remain their brand colors. The
disabled ones become the most visually prominent elements on the page — the
hierarchy that communicates "this action is unavailable" is completely inverted.

## The fix

```css
@media (prefers-color-scheme: dark) {
  .ease-btn:disabled,
  .ease-btn[disabled],
  .ease-btn-disabled {
    background-color: var(--ease-color-neutral-800, #1e293b) !important;
    color: var(--ease-color-neutral-500, #64748b) !important;
    border-color: var(--ease-color-neutral-700, #334155) !important;
  }

  .ease-btn:disabled:hover,
  .ease-btn:disabled:focus,
  .ease-btn:disabled:active,
  .ease-btn[disabled]:hover,
  .ease-btn[disabled]:focus,
  .ease-btn[disabled]:active,
  .ease-btn-disabled:hover,
  .ease-btn-disabled:focus,
  .ease-btn-disabled:active {
    background-color: var(--ease-color-neutral-800, #1e293b) !important;
    color: var(--ease-color-neutral-500, #64748b) !important;
    border-color: var(--ease-color-neutral-700, #334155) !important;
  }
}
```

## Before vs after in dark mode

| Property   | Before                            | After                                |
| ---------- | --------------------------------- | ------------------------------------ |
| Background | `neutral-200` #e2e8f0 — ≈ 13:1 ❌ | `neutral-800` #1e293b — ≈ 2.5:1 ✅   |
| Border     | `neutral-200` #e2e8f0 — ≈ 13:1 ❌ | `neutral-700` #334155 — ≈ 3.5:1 ✅   |
| Text       | `neutral-500` #64748b — unchanged | `neutral-500` #64748b — unchanged ✅ |

## Token rationale

**`--ease-color-neutral-800` (`#1e293b`) for background**

- Darker than the enabled input surface (`--ease-color-surface` = `#141e33`)
- Visually less prominent than enabled buttons — preserves the "unavailable"
  semantic
- Same token used in the forms disabled fix (PR #10687) for consistency

**`--ease-color-neutral-700` (`#334155`) for border**

- The framework's established dark-mode border token
- Used by forms, modals, tabs, sidebar, and footer fixes

**`--ease-color-neutral-500` (`#64748b`) for text**

- Already set by the base rule — correct for both light and dark modes
- No change needed

## How to use

No class changes needed — the fix applies automatically:

```html
<!-- All three render as muted dark surfaces in dark mode after the fix -->
<button class="ease-btn ease-btn-primary" disabled>Submit</button>
<button class="ease-btn ease-btn-success" disabled>Save</button>
<button class="ease-btn ease-btn-danger" disabled>Delete</button>
```

## How to test

1. Open `demo.html` directly in a browser — no server required.
2. The page shows a light and dark panel side by side.
3. Dark panel top section: enabled buttons (colored) and broken disabled
   buttons (bright near-white rectangles that are more prominent than the
   enabled ones).
4. Dark panel bottom section: the same three disabled buttons using the fix
   (muted dark surfaces, clearly less prominent than the enabled buttons).
5. To test via OS preference: Chrome DevTools → More Tools → Rendering →
   Emulate CSS media feature `prefers-color-scheme: dark`.
