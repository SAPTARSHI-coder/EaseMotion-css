# MotionAccessibilityGuard

## Overview

MotionAccessibilityGuard is a reusable React component that makes existing EaseMotion CSS animation classes accessibility-aware. It wraps content, checks whether motion should be allowed, and applies an animation class only when the current settings and user preferences permit it.

The component solves the common problem of repeating reduced-motion checks throughout a React interface. Instead of scattering conditional class logic across buttons, cards, panels, and other animated elements, MotionAccessibilityGuard centralizes that decision in one lightweight wrapper.

MotionAccessibilityGuard stays CSS-first: it does not create animations, inspect stylesheets, manipulate keyframes, or generate dynamic CSS. It simply orchestrates existing EaseMotion CSS classes so accessibility improves without replacing the animation system.

## Props

| Prop                   | Type                       | Default     | Description                                                                           |
| ---------------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------- |
| `animationClass`       | `string`                   | `undefined` | Existing EaseMotion CSS animation class to apply when motion is allowed.              |
| `fallbackClass`        | `string`                   | `undefined` | Existing CSS class to apply when motion is disabled or reduced motion is preferred.   |
| `respectReducedMotion` | `boolean`                  | `true`      | Enables the `prefers-reduced-motion` check before applying the animation class.       |
| `disabled`             | `boolean`                  | `false`     | Disables the animation class regardless of reduced-motion preference.                 |
| `className`            | `string`                   | `undefined` | Additional class names preserved on the wrapper element.                              |
| `as`                   | `React.ElementType`        | `"div"`     | Element or React component used as the wrapper.                                       |
| `onMotionDisabled`     | `(reason: string) => void` | `undefined` | Callback fired when motion is disabled, receiving `"disabled"` or `"reduced-motion"`. |
| `children`             | `React.ReactNode`          | `undefined` | Content rendered inside the wrapper without cloning or altering child props.          |

## Example Usage

```jsx
import MotionAccessibilityGuard from "./component.jsx";

export default function ProductAction() {
  const isSaving = false;

  return (
    <MotionAccessibilityGuard
      animationClass="fade-up"
      fallbackClass="fade"
      respectReducedMotion
      disabled={isSaving}
      className="product-action"
    >
      <button className="demo-button" type="button" disabled={isSaving}>
        Accessible Motion
      </button>
    </MotionAccessibilityGuard>
  );
}
```

## Why MotionAccessibilityGuard?

Motion can make an interface feel responsive, polished, and easier to understand, but it can also create discomfort for users who are sensitive to movement. Respecting reduced-motion preferences is an accessibility requirement for many real interfaces, especially when animations involve movement, parallax, scale, or repeated transitions.

In a CSS animation system, the reduced-motion decision often turns into repeated boilerplate. Each component has to know whether to apply the animated class, whether to fall back to a calmer class, and how to keep its normal class names intact. That logic is easy to duplicate and easy to forget.

MotionAccessibilityGuard centralizes the decision. A component can provide the animation class it already uses, optionally provide a fallback class, and let the wrapper choose the appropriate class at render time. The child element remains unchanged, so existing props, event handlers, and styles continue to work normally.

This fits the EaseMotion CSS philosophy because the animation remains in CSS. React is only responsible for orchestration: deciding whether an existing class belongs on the wrapper in the current accessibility context.

The result stays reusable across cards, buttons, lists, banners, dialogs, and any other UI that already relies on EaseMotion classes. MotionAccessibilityGuard improves accessibility without becoming an animation engine, adding dependencies, or moving animation behavior out of CSS.
