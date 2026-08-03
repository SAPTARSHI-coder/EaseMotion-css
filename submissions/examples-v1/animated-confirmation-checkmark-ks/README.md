# Animated Confirmation Checkmark

## 1. What does this do?

A pure CSS/SVG two-phase confirmation micro-interaction. The ring completes a full 360° draw, then the checkmark (or cross/exclamation) draws in. Supports four variants (success, error, warning, loading) and three sizes (sm, md, lg).

## 2. How is it used?

```html
<!-- Success confirmation -->
<div class="confirm-container" aria-live="polite" aria-label="Payment successful">
  <svg class="confirm-ring confirm-ring-success" viewBox="0 0 80 80" aria-hidden="true">
    <circle cx="40" cy="40" r="35" class="confirm-ring-track"/>
    <circle cx="40" cy="40" r="35" class="confirm-ring-fill confirm-ring-fill-success"/>
  </svg>
  <svg class="confirm-check confirm-check-success" viewBox="0 0 80 80" aria-hidden="true">
    <polyline points="22,42 35,55 58,26" class="confirm-check-path"/>
  </svg>
</div>
```

### Variants

| Variant | CSS Classes | Visual |
|---|---|---|
| Success | `.confirm-ring-success` + `.confirm-check-success` | Green ring → checkmark |
| Error | `.confirm-ring-error` + `.confirm-cross-error` | Red ring → cross mark |
| Warning | `.confirm-ring-warning` + `.confirm-exclaim-warning` | Amber ring → exclamation |
| Loading | `.confirm-ring-loading` + `.confirm-ring-spinner` | Blue rotating spinner |

### Sizes

| Size | Container Class | Dimensions |
|---|---|---|
| Small | `.confirm-container-sm` | 48 × 48px |
| Medium | `.confirm-container-md` | 64 × 64px |
| Large | `.confirm-container-lg` | 96 × 96px |

### Lifecycle States

```
Processing (spinner)  →  Success/Error/Warning (checkmark)
aria-busy="true"          aria-live="polite"
```

Swap between these markup states with JavaScript when the async operation completes. The confirmation animation plays automatically on mount.

### Accessibility

- **`aria-live="polite"`** on the container announces the result to screen readers without interrupting
- **`aria-label="Payment successful"`** provides a descriptive label
- **`aria-hidden="true"`** on SVGs prevents redundant icon announcement
- **`aria-busy="true"`** on the spinner indicates an active operation
- **`prefers-reduced-motion: reduce`** displays all states instantly (no animation)

## 3. Why is it useful?

Confirmation states are one of the most common micro-interactions in web applications — form submissions, checkout flows, account actions, and async operations all need clear visual feedback. This component provides:

- **Two-phase animation** — ring completes before the icon draws, creating a satisfying completion feel
- **Pure CSS/SVG** — no JavaScript required for the animation; only needed for state switching
- **Four semantic variants** — success, error, warning, and loading cover the complete state spectrum
- **Size flexibility** — three predefined sizes for inline buttons, modal confirmations, or full-page states
- **Full accessibility** — ARIA annotations, reduced-motion support, and screen-reader-compatible labels
