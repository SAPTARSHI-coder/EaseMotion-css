# React Tooltip - Futuristic HUD Elastic Slide

A customizable, reusable React tooltip component tailored with a "Futuristic HUD" aesthetic (cyber-cyan glows, monospace tech fonts, scanline overlays, and laser-pointer lines). It features a smooth, elastic slide animation upon hover or focus, leveraging EaseMotion CSS utility classes (`ease-fade-in`, `ease-zoom-in`, `ease-hover-lift`) alongside custom cubic-bezier transition tuning.

## Features
- **Elastic Slide Animation:** Utilizes a custom `cubic-bezier` transform for a bouncy, elastic reveal, enhanced by `ease-zoom-in` and `ease-fade-in`.
- **EaseMotion Integration:** The trigger element utilizes `ease-hover-lift` to provide immediate interaction feedback.
- **Futuristic HUD Theme:** Deep translucent backgrounds, glowing cyan text and borders, scanline overlays, and HUD-style targeting lines.
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
    <div style={{ padding: '100px', display: 'flex', gap: '20px', flexWrap: 'wrap', background: '#02050A', height: '100vh' }}>
      
      <ElasticTooltip content="SYS.TARGET.LOCKED //" position="top" delay={300}>
        <button style={btnStyle}>Hover me (Top)</button>
      </ElasticTooltip>

      <ElasticTooltip content="OVERRIDE DETECTED >>" position="bottom">
        <button style={btnStyle}>Focus me (Bottom)</button>
      </ElasticTooltip>
      
      <ElasticTooltip content="HULL INTEGRITY 42%" position="left">
        <button style={btnStyle}>Warning (Left)</button>
      </ElasticTooltip>
      
      <ElasticTooltip content="UPLINK ESTABLISHED" position="right">
        <button style={btnStyle}>System Status (Right)</button>
      </ElasticTooltip>

    </div>
  );
}

const btnStyle = {
  padding: '10px 20px',
  background: 'transparent',
  color: '#00ffff',
  border: '1px solid #00ffff',
  fontFamily: 'monospace',
  textTransform: 'uppercase',
  cursor: 'pointer',
  boxShadow: 'inset 0 0 5px rgba(0, 255, 255, 0.2)',
  transition: 'all 0.2s'
};
```
