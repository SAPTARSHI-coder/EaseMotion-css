# MotionProvider

A lightweight React Context provider that centralizes shared motion configuration for components using existing EaseMotion CSS animation classes.

---

## Overview

`MotionProvider` provides a shared motion configuration through React Context, allowing React components to access consistent animation settings without prop drilling. It centralizes values such as animation class, duration, easing, stagger timing, and motion preferences while remaining lightweight, reusable, and CSS-first.

---

## Props

| Prop             | Type        | Default      | Description                                              |
| ---------------- | ----------- | ------------ | -------------------------------------------------------- |
| `children`       | `ReactNode` | —            | Components that receive the shared motion configuration. |
| `animationClass` | `string`    | `"fade-up"`  | Default CSS animation class exposed through context.     |
| `duration`       | `string`    | `"400ms"`    | Default animation duration.                              |
| `easing`         | `string`    | `"ease-out"` | Default animation timing function.                       |
| `stagger`        | `number`    | `100`        | Default stagger interval in milliseconds.                |
| `reducedMotion`  | `boolean`   | `false`      | Enables simplified motion settings for accessibility.    |
| `disabled`       | `boolean`   | `false`      | Disables animation classes globally.                     |

The provider also exports a `useMotionConfig()` hook that allows child components to access the shared motion configuration.

---

## Example Usage

```jsx
import MotionProvider, { useMotionConfig } from "./MotionProvider";
import "./style.css";

function Card({ title }) {
  const { animationClass, duration, easing } = useMotionConfig();

  return (
    <div
      className={`motion-provider-card ${animationClass}`}
      style={{
        animationDuration: duration,
        animationTimingFunction: easing,
      }}
    >
      {title}
    </div>
  );
}

export default function App() {
  return (
    <MotionProvider
      animationClass="fade-up"
      duration="500ms"
      easing="ease-out"
      stagger={120}
    >
      <Card title="Shared Motion Configuration" />
    </MotionProvider>
  );
}
```

Components can access the shared configuration through `useMotionConfig()` without manually passing animation-related props.

---

## Why MotionProvider?

- Centralizes animation configuration in one place.
- Eliminates repetitive prop drilling.
- Promotes consistent motion across React components.
- Supports reduced-motion and global animation disabling.
- Works seamlessly with existing EaseMotion CSS animation classes.
- Lightweight, reusable, and dependency-free.
- Follows EaseMotion CSS's CSS-first philosophy.
