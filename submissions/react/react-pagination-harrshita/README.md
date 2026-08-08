# EasePagination

Page navigation controls for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

## Installation

Import the component and its stylesheet:

```jsx
import { EasePagination } from './EasePagination';
import './style.css';
```

## Basic Usage

```jsx
import React from 'react';
import { EasePagination } from './EasePagination';
import './style.css';

function App() {
  return (
    <EasePagination>
      Hello from EaseMotion!
    </EasePagination>
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
| `ease-pagination--compact` | Reduced padding and smaller font |
| `ease-pagination--primary` | Filled primary color variant |
| `ease-pagination--outlined` | Outlined border variant |

## CSS Variables

Override any of these in your own stylesheet:

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-pagination-color` | `#6c63ff` | Accent color |
| `--ease-pagination-bg` | `#f8f8ff` | Background color |
| `--ease-pagination-radius` | `6px` | Border radius |
| `--ease-pagination-transition` | `0.25s ease` | Animation timing |
| `--ease-pagination-shadow` | box-shadow value | Shadow style |

## Dark Mode

This component supports automatic dark mode via `prefers-color-scheme` media query.

## Accessibility

- Passes the `ariaLabel` prop as `aria-label` where applicable.
- Supports `ref` forwarding for integration with focus management libraries.
- Includes `:focus-visible` styles for keyboard navigation.

## Files

| File | Description |
|------|-------------|
| `EasePagination.jsx` | React component source |
| `style.css` | Component styles |
| `README.md` | This documentation |
