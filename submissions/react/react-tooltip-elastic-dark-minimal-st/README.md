# React Tooltip - Dark Minimalist Elastic Slide

A highly refined, reusable React tooltip component tailored with a "Dark Minimalist" aesthetic (subtle dark grays, flat design, clean muted typography). It features a subtle, elegant elastic slide animation upon hover or focus, leveraging EaseMotion CSS utility classes (`ease-fade-in`, `ease-zoom-in`, `ease-hover-lift`) alongside custom cubic-bezier transition tuning.

## Features
- **Elastic Slide Animation:** Utilizes a custom, refined `cubic-bezier` transform for a subtle bouncy reveal, enhanced by `ease-zoom-in` and `ease-fade-in`.
- **EaseMotion Integration:** The trigger element utilizes `ease-hover-lift` to provide immediate interaction feedback.
- **Dark Minimalist Theme:** Deep clean `#1a1a1a` backgrounds, simple `#333` borders, and distraction-free flat styling.
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
    <div style={{ padding: '100px', display: 'flex', gap: '20px', flexWrap: 'wrap', background: '#0a0a0a', height: '100vh' }}>
      
      <ElasticTooltip content="Clean preferences saved." position="top" delay={300}>
        <button style={btnStyle}>Hover me (Top)</button>
      </ElasticTooltip>

      <ElasticTooltip content="Minimal design system loaded." position="bottom">
        <button style={btnStyle}>Focus me (Bottom)</button>
      </ElasticTooltip>
      
      <ElasticTooltip content="Invalid contrast ratio." position="left">
        <button style={btnStyle}>Warning (Left)</button>
      </ElasticTooltip>
      
      <ElasticTooltip content="Sync complete." position="right">
        <button style={btnStyle}>System Status (Right)</button>
      </ElasticTooltip>

    </div>
  );
}

const btnStyle = {
  padding: '10px 20px',
  background: '#1a1a1a',
  color: '#e5e5e5',
  border: '1px solid #333',
  borderRadius: '6px',
  fontWeight: '400',
  cursor: 'pointer',
  transition: 'all 0.2s',
  fontFamily: 'sans-serif'
};
```
