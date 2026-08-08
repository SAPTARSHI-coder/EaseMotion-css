# EaseCard

Content card container for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

## Installation

Import the component and its stylesheet:

```jsx
import { EaseCard } from './EaseCard';
import './style.css';
```

## Basic Usage

```jsx
import React from 'react';
import { EaseCard } from './EaseCard';
import './style.css';

function App() {
  return (
    <EaseCard>
      Hello from EaseMotion!
    </EaseCard>
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
| `ease-card--compact` | Reduced padding and smaller font |
| `ease-card--primary` | Filled primary color variant |
| `ease-card--outlined` | Outlined border variant |

## CSS Variables

Override any of these in your own stylesheet:

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-card-color` | `#6c63ff` | Accent color |
| `--ease-card-bg` | `#f8f8ff` | Background color |
| `--ease-card-radius` | `6px` | Border radius |
| `--ease-card-transition` | `0.25s ease` | Animation timing |
| `--ease-card-shadow` | box-shadow value | Shadow style |

## Dark Mode

This component supports automatic dark mode via `prefers-color-scheme` media query.

## Accessibility

- Passes the `ariaLabel` prop as `aria-label` where applicable.
- Supports `ref` forwarding for integration with focus management libraries.
- Includes `:focus-visible` styles for keyboard navigation.

## Files

| File | Description |
|------|-------------|
| `EaseCard.jsx` | React component source |
| `style.css` | Component styles |
| `README.md` | This documentation |
