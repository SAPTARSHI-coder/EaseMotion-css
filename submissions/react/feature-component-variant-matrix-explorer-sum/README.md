# Component Variant Matrix Explorer

## What does this do?

An interactive React explorer for Button × Size × Variant × Hover combinations. Click a matrix cell to see an isolated preview and copy the matching JSX snippet.

## How is it used?

```jsx
import VariantMatrixExplorer from './VariantMatrixExplorer';

<VariantMatrixExplorer />
```

Click any Size/Variant cell, pick a hover motion mode, then copy the generated JSX from the preview panel.

## Why is it useful?

Speeds up design-dev handoff — teams can explore variant permutations visually instead of guessing class combinations.

## Accessibility

- Matrix cells use `aria-pressed` for selection state
- Radio group for hover modes with visible labels
- Focus-visible rings on interactive controls
- Hover lift/glow transitions disabled under `prefers-reduced-motion: reduce`

## Files

```
submissions/react/feature-component-variant-matrix-explorer-sum/
├── VariantMatrixExplorer.jsx
├── style.css
└── README.md
```

Related issue: #51881
