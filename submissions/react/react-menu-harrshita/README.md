# EaseMenu

Navigation menu for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

## Installation

Import the component and its stylesheet:

```jsx
import { EaseMenu } from './EaseMenu';
import './style.css';
```

## Basic Usage

```jsx
import React from 'react';
import { EaseMenu } from './EaseMenu';
import './style.css';

function App() {
  return (
    <EaseMenu>
      Hello from EaseMotion!
    </EaseMenu>
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
| `ease-menu--compact` | Reduced padding and smaller font |
| `ease-menu--primary` | Filled primary color variant |
| `ease-menu--outlined` | Outlined border variant |

## CSS Variables

Override any of these in your own stylesheet:

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-menu-color` | `#6c63ff` | Accent color |
| `--ease-menu-bg` | `#f8f8ff` | Background color |
| `--ease-menu-radius` | `6px` | Border radius |
| `--ease-menu-transition` | `0.25s ease` | Animation timing |
| `--ease-menu-shadow` | box-shadow value | Shadow style |

## Dark Mode

This component supports automatic dark mode via `prefers-color-scheme` media query.

## Accessibility

- Passes the `ariaLabel` prop as `aria-label` where applicable.
- Supports `ref` forwarding for integration with focus management libraries.
- Includes `:focus-visible` styles for keyboard navigation.

## Files

| File | Description |
|------|-------------|
| `EaseMenu.jsx` | React component source |
| `style.css` | Component styles |
| `README.md` | This documentation |
