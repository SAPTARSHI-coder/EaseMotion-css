# MotionCompose

A lightweight React component that composes multiple existing EaseMotion CSS animation classes into reusable animation workflows.

---

## Overview

`MotionCompose` simplifies complex motion patterns by coordinating multiple existing CSS animation classes on a single React element. It supports both **sequential** and **parallel** composition modes while remaining lightweight, reusable, and CSS-first. The component never generates animations—it only manages how existing EaseMotion CSS animation classes are applied.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactElement` | — | Child element that receives the composed animation classes. |
| `animations` | `string[]` | `[]` | Existing CSS animation classes to compose. |
| `mode` | `"sequential" \| "parallel"` | `"sequential"` | Controls whether animations are applied one after another or simultaneously. |
| `interval` | `number` | `120` | Delay (ms) between animations in sequential mode. |
| `replay` | `any` | — | Restarts the animation composition whenever the value changes. |
| `className` | `string` | `""` | Additional class name for the wrapper element. |
| `as` | `React.ElementType` | `"div"` | Wrapper element (`div`, `section`, `article`, etc.). |
| `onComposeStart` | `function` | — | Callback fired when the composition begins. |
| `onComposeEnd` | `function` | — | Callback fired after all configured animations have been applied. |

---

## Example Usage

```jsx
import MotionCompose from "./MotionCompose";
import "./style.css";

export default function Example() {
  return (
    <MotionCompose
      animations={[
        "fade-up",
        "scale-in",
        "glow"
      ]}
      mode="sequential"
      interval={150}
      replay
    >
      <div className="motion-compose-card">
        <h2>Motion Compose</h2>
        <p>
          Existing EaseMotion CSS animation classes are coordinated into a
          reusable motion workflow.
        </p>
      </div>
    </MotionCompose>
  );
}
```

The wrapped element preserves its existing props, styles, and class names while receiving the configured animation classes according to the selected composition mode.

---

## Why MotionCompose?

- Combines multiple existing animation classes into reusable motion workflows.
- Supports both sequential and parallel animation composition.
- Eliminates repetitive animation coordination logic.
- Preserves existing child props, styles, and class names.
- Includes replay support and lifecycle callbacks.
- Works seamlessly with existing EaseMotion CSS animation classes.
- Lightweight, reusable, and dependency-free.
- Follows EaseMotion CSS's CSS-first philosophy.