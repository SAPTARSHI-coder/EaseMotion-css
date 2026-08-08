# EaseList

Styled list component for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

## Installation

Import the component and its stylesheet:

```jsx
import { EaseList } from './EaseList';
import './style.css';
```

## Basic Usage

```jsx
import React from 'react';
import { EaseList } from './EaseList';
import './style.css';

function App() {
  return (
    <EaseList>
      Hello from EaseMotion!
    </EaseList>
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
| `ease-list--compact` | Reduced padding and smaller font |
| `ease-list--primary` | Filled primary color variant |
| `ease-list--outlined` | Outlined border variant |

## CSS Variables

Override any of these in your own stylesheet:

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-list-color` | `#6c63ff` | Accent color |
| `--ease-list-bg` | `#f8f8ff` | Background color |
| `--ease-list-radius` | `6px` | Border radius |
| `--ease-list-transition` | `0.25s ease` | Animation timing |
| `--ease-list-shadow` | box-shadow value | Shadow style |

## Dark Mode

This component supports automatic dark mode via `prefers-color-scheme` media query.

## Accessibility

- Passes the `ariaLabel` prop as `aria-label` where applicable.
- Supports `ref` forwarding for integration with focus management libraries.
- Includes `:focus-visible` styles for keyboard navigation.

## Files

| File | Description |
|------|-------------|
| `EaseList.jsx` | React component source |
| `style.css` | Component styles |
| `README.md` | This documentation |
