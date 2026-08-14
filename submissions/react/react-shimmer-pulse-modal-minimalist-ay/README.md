# ShimmerPulseModal — React Modal with Shimmer Pulse for Minimalist Tech Layouts

A fully accessible React Modal component with a Shimmer Pulse entrance transition
and skeleton loading state, designed for Minimalist Tech interfaces.
Implements issue #38589.

## EaseMotion CSS Classes Used

| Element | Class(es) | Effect |
|---|---|---|
| Backdrop `<div>` | `ease-fade-in` | Smooth opacity fade on mount |
| Dialog `<div>` | `ease-zoom-in ease-blur-to-focus` | Scale + deblur entrance |
| Shimmer bar | `ease-shimmer-sweep` | Continuous horizontal shimmer across the top accent line |
| Skeleton lines | `ease-skeleton-shimmer` | Left-to-right shimmer on loading placeholder rows |

The minimalist feel is achieved by locally scoping
`--ease-ease: cubic-bezier(0.22, 1, 0.36, 1)` (fast-out-slow-in) on the dialog,
giving a crisp, precise entrance that feels native to tech interfaces.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `isOpen` | `boolean` | — | **Required.** Controls modal visibility |
| `onClose` | `() => void` | — | **Required.** Called on backdrop click, Esc key, or close button |
| `title` | `string` | `undefined` | Modal heading (renders `<h2 id="spm-title">`) |
| `description` | `string` | `undefined` | Subtitle below the heading |
| `children` | `React.ReactNode` | — | Body content |
| `size` | `"sm" \| "md" \| "lg" \| "full"` | `"md"` | Dialog max-width |
| `loading` | `boolean` | `false` | Shows shimmer skeleton instead of children |
| `showShimmerBar` | `boolean` | `true` | Toggles the top shimmer accent line |
| `shimmerColor` | `string` | `"#6366f1"` | CSS color for the shimmer bar and focus rings |
| `closeOnBackdrop` | `boolean` | `true` | Dismiss when clicking the backdrop |
| `closeOnEsc` | `boolean` | `true` | Dismiss on Escape key |
| `footer` | `React.ReactNode` | `undefined` | Renders inside a `<footer>` below the body |
| `className` | `string` | `""` | Extra class on the dialog element |

## Installation

1. Copy `ShimmerPulseModal.jsx` and `style.css` into your project.
2. Ensure EaseMotion CSS is loaded:

```html
<!-- index.html -->
<link rel="stylesheet" href="easemotion.css" />
```

Or in JS entry:

```js
import "easemotion-css/easemotion.css";
```

## Usage

```jsx
import { useState } from "react";
import ShimmerPulseModal from "./ShimmerPulseModal";

// Basic modal
const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>Open</button>

<ShimmerPulseModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
  description="This operation cannot be undone."
>
  <p>Are you sure you want to proceed?</p>
</ShimmerPulseModal>
```

### With footer actions

```jsx
<ShimmerPulseModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Delete Record"
  description="This will permanently remove the entry."
  footer={
    <>
      <button onClick={() => setOpen(false)}>Cancel</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  }
>
  <p>Record #1042 will be deleted.</p>
</ShimmerPulseModal>
```

### Loading state (skeleton shimmer)

```jsx
<ShimmerPulseModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Fetching data…"
  loading={true}
/>
```

### Custom shimmer color and size

```jsx
<ShimmerPulseModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="System Alert"
  size="sm"
  shimmerColor="#f43f5e"
>
  <p>Critical threshold reached.</p>
</ShimmerPulseModal>
```

### Large dialog, no shimmer bar

```jsx
<ShimmerPulseModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Release Notes"
  size="lg"
  showShimmerBar={false}
>
  <article>…long content…</article>
</ShimmerPulseModal>
```

### Prevent backdrop/Esc dismiss

```jsx
<ShimmerPulseModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Required Setup"
  closeOnBackdrop={false}
  closeOnEsc={false}
>
  <p>Complete this step to continue.</p>
</ShimmerPulseModal>
```

## Accessibility

- `role="dialog"` and `aria-modal="true"` on the dialog element
- `aria-labelledby` / `aria-describedby` wired to `title` / `description`
- Focus trapped inside the dialog (Tab / Shift+Tab cycle)
- Focus returns to the trigger element on close
- `document.body` scroll locked while open
- Close button has `aria-label="Close modal"`
- Skeleton block has `aria-busy="true"` and `aria-label`
- `@media (prefers-reduced-motion: reduce)` disables all animations

## Design Notes

- **Minimalist Tech palette** — `#0c0e14` backdrop, `#12141e` surface,
  subtle white-alpha borders, zero colour except the configurable shimmer line.
- **Shimmer bar** — `ease-shimmer-sweep` cycles a bright highlight across
  a 2px accent line at the top of the dialog, providing visual identity
  without adding decorative bulk.
- **Skeleton shimmer** — `ease-skeleton-shimmer` gives instant visual
  feedback during async data loads using EaseMotion'\''s built-in skeleton class.
- **Mobile sheet** — on viewports ≤ 480px the dialog anchors to the bottom
  of the screen (sheet pattern), a common Minimalist Tech UI convention.
