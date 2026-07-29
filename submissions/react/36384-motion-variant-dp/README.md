# MotionVariant

## Overview

`MotionVariant` is a lightweight React utility that maps application state to existing EaseMotion CSS animation classes. It stays CSS-first: no generated keyframes, no animation engine, and no runtime animation definitions.

## Props

| Prop               | Type               | Default     | Description                                                                     |
| ------------------ | ------------------ | ----------- | ------------------------------------------------------------------------------- |
| `children`         | React element      | Required    | Exactly one valid React element to receive the animation behavior.              |
| `state`            | `string`           | Required    | Current application state used to select a variant.                             |
| `variants`         | `object`           | `{}`        | Map of state values to existing EaseMotion CSS class names.                     |
| `fallback`         | `string`           | `""`        | Animation class used when `state` is not present in `variants`.                 |
| `replay`           | `boolean` or token | `false`     | Restarts the active animation when enabled or when the token changes.           |
| `className`        | `string`           | `""`        | Additional class names merged with the child and selected animation class.      |
| `as`               | React element type | `undefined` | Optional wrapper element or component used as the animation target.             |
| `onVariantChange`  | `function`         | `undefined` | Called with `{ state, variant, isFallback }` when the selected variant changes. |
| `onAnimationStart` | `function`         | `undefined` | Called when the applied animation starts.                                       |
| `onAnimationEnd`   | `function`         | `undefined` | Called when the applied animation ends.                                         |

## Example Usage

```jsx
import MotionVariant from "./MotionVariant";

function StatusAlert({ status }) {
  return (
    <MotionVariant
      state={status}
      variants={{
        success: "fade-up",
        warning: "pulse",
        error: "shake",
        loading: "scale-in",
        idle: "fade",
      }}
      fallback="fade"
      replay
      onVariantChange={({ state, variant }) => {
        console.log(`State ${state} is using ${variant}`);
      }}
    >
      <section className="alert" aria-live="polite">
        Current status: {status}
      </section>
    </MotionVariant>
  );
}
```

## Why MotionVariant?

State-driven interfaces often need animation changes without moving animation logic into JavaScript. `MotionVariant` keeps React responsible for selection and keeps EaseMotion CSS responsible for motion, making the result predictable, reusable, accessible, and easy to compose in production applications.
