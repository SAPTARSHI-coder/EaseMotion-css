# Fix: Toast `z-index` Collision with Modal Layer

## Issue

`.ease-toast-fixed-bottom-right` in `components/toast.css` (line 60) sets `z-index: 1000`, which is the exact value of `--ease-z-modal`. Toasts render behind or at the same plane as modals, making toast notifications invisible when a modal is open.

## Root Cause

The z-index was hardcoded instead of using the framework's `--ease-z-toast` token (which is `9999`).

## Fix

Replace `z-index: 1000` with `z-index: var(--ease-z-toast, 9999)` to use the framework's own z-index token system, ensuring toasts always render above modals.

## Files Changed

- `components/toast.css` — Fix z-index to use `--ease-z-toast` token

## Demo

Open `demo.html` to see toasts rendering above a modal overlay correctly.
