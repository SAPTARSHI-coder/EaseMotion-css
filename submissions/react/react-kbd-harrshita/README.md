# EaseKbd

Keyboard shortcut display for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

## Installation

Import the component and its stylesheet:

```jsx
import { EaseKbd } from './EaseKbd';
import './style.css';
```

## Basic Usage

```jsx
import React from 'react';
import { EaseKbd } from './EaseKbd';
import './style.css';

function App() {
  return (
    <EaseKbd>
      Hello from EaseMotion!
    </EaseKbd>
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
| `ease-kbd--compact` | Reduced padding and smaller font |
| `ease-kbd--primary` | Filled primary color variant |
| `ease-kbd--outlined` | Outlined border variant |

## CSS Variables

Override any of these in your own stylesheet:

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-kbd-color` | `#6c63ff` | Accent color |
| `--ease-kbd-bg` | `#f8f8ff` | Background color |
| `--ease-kbd-radius` | `6px` | Border radius |
| `--ease-kbd-transition` | `0.25s ease` | Animation timing |
| `--ease-kbd-shadow` | box-shadow value | Shadow style |

## Dark Mode

This component supports automatic dark mode via `prefers-color-scheme` media query.

## Accessibility

- Passes the `ariaLabel` prop as `aria-label` where applicable.
- Supports `ref` forwarding for integration with focus management libraries.
- Includes `:focus-visible` styles for keyboard navigation.

## Files

| File | Description |
|------|-------------|
| `EaseKbd.jsx` | React component source |
| `style.css` | Component styles |
| `README.md` | This documentation |
