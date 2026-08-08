# EaseLink

Styled anchor link for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

## Installation

Import the component and its stylesheet:

```jsx
import { EaseLink } from './EaseLink';
import './style.css';
```

## Basic Usage

```jsx
import React from 'react';
import { EaseLink } from './EaseLink';
import './style.css';

function App() {
  return (
    <EaseLink>
      Hello from EaseMotion!
    </EaseLink>
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
| `ease-link--compact` | Reduced padding and smaller font |
| `ease-link--primary` | Filled primary color variant |
| `ease-link--outlined` | Outlined border variant |

## CSS Variables

Override any of these in your own stylesheet:

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-link-color` | `#6c63ff` | Accent color |
| `--ease-link-bg` | `#f8f8ff` | Background color |
| `--ease-link-radius` | `6px` | Border radius |
| `--ease-link-transition` | `0.25s ease` | Animation timing |
| `--ease-link-shadow` | box-shadow value | Shadow style |

## Dark Mode

This component supports automatic dark mode via `prefers-color-scheme` media query.

## Accessibility

- Passes the `ariaLabel` prop as `aria-label` where applicable.
- Supports `ref` forwarding for integration with focus management libraries.
- Includes `:focus-visible` styles for keyboard navigation.

## Files

| File | Description |
|------|-------------|
| `EaseLink.jsx` | React component source |
| `style.css` | Component styles |
| `README.md` | This documentation |
