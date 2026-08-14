# EaseAccordionGroup React Component

A smooth multi-item accordion panel component that uses CSS Grid for natural `height: auto` interpolation.

## Features
- **Smooth Height Animation**: Uses modern `grid-template-rows: 0fr` to `1fr` interpolation without hardcoded heights.
- **Modes**: Supports both single-expand (accordion) and multi-expand (collapse) behaviors.
- **Accessibility**: Full WAI-ARIA Accordion Pattern compliance with keyboard navigation (Up/Down/Home/End).
- **Interactions**: Features icon rotation and border highlight micro-interactions upon expansion.

## Usage

```jsx
import EaseAccordionGroup from './EaseAccordionGroup';

const App = () => {
  const accordionData = [
    {
      title: 'What is EaseMotion CSS?',
      content: 'EaseMotion CSS is a utility-first animation framework designed for modern web applications.'
    },
    {
      title: 'How does this accordion animate?',
      content: 'It leverages CSS Grid interpolation, smoothly transitioning from 0fr to 1fr.'
    },
    {
      title: 'Is it accessible?',
      content: 'Yes, it supports keyboard navigation and uses appropriate ARIA attributes.'
    }
  ];

  return (
    <EaseAccordionGroup 
      items={accordionData} 
      allowMultiple={false} 
    />
  );
};
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | Array | `[]` | Array of objects with `title` and `content` keys. |
| `allowMultiple` | Boolean | `false` | If true, allows multiple panels to be open simultaneously. |
| `className` | String | `''` | Additional class name for the wrapper element. |
