# Feature Matrix Grid with Animated Hover Glow

A React component that renders a feature comparison matrix (e.g. pricing plans vs features) where each cell glows with a soft radial highlight on hover.

## Props

| Prop      | Type   | Default | Description                                                                 |
|-----------|--------|---------|-------------------------------------------------------------------------------|
| `columns` | array  | —       | Array of `{ key, label }` objects representing each column (e.g. plans)       |
| `rows`    | array  | —       | Array of `{ key, label, values }` objects, where `values` maps column keys to a boolean, string, or number |

## Installation

Copy `FeatureMatrixGrid.jsx` and `style.css` into your project. No external dependencies beyond React.

## Usage

```jsx
import FeatureMatrixGrid from './FeatureMatrixGrid';

const columns = [
  { key: 'starter', label: 'Starter' },
  { key: 'pro', label: 'Pro' },
];

const rows = [
  { key: 'users', label: 'Team members', values: { starter: '3', pro: '10' } },
  { key: 'sso', label: 'SSO', values: { starter: false, pro: true } },
];

<FeatureMatrixGrid columns={columns} rows={rows} />
```

## Behavior

- Boolean values render as an animated checkmark (included) or a dash (not included); string/number values render as plain text.
- Hovering a cell triggers a soft radial glow that scales in with a spring-style easing curve.
- Table is horizontally scrollable on small screens via `overflow-x: auto`.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and the framework's spring-style `cubic-bezier(0.34, 1.56, 0.64, 1)` easing curve for the hover glow, consistent with existing submissions. Zero dependencies beyond React.
