# EaseAvatar

User avatar display for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

## Installation

Import the component and its stylesheet:

```jsx
import { EaseAvatar } from './EaseAvatar';
import './style.css';
```

## Basic Usage

```jsx
import React from 'react';
import { EaseAvatar } from './EaseAvatar';
import './style.css';

function App() {
  return (
    <EaseAvatar>
      Hello from EaseMotion!
    </EaseAvatar>
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
| `ease-avatar--compact` | Reduced padding and smaller font |
| `ease-avatar--primary` | Filled primary color variant |
| `ease-avatar--outlined` | Outlined border variant |

## CSS Variables

Override any of these in your own stylesheet:

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-avatar-color` | `#6c63ff` | Accent color |
| `--ease-avatar-bg` | `#f8f8ff` | Background color |
| `--ease-avatar-radius` | `6px` | Border radius |
| `--ease-avatar-transition` | `0.25s ease` | Animation timing |
| `--ease-avatar-shadow` | box-shadow value | Shadow style |

## Dark Mode

This component supports automatic dark mode via `prefers-color-scheme` media query.

## Accessibility

- Passes the `ariaLabel` prop as `aria-label` where applicable.
- Supports `ref` forwarding for integration with focus management libraries.
- Includes `:focus-visible` styles for keyboard navigation.

## Files

| File | Description |
|------|-------------|
| `EaseAvatar.jsx` | React component source |
| `style.css` | Component styles |
| `README.md` | This documentation |
