# Modal Dark Mode Fix — Issue #8486

**Fixes:** #8486

## What does this do?

Adds a `@media (prefers-color-scheme: dark)` block to `components/modals.css`
so the modal footer, borders, and close button use dark-appropriate colors
in dark mode. Also corrects two undefined token references in the modal
component.

## Problems fixed

### 1. `.ease-modal-footer` background stays near-white in dark mode

```css
/* Current — stays #f8fafc (near white) in dark mode */
.ease-modal-footer {
  background: var(--ease-color-neutral-50, #f9fafb);
}
```

`--ease-color-neutral-50` has no dark mode override in `variables.css`.
The footer background stays `#f8fafc` while the rest of the modal turns
dark — creating a jarring white stripe at the bottom.

### 2. Close button hover is a near-white flash in dark mode

`--ease-color-neutral-100` (used for `.ease-modal-close:hover` background)
also has no dark mode override. Hovering the × button in dark mode shows
a near-white flash on a dark surface.

### 3. Undefined token `--ease-color-text-muted`

```css
/* modals.css — this token does not exist in variables.css */
.ease-modal-body {
  color: var(--ease-color-text-muted, #4b5563);
}
```

The correct token is `--ease-color-muted`. Because `--ease-color-text-muted`
is undefined, the body text always falls back to hardcoded `#4b5563` — a
medium-grey that is low-contrast in dark mode.

### 4. Undefined token `--ease-shadow-2xl`

```css
/* modals.css — this token does not exist in variables.css */
.ease-modal {
  box-shadow: var(--ease-shadow-2xl, 0 25px 50px -12px rgba(0,0,0,0.25));
}
```

The framework only defines shadows up to `--ease-shadow-xl`. The modal
always falls back to a hardcoded light-mode shadow. The fix uses
`--ease-shadow-xl` which exists and has a dark mode override.

## The fix

```css
/* Correct the two undefined token references */
.ease-modal-body {
  color: var(--ease-color-muted, #64748b);
}

.ease-modal {
  box-shadow: var(--ease-shadow-xl,
    0 20px 25px -5px rgba(0,0,0,0.10),
    0 10px 10px -5px rgba(0,0,0,0.04));
}

/* Add dark mode overrides for neutral-scale tokens */
@media (prefers-color-scheme: dark) {
  .ease-modal-footer {
    background: var(--ease-color-surface, #141e33);
    border-top-color: var(--ease-color-neutral-700, #334155);
  }

  .ease-modal-header {
    border-bottom-color: var(--ease-color-neutral-700, #334155);
  }

  .ease-modal-close {
    color: var(--ease-color-neutral-400, #94a3b8);
  }

  .ease-modal-close:hover {
    background: var(--ease-color-neutral-800, #1e293b);
    color: var(--ease-color-text, #e2e8f0);
  }
}
```

## How to reproduce the bug

1. Open any page with `.ease-modal-overlay` and `.ease-modal` markup.
2. Chrome DevTools → More Tools → Rendering → set
   **Emulate CSS media feature prefers-color-scheme** to `dark`.
3. Open the modal — the footer is near-white `#f8fafc` against the dark body.

## Before vs after in dark mode

| Element | Before | After |
|---|---|---|
| Footer background | `#f8fafc` near-white | `#141e33` dark surface |
| Header/footer borders | `#e2e8f0` light grey | `#334155` dark border |
| Body text | `#4b5563` low-contrast | `--ease-color-muted` dark |
| Close button | `#64748b` dim | `#94a3b8` appropriate |
| Close button hover | `#f1f5f9` near-white flash | `#1e293b` dark |
