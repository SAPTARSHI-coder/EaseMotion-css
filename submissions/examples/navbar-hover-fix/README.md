# ease-navbar-glass — Dark-Mode Hover Touch Flash Fix

**Fixes:** Issue #4230

## Root Cause

The dark-mode hover override for `.ease-navbar-glass .ease-navbar-item:hover`
was written as a bare rule inside `@media (prefers-color-scheme: dark)`:

```css
/* ❌ Before — fires on touch tap */
@media (prefers-color-scheme: dark) {
  .ease-navbar-glass .ease-navbar-item:hover {
    color: var(--ease-color-neutral-50, #f8fafc);
  }
}
```

On touch devices, browsers synthesize a `:hover` state on tap before
firing the click event. Without a `(hover: hover) and (pointer: fine)`
guard, this causes a brief but visible colour flash on every tap in dark
mode.

The rest of the library already guards all hover states correctly. This
was an inconsistency introduced only in the dark-mode override.

## Fix

Nest the hover rule inside a `(hover: hover) and (pointer: fine)` media
query, inside the dark-mode block:

```css
/* ✅ After — only fires on true hover-capable devices */
@media (prefers-color-scheme: dark) {
  @media (hover: hover) and (pointer: fine) {
    .ease-navbar-glass .ease-navbar-item:hover {
      color: var(--ease-color-neutral-50, #f8fafc);
    }
  }
}
```

## Behaviour Matrix

| Device / Mode | Before | After |
|---|---|---|
| Desktop — light mode | ✅ hover works | ✅ hover works |
| Desktop — dark mode | ✅ hover works | ✅ hover works |
| Touch — light mode | ✅ no flash (already guarded) | ✅ no flash |
| Touch — dark mode | ❌ colour flash on tap | ✅ no flash (fixed) |

## Acceptance Criteria

- [x] No hover flash on tap in dark mode
- [x] Hover effect still works on desktop dark mode
- [x] Pattern consistent with rest of library