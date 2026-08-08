# EaseImage

Responsive image wrapper for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

## Installation

Import the component and its stylesheet:

```jsx
import { EaseImage } from './EaseImage';
import './style.css';
```

## Basic Usage

```jsx
import React from 'react';
import { EaseImage } from './EaseImage';
import './style.css';

function App() {
  return (
    <EaseImage>
      Hello from EaseMotion!
    </EaseImage>
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
| `ease-image--compact` | Reduced padding and smaller font |
| `ease-image--primary` | Filled primary color variant |
| `ease-image--outlined` | Outlined border variant |

## CSS Variables

Override any of these in your own stylesheet:

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-image-color` | `#6c63ff` | Accent color |
| `--ease-image-bg` | `#f8f8ff` | Background color |
| `--ease-image-radius` | `6px` | Border radius |
| `--ease-image-transition` | `0.25s ease` | Animation timing |
| `--ease-image-shadow` | box-shadow value | Shadow style |

## Dark Mode

This component supports automatic dark mode via `prefers-color-scheme` media query.

## Accessibility

- Passes the `ariaLabel` prop as `aria-label` where applicable.
- Supports `ref` forwarding for integration with focus management libraries.
- Includes `:focus-visible` styles for keyboard navigation.

## Files

| File | Description |
|------|-------------|
| `EaseImage.jsx` | React component source |
| `style.css` | Component styles |
| `README.md` | This documentation |
