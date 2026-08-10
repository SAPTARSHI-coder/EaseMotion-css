# React Tooltip - Sleek Editorial Elastic Slide

A highly refined, reusable React tooltip component tailored with a "Sleek Editorial" aesthetic (elegant serif typography, soft ivory backgrounds, delicate drop shadows). It features an exceptionally smooth, sweeping elastic slide animation upon hover or focus, leveraging EaseMotion CSS utility classes (`ease-fade-in`, `ease-zoom-in`, `ease-hover-lift`) alongside custom cubic-bezier transition tuning designed to feel like turning a magazine page.

## Features
- **Editorial Slide Animation:** Utilizes a custom, sophisticated `cubic-bezier(0.16, 1, 0.3, 1)` transform for a silky smooth reveal, enhanced by `ease-zoom-in` and `ease-fade-in`.
- **EaseMotion Integration:** The trigger element utilizes `ease-hover-lift` to provide immediate interaction feedback.
- **Sleek Editorial Theme:** Crisp `#fdfbf7` ivory backgrounds, deep ink-black text, italicized serif typography, and elegant, understated paper-like shadows.
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
    <div style={{ padding: '100px', display: 'flex', gap: '20px', flexWrap: 'wrap', background: '#ffffff', height: '100vh' }}>
      
      <ElasticTooltip content="Read the full editorial piece." position="top" delay={300}>
        <span style={textStyle}>Hover me (Top)</span>
      </ElasticTooltip>

      <ElasticTooltip content="See author's notes." position="bottom">
        <span style={textStyle}>Focus me (Bottom)</span>
      </ElasticTooltip>
      
      <ElasticTooltip content="Citation needed." position="left">
        <span style={textStyle}>Warning (Left)</span>
      </ElasticTooltip>
      
      <ElasticTooltip content="Volume IV, Issue 2" position="right">
        <span style={textStyle}>Reference (Right)</span>
      </ElasticTooltip>

    </div>
  );
}

const textStyle = {
  fontSize: '18px',
  fontFamily: 'Georgia, serif',
  color: '#333',
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
  textDecorationColor: '#ccc',
  cursor: 'pointer',
  transition: 'color 0.3s'
};
```
