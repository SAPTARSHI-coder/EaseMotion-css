# Component Variant Matrix Explorer

Related issue: #51881

## What does this do?

A React explorer that renders a matrix of button combinations across **size**, **variant**, and **hover** states. Click any cell to see an isolated preview and a copyable JSX snippet that documents the matching EaseMotion class names.

## How is it used?

Import the component and stylesheet into a React app (source-only review — no bundled demo required):

```jsx
import VariantMatrixExplorer from './VariantMatrixExplorer';
import './style.css';

export default function App() {
  return <VariantMatrixExplorer />;
}
```

- Pick **Size** (sm / md / lg), **Variant** (primary / secondary / ghost), and whether **Hover** preview is enabled.
- Click a matrix cell to lock that combination.
- Copy the generated JSX from the snippet panel.

## Why is it useful?

Design systems ship dozens of component permutations. A matrix explorer helps authors discover valid combinations, preview them in isolation, and copy framework-accurate class strings without guessing suffix order.

## Accessibility

- Matrix cells are `<button>` elements with descriptive `aria-label` values.
- Copy button announces success via `aria-live="polite"`.
- Under `prefers-reduced-motion: reduce`, hover preview transitions are disabled.

## Files

```
submissions/react/feature-component-variant-matrix-explorer-sum/
├── VariantMatrixExplorer.jsx
├── style.css
└── README.md
```
