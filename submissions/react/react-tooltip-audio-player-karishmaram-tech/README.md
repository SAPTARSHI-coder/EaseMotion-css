# React Audio Player Tooltip (Elastic Slide)

A lightweight, high-performance Elastic Slide Tooltip component designed specifically for audio decks, progress scrubbers, and media deck controls using EaseMotion primitives.

## 🎵 Design Considerations
Audio interfaces require tight layouts and rapid user responses. This variant uses a tightened scale footprint (`scale(0.8)` to `1`) paired with an energetic elastic cubic bezier (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to feel fast and satisfying when dragging sliders or hovering track commands.

## 📦 API Prop Matrix

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | *Required* | The button, icon, or slider thumb trigger component. |
| `content` | `ReactNode` | *Required* | Text or values shown inside the slide-up bubble (e.g., "Play", "-3.5dB", "02:45"). |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Anchoring behavior relative to target center bounds. |
| `delay` | `number` | `50` | Intent filter timing in milliseconds to decouple accidental media scrub entries. |

## 🛠️ Implementation Example

```jsx
import React from 'react';
import { AudioTooltip } from './AudioTooltip';

export function VolumeSlider() {
  return (
    <AudioTooltip content="Volume: 80%" position="top" delay={0}>
      <input type="range" min="0" max="100" defaultValue="80" className="volume-track" />
    </AudioTooltip>
  );
}
