# ShimmerModal — React Modal with Shimmer Pulse for Minimalist Tech Layouts

A production-ready, fully accessible React Modal component with a continuous
Shimmer Pulse transition and skeleton loading state, built for dark Minimalist
Tech interfaces. Implements issue #38589.

## EaseMotion CSS Classes Used

| Element | Class | Effect |
|---|---|---|
| Backdrop `<div>` | `ease-fade-in` | Smooth opacity entrance |
| Panel `<div>` | `ease-zoom-in` | Scale entrance (default) |
| Panel `<div>` | `ease-slide-up` | Upward slide entrance |
| Panel `<div>` | `ease-blur-to-focus` | Blur-to-sharp entrance |
| Shimmer bar `<span>` | `ease-shimmer-sweep` | Continuous horizontal shimmer across the 1.5px top accent line |
| Skeleton rows `<span>` | `ease-skeleton-shimmer` | Left-to-right shimmer on loading placeholders |
| Status dot `<span>` | `ease-pulse` | Ambient pulsing status indicator |

The Minimalist Tech feel is achieved by locally scoping
`--ease-ease: cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) on the panel —
crisp and deliberate, unlike springy consumer UIs.

## Exports

```js
import ShimmerModal, { ModalButton, ShimmerSkeleton, useModal }
  from "./ShimmerModal";
```

| Export | Type | Description |
|---|---|---|
| `ShimmerModal` | default | The main modal component |
| `ModalButton` | named | Pre-styled button aware of modal context |
| `ShimmerSkeleton` | named | Standalone shimmer skeleton row group |
| `useModal` | named | Hook — access `onClose` from any child without prop drilling |

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `isOpen` | `boolean` | — | **Required.** Controls visibility |
| `onClose` | `() => void` | — | **Required.** Dismiss callback |
| `title` | `string` | `undefined` | Heading text (rendered as `<h2>`) |
| `description` | `string` | `undefined` | Subtitle paragraph below heading |
| `children` | `ReactNode` | — | Body content |
| `footer` | `ReactNode` | `undefined` | Footer slot — use `<ModalButton>` or any node |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "full"` | `"md"` | Dialog max-width |
| `entrance` | `"zoom" \| "slide" \| "blur" \| "fade"` | `"zoom"` | Entrance animation |
| `closeOnBackdrop` | `boolean` | `true` | Dismiss on backdrop click |
| `closeOnEsc` | `boolean` | `true` | Dismiss on Escape key |
| `showShimmerBar` | `boolean` | `true` | Toggle top accent shimmer line |
| `shimmerColor` | `string` | `"#6366f1"` | Color for shimmer bar, buttons, and focus rings |
| `loading` | `boolean` | `false` | Replace children with skeleton rows |
| `loadingRows` | `number` | `4` | Number of skeleton rows when `loading=true` |
| `statusLabel` | `string` | `undefined` | Pulsing status text shown above title |
| `statusColor` | `string` | `"#22c55e"` | Color for the status badge dot |
| `className` | `string` | `""` | Extra class on the panel element |

## ModalButton Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"primary" \| "secondary" \| "cancel" \| "danger"` | `"secondary"` | Visual style. `"cancel"` also calls `onClose` automatically |
| `onClick` | `() => void` | — | Optional additional handler |
| `children` | `ReactNode` | — | Button label |

## Installation

1. Copy `ShimmerModal.jsx` and `style.css` into your project.
2. Ensure EaseMotion CSS is loaded:

```html
<link rel="stylesheet" href="easemotion.css" />
```

or in your JS entry:

```js
import "easemotion-css/easemotion.css";
```

## Usage

### Basic

```jsx
import { useState } from "react";
import ShimmerModal from "./ShimmerModal";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <ShimmerModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Confirm Deploy"
        description="This will push to production immediately."
      >
        <p>Are you sure you want to proceed?</p>
      </ShimmerModal>
    </>
  );
}
```

### With footer actions via ModalButton

```jsx
import ShimmerModal, { ModalButton } from "./ShimmerModal";

<ShimmerModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Delete Record"
  description="This action is permanent and cannot be undone."
  shimmerColor="#f43f5e"
  footer={
    <>
      <ModalButton variant="cancel">Cancel</ModalButton>
      <ModalButton variant="danger" onClick={handleDelete}>Delete</ModalButton>
    </>
  }
>
  <p>Record <code>#1042</code> will be permanently deleted.</p>
</ShimmerModal>
```

### Loading skeleton state

```jsx
<ShimmerModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Fetching Results"
  loading={true}
  loadingRows={5}
/>
```

### Status badge with pulse dot

```jsx
<ShimmerModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="System Status"
  statusLabel="All systems operational"
  statusColor="#22c55e"
>
  <p>No incidents reported in the last 24 hours.</p>
</ShimmerModal>
```

### Different sizes and entrances

```jsx
// Small dialog, slide-up entrance
<ShimmerModal isOpen={open} onClose={close} title="Quick Note" size="sm" entrance="slide">
  <p>Saved.</p>
</ShimmerModal>

// Full-width, blur entrance
<ShimmerModal isOpen={open} onClose={close} title="Report" size="xl" entrance="blur">
  <table>…</table>
</ShimmerModal>
```

### Custom shimmer color (amber)

```jsx
<ShimmerModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Warning"
  shimmerColor="#f59e0b"
>
  <p>Quota at 92%.</p>
</ShimmerModal>
```

### Access onClose from a deeply nested button

```jsx
import ShimmerModal, { useModal } from "./ShimmerModal";

function InnerButton() {
  const { onClose } = useModal();
  return <button onClick={onClose}>Dismiss from inside</button>;
}

<ShimmerModal isOpen={open} onClose={() => setOpen(false)} title="Nested">
  <InnerButton />
</ShimmerModal>
```

### Prevent all automatic dismiss

```jsx
<ShimmerModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Required Action"
  closeOnBackdrop={false}
  closeOnEsc={false}
  showShimmerBar={false}
>
  <p>Complete this step to continue.</p>
</ShimmerModal>
```

## Accessibility

- `role="dialog"` + `aria-modal="true"` on the panel
- `aria-labelledby` / `aria-describedby` linked to title / description
- **Focus trap** — Tab and Shift+Tab cycle within the modal only
- **Focus return** — trigger element regains focus on close
- `document.body` scroll locked while open
- Status badge uses `aria-label`; skeleton uses `aria-busy="true"`
- `@media (prefers-reduced-motion: reduce)` disables all animations

## Design Notes

- **Minimalist Tech palette** — `#0d0f17` backdrop, `#111420` surface,
  single-pixel white-alpha borders, zero colour noise except the configurable
  shimmer accent line.
- **Separate positioner div** — the backdrop and the panel are distinct DOM
  nodes so `backdrop-filter: blur` on the backdrop never clips the panel shadow.
- **Mobile bottom-sheet** — on viewports ≤ 520px the panel anchors to the
  bottom edge (sheet pattern common in mobile Minimalist Tech apps).
- **`ModalContext`** — exposes `onClose` to any descendant via `useModal()`,
  eliminating prop drilling through deeply nested footer or body content.
