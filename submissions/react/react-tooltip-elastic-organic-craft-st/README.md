# React Tooltip - Organic Craft Elastic Slide

A beautifully crafted, reusable React tooltip component tailored with an "Organic Craft" aesthetic (warm cream/sand backgrounds, deep sage green text, irregular rounded corners, and soft diffused shadows). It features an exceptionally smooth, sweeping elastic slide animation upon hover or focus, leveraging EaseMotion CSS utility classes (`ease-fade-in`, `ease-zoom-in`, `ease-hover-lift`) alongside custom cubic-bezier transition tuning.

## Features
- **Elastic Slide Animation:** Utilizes a custom, fluid `cubic-bezier(0.34, 1.56, 0.64, 1)` transform for an organic bouncy reveal, enhanced by `ease-zoom-in` and `ease-fade-in`.
- **EaseMotion Integration:** The trigger element utilizes `ease-hover-lift` to provide immediate interaction feedback.
- **Organic Craft Theme:** Features warm `#fdfbf7` backgrounds, `#4a5d4e` sage green text, an irregular organic `border-radius`, and a rounded pointer arrow for a hand-crafted feel.
- **Accessibility Ready:** Implements `role="tooltip"`, dynamically unique `aria-describedby` utilizing `useId()`, and triggers on both hover and focus.
- **Configurable & Safe:** Validates positions (`top`, `bottom`, `left`, `right`) and handles long text gracefully with word-breaking.
- **Responsive:** Scales down cleanly on smaller screens (media queries included).

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `content` | `node` | (Required) | The text or element to display inside the tooltip. |
| `children` | `node` | (Required) | The target element that triggers the tooltip on hover/focus. |
| `position` | `string` | `'top'` | Tooltip placement. Options: `'top'`, `'bottom'`, `'left'`, `'right'`. Fallbacks to `'top'` if invalid. |
| `delay` | `number` | `200` | Delay in milliseconds before showing the tooltip. |
| `disabled` | `boolean` | `false` | If true, the tooltip will not be displayed. |
| `className` | `string` | `''` | Additional custom CSS classes for the tooltip content. |

## Usage

```jsx
import React from 'react';
import ElasticTooltip from './ElasticTooltip';

export default function App() {
  return (
    <div style={{ padding: '100px', display: 'flex', gap: '20px', flexWrap: 'wrap', background: '#f4f1ea', height: '100vh' }}>
      
      <ElasticTooltip content="Handcrafted with care." position="top" delay={300}>
        <button style={btnStyle}>Hover me (Top)</button>
      </ElasticTooltip>

      <ElasticTooltip content="Naturally sourced materials." position="bottom">
        <button style={btnStyle}>Focus me (Bottom)</button>
      </ElasticTooltip>
      
      <ElasticTooltip content="Sustainable practices." position="left">
        <button style={btnStyle}>Warning (Left)</button>
      </ElasticTooltip>
      
      <ElasticTooltip content="Organic Certification" position="right">
        <button style={btnStyle}>System Status (Right)</button>
      </ElasticTooltip>

    </div>
  );
}

const btnStyle = {
  padding: '12px 24px',
  background: '#4a5d4e',
  color: '#fdfbf7',
  border: 'none',
  borderRadius: '20px 14px 18px 16px',
  fontFamily: 'Lora, serif',
  fontSize: '16px',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(74, 93, 78, 0.2)',
  transition: 'all 0.3s'
};
```
