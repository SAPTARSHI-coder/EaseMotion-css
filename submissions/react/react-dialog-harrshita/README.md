# EaseDialog

Modal dialog box for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

## Installation

Import the component and its stylesheet:

```jsx
import { EaseDialog } from './EaseDialog';
import './style.css';
```

## Basic Usage

```jsx
import React from 'react';
import { EaseDialog } from './EaseDialog';
import './style.css';

function App() {
  return (
    <EaseDialog>
      Hello from EaseMotion!
    </EaseDialog>
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
| `ease-dialog--compact` | Reduced padding and smaller font |
| `ease-dialog--primary` | Filled primary color variant |
| `ease-dialog--outlined` | Outlined border variant |

## CSS Variables

Override any of these in your own stylesheet:

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-dialog-color` | `#6c63ff` | Accent color |
| `--ease-dialog-bg` | `#f8f8ff` | Background color |
| `--ease-dialog-radius` | `6px` | Border radius |
| `--ease-dialog-transition` | `0.25s ease` | Animation timing |
| `--ease-dialog-shadow` | box-shadow value | Shadow style |

## Dark Mode

This component supports automatic dark mode via `prefers-color-scheme` media query.

## Accessibility

- Passes the `ariaLabel` prop as `aria-label` where applicable.
- Supports `ref` forwarding for integration with focus management libraries.
- Includes `:focus-visible` styles for keyboard navigation.

## Files

| File | Description |
|------|-------------|
| `EaseDialog.jsx` | React component source |
| `style.css` | Component styles |
| `README.md` | This documentation |
