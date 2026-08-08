# EaseChip

Compact element chip for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

## Installation

Import the component and its stylesheet:

```jsx
import { EaseChip } from './EaseChip';
import './style.css';
```

## Basic Usage

```jsx
import React from 'react';
import { EaseChip } from './EaseChip';
import './style.css';

function App() {
  return (
    <EaseChip>
      Hello from EaseMotion!
    </EaseChip>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes to apply |
| `ariaLabel` | `string` | `undefined` | Accessible label for screen readers |
| `children` | `ReactNode` | `undefined` | Child content |
| `ref` | `Ref` | `undefined` | Forwarded ref to the root element |

## CSS Modifiers

| Class | Description |
|-------|-------------|
| `ease-chip--compact` | Reduced padding and smaller font |
| `ease-chip--primary` | Filled primary color variant |
| `ease-chip--outlined` | Outlined border variant |

## CSS Variables

Override any of these in your own stylesheet:

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-chip-color` | `#6c63ff` | Accent color |
| `--ease-chip-bg` | `#f8f8ff` | Background color |
| `--ease-chip-radius` | `6px` | Border radius |
| `--ease-chip-transition` | `0.25s ease` | Animation timing |
| `--ease-chip-shadow` | box-shadow value | Shadow style |

## Dark Mode

This component supports automatic dark mode via `prefers-color-scheme` media query.

## Accessibility

- Passes the `ariaLabel` prop as `aria-label` where applicable.
- Supports `ref` forwarding for integration with focus management libraries.
- Includes `:focus-visible` styles for keyboard navigation.

## Files

| File | Description |
|------|-------------|
| `EaseChip.jsx` | React component source |
| `style.css` | Component styles |
| `README.md` | This documentation |
