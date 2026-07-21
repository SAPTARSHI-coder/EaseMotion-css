# Text Rotate Animation (ease-text-rotate-animation-anshikadev)

A typography display engine configured to seamlessly step through string sequences. It applies perspective matrix properties (`rotateX` mixed with `translateY`) to drive high-performance sliding configurations without triggering reflow delays across parent rendering layouts.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `phrases` | `string[]` | `['Faster', 'Smoother', 'Easier', 'Smarter']` | Collection of text targets cycled through display pipelines. |
| `interval` | `number` | `2500` | Loop timeout limits specified in milliseconds. |
| `prefix` | `string` | `'Build things'` | Static string baseline anchor positioned preceding dynamic content. |

## Usage Example

```jsx
import React from 'react';
import { TextRotateAnimation } from './TextRotateAnimation';
import './style.css';

const Header = () => {
  return (
    <TextRotateAnimation 'Globally']} 'Securely', interval="{3000}" phrases="{['Instantly'," prefix="Deploy applications"/>
  );
};

export default Header;