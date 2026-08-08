# EaseCodeBlock

Syntax highlighted code block for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

## Installation

Import the component and its stylesheet:

```jsx
import { EaseCodeBlock } from './EaseCodeBlock';
import './style.css';
```

## Basic Usage

```jsx
import React from 'react';
import { EaseCodeBlock } from './EaseCodeBlock';
import './style.css';

function App() {
  return (
    <EaseCodeBlock>
      Hello from EaseMotion!
    </EaseCodeBlock>
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
| `ease-code-block--compact` | Reduced padding and smaller font |
| `ease-code-block--primary` | Filled primary color variant |
| `ease-code-block--outlined` | Outlined border variant |

## CSS Variables

Override any of these in your own stylesheet:

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-code-block-color` | `#6c63ff` | Accent color |
| `--ease-code-block-bg` | `#f8f8ff` | Background color |
| `--ease-code-block-radius` | `6px` | Border radius |
| `--ease-code-block-transition` | `0.25s ease` | Animation timing |
| `--ease-code-block-shadow` | box-shadow value | Shadow style |

## Dark Mode

This component supports automatic dark mode via `prefers-color-scheme` media query.

## Accessibility

- Passes the `ariaLabel` prop as `aria-label` where applicable.
- Supports `ref` forwarding for integration with focus management libraries.
- Includes `:focus-visible` styles for keyboard navigation.

## Files

| File | Description |
|------|-------------|
| `EaseCodeBlock.jsx` | React component source |
| `style.css` | Component styles |
| `README.md` | This documentation |
