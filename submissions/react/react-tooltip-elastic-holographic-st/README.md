# React Tooltip - Holographic Light Elastic Slide

A customizable, reusable React tooltip component tailored with a "Holographic Light" aesthetic (iridescent glassmorphism, glowing soft edges, and floating pastel light). It features a smooth, bouncy elastic slide animation upon hover or focus, leveraging EaseMotion CSS utility classes (`ease-fade-in`, `ease-zoom-in`, `ease-hover-lift`) alongside custom cubic-bezier transition tuning.

## Features
- **Elastic Slide Animation:** Utilizes a custom bouncy `cubic-bezier` transform for a fluid, holographic reveal, enhanced by `ease-zoom-in` and `ease-fade-in`.
- **EaseMotion Integration:** The trigger element utilizes `ease-hover-lift` to provide immediate, floating interaction feedback.
- **Holographic Light Theme:** Deep glassmorphism (`backdrop-filter: blur()`), iridescent gradient backgrounds, and soft white glowing text and borders.
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
    <div style={{ padding: '100px', display: 'flex', gap: '20px', flexWrap: 'wrap', background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', height: '100vh' }}>
      
      <ElasticTooltip content="Illumination settings applied ✨" position="top" delay={300}>
        <button style={btnStyle}>Hover me (Top)</button>
      </ElasticTooltip>

      <ElasticTooltip content="Glassmorphic layer stabilized." position="bottom">
        <button style={btnStyle}>Focus me (Bottom)</button>
      </ElasticTooltip>
      
      <ElasticTooltip content="Prismatic dispersion anomaly!" position="left">
        <button style={btnStyle}>Warning (Left)</button>
      </ElasticTooltip>
      
      <ElasticTooltip content="Holo-emitter active." position="right">
        <button style={btnStyle}>System Status (Right)</button>
      </ElasticTooltip>

    </div>
  );
}

const btnStyle = {
  padding: '10px 20px',
  background: 'rgba(255, 255, 255, 0.4)',
  color: '#333',
  border: '1px solid rgba(255, 255, 255, 0.8)',
  borderRadius: '8px',
  fontWeight: '600',
  backdropFilter: 'blur(10px)',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  transition: 'all 0.3s'
};
```
