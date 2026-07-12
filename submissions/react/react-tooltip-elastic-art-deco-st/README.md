# React Tooltip - Art Deco Elastic Slide

A highly refined, reusable React tooltip component tailored with a vintage "Art Deco" aesthetic (deep onyx backgrounds, metallic gold text, geometric borders, and sharp box shadows). It features an exceptionally smooth, sweeping elastic slide animation upon hover or focus, leveraging EaseMotion CSS utility classes (`ease-fade-in`, `ease-zoom-in`, `ease-hover-lift`) alongside custom cubic-bezier transition tuning.

## Features
- **Elastic Slide Animation:** Utilizes a custom, sophisticated `cubic-bezier(0.68, -0.55, 0.265, 1.55)` transform for a classic bouncy reveal, enhanced by `ease-zoom-in` and `ease-fade-in`.
- **EaseMotion Integration:** The trigger element utilizes `ease-hover-lift` to provide immediate interaction feedback.
- **Art Deco Theme:** Vintage geometric design featuring deep `#0f1214` onyx backgrounds, `#d4af37` metallic gold text, double outlined borders, uppercase geometric fonts, and sharp, hard drop shadows.
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
    <div style={{ padding: '100px', display: 'flex', gap: '20px', flexWrap: 'wrap', background: '#080a0c', height: '100vh' }}>
      
      <ElasticTooltip content="The Gatsby Collection" position="top" delay={300}>
        <button style={btnStyle}>Hover me (Top)</button>
      </ElasticTooltip>

      <ElasticTooltip content="Golden Age Archives" position="bottom">
        <button style={btnStyle}>Focus me (Bottom)</button>
      </ElasticTooltip>
      
      <ElasticTooltip content="Strict geometric form required." position="left">
        <button style={btnStyle}>Warning (Left)</button>
      </ElasticTooltip>
      
      <ElasticTooltip content="1920s Standard" position="right">
        <button style={btnStyle}>System Status (Right)</button>
      </ElasticTooltip>

    </div>
  );
}

const btnStyle = {
  padding: '12px 24px',
  background: '#d4af37',
  color: '#0f1214',
  border: '2px solid #0f1214',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  cursor: 'pointer',
  boxShadow: '4px 4px 0 #000',
  transition: 'all 0.3s'
};
```
