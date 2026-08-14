# EaseMotion React Animated Wrapper (`ease-react-animated-wrapper-ik`)

A flexible React motion wrapper component (`EaseAnimate`) for declaratively applying EaseMotion CSS animations, durations, delays, and hover lift effects in React applications.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. Description

`EaseAnimate` wraps React children with EaseMotion CSS utility classes (`ease-fade-in`, `ease-slide-up`, `ease-bounce`, `ease-hover-lift`). It automatically handles inline animation durations, delays, and `prefers-reduced-motion` accessibility fallbacks.

---

## 2. Props Reference

| Prop Name | Type | Default Value | Description |
|-----------|------|---------------|-------------|
| `children` | `ReactNode` | Required | Content elements to animate. |
| `animation` | `'fade-in' \| 'slide-up' \| 'slide-down' \| 'bounce' \| 'zoom-in'` | `'fade-in'` | EaseMotion animation type. |
| `duration` | `string` | `'300ms'` | Duration for the animation. |
| `delay` | `string` | `'0ms'` | Animation delay offset. |
| `hoverLift` | `boolean` | `false` | Enables interactive hover elevation lift. |
| `className` | `string` | `''` | Additional custom CSS classes. |

---

## 3. Usage Example

```jsx
import React from 'react';
import { EaseAnimate } from './EaseAnimate';

export const CardComponent = () => {
  return (
    <EaseAnimate
      animation="slide-up"
      duration="500ms"
      delay="100ms"
      hoverLift={true}
    >
      <div className="card">
        <h2>React Animated Card</h2>
        <p>Smooth motion powered by EaseMotion CSS!</p>
      </div>
    </EaseAnimate>
  );
};
```
