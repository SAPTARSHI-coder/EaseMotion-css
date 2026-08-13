# Text Expand Animation (ease-text-expand-animation-anshikadev)

A typography staging module designed to safely manipulate letter tracking properties. Utilizing specialized timing functions alongside hardware-accelerated styling cues, this component creates a premium, cinematic decompression effect on headings without destabilizing the flow of parent grid layouts.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `string` | `'CINEMATIC REVEAL'` | The targeted string sequence that undergoes the expansion transition. |
| `trigger` | `'hover' \| 'click'` | `'hover'` | The interaction methodology required to shift the component's state indicators. |

## Usage Example

```jsx
import React from 'react';
import { TextExpandAnimation } from './TextExpandAnimation';
import './style.css';

const Hero = () => {
  return (
    <TextExpandAnimation text="NEXT GEN REVEAL" trigger="hover"/>
  );
};

export default Hero;
```